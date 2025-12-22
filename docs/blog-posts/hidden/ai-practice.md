---
title: Thực hành triển khai sản phẩm AI riêng
---

# Xây dựng AI Knowledge Assistant (tài liệu nội bộ) cho Website

[1. Mô tả bài toán](#1)

[2. Kiến trúc tổng quát](#2)

[3. Cấu trúc project](#3)

[4. Triển khai chi tiết](#4)

<a name="1"></a>

## 📌 1. Mô tả bài toán

- Tôi có VuePress blog (GitHub Pages):

  - Nội dung Markdown, có cấu trúc, version control tốt.

- Tôi muốn tạo Chatbot AI chỉ trả lời dựa trên kiến thức trong VuePress blog:

  - ➀ Người dùng hỏi tự nhiên

  - ➁ AI trả lời đúng dựa trên nội dung blog

  - ➂ Trả lời có dẫn nguồn

  - ➃ Nếu blog không có → nói “không có thông tin”

  - ➄ Không bịa

  - ➅ Kiểm soát chi phí

- Ý tưởng: biến blog thành database cho AI truy vấn

<a name="2"></a>

## 📌 2. Kiến trúc tổng quát

```
┌─────────────────────┐
│  VuePress           │  (Markdown source)
└──────┬──────────────┘
       │ (build / ingest script)
       ▼
┌─────────────────────┐
│ Chunking + Embedding│
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Vector Database     │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│  Retrieval / Search │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│   Prompt Assembly   │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│   LLM API           │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ Chat UI (Streamlit) │
└─────────────────────┘
```

### 1️⃣ build / ingest script

- ✦ Đây là bước chuẩn bị dữ liệu:

  - AI không thể đọc trực tiếp website VuePress như người.

    - 👉 Chúng ta cần đưa nội dung blog vào định dạng AI hiểu nhằm chuẩn bị sẵn để tìm kiếm nhanh.

- ✦ `ingest script` là chương trình tự chạy để “đọc blog và nhét kiến thức vào AI” (chạy trước khi user chat, offline / định kỳ).

- ✦ Ví dụ từ markdown:

- ```markdown
  ## Logistic Regression

  Logistic Regression là thuật toán dùng cho phân loại nhị phân...
  ```

- → 1 chunk:
- ```json
  {
    "content": "Logistic Regression là thuật toán dùng cho phân loại nhị phân...	",
    "source": "/ai/ml-basics.md",
    "heading": "Logistic Regression"
  }
  ```

  - ✧ Chunk nhỏ → tìm đúng → rẻ token (ý nghĩa token sẽ đề cập phía sau).

  - ✧ Chunk theo heading (để đảm bảo không bị cắt giữa câu).

  - ✧ Mỗi chunk ~ 300–600 tokens.

  - ✧ Gộp nhiều đoạn nhỏ nếu cần.

### 2️⃣ Embedding chunks + Vector Database

- Tạo công cụ để tìm kiếm kiến thức theo ngữ nghĩa (semantic search).

### 3️⃣ Retrieval / Search

- Tìm kiếm và trả về chunk phù hợp nhất với câu hỏi.

  - Chỉ trả về dữ liệu thô, không prompt hay qua LLM.

### 4️⃣ Prompt Assembly

- Ghép “luật + ngữ cảnh + câu hỏi” thành 1 input duy nhất cho LLM.

### 5️⃣ LLM API

- Gửi prompt đã build cho mô hình LLM và nhận câu trả lời.

<a name="3"></a>

## 📌 3. Cấu trúc project

- ```
  project/
  ├── ingest/
  │   ├── ingest_markdown.py  # Build / ingest script
  │   └── embed_chunks.py     # Embedding chunks + Vector Database
  ├── retrieval/
  │   └── search.py           # Retrieval / Search
  ├── services/
  │   └── llm_service.py      # Build prompt & call LLM
  ├── ui/
  │   └── streamlit_app.py    # Tạo UI bằng Streamlit
  ├── data/
  │   ├── raw/                # Vuepress markdown
  │   ├── vector.index
  │   └── metadata.json
  └── requirements.txt
  ```

<a name="4"></a>

## 📌 4. Triển khai chi tiết

Source demo tham khảo tại: [Chatbot Demo](https://github.com/sy-duc/chatbot-demo)

### 1️⃣ Tạo ingest script đọc Markdown VuePress → chia chunk

#### ❶ Copy thư mục `docs/` của VuePress sang `data/raw/`

- Thư mục docs/ trên VuePress sẽ chứa các file bài viết (dạng markdown) làm dữ liệu thô.

#### ❷ Đọc Markdown

- Cài thư viện cần thiết:

- ```
  pip install markdown-it-py beautifulsoup4 pyyaml
  ```

- Thực hiện quét qua toàn bộ thư mục con trong data/raw/ để trả về các raw markdown.

#### ❸ Tách theo heading

- Các file Markdown thường có:

- ```markdown
  # Title

  ## Section

  ### Sub section
  ```

  - 👉 Đây là các heading, hay chúng ta có thể xem nó như là ranh giới ngữ nghĩa.

- Việc của chúng ta là tách các ranh giới này thành từng section, tạo mỗi chunk gắn với từng heading.

#### ❹ Gộp / chia chunk theo độ dài

- Một section có thể dài 1-2 trang A4, hoặc 3000+ tokens.

  - 👉 Cần gộp các đoạn nhỏ thành 1 chunk vừa đủ, hoặc tách các sections dài thành nhiều chunks.

### 2️⃣ Embedding chunks + Vector Database

- Embedding model đối với người mới có 2 lựa chọn:

  - ✦ **Option A – OpenAI Embedding** (dễ nhất)

    - ✧ Chất lượng cao
    - ✧ Không cần GPU
    - ✧ Trả tiền theo token

  - ✦ **Option B – Local model** (open-source)
    - ✧ Sentence-transformers
    - ✧ Chạy local
    - ✧ Miễn phí
    - ✧ Cần RAM

- 👉 Ta sẽ dùng Option B trước để hiểu bản chất.

#### ❶ Cài đặt môi trường

- ```
  pip install sentence-transformers faiss-cpu
  ```

#### ❷ Embed chunks

- Dùng model `sentence-transformers/all-MiniLM-L6-v2` đã được train sẵn để Embed chunks.

#### ❸ Vector Database

- Những Vector DB phổ biến như:

  | Vector DB |   Khi nào dùng   |
  | :-------: | :--------------: |
  |   FAISS   | Local, thực hành |
  |  Chroma   |    Dev nhanh     |
  |  Qdrant   |    Production    |
  | Pinecone  |     Managed      |
  | Weaviate  |      Cloud       |

- 👉 Trong bài thực hành này sẽ chọn FAISS để đơn giản, phù hợp local.

### 3️⃣ Retrieval / Search

- Tại đây có nhiệm vụ nhận câu hỏi và tiến hành search FAISS để trả về các chunk gần nhất (top-k) trong không gian vector.

  - **Lưu ý**: Retrieval Layer chỉ trả về dữ liệu thô, chưa prompt hay qua LLM.

- Thường sẽ lấy 5 chunk gần nhất với câu hỏi trong không gian vector:

  | top_k |       Vấn đề        |
  | :---: | :-----------------: |
  |   1   |  Dễ thiếu ngữ cảnh  |
  |  3-5  |    Phổ biến nhất    |
  | > 10  | Dễ loãng, tốn token |

### 4️⃣ Prompt Assembly

- ❌ LLM sẽ không biết:

  - ✧ VuePress của bạn là gì.
  - ✧ FAISS tìm được gì.
  - ✧ Bạn muốn “không bịa” (luật).

- 👉 **Prompt Assembly** = ghép “luật + ngữ cảnh + câu hỏi” thành 1 input duy nhất cho LLM.

- Prompt Assembly gồm 4 phần:

  |        Phần        |         Mục đích         |                Note                |
  | :----------------: | :----------------------: | :--------------------------------: |
  | System Instruction |        Luật chơi         | Guardrails mềm, không suy đoán/bịa |
  |      Context       | Kiến thức được phép dùng |                                    |
  |      Question      |    Câu hỏi người dùng    |                                    |
  | Output Constraint  |   Ép format / hành vi    |  Ví dụ: trả lời ngắn gọn, rõ ràng  |

- Prompt hoàn chỉnh:
- ```
  SYSTEM:
  Bạn là trợ lý AI cho blog VuePress.
  CHỈ được trả lời dựa trên thông tin trong CONTEXT bên dưới.
  Nếu không có thông tin, hãy nói: "Thông tin này chưa có trong tài liệu."

  CONTEXT:
  [1] ...
  [2] ...

  QUESTION:
  {{question}}

  Yêu cầu:
  - Trả lời ngắn gọn
  - Trích dẫn nguồn
  ```

### 5️⃣ LLM Inference

- **LLM Inference** = gửi prompt đã build cho mô hình LLM và nhận câu trả lời.

  - Đây cũng là bước tốn tiền khi dùng LLM (call API).

#### 🧐 Chọn LLM:

- |   Hướng   |            Ví dụ             |
  | :-------: | :--------------------------: |
  | Cloud API | OpenAI, Azure OpenAI, Gemini |
  | Self-host |     Llama, Mistral, Qwen     |
  |  Hybrid   |   Local search + cloud LLM   |

- 👉 Với bài toán thực hành hiện tại thì Cloud API là hợp lý nhất.

#### ⚠️ Cách kiểm soát chi phí:

- Cách kiểm soát chi phí:

- | Vị trí |                  Kiểm soát                   |
  | :----: | :------------------------------------------: |
  | Chunk  |                   Nhỏ, gọn                   |
  | Prompt |                   Ngắn gọn                   |
  | Output |             Giới hạn max_tokens              |
  |        | Giới hạn temperature giảm lan man → ít token |
  |   UI   |           Streaming + stop khi đủ            |

### 6️⃣ Tạo UI

- Để nhanh và đơn giản, chúng ta sẽ tạo UI bằng Streamlit:

  - ✧ Viết UI 100% bằng Python
  - ✧ Có sẵn: input box, chat UI, streaming token.
  - ✧ Phổ biến trong AI demo & PoC

- ⚠️ Do chưa có thời gian sử dụng nhiều Streamlit nên source demo chỉ sử dụng ở mức cơ bản.

- ⚙️ Để cài đặt Streamlit:

- ```
  pip install streamlit
  ```

### 7️⃣ Lưu chat history

- Chú ý:

  - ✧ Đừng gửi toàn bộ lịch sử chat (tốn tiền, loãng)
  - ✧ Đừng gửi history không liên quan
  - ✧ Phải giới hạn độ dài history

- Chiến lược

  - ✧ Chỉ giữ 3-5 turn history gần nhất
  - ✧ Không embed history
