---
title: Lập trình với Claude Code
summary: "AI không thay thế lập trình viên. AI thay thế lập trình viên không dùng AI."
date: "2026-03-15"
image: "/vuepress-blog/images/posts/claude-code.png"
category: "AI"
tags:
  - ai
  - claude code
---

# Lập trình với Claude Code

**AI không thay thế lập trình viên. AI thay thế lập trình viên không dùng AI.**

[1. Các giai đoạn khi lập trình với AI](#1)

[2. Điểm khác biệt cốt lõi của Claude Code](#2)

[3. Khóa học Claude Code đến từ cha đẻ Anthropic](#3)

[4. Giới thiệu khóa học "Claude Code in Action"](#4)

<a name="1"></a>

## 📌 1. Các giai đoạn khi lập trình với AI

- Stage 1️⃣: AI chỉ tham gia gợi ý cú pháp.

- Stage 2️⃣: Tích hợp AI Agent trong IDE (Copilot, Cursor, Claude).
  - Agent sẽ xin phép từng bước một.
  - Chúng ta bảo gì, xác nhận gì thì AI mới làm cái đó.

- Stage 3️⃣: Cấp toàn quyền và tin tưởng hoàn toàn cho AI Agent.
  - Chấp nhận rủi ro để đổi lấy tốc độ.

- Stage 4️⃣: Không còn đọc code nữa, mà chỉ xem các thay đổi từ code của AI.
  - AI trở thành 1 senior

- Stage 5️⃣: Sử dụng AI trong terminal thay vì IDE

- Stage 6️⃣: Sử dụng multi-agent (mở nhiều tab terminal, mỗi terminal là 1 Claude Code instance)
  - Yêu cầu bạn phải giàu, và giỏi vì rất khó quản lý, điều phối

- Stage 7️⃣8️⃣: Push nâng thêm nhiều instances
  - Không quản lý agent thủ công nữa mà build hệ thống quản lý.
  - Mỗi agent lúc này như một thành viên trong công ty, còn chúng ta là Product Manager.

<a name="2"></a>

## 📌 2. Điểm khác biệt của Claude Code

- Claude Code không giống ChatGPT:
  - ChatGPT hiểu đơn ginả là việc hỏi => trả lời => copy kết quả.
  - Claude Code là 1 coding agent. Không chỉ chat mà nó hành động.

- Claude thực ra là một hệ sinh thái và Claude Code chỉ là một interface chuyên cho developer.
  - Claude có thể gồm: Claude Chat, Claude Code, Claude API, v.v.

<a name="3"></a>

## 📌 3. Khóa học Claude Code đến từ cha đẻ Anthropic

- ✅ Miễn phí, nắm bắt nhanh, có chứng chỉ.

- Anthropic có các khóa học nổi bật:
  - Claude Code in Action – học cách dùng Claude Code trong workflow dev
  - Building with Claude API – xây app với Claude
  - Introduction to Model Context Protocol (MCP)
  - Claude 101 – cơ bản về Claude
  - AI Fluency: Framework & Foundations

- Ví dụ khóa **Claude Code in Action** dạy:
  - Cách Claude Code đọc file và chỉnh sửa code
  - Chạy command từ AI
  - Quản lý context (Claude.md, /init, …)
  - Viết custom commands và hooks
  - Tích hợp GitHub / workflow tự động.

- Chứng chỉ:
  - Là chứng chỉ sau khi hoàn thành khóa học và bài đánh giá. Không giống kiểu AWS SAA (thi có giám sát).

- Link chính thức để học và lấy certificate Claude (miễn phí) [tại đây](https://anthropic.skilljar.com/?utm_source=chatgpt.com).

<a name="4"></a>

## 📌 4. Giới thiệu khóa học "Claude Code in Action"

- Hướng dẫn thực hành chi tiết cách sử dụng Claude Code để tăng tốc quy trình phát triển.

### 1️⃣ Giới thiệu & Mục tiêu khóa học
- Bao gồm: 15 bài giảng video, 1 giờ video, 1 bài kiểm tra, giấy chứng nhận hoàn thành.:
  - ✔️ Học cách Claude Code đọc tệp
  - ✔️ Thực thi lện
  - ✔️ Sửa đổi mã thông qua hệ thống công cụ của Claude Code
  - ✔️ Kỹ thuật quản lý context
  - ✔️ Tạo custom workflows
  - ✔️ Mở rộng Claude Code bằng các hooks và tích hợp với các dịch vụ bên ngoài.

#### 🎯 Mục tiêu:
- Sử dụng các core tools của Claude Code để thao tác file, thực thi lệnh (command) và phân tích mã.

- Quản lý context hiệu quả bằng cách sử dụng `/init`, các file `Claude.md` và @ mentions.

- Kiểm soát luồng hội thoại bằng nhiều phím tắt và lệnh khác nhau.

- Kích hoạt Chế độ Lập kế hoạch (Pland Mode) và Chế độ Tư duy (Thinking Mode) cho các tác vụ phức tạp đòi hỏi phân tích sâu hơn.

- Tạo các lệnh tùy chỉnh (custom command) để tự động hóa các quy trình phát triển lặp đi lặp lại.

- Mở rộng khả năng của Claude Code với MCP servers để bổ sung tính năng tự động hóa trình duyệt và các chức năng khác.

- Thiết lập tích hợp GitHub để tự động review Pull Request và xử lý sự cố.

- Viết các hooks để thêm các hành vi bổ sung vào Claude Code.

### 2️⃣ Danh sách Topic của khóa học
```
1. What is Claude Code?
  - Introduction
  - What is a coding assistant?
  - Claude Code in action
  
2. Getting hands on
  - Claude Code setup
  - Project setup
  - Adding context
  - Making changes
  - Course satisfaction survey
  - Controlling context
  - Custom commands
  - MCP servers with Claude Code
  - Github integration

3. Hooks and the SDK
  - Introducing hooks
  - Defining hooks
  - Implementing a hook
  - Gotchas around hooks
  - Useful hooks!
  - Another useful hook
  - The Claude Code SDK

4. Wrapping up
  - Quiz on Claude Code
  - Summary and next steps
  - About this course
```

### 3️⃣ Phương pháp học

- Với ai có nền tảng tiếng Anh tốt thì cứ xem video 15 bài giảng.
- Với ai tiếng Anh còn yếu thì các tối ưu là:
  ```
  Copy full course notes for LLMs (mỗi video bài giảng đều có button này)
      ↓
  Dùng LLM tóm tắt + tạo checklist
      ↓
  Xem lại video tham chiếu song song phần note phía trên
      ↓
  Thực hành
  ```

### 4️⃣ Nội dung chi tiết

Thao khảo [tại đây](https://sy-duc.github.io/vuepress-blog/blog-posts/hidden/claude-code-in-action.html).
