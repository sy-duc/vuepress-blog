---
title: "Hiểu bối cảnh — AI đang ở đâu và đi đến đâu?"
---

# Hiểu bối cảnh — AI đang ở đâu và đi đến đâu?

- Bài viết dành cho những ai đang có cái nhìn giới hạn về AI: biết AI tồn tại, có thể đã dùng ChatGPT, nhưng chưa hình dung được AI đã đi đến đâu và sẽ ảnh hưởng thế nào đến công việc của mình.
- Bài này **không** hướng dẫn dùng tool cụ thể — mà giúp bạn hiểu bức tranh lớn trước khi bắt tay vào bất cứ thứ gì.

## Mục lục

[1. AI đang làm được gì trong quy trình phần mềm?](#1)

[2. SDLC đang chuyển mình — ADLC là gì?](#2)

---

<a name="1"></a>

## 📌 1. AI đang làm được gì trong quy trình phần mềm?

- Nhiều người chỉ biết AI "viết code". Thực tế, AI đã tham gia được vào **hầu hết các giai đoạn** của quy trình phát triển phần mềm:

  ```
  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
  │ Requirement  │ →  │   Design     │ →  │    Code      │ →  │    Test      │ →  │   Deploy     │
  │              │    │              │    │              │    │              │    │              │
  │ Phân tích    │    │ Thiết kế     │    │ Viết code    │    │ Gen test     │    │ CI/CD        │
  │ yêu cầu,     │    │ kiến trúc,   │    │ refactor,    │    │ case, tìm    │    │ automation,  │
  │ tìm edge     │    │ UI/UX        │    │ migration,   │    │ edge case,   │    │ debug log,   │
  │ case         │    │              │    │ documentation│    │ automation   │    │ viết runbook │
  └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
         🤖                 🤖                 🤖                  🤖                  🤖
      AI hỗ trợ          AI hỗ trợ           AI hỗ trợ           AI hỗ trợ            AI hỗ trợ
  ```

- **Ví dụ**:
  - 1️⃣ Requirement / BA:
    - ❌ Trước đây:

      ```
      Họp → ghi note thủ công
          ↓
      Dev đọc → hiểu sai → hỏi lại
          ↓
      Loop rất nhiều
      ```

    - ✅ Có AI Agent:

      ```
      Tự ghi lại biên bản họp, không cần viết tay
          ↓
      AI Agent trích xuất, tổng hợp yêu cầu chính
          ↓
      DEV confirm được ngay
      ```

  - 2️⃣ UX/UI Design
    - ❌ Trước đây:

      ```
      BA viết spec → Designer đọc
          ↓
      Designer vẽ wireframe
          ↓
      Dev đọc lại → lệch
      ```

    - ✅ Có AI Agent:

      ```
      Requirement (text)
          ↓
      AI Agent
        → Generate wireframe
        → Generate UI logic (state, validation)
        → Generate component structure (React/Vue)
          ↓
      Dev + Designer cùng nhìn 1 source
      ```

  - 3️⃣ Code
    - ❌ Trước đây:

      ```
      Dev đọc spec
          ↓
      Code từng phần
          ↓
      Tự viết test
          ↓
      Debug thủ công
      ```

    - ✅ Có AI Agent:

      ```
      AI Agent:
        1. Generate code (multi-file)
        2. Generate unit test
        3. Run test (CI/local)
        4. Fix error tự động
        5. Refactor
        6. Add logging
      ```

  - 4️⃣ Documentation / BrSE
    - ❌ Trước đây:

      ```
      - Dịch tay
      - Viết doc tốn thời gian
      ```

    - ✅ Có AI Agent:

      ```
      - Generate document
      - Translate (VN ↔ JP ↔ EN)
      - Summarize
      - BrSE không còn là bottleneck
      ```

- **Nhưng AI vẫn có giới hạn rõ ràng:**
  - ❌ AI không thể thay bạn **ra quyết định kiến trúc** — nó đề xuất giỏi, nhưng quyết định vẫn là của bạn.
  - ❌ AI không hiểu **business context** sâu, linh hoạt.
  - ❌ AI gen test rất nhanh nhưng cần kiểm tra: test có thật sự kiểm tra logic quan trọng không, hay chỉ test cho có?
  - ❌ AI không thể thay bạn **chịu trách nhiệm** — output cuối cùng vẫn mang tên bạn.

---

<a name="2"></a>

## 📌 2. SDLC đang chuyển mình — ADLC là gì?

Nếu bạn đã quen với SDLC (Software Development Lifecycle) — waterfall, agile, scrum — thì đây là điều cần cập nhật: AI đang thay đổi cả **quy trình**, không chỉ công cụ.

- ✅ **ADLC = AI-augmented Development Lifecycle (quy trình phát triển được tawg cường bởi AI)**
  - Không phải quy trình mới hoàn toàn — mà là SDLC truyền thống được **bổ sung AI ở mỗi giai đoạn**.
  - Mỗi phase (requirement, design, code, test, deploy) đều có AI tham gia với vai trò khác nhau.

- 💡 **Sự khác biệt cốt lõi:**

  |                   | SDLC truyền thống   | ADLC                                 |
  | ----------------- | ------------------- | ------------------------------------ |
  | Ai viết code?     | Con người           | AI viết, con người review            |
  | Ai tìm bug?       | QA team             | AI tìm + con người xác nhận          |
  | Ai viết tài liệu? | Dev (thường bỏ qua) | AI gen + con người chỉnh             |
  | Tốc độ iteration  | Tuần / sprint       | Giờ / ngày                           |
  | Vai trò con người | Thực thi            | Ra quyết định + kiểm soát chất lượng |

- ⚠️ **Gotcha**: ADLC không có nghĩa "giao hết cho AI". Ngược lại — nó đòi hỏi con người phải **giỏi hơn** ở khâu review, đánh giá chất lượng, và ra quyết định. AI tăng tốc phần thực thi, nhưng chất lượng vẫn phụ thuộc vào người điều khiển.

- 💡 Hiểu sự thay đổi này giúp bạn biết **AI nên vào ở đâu** trong workflow hiện tại của team — thay vì cố nhét AI vào mọi chỗ hoặc ngược lại, không nhét AI vào chỗ nào.

---

## Tổng kết

- 💡 **Insight quan trọng nhất**: AI không thay thế người làm IT — nhưng nó đang thay đổi **những gì được coi là giá trị** trong ngành. Giá trị dịch chuyển từ "viết code" sang "đặt đúng vấn đề + kiểm soát chất lượng". Nếu bạn chỉ biết viết code mà không biết dùng AI, bạn đang cạnh tranh với thứ có thể viết code nhanh hơn bạn gấp 10 lần.

- 💡 **Hiểu khác đi**: Đừng nghĩ "học AI = học tool mới". Học AI là **thay đổi cách tư duy về công việc** — từ người thực thi sang người điều khiển và kiểm soát chất lượng. Tool chỉ là phương tiện.

- ⚠️ **Giới hạn**: Bài viết phản ánh góc nhìn tại thời điểm viết (03/2026). AI thay đổi rất nhanh — một số khái niệm hoặc con số có thể đã cập nhật khi bạn đọc. Nhưng tư duy nền tảng thì vẫn giữ nguyên giá trị.
