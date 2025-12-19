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
│ LLM API             │
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
  ├── api/
  │   └── app.py              # FastAPI (build prompt & call LLM)
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
