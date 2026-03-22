---
title: OpenSpec — Thoát khỏi vòng lặp "AI viết sai → sửa → sai lại" một lần và mãi mãi
---

# OpenSpec — Thoát khỏi vòng lặp "AI viết sai → sửa → sai lại" một lần và mãi mãi

- Bài này nói về cách dùng OpenSpec để kiểm soát AI coding agent — không phải để giới hạn AI, mà để AI làm đúng việc hơn ngay từ đầu.
- Cover: workflow thực tế từ đề xuất tính năng → triển khai → lưu trữ; các lệnh cần biết; những bẫy phổ biến.
- Không cover: so sánh sâu các AI model, cách cài nhiều môi trường phức tạp.
- Prerequisite: biết dùng terminal, đã từng dùng ít nhất một AI coding assistant (Cursor, Claude Code, Copilot, v.v.)

## Mục lục

[1. Vòng lặp quen thuộc — và cái giá thực sự phải trả](#1)

[2. OpenSpec là gì — đủ để bắt đầu](#2)

[3. Setup trong 5 phút](#3)

[4. Luồng 3 lệnh: propose → apply → archive](#4)

[5. Delta spec — bộ nhớ dài hạn cho brownfield project](#5)

[6. Những cạm bẫy tôi gặp (và cách tránh)](#6)

[7. Tổng kết — thay đổi tư duy trước, công cụ sau](#7)

---

<a name="1"></a>

## 📌 1. Vòng lặp quen thuộc — và cái giá thực sự phải trả

- Nếu bạn đang dùng AI coding assistant thường xuyên, hẳn bạn quen với cảnh này:

  > Bạn mô tả một tính năng trong chat → AI tạo ra code trông hợp lý → chạy thử thì phát hiện sai logic → mô tả lại thêm chi tiết → AI viết lại → lại sai theo cách khác → lặp lại 3–4 vòng.

- ❌ **Vấn đề không phải AI yếu.** Vấn đề là *context* — thứ AI đang hoạt động dựa trên — không phải là tài liệu kỹ thuật thực sự. Nó là lịch sử chat ngắn hạn, dễ mất, không có cấu trúc.

- Cụ thể hơn, ba thứ đang xảy ra:

  - **🔴 Context drift giữa các session**: AI không nhớ buổi làm việc hôm qua. Mỗi lần mở chat mới, bạn lại phải "dạy" lại context.

  - **🔴 Mô tả mơ hồ → giải thích mơ hồ**: Câu prompt viết trong chat thường thiếu edge case, missing constraint, không có tiêu chí hoàn thành rõ ràng. AI lấp đầy khoảng trống bằng cách đoán.

  - **🔴 Code diverge khỏi ý định ban đầu**: Sau vài vòng sửa, code có thể "đúng" theo nghĩa hẹp (pass các yêu cầu được nhắc) nhưng lệch so với kiến trúc tổng thể ban đầu.

- 💡 Điều tôi nhận ra sau một thời gian: **vấn đề không phải AI làm sai — mà mình đang dùng AI sai chỗ**. Để AI viết code, nhưng không cho AI một thứ xứng đáng để đọc trước khi viết.

---

<a name="2"></a>

## 📌 2. OpenSpec là gì — đủ để bắt đầu

- OpenSpec là một CLI framework mã nguồn mở (MIT) đưa **spec-driven development (SDD)** vào workflow AI coding. Ý tưởng cốt lõi rất đơn giản:

  > **Trước khi AI viết code → AI (và bạn) phải đồng ý trên giấy về việc code sẽ làm gì.**

- Thay vì để yêu cầu sống trong lịch sử chat, OpenSpec tạo một thư mục `openspec/` trong dự án — chứa toàn bộ đặc tả dưới dạng Markdown có cấu trúc, đọc được bởi cả người lẫn AI.

  ```
  openspec/
    ├── specs/          ← nguồn sự thật: hệ thống đang hoạt động thế nào
    └── changes/        ← thay đổi đang đề xuất (mỗi change một thư mục)
  ```

- **Điểm khác với viết doc thông thường**: OpenSpec không phải tài liệu viết xong rồi để đó. Nó là tài liệu *sống* — được cập nhật theo từng thay đổi, tích hợp vào slash command của AI, và tự động hợp nhất khi feature hoàn thành.

- ⚠️ Một nhầm lẫn phổ biến: OpenSpec không phải tài liệu PRD hay ERD — nó không yêu cầu bạn mô tả toàn bộ hệ thống từ đầu. Bạn chỉ cần spec hóa *những gì cần thay đổi*, và theo thời gian, `specs/` tích lũy thành bức tranh toàn cảnh.

---

<a name="3"></a>

## 📌 3. Setup trong 5 phút

- **Yêu cầu**: Node.js 20.19.0 trở lên.

  ```bash
  # Cài global
  npm install -g @fission-ai/openspec@latest

  # Vào project của bạn
  cd your-project
  openspec init
  ```

- Lệnh `openspec init` sẽ hỏi bạn cấu hình cho tool nào. OpenSpec tự inject skill và slash command vào đúng chỗ mà từng tool mong đợi — không cần tự copy-paste gì cả.

  ```bash
  # Nếu muốn chỉ định sẵn (không tương tác):
  openspec init --tools claude,cursor

  # Hoặc bật hết:
  openspec init --tools all
  ```

- **Khi cần update** (ví dụ thêm tool mới hoặc có version mới của OpenSpec):

  ```bash
  npm install -g @fission-ai/openspec@latest
  openspec update   # tái tạo các file hướng dẫn AI trong project
  ```

- ✅ Sau `openspec init`, project của bạn có thư mục `openspec/` và AI tool của bạn đã có slash command `/opsx:*` sẵn sàng dùng.

---

<a name="4"></a>

## 📌 4. Luồng 3 lệnh: propose → apply → archive

- Đây là phần quan trọng nhất của bài — workflow thực tế hàng ngày.

  ```mermaid
  flowchart LR
      A[💬 Ý tưởng tính năng] --> B["/opsx:propose"]
      B --> C[📄 Đọc & chỉnh spec]
      C --> D["/opsx:apply"]
      D --> E[⚙️ AI implement từng task]
      E --> F{Cần điều chỉnh?}
      F -- Có --> G[Sửa design.md]
      G --> D
      F -- Không --> H["/opsx:archive"]
      H --> I[✅ Spec hợp nhất vào specs/]
  ```

### 1️⃣ `/opsx:propose <tên-change>`

- Ví dụ: `/opsx:propose add-dark-mode`

- AI tạo ngay toàn bộ thư mục `openspec/changes/add-dark-mode/` với:

  | File | Nội dung |
  |------|----------|
  | `proposal.md` | Tại sao cần tính năng này, problem statement |
  | `design.md` | Giải pháp kỹ thuật: component nào thay đổi, API contract |
  | `tasks.md` | Checklist triển khai chi tiết từng bước |
  | `specs/spec.md` | Delta spec: ADDED / MODIFIED / REMOVED so với spec hiện tại |

- 💡 **Bước quan trọng thường bị bỏ qua**: Đừng chạy `/opsx:apply` ngay. Đọc kỹ các file này — đặc biệt `design.md` và `tasks.md`. Đây là lúc bạn phát hiện hiểu nhầm *trước khi code tồn tại*, thay vì sau.

- Thực tế: tôi thường mất 10–15 phút đọc và chỉnh sửa ở bước này. Thời gian đó tiết kiệm 1–2 giờ debug sau đó.

### 2️⃣ `/opsx:apply`

- AI đi qua từng task trong `tasks.md`, tích checkbox khi hoàn thành.

  ```markdown
  <!-- tasks.md sau khi apply một phần -->
  - [x] Thêm CSS variable --color-background-dark
  - [x] Cập nhật ThemeProvider nhận prop colorScheme
  - [ ] Viết unit test cho useTheme hook
  - [ ] Cập nhật Storybook stories
  ```

- ⚠️ **Gotcha**: Nếu trong lúc implement AI phát hiện ra `design.md` cần điều chỉnh (ví dụ một API không tương thích), đừng để AI tự ứng biến ("improvise"). Dừng lại, cập nhật `design.md`, rồi tiếp tục `/opsx:apply`. Spec luôn là nguồn sự thật.

### 3️⃣ `/opsx:archive`

- Sau khi tất cả task trong `tasks.md` hoàn thành:

  - Delta spec tự động hợp nhất vào `openspec/specs/` (ADDED thêm vào, MODIFIED ghi đè, REMOVED xóa đi)
  - Thư mục change chuyển sang `openspec/changes/archive/YYYY-MM-DD_add-dark-mode/`

- ✅ Kết quả: `openspec/specs/` lúc nào cũng phản ánh *hệ thống hiện tại* — không phải hệ thống 3 tháng trước.

---

<a name="5"></a>

## 📌 5. Delta spec — bộ nhớ dài hạn cho brownfield project

- Đây là thứ tôi thấy thú vị nhất của OpenSpec — và ít được nói đến nhất.

- **Vấn đề với spec truyền thống**: Khi có thay đổi, bạn phải viết lại toàn bộ spec hoặc để spec cũ và code mới bắt đầu diverge. Cả hai đều tệ.

- **Delta spec giải quyết điều này**: thay vì ghi đè, bạn chỉ mô tả *phần khác biệt*:

  ```markdown
  ## ADDED Requirements
  ### Requirement: Two-Factor Authentication
  The system MUST support TOTP-based 2FA.
  Users MUST be able to enroll during onboarding or settings.

  ## MODIFIED Requirements
  ### Requirement: Session Expiration
  The system MUST expire sessions after 15 minutes of inactivity.
  (Previously: 30 minutes — tăng bảo mật sau khi bật 2FA)

  ## REMOVED Requirements
  ### Requirement: Remember Me
  (Deprecated — thay bằng 2FA, không còn phù hợp với threat model mới)
  ```

- 💡 **Mental model tôi dùng**: Nghĩ `specs/` như Git history cho *hành vi* của hệ thống. Mỗi lần archive một change là một "commit" vào spec. Khi AI cần hiểu hệ thống hiện tại, nó đọc `specs/` — không phải đoán từ code.

- **Tại sao điều này quan trọng cho team**: Khi người mới join hoặc AI được khởi động trong session mới, họ không cần đọc toàn bộ codebase để hiểu *intent*. `openspec/specs/` là onboarding document luôn luôn cập nhật.

  ```
  openspec/
    specs/
      auth/spec.md        ← mô tả toàn bộ flow xác thực hiện tại
      payments/spec.md    ← payment workflow + business rules
      notifications/spec.md
    changes/
      archive/
        2026-01-15_add-2fa/      ← history có thể tra lại
        2026-02-03_dark-mode/
      active/
        add-export-csv/          ← đang làm
  ```

---

<a name="6"></a>

## 📌 6. Những cạm bẫy tôi gặp (và cách tránh)

### ❌ Cạm bẫy 1: Spec quá mơ hồ ở bước propose

- ```markdown
  <!-- ❌ Spec kém — AI sẽ phải đoán quá nhiều -->
  ## Requirement: Dark Mode
  The app should support dark mode.

  <!-- ✅ Spec tốt hơn — có constraint, có tiêu chí rõ ràng -->
  ## Requirement: Dark Mode Support
  The system MUST provide a dark color scheme toggled by user preference.
  - Default follows OS-level prefers-color-scheme
  - User override stored in localStorage key "theme-preference"
  - MUST apply within one render cycle (no flash of wrong theme)
  - Exclusion: PDF export always uses light theme
  ```

- 💡 Rule of thumb: Nếu spec không có ít nhất một constraint cụ thể và một exclusion, có lẽ nó chưa đủ.

### ❌ Cạm bẫy 2: Để AI "sáng tạo" khi gặp vướng

- Trong quá trình `/opsx:apply`, AI sẽ đôi khi đề xuất sửa design vì gặp vấn đề kỹ thuật. Nếu bạn gật đầu chấp nhận inline mà không cập nhật `design.md`, spec và code bắt đầu drift.

- **Quy tắc**: Mọi thay đổi ý nghĩa với thiết kế → cập nhật `design.md` trước, rồi tiếp tục.

### ❌ Cạm bẫy 3: Không dùng `/opsx:verify` khi cần

- OpenSpec có lệnh:
  ```bash
  /opsx:verify
  ```

- Lệnh này kiểm tra code đã implement khớp với spec chưa — đặc biệt hữu ích sau khi có nhiều vòng sửa đổi hoặc khi refactor. Tôi hay bỏ qua bước này ban đầu và sau đó phát hiện một edge case trong spec hoàn toàn không được implement.

### ❌ Cạm bẫy 4: Dùng OpenSpec cho task quá nhỏ

- Không phải mọi thứ cần proposal + design + tasks. Sửa bug đơn giản, refactor nội bộ không thay đổi hành vi — không cần OpenSpec. Workflow này shine nhất với:

  - Tính năng mới có business logic
  - Thay đổi ảnh hưởng nhiều component
  - Thứ gì đó cần được giải thích cho team (hoặc AI session tương lai)

---

<a name="7"></a>

## Tổng kết — thay đổi tư duy trước, công cụ sau

- OpenSpec không phải viên đạn bạc làm AI coding tốt hơn tự động. Nhưng nó enforce một thay đổi tư duy quan trọng:

  > **Đầu tư 15 phút vào spec → tiết kiệm 2 giờ debug.**

- Hai insight lớn nhất sau khi dùng:

  - 1. **Spec là bộ nhớ dài hạn của AI.** AI không có memory xuyên session — nhưng `openspec/specs/` thì có. Khi mở session mới, thay vì giải thích lại context từ đầu, bạn chỉ cần: "Đọc `openspec/specs/` trước khi làm gì."

  - 2. **Spec là ngôn ngữ chung giữa người và AI.** Khi cả hai cùng đọc một tài liệu có cấu trúc, "hiểu sai ý" giảm đáng kể — không phải vì AI thông minh hơn, mà vì bạn đã loại bỏ sự mơ hồ từ trước.

- ⚠️ Tôi chưa kiểm chứng OpenSpec trong team lớn (5+ người) với nhiều concurrent changes — có thể có vấn đề về merge conflict trong `specs/` mà tôi chưa gặp.

### Bước tiếp theo

- Nếu bạn đang dùng bất kỳ AI coding assistant nào:

  ```bash
  npm install -g @fission-ai/openspec@latest
  cd your-project
  openspec init
  ```

- Bắt đầu với một tính năng nhỏ đang có trong backlog. Chạy `/opsx:propose` và đọc kỹ những gì AI draft ra — thường thì ngay ở bước đó bạn sẽ thấy những thứ mình chưa nghĩ đến.

## Đọc thêm

- [OpenSpec trên GitHub — Fission AI](https://github.com/Fission-AI/OpenSpec/)
- [Bài giới thiệu gốc trên vnROM](https://vnrom.net/2026/03/openspec-phuong-phap-spec-driven-development-giup-ai-coding-agent-viet-code-dung-ngay-tu-dau/)
