---
title: "Nền tảng — Tư duy đúng trước khi dùng tool"
---

# Nền tảng — Tư duy đúng trước khi dùng tool

- Bài viết cover: mô hình Floor-Ceiling, nguyên tắc prompt cho AI agent, và cách tránh những bẫy tư duy phổ biến.

## Mục lục

[1. Mô hình Floor-Ceiling — AI nâng sàn nhưng không nâng trần](#1)

[2. "Jagged Frontier" — Ranh giới lởm chởm của AI](#2)

[3. Prompt cho AI Agent — Khác hoàn toàn với chat AI thông thường](#3)

[4. Những bẫy tư duy khi bắt đầu dùng AI](#4)

[5. Checklist trước khi bước vào Level 2](#5)

---

<a name="1"></a>

## 📌 1. Mô hình Floor-Ceiling — AI nâng sàn nhưng không nâng trần

Đây là mental model quan trọng nhất để hiểu AI ảnh hưởng thế nào đến năng lực của bạn.

- **Floor (sàn)** = mức tối thiểu mà bất kỳ ai cũng có thể đạt được.
- **Ceiling (trần)** = mức tối đa, đòi hỏi chuyên gia với kinh nghiệm sâu.

💡 **AI nâng floor lên rất nhanh — nhưng ceiling gần như không đổi.**

```
                    Trước AI                    Sau AI

Ceiling ─ ─ ─ ─ ┬──────────────────┐ ─ ─ ─ ─ ┬──────────────────┐
(trần)          │  Vùng chuyên gia │         │  Vùng chuyên gia │
                │  (kinh nghiệm,   │         │  (vẫn cần con    │
                │   phán đoán,     │         │   người 100%)    │
                │   kiến trúc)     │         │                  │
                │                  │         ├──────────────────┤
                │                  │         │  ░░░ AI zone ░░░ │
                │                  │         │  AI có thể hỗ trợ│
                ├──────────────────┤         │  hoặc tự làm     │
Floor ─ ─ ─ ─ ─ │  Mức cơ bản      │         ├──────────────────┤
(sàn)           │  (ai cũng làm    │         │  Floor mới       │
                │   được)          │         │                  │
                └──────────────────┘         └──────────────────┘
```

### Ví dụ thực tế trong ngành IT

**Floor được nâng lên — AI giúp người ít kinh nghiệm làm được nhiều hơn:**

| Công việc                 | Trước AI                              | Sau AI (floor mới)                                   |
| ------------------------- | ------------------------------------- | ---------------------------------------------------- |
| Viết REST API             | Junior mất vài ngày, hay sai cấu trúc | Mô tả yêu cầu → AI gen code hoạt động trong vài phút |
| Viết unit test            | Nhiều team bỏ qua vì tốn thời gian    | AI gen test suite, coverage 80%+ ngay lập tức        |
| Làm việc với ngôn ngữ mới | Mất vài tuần học cú pháp cơ bản       | Viết code bằng ngôn ngữ lạ ngay trong ngày đầu       |
| Setup CI/CD               | Cần DevOps chuyên trách               | AI gen Docker, Terraform, GitHub Actions từ mô tả    |
| Viết SQL phức tạp         | Window function, CTE là rào cản lớn   | Mô tả bằng tiếng Việt → AI viết query chính xác      |
| Viết tài liệu             | Thường bị bỏ qua vì nhàm chán         | AI gen docs từ code, dev chỉ cần review              |

**Ceiling vẫn giữ nguyên — những thứ AI không thể thay thế:**

| Công việc                   | Tại sao ceiling vẫn cần con người?                                                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Thiết kế kiến trúc hệ thống | Chọn microservices hay monolith? Database nào? Cần hiểu business context, team capability, kế hoạch scale — AI không có thông tin này                                    |
| Debug production incident   | AI không thể tái hiện sự kết hợp giữa infrastructure, load pattern, và data cụ thể của hệ thống. Senior engineer dùng trực giác từ hàng năm kinh nghiệm                  |
| Quyết định refactor         | Refactor cái gì, khi nào, đến đâu — đòi hỏi hiểu context tổ chức và business priority                                                                                    |
| Security architecture       | AI-generated code thường chứa lỗ hổng bảo mật. Nghiên cứu của Stanford (2023) chỉ ra developer dùng AI viết code **kém bảo mật hơn**. Tư duy phòng thủ vẫn cần con người |
| Code review chất lượng      | Không chỉ tìm bug — mà hiểu _tại sao_ code sai, dạy nguyên tắc, truyền đạt tư duy                                                                                        |

### Điều này có nghĩa gì cho bạn?

- 💡 Nếu bạn là **junior**: AI giúp bạn productive ngay từ ngày đầu. Nhưng **đừng nhầm tốc độ với năng lực**. Floor được nâng không có nghĩa bạn đã giỏi — nó chỉ có nghĩa rào cản gia nhập thấp hơn. Muốn khác biệt, bạn vẫn cần đầu tư vào nền tảng.

- 💡 Nếu bạn là **senior**: AI không đe dọa vị trí của bạn — ngược lại, nó làm kỹ năng ceiling của bạn **có giá trị hơn**. Khi ai cũng viết được code với AI, người biết đánh giá code đúng/sai, thiết kế hệ thống, và ra quyết định kiến trúc trở nên quan trọng hơn bao giờ hết.

- ⚠️ **Vùng nguy hiểm**: Người ở giữa — biết code nhưng không sâu, dùng AI nhưng không kiểm soát được output. Đây là nhóm dễ bị ảo giác năng lực nhất.

---

<a name="2"></a>

## 📌 2. "Jagged Frontier" — Ranh giới lởm chởm của AI

Floor-Ceiling cho bạn bức tranh tổng. Nhưng thực tế phức tạp hơn — AI không giỏi đều ở mọi task. Ranh giới năng lực của nó **lởm chởm**, không phải đường thẳng.

```
Năng lực AI
     ▲
     │   ┌───┐         ┌───┐
     │   │   │  ┌───┐  │   │         ┌───┐
     │   │   │  │   │  │   │  ┌───┐  │   │
     │   │   │  │   │  │   │  │   │  │   │
     │───┘   └──┘   └──┘   └──┘   └──┘   └──
     │
     └──────────────────────────────────────► Các loại task
          Gen    Debug   Viết   Kiến   Phân
          code   prod    test   trúc   tích
                 issue   case          security
```

- ✅ AI **rất giỏi**: gen code từ mô tả, viết test, refactor, giải thích code, dịch tài liệu, viết boilerplate.
- ❌ AI **rất yếu**: debug production issue phức tạp, thiết kế kiến trúc distributed system, phân tích bảo mật chuyên sâu, hiểu business context.
- ⚠️ **Vùng nguy hiểm**: Những task mà AI trả lời rất tự tin nhưng sai — bạn không đủ chuyên môn để phát hiện sai, nên tin luôn.

### Cách ứng dụng

- Trước khi giao task cho AI, tự hỏi: **"Mình có đủ kiến thức để đánh giá output này không?"**
  - Nếu **có** → dùng AI thoải mái, review kết quả.
  - Nếu **không** → dùng AI để **học**, không phải để **ship**. Đọc output, hiểu logic, verify từng bước.
- Không có đường tắt: **muốn dùng AI hiệu quả, bạn cần có nền tảng**. AI khuếch đại năng lực — nếu nền tảng = 0, khuếch đại = 0.

---

<a name="3"></a>

## 📌 3. Prompt cho AI Agent — Khác hoàn toàn với chat AI thông thường

Nhiều người dùng AI agent (Claude Code, Cursor, Copilot) nhưng vẫn prompt theo kiểu ChatGPT — hỏi từng câu, chờ trả lời, copy-paste. Đây là cách lãng phí 90% sức mạnh của agent.

### Agent khác chatbot ở đâu?

|                    | Chat AI (ChatGPT)              | AI Agent (Claude Code, Cursor)                               |
| ------------------ | ------------------------------ | ------------------------------------------------------------ |
| **Cách tương tác** | Hỏi → trả lời → hỏi tiếp       | Giao task → agent tự thực thi nhiều bước                     |
| **Context**        | Bạn phải paste toàn bộ context | Agent tự đọc file, search code, explore codebase             |
| **Scope**          | Hẹp: "viết hàm này"            | Rộng: "implement feature này across codebase"                |
| **Kiểm soát**      | Bạn kiểm soát từng bước        | Bạn định nghĩa mục tiêu + ràng buộc, agent tự quyết cách làm |
| **Prompt style**   | Hội thoại, lặp đi lặp lại      | Khai báo rõ ràng: cái gì, tại sao, ràng buộc, tiêu chí done  |

### 5 nguyên tắc prompt cho AI agent

**1️⃣ Cung cấp context đầy đủ — "Why" và "Where"**

- ❌ "Thêm authentication cho API."
- ✅ "Thêm JWT authentication cho Express API trong `/src/api/`. Database PostgreSQL, bảng `users`. Auth middleware bảo vệ tất cả route dưới `/api/v1/` trừ `/api/v1/auth/login` và `/api/v1/auth/register`. Tham khảo pattern trong `src/middleware/logging.ts`."

Agent có khả năng đọc codebase — nhưng bạn cần **chỉ đúng hướng** để nó không đi lạc.

**2️⃣ Xác định scope rõ ràng — Nói rõ làm gì VÀ không làm gì**

- ✅ "Chỉ sửa file trong `src/features/auth/`. Không thay đổi database schema."
- ✅ "Không install thêm dependency mới."
- ✅ "Giữ backward compatibility với API hiện tại."

Không có scope rõ ràng → agent sẽ "tốt bụng" sửa thêm những chỗ bạn không muốn.

**3️⃣ Định nghĩa tiêu chí done**

- ✅ "Task hoàn thành khi: (a) tất cả test hiện tại vẫn pass, (b) có test mới cover auth middleware, (c) API trả 401 cho request chưa authenticated."

Không có tiêu chí done → agent không biết khi nào dừng, hoặc dừng quá sớm.

**4️⃣ Chia nhỏ task lớn**

- ❌ Một prompt dài 500 từ mô tả toàn bộ feature.
- ✅ Chia thành chuỗi task nhỏ:
  - "Tạo database migration cho bảng `users`."
  - "Implement User model theo migration vừa tạo."
  - "Thêm auth routes: login, register, refresh token."

Task nhỏ = ít lỗi lan truyền. Agent mắc sai ở bước 1 thì bạn phát hiện ngay, không để sai chồng sai qua 5 bước.

**5️⃣ Mô tả "cái gì" và "tại sao" — để agent tự quyết "làm thế nào"**

- ❌ "Tạo file `auth.ts`, import express, viết function `authenticate` nhận req, res, next..."
  - → Nếu bạn đã biết chính xác từng dòng code, bạn tự viết nhanh hơn.
- ✅ "Tạo auth middleware kiểm tra JWT token trong header. Token hết hạn thì trả 401. Token hợp lệ thì gắn user info vào `req.user`."
  - → Agent tự chọn cách implement phù hợp với codebase hiện tại.

### Sai lầm phổ biến khi prompt agent

| Sai lầm                      | Vì sao sai                                          | Cách sửa                                                                |
| ---------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------- |
| Quá mơ hồ: "Làm app tốt hơn" | Agent không có mục tiêu rõ → sửa lung tung          | Cụ thể: "Giảm response time endpoint `/api/users` bằng cách thêm cache" |
| Quá chi tiết cách làm        | Mất lợi thế của agent — nó không được tự quyết      | Mô tả kết quả mong muốn, không phải từng bước code                      |
| Không đề cập test            | Agent implement xong nhưng không viết test          | Đưa testing vào tiêu chí done                                           |
| Prompt kiểu hội thoại        | "Bạn có thể giúp mình..." "Mình đang nghĩ có lẽ..." | Trực tiếp: "Implement X. Ràng buộc: Y. Done khi: Z."                    |
| Giao task quá lớn 1 lần      | Lỗi chồng lỗi qua nhiều file, khó rollback          | Chia nhỏ thành chuỗi task có thể review từng bước                       |

---

<a name="4"></a>

## 📌 4. Những bẫy tư duy khi bắt đầu dùng AI

### ❌ Bẫy 1: Vibe Coding — "Cứ accept hết, chạy được là xong"

Việc mô tả cách code bằng cảm tính: mô tả bằng ngôn ngữ tự nhiên, AI gen code, accept không đọc, chạy thử, lỗi thì nhờ AI fix tiếp.

- Hoạt động tốt cho: prototype, MVP, tool nội bộ dùng 1 lần.
- **Nguy hiểm cho**: production code, hệ thống có người dùng thật, bất cứ thứ gì cần maintain lâu dài.
- 💡 Vibe Coding không sai — nhưng cần biết **khi nào dùng, khi nào không**. Nếu bạn đang vibe coding cho production, bạn đang tạo nợ kỹ thuật với lãi suất rất cao.

### ❌ Bẫy 2: Ảo giác năng lực — "AI trả lời được thì mình cũng biết"

- AI trả lời mọi thứ rất tự tin → bạn cảm thấy mình "hiểu" mọi thứ → nhưng kiến thức không nằm trong đầu bạn.
- Khi gặp vấn đề AI không giải quyết được → bạn hoàn toàn bế tắc.
- 💡 **Cách phòng tránh**: Sau khi AI giải quyết xong, tự hỏi: "Nếu không có AI, mình có hiểu tại sao giải pháp này hoạt động không?" Nếu không → dành thêm 10 phút để hiểu.

### ❌ Bẫy 3: Tool chasing — "Tool mới ra rồi, học cái mới thôi"

- Tuần này Cursor, tuần sau Claude Code, tuần sau nữa tool mới khác...
- Cứ chạy theo tool mới mà không bao giờ **thành thạo** cái nào.
- 💡 **Cách phòng tránh**: Chọn 1 tool, dùng sâu ít nhất 2-4 tuần. Kỹ năng cốt lõi (prompt, review, tư duy agent) **transfer được** giữa các tool. Tool thay đổi, tư duy thì không.

### ❌ Bẫy 4: All-or-Nothing — "Hoặc giao hết cho AI, hoặc không dùng gì"

- Hai thái cực đều sai:
  - Giao hết → mất kiểm soát, không hiểu output, nợ kỹ thuật chồng chất.
  - Không dùng gì → bị bỏ lại phía sau, làm chậm hơn người dùng AI.
- 💡 **Đúng cách**: Mô hình "Cyborg" (Ethan Mollick) — con người và AI đan xen ở mọi bước. Bạn không giao hết, cũng không làm hết — bạn **cộng tác** với AI. AI viết draft, bạn review. Bạn thiết kế, AI implement. AI tìm bug, bạn quyết định fix hay không.
