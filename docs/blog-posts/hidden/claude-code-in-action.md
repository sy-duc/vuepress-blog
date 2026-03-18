---
title: Khóa học Claude Code in Action
---

# Khóa học Claude Code in Action

- Hướng dẫn thực hành sử dụng Claude Code để tăng tốc quy trình phát triển phần mềm.

- Bao gồm: 15 bài giảng video, 1 giờ video, 1 bài kiểm tra, giấy chứng nhận hoàn thành:
  - ✔️ Học cách Claude Code đọc tệp
  - ✔️ Thực thi lện
  - ✔️ Sửa đổi mã thông qua hệ thống công cụ của Claude Code
  - ✔️ Kỹ thuật quản lý context
  - ✔️ Tạo custom workflows
  - ✔️ Mở rộng Claude Code bằng các hooks và tích hợp với các dịch vụ bên ngoài.

- 🎯 Mục tiêu:
  - Sử dụng các core tools của Claude Code để thao tác file, thực thi lệnh  (command) và phân tích mã.

  - Quản lý context hiệu quả bằng cách sử dụng `/init`, các file `Claude.md` và @   mentions.

  - Kiểm soát luồng hội thoại bằng nhiều phím tắt và lệnh khác nhau.

  - Kích hoạt Chế độ Lập kế hoạch (Pland Mode) và Chế độ Tư duy (Thinking Mode)   cho các tác vụ phức tạp đòi hỏi phân tích sâu hơn.

  - Tạo các lệnh tùy chỉnh (custom command) để tự động hóa các quy trình phát   triển lặp đi lặp lại.

  - Mở rộng khả năng của Claude Code với MCP servers để bổ sung tính năng tự động   hóa trình duyệt và các chức năng khác.

  - Thiết lập tích hợp GitHub để tự động review Pull Request và xử lý sự cố.

  - Viết các hooks để thêm các hành vi bổ sung vào Claude Code.

## Nội dung chính

