---
title: LLM & AI ứng dụng cho Web
---

# LLM & AI ứng dụng cho Web

[1. Nói qua về LLM (Large Language Models)](#1)

[2. Embedding + Vector Database](#2)

[3. RAG (Retrieval Augmented Generation)](#3)

[4. Xây dựng chatbot tùy biến](#4)

[5. Multimodal (Text + Image + Audio)](#5)

[6. LLM Orchestration](#6)

<a name="1"></a>

## 📌 1. Nói qua về LLM (Large Language Models)

- ✦ Là một loại mô hình trí tuệ nhân tạo đặc biệt được thiết kế để hiểu và tạo ra văn bản giống con người.

- ✦ LLM được xây dựng dựa trên các mạng lưới thần kinh, cụ thể là Transformers có khả năng hiểu ngôn ngữ, ý nghĩa và ngữ cảnh của văn bản.

- ✦ Để một LLM hoạt động hiệu quả, việc đào tạo nó trên một lượng dữ liệu lớn là rất quan trọng.

- ✦ ChatGPT là một ví dụ điển hình của LLM.

<a name="2"></a>

## 📌 2. Embedding + Vector Database

### 1️⃣ Embedding

**Embedding = máy mã hóa ý nghĩa**

Embedding là nền tảng của:

- ✦ Semantic search (tìm kiếm theo ngữ nghĩa).

- ✦ Chatbot biết tài liệu.

#### 🧐 Embedding hoạt động như thế nào?

- Embedding = chuyển text → số (vector)

- Ví dụ 3 câu:

  ```
  A: "Tôi thích ăn phở"
  B: "Tôi thích ăn bún bò"
  C: "Hôm nay trời mưa"
  ```

- Sau embedding (ví dụ):

  ```
  A → [0.12, 0.98, -0.33, ...]
  B → [0.11, 0.96, -0.30, ...]
  C → [-0.72, 0.05, 0.88, ...]
  ```

- 🔥 Có thể thấy:

  - ✧ A và B gần nhau

  - ✧ C xa A & B

  - 👉 Máy không hiểu chữ, nó hiểu vị trí trong không gian.

#### ⚠️ Embedding không đặt text vào vector không gian vật lý thông thường (3D)

- ✦ Đặt trong không gian đặc trưng, nơi mà:

  - ✧ Có số chiều rất lớn. Số chiều này do model quyết định.

  - ✧ Mỗi chiều = một đặc trưng ngữ nghĩa ẩn.

- ✦ Ví dụ vector 384 chiều:

  - ✧ Map 1 câu → 384 con số.

  - ✧ Mỗi con số đại diện cho 1 pattern trừu tượng.

  - ✧ Nhưng đừng quan tâm từng chiều, ý nghĩa thực sự nằm ở khoảng cách.

- ❌ Dùng vector quá ít chiều:

  - ✧ Nhiều câu khác nhau chồng lên nhau.

  - ✧ Không phân biệt đủ ngữ nghĩa.

- ✔️ Dùng vector nhiều chiều:

  - ✧ Mỗi chiều là 1 “pattern”

  - ✧ Chi tiết hơn

  - ✧ Cộng lại → phân biệt rất tốt

  - ✧ Vector càng nhiều chiều càng hình dung ngữ nghĩa chi tiết hơn, nhưng search chậm hơn, tốn RAM

#### 🚀 Dựa vào Embedding:

- ❌ Theo cách cũ: search theo key "món ăn Việt Nam" thì "phở" hay "bún bò" sẽ không match.

- ✔️ Với Embedding search: "phở", "bún bò" → gần nghĩa

  - 👉 Tìm được kết quả search dù không trùng từ.

- ![Embedding](./images/ai-embedding.png)

### 2️⃣ Vector Database

- Giả sử có rất nhiều đoạn text

  - 👉 Khi search sẽ so sánh rất chậm

- **Vector Database** giúp lưu vector + metadata

  - ✧ Không dùng SQL WHERE

  - ✧ Không dùng LIKE

  - ✧ Dùng khoảng cách hình học

  - 👉 Tìm vector gần nhất cực nhanh.

### 🔥 Tóm lại:

- **Embedding** là cách biến text thành vị trí trong không gian, để máy có thể so sánh ý nghĩa thay vì so sánh chữ.

- **Vector DB** là công cụ lưu & tìm các vector gần nhau thật nhanh.

<a name="3"></a>

## 📌 3. RAG (Retrieval Augmented Generation)

### ❌ Vấn đề của LLM (nếu KHÔNG có RAG):

- Giả sử hỏi ChatGPT:

  - ```
    “Chính sách bảo hành sản phẩm X của công ty tôi là gì?”
    ```
  - 👉 LLM không có trí nhớ riêng của bạn:

    - ✧ Không biết dữ liệu nội bộ.

    - ✧ Không truy cập database của bạn.

    - ✧ Bịa nếu cần trả lời.

    - ✧ Vấn đề ảo giác, ảo tưởng, đưa ra câu trả lời nghe rất hợp lý, trôi chảy nhưng không chính xác.

- Các doanh nghiệp, công ty họ có những nguồn tài liệu độc quyền ( như tài liệu sổ tay kỹ thuật, tài liệu hướng dẫn sử dụng, v.v.).

  - Tuy nhiên các tài liệu này thường rất lớn và riêng biệt .

    - 👉 Các mô hình ngôn ngữ lớn trích xuất thông tin cụ thể từ nội dung đồ sộ này chẳng khác nào là mò kim đáy bể.

### ✔️ Retrieval-Augmented Generation (RAG)

- ✦ RAG sẽ tạo chỉ mục cho mỗi đoạn văn trong tài liệu (document) .

  - Khi một truy vấn (query) được thực hiện sẽ truy xuất các đoạn văn liên quan nhất và sau đó đưa vào mô hình ngôn ngữ lớn như ChatGPT, GPT-4, v.v.

  - 👉 Ngăn chặn tình trạng quá tải thông tin cho LLM.

- ✦ RAG = tìm tài liệu liên quan trước, rồi mới đưa cho LLM trả lời:

  - ❶ Mở tài liệu nội bộ

  - ❷ Đọc đoạn liên quan

  - ❸ Trả lời dựa trên đó

  - 👉 RAG làm y hệt một nhân viên trong công ty.

- ✦ Với RAG, LLM có thể tận dụng dữ liệu bên ngoài để cung cấp tri thức cho nó.

- ✦ RAG không yêu cầu training lại mô hình (fine-tune):

  - ✧ Tiết kiệm chi phí

  - ✧ Tiết kiệm thời gian

  - ✧ Dễ update, dẽ kiểm soát

  - 👉 90% chatbot doanh nghiệp dùng RAG, không fine-tune.

<a name="4"></a>

## 📌 4. Xây dựng chatbot tùy biến

Chatbot không phải LLM

- ```
  Chatbot = LLM + bộ nhớ + luật chơi + ngữ cảnh
  ```

### 1️⃣ Các khối cấu thành Chatbot

- ```
  User
   ↓
  Chat UI
   ↓
  Chat Logic
   ├─ System Prompt
   ├─ Chat History
   ├─ RAG
   ├─ Rules / Guardrails
   ↓
  LLM
   ↓
  Response
  ```

- **① System Prompt**

  - ✦ Là chỉ dẫn cấp cao cho LLM.

  - ✦ Hình thành tính cách cho chatbot.

- **② Chat History**

  - ✦ Trí nhớ ngắn hạn cho LLM, nó được nối vào prompt, giúp LLM biết câu hỏi trước đó.

  - ✦ LLM không có bộ nhớ thật, nó chỉ đọc lại những gì chúng ta gửi vào prompt.

    - 👉 Muốn “nhớ” chúng ta phải gửi history vào prompt.

  - ✦ Trí nhớ ngắn hạn: lịch sử chat gần nhất nằm trong context window.

  - ✦ Trí nhớ dài hạn: lưu DB, dùng embedding để search khi cần (RAG cho hội thoại).

  - ✦ Trường hợp LLM đã không còn nhớ, bạn cần đưa lại.

  - ✦ History ≠ Embedding

- **③ RAG**

  - ✦ Thành phần quyết định chatbot thông mình hay không.

  - ✦ Không có RAG, trả lời sẽ chung chung và dễ bịa.

- **④ Rules / Guardrails**

  - Là các luật và cơ chế để giới hạn hành vi của chatbot.

  - Không phải để chatbot “thông minh hơn”, mà để chatbot không làm bậy.

  - Guardrails có thể nằm trong prompt.

    - Ví dụ:

    - ```
      "Chỉ trả lời dựa trên tài liệu được cung cấp, không suy đoán."
      ```

### 2️⃣ Luồng hoạt động của Chatbot

- ```
  User message
   ↓
  Save message
   ↓
  Embedding (message)
   ↓
  Search vector DB
   ↓
  Build prompt:
    - System
    - History
    - Retrieved docs
   ↓
  Call LLM
   ↓
  Stream response
   ↓
  Save answer
  ```

### 3️⃣ Streaming response

- Mục đích:

  - ✧ Text hiện dần.

  - ✧ Cảm giác “đang suy nghĩ”.

  - ✧ Tránh người dùng nghĩ web bị đơ.

- Các cách Streaming phổ biến:
  | Cách | Dùng khi |
  | :-------: | :------------------------------------: |
  | SSE | Chat đơn giản |
  | WebSocket | Chat realtime, phức tạp |

- 👉 80% chatbot web dùng SSE

### 4️⃣ Token

- ✦ LLM Token ở đây là đơn vị xử lý ngôn ngữ, không phải Auth Token trong Web/Security.

- ✦ Token ≈ mảnh nhỏ của text.

  - Ví dụ câu:

  - ```
    "Xin chào bạn"
    ```

  - Có thể bị chia thành:

  - ```
    ["Xin", " chào", " bạn"]
    ```

  - 👉 LLM không tạo cả câu một lúc, nó tạo từng token một.

- ✦ Chúng ta cần hiểu:

  - ✧ Bản chất LLM là dự đoán token tiếp theo dựa trên token trước đó, không thể sinh cả đoạn một lúc.

    - 👉 LLM sinh token từng cái.

  - ✧ Và Streaming = LLM trả token nào → gửi ngay token đó cho Frontend

    - Mỗi data backend gửi = 1 event.

    - Frontend nhận từng event và append text vào chat.

      - 👉 Người dùng thấy chữ hiện dần

### 5️⃣ Kiểm soát Cost

- ✦ LLM không tính tiền theo request, mà theo số token được xử lý, bao gồm:

  - ✧ Input tokens (prompt người dùng gửi)

  - ✧ Output tokens (câu trả lời model sinh)

  - 👉 Tổng token = input + output

- Ví dụ prompt:

- ```
  "Giải thích CNN cho người mới"
  ```

  - ≈ 7–10 tokens

- Model trả lời:

- ```
  "CNN là mạng neural dùng cho xử lý ảnh..."
  ```

  - ≈ 200 tokens

- 👉 Tổng: ~210 tokens

- ✦ Lý do LLM tính tiền theo token:

  - ✧ 1 token ≈ 1 bước tính toán nhỏ của model.

  - ✧ Prompt dài → model phải đọc nhiều → tốn tiền.

  - ✧ Trả lời dài → model phải sinh nhiều → tốn tiền.

- Backend cần kiểm soát chi phí bằng việc:
  | Kỹ thuật | Giảm token bằng cách |
  | :-------: | :------------------------------------: |
  | Giới hạn lịch sử | Chỉ gửi 3–5 message gần nhất |
  | RAG | Chỉ gửi đoạn liên quan |
  | Tóm tắt | Gửi summary thay vì raw text |
  | max_tokens | Giới hạn độ dài trả lời |
  | Streaming | Ngắt sớm nếu đủ |

### 🔥 Tóm lại:

- Chatbot không thông minh vì LLM mạnh, mà vì chúng ta có tổ chức thông tin và luật chơi tốt hay không.

<a name="5"></a>

## 📌 5. Multimodal (Text + Image + Audio)

- **Multimodal AI = mô hình có thể hiểu & sinh nhiều loại dữ liệu:**
  | Modal | Ví dụ |
  | :-------: | :------------------------------------: |
  | Text | Câu hỏi, chat |
  | Image | Ảnh chụp, ảnh thiết kế |
  | Audio | Giọng nói |
  | Video | (cao cấp hơn) |

- Multimodal **KHÔNG** phải nhiều model ghép lại.
  - Hiểu nôm na: 1 model – nhiều giác quan

### Multimodal hoạt động thế nào?

- Ví dụ request:
- ```json
  {
    "input": [
      { "type": "input_text", "text": "Giải thích lỗi trong ảnh này" },
      { "type": "input_image", "image_url": "screenshot.png" }
    ]
  }
  ```

- ① Encode ảnh → vector:
- ② Encode text → vector
- ③ Attention giữa text ↔ image

  - Self-Attention lúc này không chỉ là:
  - ```
    word ↔ word
    ```
  - mà là:
  - ```
    word ↔ word
    word ↔ image_patch
    image_patch ↔ image_patch
    ```

  - Ví dụ:
    - Từ “button” → attention vào vùng ảnh có nút
    - Từ “error” → attention vào popup đỏ

- ④ Sinh câu trả lời

<a name="6"></a>

## 📌 6. LLM Orchestration

- ✦ LLM không chạy một mình, nó nằm trong flow gồm nhiều bước.

  - **LLM Orchestration = điều phối LLM trong một luồng nghiệp vụ.**

    - LLM lúc này đóng vai trò như thực tập sinh rất giỏi nói chuyện.

    - Orchestration giống như team lead, chỉ huy LLM làm việc đúng thứ tự.

- ✦ Ví dụ:

  - Bạn hỏi LLM:

  - ```
    “Đơn hàng #123 của tôi đang ở đâu?”
    ```

  - LLM trả lời:

  - ```
    “Có thể đơn hàng đang được xử lý…”
    ```

  - 👉 LLM đang bịa do nó không hề biết logic nghiệp vụ, database, API, v.v.

- ✦ Sau khi có Orchestration, phía backend sẽ xử lý như sau:

  - ① Nhận câu hỏi

  - ② Kiểm tra có hỏi về đơn hàng không?

  - ③ Gọi DB / API lấy trạng thái

  - ④ Đưa dữ liệu thật cho LLM

  - ⑤ Nhờ LLM diễn đạt cho dễ hiểu

- ✦ Để dễ hình dung:

  - ✧ Backend Web Dev:

  - ```
    Controller
     → Service
       → Repository
         → DB
    ```

  - ✧ Backend có LLM:

  - ```
    Controller
     → Orchestrator
       → (Rule)
       → (DB / API / RAG)
       → LLM
    ```
