---
title: Developer vs. AI
summary: "AI không thay thế lập trình viên. AI thay thế lập trình viên không dùng AI."
date: "2026-03-21"
image: "/vuepress-blog/images/posts/developer-vs-ai.png"
category: "AI"
tags:
  - ai
  - developer
  - workflow
---

## Ảnh hưởng từ sự phát triển của AI

- ✦ **Giải pháp** dần trở thành thứ rẻ nhất trong thời đại AI.

- ✦ Hiệu ứng **Dunning-Kruger** khi dùng AI: ảo giác năng lực, mất nền tảng tư duy.
  - Hệ quả là khi gặp vấn đề mà AI không thể giải quyết, con người hoàn toàn bế tắc vì thiếu nền tảng tư duy ngược lại vấn đề.

- ✦ Công nghệ AI mới liên tục thay thế cái cũ.
  - Chưa tìm hiểu xong cái này thì đã có công nghệ mới xịn xò hơn thay thế. Cái đang học trở nên lỗi thời.

- ✦ Khoảng cách năng lực AI:
  - ✧ Có 1 nhóm người sử dụng AI rất sâu trong khi phần lớn xã hội vẫn chưa bắt đầu.
  - ✧ AI phát triển rất nhanh nhưng lan ra xã hội lại rất chậm.
  - ✧ Khi một công nghệ AI mới đi vào đời sống thật: các công ty e dè, phải thử nghiệm, xin phê duyệt, thay đổi quy trình trong khi AI tăng tốc từng ngày (model mới, tool mới).
  - ✧ Hệ quả tạo ra một biểu đồ đường cong: AI cứ lên dốc từng ngày, trong khi tốc độ xã hội hấp thu công nghệ tiến rất chậm.

### 🧐 Các mối bận tâm thực tế:

- ✦ AI hiện tại đã làm được gì trong ngành IT (hỗ trợ UX/UI, viết code, test, deploy...).
- ✦ Con người vấn đang hoài nghi: AI viết code khó đọc, khó maintain, mình vẫn cứ làm tay cho chắc.
- ✦ Con người lo sợ bị lệ thuộc: Giao hết cho AI, không hiểu gì, gặp lỗi phức tạp là bó tay.
- ✦ Con người lo sợ bị AI thay thế.
- ✦ Code do AI viết sống được bao lâu.

---

## Sự phát triển của AI Agent

---

## Các giai đoạn khi lập trình với AI

- 1️⃣ Autocomplete — AI chỉ tham gia gợi ý cú pháp

- 2️⃣ Tích hợp AI Agent trong IDE (Copilot, Cursor, Claude)
  - Agent sẽ xin phép từng bước một.
  - Chúng ta bảo gì, xác nhận gì thì AI mới làm cái đó.

- 3️⃣ Cấp toàn quyền và tin tưởng hoàn toàn cho AI Agent
  - Chấp nhận rủi ro để đổi lấy tốc độ.

- 4️⃣ Không còn đọc code nữa, mà chỉ xem các thay đổi từ code của AI
  - AI trở thành 1 senior

- 5️⃣ Sử dụng AI trong terminal thay vì IDE

- 6️⃣ Sử dụng multi-agent
  - Là việc mở nhiều tab terminal, mỗi terminal là 1 Claude Code instance
  - Yêu cầu bạn phải giàu, và giỏi vì rất khó quản lý, điều phối

- 7️⃣ Hệ thống agent
  - Không quản lý agent thủ công nữa mà build hệ thống quản lý.
  - Mỗi agent lúc này như một thành viên, còn chúng ta là Product Manager.

---

## Học cách tích hợp AI vào công việc

1. <a href="/vuepress-blog/blog-posts/hidden/ai-nen-tang.html" target="_blank">AI đang làm được gì trong ngành IT</a>

2. <a href="/vuepress-blog/blog-posts/hidden/ai-nen-tang.html" target="_blank">Sự thay đổi của quy trình phát triển phần mềm</a>

- SDLC đã bị thay thế bởi ADLC

3. <a href="/vuepress-blog/blog-posts/hidden/ai-nen-tang.html" target="_blank">Mô hình Floor–Ceiling — Ranh giới giữa người và AI</a>

4. <a href="/vuepress-blog/blog-posts/hidden/ai-nen-tang.html" target="_blank">Làm chủ AI Agent</a>

- Claude Code (MCP, Agent Skills, v.v.)
- Claude Code vs. Copilot vs. Cursor — điểm khác biệt cốt lõi, chọn cái nào?
- Brainstorming cùng AI để thiết kế kiến trúc, sourcebase vững chắc (SOLID)
- Thiết kế UI/UX
- Gen code
- Chiến lược review và kiểm soát code AI
- Tự động hóa build và deploy với AI

5. <a href="/vuepress-blog/blog-posts/hidden/ai-nen-tang.html" target="_blank">Kỹ năng quản lý hệ thống Multi-agent</a>

- Yêu cầu: "phải giàu và giỏi" — chi phí vận hành và kỹ năng cần thiết
- Từ 1 agent → nhiều agent chạy song song: mô hình thực tế
- Bạn là Product Manager, AI là nhân viên — thay đổi cách bạn nghĩ về công việc
- Quản lý rủi ro khi cấp quyền cao cho AI
- Xây dựng hệ thống điều phối agent thay vì quản lý thủ công