[1. Coding Assistant là gì?](#1)

[2. Claude Code trong thực tế](#2)

[3. Quản lý Context](#3)

[4. Thực hiện thay đổi code](#4)

[5. Kiểm soát Context](#5)

[6. Custom Commands](#6)

[7. Mở rộng với MCP Servers](#7)

[8. Tích hợp GitHub](#8)

[9. Hooks - Giới thiệu & Định nghĩa](#9)

[10. Triển khai Hook](#10)

[11. Hooks hữu ích trong thực tế](#11)

[12. Claude Code SDK](#12)

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

## 📌 2. Claude Code trong thực tế

Claude Code = AI assistant với khả năng dựa trên tool cho các tác vụ code.

**Các tool mặc định**: đọc/ghi file, thực thi lệnh, các thao tác phát triển cơ bản.

### Demo tối ưu hiệu suất:
- Claude phân tích thư viện **Chalk** (package JS có lượt tải nhiều thứ 5, 429 triệu lượt tải/tuần)
- Sử dụng benchmark, profiling tools, tạo todo list, xác định bottleneck, triển khai fix
- **Kết quả**: cải thiện throughput **3.9 lần**

### Demo phân tích dữ liệu:
- Claude thực hiện phân tích churn trên dữ liệu CSV của nền tảng streaming video bằng **Jupyter notebooks**
- Chạy code cells lặp đi lặp lại, xem kết quả, tùy chỉnh phân tích tiếp theo dựa trên phát hiện

### Khả năng mở rộng Tool:
- Claude Code chấp nhận bộ tool mới
- Ví dụ: sử dụng **Playwright MCP server** để tự động hóa trình duyệt
- Claude mở trình duyệt, chụp screenshot, cập nhật UI styling, lặp lại cải tiến thiết kế

### Tích hợp GitHub:
- Claude Code chạy trong **GitHub Actions**, được kích hoạt bởi pull request/issues
- Nhận các tool đặc thù GitHub (comments, commits, tạo PR)

### Ví dụ review hạ tầng:
- Hạ tầng AWS được định nghĩa bằng Terraform với DynamoDB table và S3 bucket chia sẻ với đối tác bên ngoài
- Developer thêm email người dùng vào output của Lambda function
- Claude Code **tự động phát hiện rủi ro lộ PII** (Personally Identifiable Information) trong PR review bằng cách phân tích luồng hạ tầng và nhận diện việc chia sẻ dữ liệu ra bên ngoài

> **Nguyên tắc chính**: Claude Code = trợ lý linh hoạt, phát triển cùng nhu cầu team thông qua mở rộng tool thay vì chức năng cố định.

---

<a name="3"></a>

## 📌 3. Quản lý Context

Quản lý context = **yếu tố then chốt** cho hiệu quả của Claude Code. Quá nhiều thông tin không liên quan sẽ **giảm hiệu suất**.

### Lệnh `/init`:
- Phân tích toàn bộ codebase lần đầu chạy
- Tạo file `CLAUDE.md` chứa tóm tắt dự án, kiến trúc, các file quan trọng
- Nội dung file được đính kèm trong **mọi request**

- ⚠️ Quan trọng:
  - `/init` KHÔNG đưa toàn bộ code vào context
    - Nếu project có 5000 file thì Claude KHÔNG gửi 5000 file lên model.
    - Nó scan cấu trúc repo → tóm tắt → lưu knowledge vào `CLAUDE.md`
  
  - Chỉ khi yêu cầu Claude giải thích 1 flow cụ thể thì nó mới search repo và đọc file liên quan.

### Ba loại file Claude.md:

| Loại | Mô tả | Chia sẻ |
|------|--------|---------|
| **Project level** | Dùng chung cho cả team | Commit vào source control |
| **Local level** | Hướng dẫn cá nhân | Không commit |
| **Machine level** | Hướng dẫn toàn cục cho mọi dự án | Không commit |

### Memory mode (ký hiệu `#`):
- Chỉnh sửa file `CLAUDE.md` một cách thông minh bằng yêu cầu ngôn ngữ tự nhiên

### Ký hiệu `@`:
- Mention file cụ thể để đưa vào request
- Cung cấp context có mục tiêu thay vì để Claude tự tìm kiếm

### Best practice:
- Tham chiếu các file quan trọng (như database schema) trong `CLAUDE.md` để chúng luôn có sẵn làm context
- **Mục tiêu**: cung cấp **vừa đủ** thông tin liên quan để Claude hoàn thành tác vụ hiệu quả

---

<a name="4"></a>

## 📌 4. Thực hiện thay đổi code

### Tích hợp Screenshot:
- `Ctrl + V` dán screenshot để Claude hiểu các phần tử UI cụ thể cần sửa đổi
- ⚠️ Trên macOS dùng `Control-V` (không phải `Command-V`)

### Các chế độ tăng hiệu suất:

#### 🗺️ Plan Mode (Chế độ Lập kế hoạch):
- Kích hoạt: **Shift + Tab** hai lần
- Claude nghiên cứu nhiều file hơn và tạo kế hoạch triển khai chi tiết trước khi thực thi
- Xử lý **chiều rộng** — hữu ích cho tác vụ nhiều bước cần hiểu rộng codebase

#### 🧠 Thinking Mode (Chế độ Tư duy):
- Kích hoạt: cụm từ như **"Ultra think"**
- Cung cấp cho Claude ngân sách suy luận mở rộng cho logic phức tạp
- Xử lý **chiều sâu** — hữu ích cho logic phức tạp hoặc debug vấn đề cụ thể

#### Kết hợp hai chế độ:
- Có thể kết hợp cho tác vụ phức tạp
- ⚠️ Cả hai đều **tiêu tốn thêm token** (cân nhắc chi phí)

### Tích hợp Git:
- Claude Code có thể stage/commit thay đổi và viết commit message mô tả chi tiết

### Workflow điển hình:
```
Screenshot vùng có vấn đề
    ↓
Dán bằng Ctrl + V
    ↓
Mô tả thay đổi mong muốn
    ↓
(Tùy chọn) Bật Plan/Thinking mode cho tác vụ phức tạp
    ↓
Review và chấp nhận triển khai
```

---

<a name="5"></a>

## 📌 5. Kiểm soát Context

### Các kỹ thuật kiểm soát:

#### 🔸 Escape (nhấn 1 lần):
- Dừng Claude giữa phản hồi để điều hướng lại luồng hội thoại

#### 🔸 Escape + Memory:
- Dừng Claude, thêm memory về lỗi lặp lại bằng phím tắt `#`
- **Ngăn chặn** sai sót tương tự trong tương lai

#### 🔸 Double Escape (nhấn 2 lần):
- Tua lại hội thoại (conversation rewind)
- Hiển thị tất cả tin nhắn trước đó
- Cho phép quay lại điểm trước đó, giữ context liên quan, bỏ qua phần debug/trao đổi qua lại không cần thiết

#### 🔸 Compact Command:
- Tóm tắt toàn bộ lịch sử hội thoại nhưng **giữ lại kiến thức** Claude đã học về tác vụ hiện tại
- Sử dụng khi Claude đã tích lũy expertise nhưng hội thoại đã quá dài và lộn xộn

#### 🔸 Clear Command:
- Xóa toàn bộ lịch sử hội thoại, bắt đầu từ đầu
- Sử dụng khi chuyển sang tác vụ **hoàn toàn không liên quan**

### Lợi ích:
- Duy trì sự tập trung
- Giảm context gây nhiễu
- Bảo toàn kiến thức liên quan
- Ngăn lỗi lặp lại
- Hiệu quả nhất cho hội thoại dài và chuyển đổi tác vụ

---

<a name="6"></a>

## 📌 6. Custom Commands (Lệnh tùy chỉnh)

Custom Commands = lệnh tự động hóa do người dùng định nghĩa, truy cập bằng dấu `/` (forward slash).

### Cấu hình:

| Thuộc tính | Mô tả |
|------------|--------|
| **Vị trí** | Thư mục `.claude/commands/` trong project |
| **Đặt tên** | Tên file = tên command (ví dụ: `audit.md` → `/audit`) |
| **Kích hoạt** | Khởi động lại Claude Code sau khi tạo file command |

### Cấu trúc:
- File markdown chứa hướng dẫn cho Claude thực thi
- **Arguments**: sử dụng placeholder `$arguments` trong nội dung command để nhận tham số lúc chạy
- **Loại argument**: bất kỳ chuỗi nào (đường dẫn file, mô tả, v.v.)

### Use cases:
- Tự động kiểm tra dependency
- Sinh test
- Sửa lỗi bảo mật
- Bất kỳ tác vụ lặp đi lặp lại nào

### Cách sử dụng:
```
/commandname [argument]
```
Ví dụ: `/audit src/utils/` — chạy command audit trên thư mục `src/utils/`.

---

<a name="7"></a>

## 📌 7. Mở rộng Claude Code với MCP Servers

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

---

<a name="8"></a>

## 📌 8. Tích hợp GitHub

Claude Code GitHub Integration = tích hợp chính thức cho phép Claude chạy bên trong **GitHub Actions**.

### Quy trình cài đặt:
1. Chạy lệnh `/install-github-app`
2. Cài đặt Claude Code app trên GitHub
3. Thêm API key
4. Pull request tự động được tạo với 2 GitHub Actions

### Hai hành động mặc định:

| Action | Mô tả |
|--------|--------|
| **Mention support** | `@claude` trong issues/PRs để giao tác vụ |
| **PR review** | Tự động review code trên các PR mới |

### Tùy chỉnh:
- Actions có thể tùy chỉnh qua config files trong thư mục `.github/workflows`
- **Custom instructions**: context/hướng dẫn trực tiếp cho Claude
- **Tích hợp MCP server**: cho phép Claude truy cập công cụ bên ngoài (ví dụ: Playwright cho browser automation)

### Yêu cầu về quyền:
- Phải liệt kê **rõ ràng** tất cả quyền cho Claude Code trong actions
- Các tool của MCP server cần liệt kê từng quyền riêng lẻ (không có cách tắt)

### Ví dụ thực tế:
- Tích hợp Playwright MCP server cho browser testing
- Khởi động development server trước khi Claude chạy
- Claude truy cập app trong trình duyệt, kiểm tra chức năng, tạo checklist
- Cung cấp automated testing và xác minh issue

---

<a name="9"></a>

## 📌 9. Hooks - Giới thiệu & Định nghĩa

**Hooks** = các lệnh chạy **trước/sau** khi Claude thực thi tool.

### Hai loại Hook:

| Loại | Thời điểm | Khả năng chặn |
|------|-----------|----------------|
| **Pre-tool use** | Trước khi tool thực thi | ✅ Có thể chặn |
| **Post-tool use** | Sau khi tool thực thi | ❌ Không thể chặn |

### Cấu hình:
- Thêm vào file settings của Claude (global/project/personal) bằng cách chỉnh sửa thủ công hoặc lệnh `/hooks`

### Cấu trúc Hook:
- **Matcher**: chỉ định tool nào sẽ được giám sát
- **Command**: lệnh sẽ thực thi khi tool khớp matcher

### Quy trình hoạt động:
1. Chọn loại hook (pre vs post)
2. Xác định tên tool cần giám sát
3. Viết command nhận dữ liệu tool call qua **stdin dưới dạng JSON**
4. Parse JSON chứa `tool_name` và `input` parameters
5. Exit với code phù hợp

### Exit Codes:

| Code | Ý nghĩa |
|------|---------|
| **Exit 0** | Cho phép tool call tiếp tục |
| **Exit 2** | Chặn tool call (chỉ pre-tool use) |

- Output ghi vào **stderr** = thông điệp phản hồi gửi cho Claude khi chặn

### Cấu trúc dữ liệu Tool Call:
```json
{
  "tool_name": "read",
  "input": {
    "file_path": "/path/to/file"
  }
}
```

### Use cases:
- Auto-format file sau khi tạo
- Chạy test sau khi chỉnh sửa
- Chặn truy cập file nhạy cảm
- Kiểm tra chất lượng code
- Type checking

---

<a name="10"></a>

## 📌 10. Triển khai Hook

### Ví dụ thực tế: Chặn đọc file `.env`

#### Cấu hình (settings.local.json):
```json
{
  "hooks": {
    "preToolUse": [
      {
        "matcher": "read|grep",
        "command": "node ./hooks/read_hook.js"
      }
    ]
  }
}
```

#### Triển khai Hook Script (`read_hook.js`):

**Quy trình**:
1. Hook nhận JSON object qua stdin chứa: session ID, tool name, tool input, file path
2. Logic: nếu file path chứa `.env` → exit code 2 + log error ra stderr
3. Error output gửi đến stderr để Claude nhận phản hồi
4. Exit code 2 = chặn thao tác

#### Lưu ý quan trọng:
- ⚠️ **Phải khởi động lại Claude** sau khi thay đổi hook
- `console.error()` gửi phản hồi cho Claude qua stderr
- Hook hoạt động cho cả tool `read` và `grep`
- Kiểm tra đường dẫn file: `tool_input.path` với xử lý fallback

#### Kết quả kiểm thử:
- ✅ Chặn thành công truy cập file `.env`
- ✅ Claude nhận diện được việc bị chặn bởi read hook
- ✅ Hoạt động cho cả thao tác read và grep

---

<a name="11"></a>

## 📌 11. Hooks hữu ích trong thực tế

**Vấn đề chung**: Claude Code thường bỏ sót lỗi type và tạo code trùng lặp, đặc biệt trong dự án lớn.

### Hook 1: TypeScript Type Checker

| Thuộc tính | Mô tả |
|------------|--------|
| **Mục đích** | Phát hiện lỗi type ngay sau khi chỉnh sửa file |
| **Loại** | Post-tool-use hook |
| **Lệnh** | `tsc --no-emit` sau khi thay đổi file TypeScript |

**Quy trình**:
```
Phát hiện lỗi type
    ↓
Feed lỗi lại cho Claude
    ↓
Claude tự động sửa các call sites
```

- **Vấn đề giải quyết**: Claude sửa function signature nhưng không cập nhật call sites, gây lỗi type
- **Khả năng mở rộng**: Hoạt động cho bất kỳ ngôn ngữ typed language nào có type checker, hoặc dùng test cho untyped languages

### Hook 2: Ngăn chặn Code trùng lặp

| Thuộc tính | Mô tả |
|------------|--------|
| **Vấn đề** | Claude tạo query/function mới thay vì tái sử dụng code có sẵn |
| **Nguyên nhân** | Tác vụ tập trung hoạt động tốt, nhưng tác vụ phức tạp/wrapped khiến Claude mất focus |
| **Loại** | Post-tool-use hook |

**Quy trình**:
1. Phát hiện chỉnh sửa trong thư mục được giám sát (ví dụ: `queries/`)
2. Khởi chạy **Claude instance riêng** qua TypeScript SDK
3. So sánh code mới với code hiện có
4. Nếu phát hiện trùng lặp → exit code 2 + phản hồi
5. Claude gốc nhận phản hồi và tái sử dụng code có sẵn

**Đánh đổi**: Thêm thời gian/chi phí ↔ Codebase sạch hơn, ít trùng lặp

**Khuyến nghị**: Chỉ giám sát các **thư mục quan trọng** để giảm thiểu overhead.

> **Kết luận**: Hooks = vòng phản hồi tự động bắt các điểm yếu phổ biến của Claude Code (lỗi type, trùng code) bằng cách chạy kiểm tra bổ sung và feed kết quả lại cho Claude để tự sửa.

---

<a name="12"></a>

## 📌 12. Claude Code SDK

**Claude Code SDK** = giao diện lập trình cho Claude Code với CLI, TypeScript và Python libraries. Chứa cùng bộ tool như phiên bản terminal.

### Mục đích chính:
- Tích hợp vào pipeline/workflow lớn hơn để thêm trí tuệ vào quy trình hiện có

### Đặc điểm quan trọng:

| Thuộc tính | Mô tả |
|------------|--------|
| **Quyền mặc định** | Chỉ đọc (files, directories, grep) |
| **Quyền ghi** | Phải cấu hình thủ công qua `options.allowTools` hoặc settings trong thư mục `.claude` |
| **Output** | Hiển thị raw conversation giữa Claude Code local và language model |

### Pattern triển khai chính:
- Thêm quyền ghi bằng cách chỉ định tools như `"edit"` trong `options.allowTools` khi gọi query

### Ứng dụng phù hợp nhất:
- Helper commands
- Scripts
- Hooks trong các project hiện có
- **Không phải** công cụ standalone

### Format output:
- Tin nhắn hội thoại (conversational messages) với phản hồi cuối cùng từ Claude là tin nhắn cuối

---

## 📝 Tổng kết

Khóa học Claude Code in Action cung cấp kiến thức toàn diện từ cơ bản đến nâng cao:

| Phần | Nội dung chính |
|------|----------------|
| **Nền tảng** | Hiểu cơ chế tool use, cách coding assistant hoạt động |
| **Thực hành** | Quản lý context, thực hiện thay đổi, kiểm soát hội thoại |
| **Tùy chỉnh** | Custom commands, MCP servers, GitHub integration |
| **Nâng cao** | Hooks (pre/post), SDK cho tích hợp pipeline |

**Nguyên tắc xuyên suốt**: Claude Code là trợ lý **linh hoạt và mở rộng được** — phát triển cùng nhu cầu team thông qua việc bổ sung tool, hook và tích hợp thay vì bị giới hạn bởi chức năng cố định.
