---
title: Khóa học Claude Code in Action
---

# Khóa học Claude Code in Action

- Hướng dẫn thực hành sử dụng Claude Code để tăng tốc quy trình phát triển phần mềm.

## Nội dung chính

[1. Coding Assistant là gì?](#1)

[2. Tổng quan về Claude Code](#2)

[3. Cài đặt và Xác thực](#3)

[4. Tệp cấu hình mã Claude cho dự án](#4)

[5. Claude Code Plan Mode](#5)

[6. Claude Code Context Window](#6)

[7. Claude Code Hooks](#7)

[8. Custom Commands (Lệnh tùy chỉnh)](#8)

[9. Subagent trong Claude Code](#9)

[10. Bảng giá Claude Code năm 2026](#10)

---

<a name="1"></a>

## 📌 1. Coding Assistant là gì?

**Coding Assistant** = công cụ sử dụng language model (mô hình ngôn ngữ) để viết code và hoàn thành các tác vụ phát triển phần mềm.

### Quy trình hoạt động cốt lõi:

1. Nhận tác vụ (ví dụ: sửa bug từ thông báo lỗi)
2. Language model thu thập context (đọc file, hiểu codebase)
3. Lập kế hoạch giải quyết vấn đề
4. Thực thi hành động (cập nhật file, chạy test)

### Giới hạn quan trọng:

- Language model **chỉ xử lý text đầu vào/đầu ra** — không thể trực tiếp đọc file, chạy lệnh, hay tương tác với hệ thống bên ngoài.

- 👉 Coding Assistant giải quyết vấn đề này bằng cách sử dụng hệ thống thông minh gọi là "**tool use**".

### Hệ thống Tool Use:

- Là phương thức cho phép language model thực hiện hành động thực tế.
- Quy trình:
  1. Bạn hỏi: `"Đoạn mã nào được viết trong tệp main.go?"`
  2. Assistant gắn thêm chỉ dẫn vào yêu cầu của người dùng. Chỉ dẫn quy định format phản hồi cho các hành động (ví dụ: "read file: main.go")
  3. Language model phản hồi: `"ReadFile: main.go"`
  4. Assistant thực thi hành động thực tế (đọc file) và gửi nội dung của nó trở lại language model.
  5. Language model cung cấp câu trả lời cuối cùng dựa trên nội dung tệp.

### Lợi thế của Claude:

- Khả năng tool use **vượt trội** so với các language model khác
- Hiểu rõ hơn các chức năng tool và kết hợp chúng cho tác vụ phức tạp
- Claude Code có tính **mở rộng cao** — dễ dàng thêm tool mới
- Bảo mật tốt hơn: tìm kiếm code trực tiếp thay vì đánh index gửi codebase lên server bên ngoài
  Claude Code đọc repo trực tiếp và chỉ đọc file cần thiết thay vì scan toàn bộ repo → không cần build knowledge index trước → không phải gửi toàn bộ codebase ra ngoài.

### Điểm mấu chốt:

- Mọi language model đều cần hệ thống tool use cho các tác vụ ngoài việc sinh text
- Chất lượng tool use **quyết định trực tiếp** hiệu quả của coding assistant
- Sức mạnh tool use của Claude giúp nó thích ứng tốt với các thay đổi trong phát triển phần mềm

---

<a name="2"></a>

## 📌 2. Tổng quan về Claude Code

Claude Code = AI assistant với khả năng dựa trên tool cho các tác vụ code.

**Các tool mặc định**: đọc/ghi file, thực thi lệnh, các thao tác phát triển cơ bản.

> **Nguyên tắc chính**: Claude Code = trợ lý linh hoạt, phát triển cùng nhu cầu team thông qua mở rộng tool thay vì chức năng cố định.

### Kiến trúc của Claude Code

- Claude Code hoạt động theo 3 lớp:

### 1️⃣ Lớp core

- Là context cuộc hội thoại chính của bạn.

- Context có giới hạn token, khi context đầy, Claude mất dấu các quyết định trước đó và chất lượng giảm.

- Lớp này tốn tiền theo token.

### 2️⃣ Lớp ủy thác

- Subagents (tối đa 10 song song) khởi chạy với context sạch, làm công việc tập trung, và trả về tóm tắt.

### 3️⃣ Lớp mở rộng

- Bao gồm:
  - MCP kết nối dịch vụ bên ngoài (database, GitHub, Sentry)
  - Hooks đảm bảo thực thi lệnh shell bất kể hành vi của model.
  - Skills mã hóa chuyên môn lĩnh vực mà Claude áp dụng tự động.
  - Plugins đóng gói tất cả những thứ này để phân phối.

---

<a name="3"></a>

## 📌 3. Cài đặt và Xác thực

### Các cách để truy cập Claude Code

- ❶ **Giao diện dòng lệnh (CLI)** — Trải nghiệm nguyên bản. Chạy trực tiếp trong terminal cùng với mã của bạn.
  - Đặc điểm: nhẹ, nhanh, phù hợp với những phiên lập trình chuyên sâu.

- ❷ **Ứng dụng desktop** — Một ứng dụng độc lập với cửa sổ và giao diện người dùng riêng.
  - Đặc điểm: giao diện gần gũi, nhưng ngốn bộ nhớ, có thể bị chậm.

- ❸ **Cloud (claude.ai)** — Truy cập qua trình duyệt, hoạt động mọi lúc mọi nơi, kể cả trên thiết bị di động.
  - Đặc điểm: dùng khi cần lên ý tưởng mà không có máy tính bên cạnh.

### Yêu cầu hệ thống

- Claude Code chạy trên macOS 10.15+, Ubuntu 20.04+/Debian 10+, và Windows 10+ thông qua WSL hoặc Git Bash.

- Hệ thống yêu cầu tối thiểu 4 GB RAM và kết nối internet.

### Điều kiện tiên quyết

- Đã cài đặt Node.js, npm.

### Chuẩn bị môi trường phát triển

- Với Windows thì cách phổ biến nhất hiện nay là dùng Windows Subsystem for Linux (WSL).

- Sau khi truy cập môi trường Linux WSL, tạo project folder / di chuyển vào thư mục Dự án có sẵn:

  ```bash
  mkdir my-ai-project
  ```

### Phương pháp cài đặt

- Cài đặt Claude Code thông qua npm:

  ```bash
  npm install -g @anthropic-ai/claude-code
  ```

### Khởi động Claude Code trong project

- Điều hướng vào thư mục dự án

  ```bash
  cd my-ai-project
  ```

- Khởi động Claude Code:

  ```bash
  claude
  ```

- Trong lần chạy đầu tiên, bạn sẽ cần:
  - Chọn chủ đề bạn thích (dark mode, light mode)
  - Xác thực

### Tùy chọn xác thực

- **Anthropic Console account (thanh toán API)**:
  - Kết nối trực tiếp với API của Anthropic thông qua _console.anthropic.com_.

- **Claude account with subscription**:
  - Sử dụng thông tin đăng nhập tài khoản _claude.ai_ của bạn.

---

<a name="4"></a>

## 📌 4. Tệp cấu hình mã Claude cho dự án

### `CLAUDE.md` để làm gì?

- `CLAUDE.md` quyết định AI hiểu project và cách làm việc như thế nào.
  - Mỗi lần dùng Claude Code CLI, Claude sẽ tự đọc file này làm context mặc định.

  - Nếu đã làm việc với GitHub Copilot thì `CLAUDE.md` giống như `copilot-instructions.md`.

- `CLAUDE.md` đặt ở root project để:
  - Cung cấp context dài hạn cho Claude

  - Định nghĩa coding standards

  - Mô tả architecture

  - Hướng dẫn workflow

- Hãy coi `CLAUDE.md` như một tài liệu sống. Commit nó trong Git để toàn bộ team đều được hưởng lợi. Khi các tiêu chuẩn lập trình thay đổi, hãy cập nhật tệp tin.

### Ba loại file `CLAUDE.md`:

| Loại              | Mô tả                            | Chia sẻ                   |
| ----------------- | -------------------------------- | ------------------------- |
| **Project level** | Dùng chung cho cả team           | Commit vào source control |
| **Local level**   | Hướng dẫn cá nhân                | Không commit              |
| **Machine level** | Hướng dẫn toàn cục cho mọi dự án | Không commit              |

### Bổ sung

- Khi Claude thực hiện các công việc như tạo, modify, chạy bash, v.v. nó sẽ dừng lại và liên tục yêu cầu quyền cho mọi thứ.
  - Nếu như bạn không muốn phải accept liên tục, hãy setting quyền trước cho Claude Code:
    - `settings.json`:

      ```json
      {
        "permissions": {
          "allow": ["Bash(*)", "Edit(*)", "Write(*)", "Read(*)"],
          "deny": []
        }
      }
      ```

  - Việc cấp truyền cho Claude có vẻ nguy hiểm. Nhưng theo như tham khảo kinh nghiệm sử dụng của người đi trước, họ chưa từng thấy Claude Code thực sự chạy một lệnh gây hại.
    - Mấu chốt là viêc bạn phải chấp nhận rủi ro. Và đó cũng là 1 phần lý do nên dùng Windows Subsystem for Linux (WSL) với máy Windows.

---

<a name="5"></a>

## 📌 5. Claude Code Plan Mode

- Claude Code có Chế độ Lập kế hoạch được thiết kế đặc biệt để yêu cầu Claude lập kế hoạch trước khi viết code.

### Các cách kích hoạt Plan Mode

- ❶ Viết rule trực tiếp trong `CLAUDE.md`
  - 👉 Giúp workflow cố định cho project.

- ❷ Trong Claude Code CLI có thể dùng lệnh `/plan`:

  ```
  /plan implement JWT authentication
  ```

  - 👉 Khi cần plan nhanh.

---

<a name="6"></a>

## 📌 6. Claude Code Context Window

- Quản lý context = **yếu tố then chốt** cho hiệu quả của Claude Code. Quá nhiều thông tin không liên quan sẽ **giảm hiệu suất**.

- Trong khi GitHub Copilot thực tế sử dụng khoảng 8.000 token thì với Claude Code là khoảng 200.000 token.

- Cách context của Claude Code hoạt động:
  - ➀ Đọc file `CLAUDE.md` của bạn
  - ➁ Quét cấu trúc dự án
  - ➂ Tải các tập tin theo yêu cầu khi cần thiết
  - ➃ Lưu giữ lịch sử cuộc trò chuyện

### Best practice:

- Do `CLAUDE.md` được tải vào mỗi phiên làm việc
  - 👉 Đừng đưa toàn bộ tài liệu vào đó. Hãy tập trung vào những nội dung chính và liên kết đến các tệp bên ngoài để biết thêm chi tiết.

- Ký hiệu `@`: Mention file cụ thể để đưa vào request
  - Cung cấp context có mục tiêu thay vì để Claude tự tìm kiếm

### Các kỹ thuật kiểm soát Context:

#### 🔸 Escape (nhấn 1 lần):

- Dừng Claude giữa phản hồi để điều hướng lại luồng hội thoại

#### 🔸 Double Escape (nhấn 2 lần):

- Tua lại hội thoại (conversation rewind)
- Hiển thị tất cả tin nhắn trước đó
- Cho phép quay lại điểm trước đó, giữ context liên quan, bỏ qua phần debug/trao đổi qua lại không cần thiết

#### 🔸 Compact Command:

- Tóm tắt toàn bộ lịch sử hội thoại nhưng **giữ lại kiến thức** Claude đã học về tác vụ hiện tại
- Sử dụng khi Claude đã tích lũy expertise nhưng hội thoại đã quá dài và lộn xộn

#### 🔸 Clear Command:

- Xóa toàn bộ lịch sử hội thoại (`/clear`), bắt đầu từ đầu
- Sử dụng `/clear` thường xuyên mỗi khi bắt đầu một cuộc trò chuyện mới, chuyển sang tác vụ **hoàn toàn không liên quan**

---

<a name="7"></a>

## 📌 7. Claude Code Hooks

- Claude Code Hooks cho phép thực thi các hành động tùy chỉnh tại các điểm cụ thể trong quy trình làm việc của Claude.

### Các Hooks phổ biến

- ❶ PreToolUse — Chạy trước khi Claude hoàn thành một hành động.

- ❷ PostToolUse — Chạy sau khi Claude hoàn thành một hành động.

- 👉 Hooks được kích hoạt khi Claude sử dụng tool nội bộ:
  - WriteFile
  - ReadFile
  - EditFile
  - Bash
  - Search

### Cách thiết lập Hooks

- Hook nhận thông tin chi tiết về những gì Claude vừa làm thông qua dữ liệu JSON, ví dụ:

  ```json
  {
    "hooks": {
      "PostToolUse": [
        {
          "tool": "WriteFile",
          "command": "./scripts/format_code.sh"
        }
      ]
    }
  }
  ```

- `format_code.sh`:

  ```bash
  #!/bin/bash

  echo "Formatting code..."
  npm run format
  ```

- 👉 Hook trên có nghĩa: Sau khi Claude hoàn thành việc ghi file thì chạy format code.

### Quản lý Hooks

- Trong Claude Code CLI, hooks được cấu hình ngay trong file settings của Claude:

  ```
  repo/
   ├─ .claude/
   │   ├─ settings.json
   │   ├─ CLAUDE.md
   │   └─ scripts/
   │        └─ format_code.sh
  ```

- Có thể dùng lệnh `/hooks` để mở giao diện quản lý hooks.

---

<a name="8"></a>

## 📌 8. Custom Commands (Lệnh tùy chỉnh)

- Custom Commands = lệnh tự động hóa do người dùng định nghĩa, truy cập bằng dấu `/` (forward slash).

- Bạn có thể tạo các lệnh tùy chỉnh để đơn giản hóa các tác vụ lặp đi lặp lại.

### Cấu hình:

| Thuộc tính    | Mô tả                                                 |
| ------------- | ----------------------------------------------------- |
| **Vị trí**    | Thư mục `.claude/commands/` trong project             |
| **Đặt tên**   | Tên file = tên command (ví dụ: `audit.md` → `/audit`) |
| **Kích hoạt** | Khởi động lại Claude Code sau khi tạo file command    |

### Cấu trúc:

- File markdown chứa hướng dẫn cho Claude thực thi
- **Arguments**: sử dụng placeholder `$arguments` trong nội dung command để nhận tham số lúc chạy
- **Loại argument**: bất kỳ chuỗi nào (đường dẫn file, mô tả, v.v.)
- Ví dụ `.claude/commands/test.md`:

  ```markdown
  Run all tests for the solution and report any failures.
  If tests fail, analyze the error and suggest fixes.

  $ARGUMENTS
  ```

  - 👉 Giờ có thể gõ `/test` Claude, và nó sẽ thực thi lời nhắc mà bạn đã định sẵn.

### Use cases:

- Các Custom Commands thường dùng:
  - `/pr` — Tạo yêu cầu kéo (pull request) với mô tả có cấu trúc.
  - `/review` — Review lại các thay đổi hiện tại để đảm bảo chất lượng mã.

---

<a name="9"></a>

## 📌 9. Subagent trong Claude Code

### Bối cảnh

- Claude có context window giới hạn.

- Nếu làm mọi thứ trong 1 agent thì context rất lớn, dễ rối và tốn cả token.

### Mục tiêu Subagent

- Subagent tạo ra để phục vụ 2 mục tiêu chính:
  - Chia nhỏ nhiệm vụ phức tạp
  - Cô lập context để Claude suy nghĩ rõ ràng hơn

  ```
  Main agent
  │
  ├─ Subagent A → đọc module A
  ├─ Subagent B → đọc module B
  └─ Subagent C → đọc module C
  ```

### Cách Subagent hoạt động

- Khi bạn đưa ra một yêu cầu, Claude Code phân tích độ phức tạp và quyết định có cần uỷ thác cho subagent hay không.

- Nếu Claude nhận thấy một subagent phù hợp, nó sử dụng Task tool để invoke subagent đó.

- Subagent được invoke sẽ nhận một context mới, bao gồm system prompt đã được định nghĩa và task cần thực hiện. Từ đây, subagent hoạt động độc lập với context riêng của nó.

- Khi hoàn thành, subagent tóm tắt kết quả và trả về cho conversation chính.

- Điểm quan trọng cần nhớ: subagent không thể gọi subagent khác.

- Claude Code đi kèm với một số subagents được tối ưu cho những tác vụ phổ biến. Bạn không cần tạo hay cấu hình gì để sử dụng chúng:
  - Explore là subagent dành cho việc khám phá codebase.
  - Plan được sử dụng trong plan mode của Claude Code.
  - General-purpose là subagent đa năng cho những tác vụ phức tạp đòi hỏi cả exploration lẫn action.

### Custom Subagent

- Custom subagents được định nghĩa trong các file Markdown, đặt trong thư mục `.claude/agents/`.

- Cấu trúc cơ bản của một file subagent:

  ```markdown
  ---
  name: code-reviewer
  description: Expert code reviewer focusing on security and best practices. Use proactively 	after code changes.
  tools: Read, Grep, Glob
  model: sonnet
  ---

  You are a senior code reviewer with expertise in security and software architecture.
  When reviewing code:

  1. First understand the context and purpose of the changes
  2. Analyze for security vulnerabilities
  3. Check for performance implications
  4. Evaluate code quality and maintainability
  5. Provide specific, actionable feedback
     Always be constructive and explain the reasoning behind your suggestions.
  ```

  - `name` (bắt buộc): tên định danh của subagent, sử dụng để reference khi cần.
  - `description` (bắt buộc): subagent này làm gì, và khi nào nên sử dụng nó.
  - `tools` (tùy chọn): danh sách tools mà subagent được phép sử dụng.
  - `model` (tùy chọn): Override model được sử dụng cho subagent.

### Gọi và quản lý Subagents

- ❶ Kích hoạt tự động
  - Claude tự động decide khi nào uỷ thác task cho subagent dựa trên khớp description và độ phức tạp của task. Bạn chỉ cần cấu hình subagents.

- ❷ Gọi trực tiếp
  - Khi bạn muốn chắc chắn một subagent cụ thể được sử dụng, thì hãy gọi tên nó trong prompt:

    ```
    Use the security-auditor agent to check the authentication module
    Have the test-runner agent fix the failing tests in user service
    Ask the database-architect to review this migration script
    ```

- ❸ Resume subagent
  - Nếu subagent đã làm việc và bạn muốn nó continue thay vì làm mới thì mô tả trong prompt:

    ```
    Continue the code-reviewer agent's work
    Resume the test-runner from where it left off
    ```

- ❹ Kiểm tra subagents available
  - Hỏi Claude trực tiếp hoặc sử dụng `/agents` command.

---

<a name="10"></a>

## 📌 10. Bảng giá Claude Code năm 2026

| Kế hoạch      | Giá          | Truy cập Claude Code    | Cách sử dụng          |
| ------------- | ------------ | ----------------------- | --------------------- |
| Miễn phí      | $0           | Không có quyền truy cập | -                     |
| Chuyên nghiệp | 20$ / tháng  | Yes                     | ~45 tin nhắn / 5 giờ  |
| Tối đa 5 lần  | 100$ / tháng | Yes                     | ~225 tin nhắn / 5 giờ |
| Tối đa 20 lần | 200$ / tháng | Yes                     | ~900 tin nhắn / 5 giờ |

- Hãy bắt đầu với gói Pro với giá 20$ / tháng nếu bạn là lập trình viên cá nhân.

---

<a name="11"></a>

## 📌 11. Mở rộng Claude Code với MCP Servers

**MCP servers** = các công cụ bên ngoài mở rộng khả năng Claude Code, chạy trên local hoặc remote.

### Cài đặt:

```bash
claude mcp add [name] [start-command]
```

### Ví dụ:

```bash
claude mcp add playwright npx @playwright/mcp@latest
```

### Quản lý quyền:

- Lần đầu sử dụng tool cần phê duyệt
- Tự động phê duyệt bằng cách thêm `"MCP__[servername]"` vào mảng allow trong `settings.local.json`:

  ```json
  {
    "permissions": {
      "allow": ["mcp__playwright"],
      "deny": []
    }
  }
  ```

### Ví dụ thực tế — Playwright MCP Server:

Playwright MCP server = server phổ biến cho phép Claude điều khiển trình duyệt để tự động hóa web.

**Quy trình minh họa**:

1. Claude dùng Playwright truy cập `localhost:3000`
2. Sinh UI component
3. Phân tích chất lượng styling
4. Tự động cập nhật prompt sinh giao diện dựa trên phản hồi trực quan
5. **Kết quả**: styling component được cải thiện đáng kể

### Lợi ích chính:

- MCP servers cho phép Claude thực hiện tác vụ phức tạp nhiều bước liên quan đến hệ thống bên ngoài
- Mở rộng **vượt xa** việc chỉnh sửa code — hướng tới **tự động hóa phát triển toàn diện**
