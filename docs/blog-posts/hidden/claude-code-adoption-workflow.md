---
title: "Claude Code Adoption Workflow — Từ Training Đến Dự Án Thật"
---

# Claude Code Adoption Workflow — Từ Training Đến Dự Án Thật

- Một quy trình áp dụng chung cho 3 tình huống: cá nhân làm dự án mới, team làm dự án mới, cá nhân vào dự án có sẵn.

- Dành cho DEV đã nắm cơ bản Claude Code — không giải thích lại khái niệm.

## Mục lục

[1. Quy trình tổng quan](#1)

[2. Phase 0: Chuẩn Bị Môi Trường Làm Việc](#2)

[3. Phase 1: Onboarding — Dạy Claude Code Hiểu Dự Án](#3)

[4. Phase 2: Thiết Lập Hàng Rào Chất Lượng](#4)

[5. Phase 3: Chạy Thật — Workflow Hằng Ngày](#5)

[6. Bài Toán Của Bạn Cần Gì? — Khi Nào Cần Tool Mở Rộng](#6)

[7. Phase 4: Tối Ưu Liên Tục](#7)

---

<a name="1"></a>

## 📌 1. Quy trình tổng quan

```
Phase 0: Chuẩn bị môi trường (config cơ bản)
    ↓
Phase 1: Onboarding (CLAUDE.md + docs)
    ↓
Phase 2: Hàng rào chất lượng (hooks + permissions + tests)
    ↓
Phase 3: Chạy thật (workflow hằng ngày)
    ↓                         ┌────────────────────────────────┐
    ├── Gặp pain point? ────▶ │ Đánh giá: cần tool mở rộng?    │
    │                         │ OpenSpec / Superpowers / Beads │
    │                         └────────────────────────────────┘
    ↓
Phase 4: Tối ưu liên tục
```

**Nguyên tắc quan trọng**: Flow chính chỉ dùng Claude Code native. Tool mở rộng là **thuốc cho bệnh cụ thể** — không uống phòng.

---

<a name="2"></a>

## 📌 2. Phase 0: Chuẩn Bị Môi Trường Làm Việc

Mục tiêu: có một workspace sẵn sàng trước khi Claude Code chạm vào code.

### Cấu trúc config cần tạo

```
project-root/
├── CLAUDE.md                        # Bản onboarding cho Claude Code
├── .claude/
│   ├── settings.json                # Config chung (commit vào git)
│   ├── settings.local.json          # Config cá nhân (gitignore)
│   ├── agents/                      # Custom subagents
│   ├── skills/                      # Custom skills
│   └── hooks/                       # Hook scripts
├── .mcp.json                        # MCP servers (nếu cần)
└── docs/                            # Tài liệu chi tiết
    ├── architecture.md
    ├── conventions.md
    └── ...
```

### Bước thực hiện

**1️⃣ Khởi tạo CLAUDE.md**

- **Dự án mới**: Chạy `/init` rồi chỉnh tay. Đừng để file auto-gen nguyên — nó chỉ là điểm khởi đầu.
- **Dự án có sẵn**: Đây là bước quan trọng nhất. Đừng chạy `/init` rồi xong — hãy dành 30 phút viết tay.

**2️⃣ Tạo `.claude/settings.json`**

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test *)",
      "Bash(git diff *)",
      "Bash(git log *)",
      "Bash(git status)"
    ],
    "deny": [
      "Bash(git push *)",
      "Bash(rm -rf *)",
      "Read(.env*)",
      "Read(**/secrets/**)"
    ]
  }
}
```

🎯 Nguyên tắc: **allow những gì an toàn và hay dùng, deny những gì nguy hiểm.** Phần còn lại Claude Code sẽ hỏi bạn mỗi lần.

**3️⃣ Với team — thống nhất config trước khi code**

> Phần này chỉ áp dụng khi làm việc nhóm.

| File                          | Commit vào git? | Ai quản lý?                  |
| ----------------------------- | :-------------: | ---------------------------- |
| `CLAUDE.md`                   |       ✅        | Cả team cùng maintain        |
| `.claude/settings.json`       |       ✅        | Tech lead setup, team review |
| `.claude/settings.local.json` |       ❌        | Mỗi cá nhân tùy chỉnh        |
| `.claude/agents/`             |       ✅        | Team đóng góp                |
| `~/.claude/CLAUDE.md`         |        —        | Cá nhân, áp dụng mọi dự án   |

---

<a name="3"></a>

## 📌 3. Phase 1: Onboarding — Dạy Claude Code Hiểu Dự Án

Đây là phase tạo ra sự khác biệt lớn nhất giữa "dùng Claude Code hiệu quả" và "dùng Claude Code rồi sửa lại".

### CLAUDE.md — Viết cái gì, không viết cái gì

CLAUDE.md là **bản onboarding cho nhân sự mới**, không phải documentation đầy đủ.

**✅ Nên có trong CLAUDE.md:**

- Lệnh build / test / lint mà Claude Code không thể đoán
  - Ví dụ: `bun test` thay vì `npm test`, `make build` thay vì tiêu chuẩn
- Code convention **khác với mặc định**
  - Ví dụ: "Dùng named export, không dùng default export"
- Quy ước git: branch naming, commit message format
- Architectural decisions quan trọng
  - Ví dụ: "API layer dùng tRPC, không viết REST endpoint"
- Gotcha / điều không hiển nhiên
  - Ví dụ: "File `config.ts` được auto-gen, không sửa tay"

**❌ Không nên có trong CLAUDE.md:**

| Đừng viết                                         | Lý do                        | Thay vào đó                                     |
| ------------------------------------------------- | ---------------------------- | ----------------------------------------------- |
| Convention Claude đã biết (PEP8, ESLint defaults) | Thừa, tốn context            | Bỏ qua                                          |
| Giải thích chi tiết kiến trúc                     | Quá dài, Claude sẽ bỏ qua    | Đặt trong `docs/`, dùng `@docs/architecture.md` |
| Hướng dẫn từng file                               | Thay đổi liên tục            | Claude tự đọc code                              |
| "Viết code sạch", "Đặt tên rõ ràng"               | Hiển nhiên                   | Không cần                                       |
| Rule có thể enforce bằng linter                   | Dùng linter đáng tin hơn LLM | ESLint/Prettier + hook                          |

### Quy tắc vàng cho CLAUDE.md

> Với mỗi dòng, tự hỏi: **"Nếu xóa dòng này, Claude Code có làm sai không?"**
>
> Nếu không → xóa.

**Kích thước lý tưởng**: dưới 200 dòng. LLM tuân thủ tốt khoảng 150–200 instruction, mà system prompt của Claude Code đã chiếm ~50.

### CLAUDE.md vs docs/ — Hai tầng thông tin

```
┌──────────────────────────────────────────────────────────────────┐
│                        CLAUDE.md (< 200 dòng)                    │
│  Luôn load │ Rule ngắn │ "Làm gì, đừng làm gì"                  │
│  VD: "Dùng bun", "Named exports only", "Không sửa /core/legacy" │
├──────────────────────────────────────────────────────────────────┤
│                        docs/ (chi tiết)                          │
│  Load khi cần (@import) │ Context, giải thích, why               │
│  VD: architecture.md, conventions.md, decisions.md               │
└──────────────────────────────────────────────────────────────────┘
```

💡 **Pattern: Progressive Disclosure**

Trong CLAUDE.md, chỉ đặt pointer — chi tiết nằm trong docs:

```markdown
# Architecture

- Monorepo with 3 packages. Details: @docs/architecture.md

# Testing

- Run `bun test` for unit tests
- Integration test guide: @docs/testing.md

# Conventions

- See @docs/conventions.md for full code style guide
- IMPORTANT: Always use named exports, never default exports
```

Claude Code sẽ tự load file khi cần, thay vì nhồi hết vào context ngay từ đầu.

### Dự án có sẵn — Onboarding sâu hơn

> Phần này dành riêng cho trường hợp vào dự án đã có code.

Khi join dự án có sẵn, Claude Code cần hiểu thêm:

- **Lịch sử quyết định**: Tại sao chọn tech stack này? Có constraint nào?
  - Ghi vào `docs/decisions.md`, tham chiếu từ CLAUDE.md
- **Vùng nguy hiểm**: File/module nào không được sửa tự ý? Legacy code nào fragile?
  - Ghi thẳng vào CLAUDE.md: `"IMPORTANT: Không sửa files trong /core/legacy/ mà không hỏi trước"`
- **Existing patterns**: Codebase đang dùng pattern gì?
  - Claude Code tự đọc code, nhưng cần confirm trong CLAUDE.md nếu pattern không hiển nhiên

⚠️ **Gotcha lớn nhất với dự án có sẵn**: Bạn chạy `/init`, Claude Code tạo CLAUDE.md tự động, bạn nghĩ "ổn rồi". Nhưng file auto-gen thường thiếu context quan trọng — đặc biệt là những quyết định kiến trúc mà chỉ team biết.

---

<a name="4"></a>

## 📌 4. Phase 2: Thiết Lập Hàng Rào Chất Lượng

Nhân sự mới cần guardrails. Claude Code cũng vậy.

### Tại sao không tin CLAUDE.md 100%

Đây là điều nhiều người mới không lường trước:

> **Claude Code sẽ không tuân thủ CLAUDE.md 100% thời gian** — đặc biệt khi context dài.

Khi context đầy, LLM có xu hướng "quên" instruction trong system prompt. Đây không phải bug — đây là giới hạn kỹ thuật. Vì vậy:

- **Rule quan trọng** → enforce bằng **hook** (deterministic, không bao giờ quên)
- **Rule "nice to have"** → ghi trong CLAUDE.md (best-effort)
- **Rule format/style** → enforce bằng **linter** (nhanh, chính xác)

### Ba lớp phòng vệ

```
┌─────────────────────────────────────────┐
│  Lớp 1: Prevention (CLAUDE.md)          │  ← "Đừng làm X"
│  Lớp 2: Runtime (Hooks)                 │  ← Chặn/sửa real-time
│  Lớp 3: Post-check (CI/CD, Review)      │  ← Bắt lỗi sau cùng
└─────────────────────────────────────────┘
```

### Hook cần thiết khi bắt đầu

Không cần setup hết ngay — bắt đầu với 3 hook cơ bản:

**1️⃣ Auto-lint sau mỗi lần edit file**

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/lint-fix.sh"
          }
        ]
      }
    ]
  }
}
```

```bash
#!/bin/bash
# .claude/hooks/lint-fix.sh
FILE=$(jq -r '.tool_input.file_path' < /dev/stdin)
npx prettier --write "$FILE" 2>/dev/null
npx eslint --fix "$FILE" 2>/dev/null
exit 0  # Không block, chỉ fix
```

🎯 Tại sao: Đừng bao giờ dùng LLM để enforce format — linter nhanh hơn, chính xác hơn, miễn phí.

**2️⃣ Chặn lệnh nguy hiểm**

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": ".claude/hooks/block-dangerous.sh"
          }
        ]
      }
    ]
  }
}
```

```bash
#!/bin/bash
# .claude/hooks/block-dangerous.sh
CMD=$(jq -r '.tool_input.command' < /dev/stdin)
if echo "$CMD" | grep -qE 'rm -rf|git push --force|drop table|git reset --hard'; then
  echo "❌ Blocked: lệnh nguy hiểm — hãy hỏi lead trước"
  exit 2  # Exit code 2 = block action
fi
exit 0
```

**3️⃣ Nhắc lại context sau compaction**

```json
{
  "hooks": {
    "PostCompact": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Reminder: Dùng bun không npm. Named exports only. Đọc CLAUDE.md nếu không chắc convention.'"
          }
        ]
      }
    ]
  }
}
```

💡 Đây là cách giải quyết vấn đề "Claude quên rule khi context dài" — sau mỗi lần compact, inject lại rule quan trọng nhất.

### Với team — thêm lớp review

> Phần này áp dụng khi làm việc nhóm.

- Setup **Claude Code Review** trên GitHub — tự review PR bằng fleet of agents chuyên biệt
- Hoặc dùng **Writer/Reviewer pattern**: một session viết code, session khác review với context sạch
- Git pre-commit hook vẫn chạy bình thường — Claude Code phải pass giống mọi dev khác

---

<a name="5"></a>

## 📌 5. Phase 3: Chạy Thật — Workflow Hằng Ngày

Setup xong, giờ là lúc làm việc.

### Workflow cốt lõi: Explore → Plan → Implement → Verify → Commit

```
┌──────────┐    ┌──────────┐    ┌─────────────┐    ┌──────────┐    ┌──────────┐
│ Explore  │───▶│  Plan    │───▶│ Implement   │───▶│  Verify  │───▶│  Commit  │
│(Plan Mode)│   │(Ctrl+G)  │    │(Normal Mode)│    │(Tests)   │    │(PR)      │
└──────────┘    └──────────┘    └─────────────┘    └──────────┘    └──────────┘
     │                                                                   │
     └──── /clear giữa các task không liên quan ◀─────────────────────────┘
```

**Khi nào dùng Plan Mode, khi nào skip:**

| Tình huống                                 | Dùng Plan Mode? |
| ------------------------------------------ | :-------------: |
| Thay đổi nhỏ, rõ ràng (fix typo, thêm log) |     ❌ Skip     |
| Feature mới, chạm nhiều file               |      ✅ Có      |
| Refactor code không quen                   |      ✅ Có      |
| Bug phức tạp, chưa biết root cause         |      ✅ Có      |
| Dự án có sẵn, lần đầu sửa module lạ        |   ✅ Bắt buộc   |

### Quản lý context — Kỹ năng quan trọng nhất

Context window là tài nguyên quý nhất. Quản lý sai → Claude Code "say", output kém chất lượng.

**✅ Những việc nên làm:**

- **`/clear` giữa các task không liên quan** — thao tác quan trọng nhất, nhiều người bỏ qua
- **`/compact` khi context đầy** — thêm instruction: `/compact Giữ lại danh sách file đã sửa và test command`
- **Dùng subagent cho research** — giữ context chính sạch cho implementation
  - Ví dụ: "Dùng subagent Explore để tìm hiểu module auth hoạt động thế nào"
- **Một session, một mục tiêu** — không mix "fix bug A" với "refactor module B"

**❌ Những việc không nên làm:**

- Sửa đi sửa lại cùng một lỗi quá 2 lần → `/clear` và viết prompt tốt hơn
- Để Claude Code "investigate" không giới hạn → scope rõ: "Chỉ đọc 3 file này"
- Copy paste log dài vào prompt → dùng pipe: `cat error.log | claude -p "giải thích root cause"`

### Pattern cho từng tình huống

**🔹 Cá nhân — Dự án mới**

```
1. Describe feature → Claude Code interview bạn (dùng AskUserQuestion)
2. /clear → bắt đầu session mới với spec rõ ràng
3. Plan Mode → review plan → Implement
4. Test → Commit
```

Tip: Với dự án mới, cho Claude Code tự do hơn (ít deny rules). Tăng dần guardrails khi codebase phức tạp lên.

**🔹 Team — Dự án mới**

```
1. Tech lead setup CLAUDE.md + settings.json + hooks
2. Cả team review và đóng góp vào CLAUDE.md (treat it like code)
3. Mỗi người /clear riêng, mỗi session một task từ board
4. PR → Claude Code Review hoặc human review → merge
```

Tip: Bắt đầu với 1–2 champion dùng trước, document kinh nghiệm, rồi mở rộng.

**🔹 Cá nhân — Dự án có sẵn**

```
1. Dành session đầu tiên CHỈ ĐỂ EXPLORE (Plan Mode)
   → "Giải thích kiến trúc tổng quan của dự án này"
   → "Module nào phụ thuộc module nào?"
2. Viết CLAUDE.md dựa trên những gì học được
3. Bắt đầu với task nhỏ, an toàn (fix bug nhỏ, thêm test)
4. Mở rộng phạm vi dần khi CLAUDE.md đã đủ mature
```

⚠️ **Với dự án có sẵn — luôn bắt đầu nhỏ.** Đừng để Claude Code refactor module lớn khi bạn chưa hiểu codebase. Cho task nhỏ trước, tăng dần khi tin tưởng — giống onboard nhân sự mới.

### Session naming — Đừng bỏ qua

```bash
claude -n "feat-auth-login"       # Đặt tên session
claude --continue                  # Resume session gần nhất
claude --resume                    # Chọn từ danh sách
```

---

<a name="6"></a>

## 📌 6. Bài Toán Của Bạn Cần Gì? — Khi Nào Cần Tool Mở Rộng

Workflow ở Phase 3 đã cover **phần lớn tình huống thực tế**. Nhưng khi bạn gặp pain point cụ thể mà Claude Code native không giải quyết được, có 3 tool đáng cân nhắc — mỗi cái giải quyết một vấn đề khác nhau.

⚠️ **Nguyên tắc quan trọng**: Mỗi tool thêm vào là thêm overhead. Đừng dùng vì "hay" — dùng vì bạn **đang đau** và tool đó **giảm đau rõ ràng**.

### Bảng chẩn đoán

Đọc cột "Triệu chứng" — nếu bạn đang gặp, xem "Thuốc" tương ứng. Nếu không gặp, **đừng dùng**.

| Triệu chứng                                                                             | Nguyên nhân gốc                                                                    | Thuốc           | Không cần nếu...                                                   |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------ |
| Code xong sai yêu cầu, phải làm lại. Bạn mô tả bằng lời nhưng Claude hiểu khác          | Không có spec rõ ràng, yêu cầu chỉ sống trong chat                                 | **OpenSpec**    | Task đơn giản, Plan Mode đủ truyền đạt ý                           |
| Claude Code skip test, code trước test sau, hoặc viết test không có giá trị             | Không có process enforcement — CLAUDE.md nói "viết test" nhưng LLM không nhất quán | **Superpowers** | Bạn đã tự enforce TDD tốt, hoặc project không cần test nghiêm ngặt |
| Feature kéo dài nhiều session, mỗi lần phải giải thích lại context, task dependency rối | "50 First Dates" — agent quên hết sau mỗi session                                  | **Beads**       | Task xong trong 1–2 session, `/continue` đã đủ                     |

### OpenSpec — Khi "nói miệng" không đủ

**Vấn đề cụ thể nó giải quyết:**

- Bạn mô tả feature bằng lời → Claude Code hiểu theo cách của nó → code xong bạn nói "không phải thế" → lặp lại 3 lần → context đầy → output càng tệ
- Team không align về scope: ai cũng hiểu khác nhau "feature X nên làm gì"

**Cách hoạt động:** Tạo spec artifact **sống trong repo** — proposal, technical design, task list — trước khi code. Cả bạn và Claude Code đọc cùng một file, không phụ thuộc vào chat history.

```
/opsx:propose add-user-authentication
→ Tạo proposal.md, specs/, design.md, tasks.md
→ Bạn review, chỉnh → Claude Code implement theo spec
→ /opsx:verify → kiểm tra code khớp spec
→ /opsx:archive → merge vào specs chính
```

**Overhead thực tế:**

- Mỗi feature thêm ~10–15 phút cho spec + review
- Cần maintain thêm thư mục `openspec/`
- Spec lỗi thời nhanh nếu requirement thay đổi liên tục

**Đáng dùng khi:**

- Feature chạm 3+ file hoặc thay đổi API contract / data model
- Team cần align trước khi ai code gì
- Bạn bị lặp pattern "code xong → sai yêu cầu → làm lại"

**Không đáng dùng khi:**

- Solo dev, prototype nhanh, requirement đang explore
- Task nhỏ < 30 phút
- Bạn dùng Plan Mode + `Ctrl+G` đã truyền đạt ý đủ rõ

### Superpowers — Khi cần kỷ luật process

**Vấn đề cụ thể nó giải quyết:**

- Claude Code hay viết code trước rồi test sau (hoặc không test)
- Code review bị bỏ qua vì "trông ổn rồi"
- Session dài, Claude Code drift khỏi mục tiêu ban đầu

**Cách hoạt động:** Một bộ skills enforce methodology cứng:

- **Brainstorm** — Socratic Q&A trước khi code: "Nếu payment fail giữa chừng thì sao?"
- **TDD cứng** — RED → GREEN → REFACTOR. Test phải fail trước, rồi mới viết code. Nếu viết code trước test → bị chặn
- **Subagent sạch** — mỗi task nhỏ chạy trong subagent riêng, tránh context drift
- **Review 2 pha** — pha 1: spec compliance, pha 2: code quality
- **Debug 4 pha** — reproduce → root cause → fix → verify (không cho "thử random fix")

**Overhead thực tế:**

- Mỗi feature thêm ~10–20 phút planning
- TDD cứng có thể chậm hơn khi prototype / explore
- Subagent per task tốn nhiều token hơn
- Không phải mọi code cần strict TDD (CRUD, config, glue code)

**Đáng dùng khi:**

- Business logic phức tạp cần độ tin cậy cao
- Bạn thấy Claude Code hay sinh code không test hoặc test vô nghĩa
- Dự án cần code review discipline mà team chưa có
- Bug phức tạp cần debugging có hệ thống

**Không đáng dùng khi:**

- Prototype / MVP giai đoạn đầu — cần tốc độ hơn kỷ luật
- Script nhỏ, config, CRUD đơn giản
- Bạn đã có CI/CD + test coverage tốt — thêm Superpowers chỉ chồng lớp

### Beads — Khi 1 session không đủ

**Vấn đề cụ thể nó giải quyết (Steve Yegge gọi là "50 First Dates"):**

- Feature kéo dài 3–5 session. Mỗi sáng bạn phải: "Hôm qua mình đang làm X, đã xong A, B, C, còn D, E..."
- Task có dependency phức tạp: "D chỉ làm được khi C xong, nhưng E thì independent"
- Quay lại feature sau 1 tuần → mất hoàn toàn context

**Cách hoạt động:** Task tracker lưu trong git (JSONL), Claude Code đọc qua MCP server.

```
Session 1:                        Session 2 (ngày hôm sau):
bd create epic "Payment"          bd ready
→ Task 1: ✅ done                 → "Task 4, 5 unblocked.
→ Task 2: ✅ done                    Task 6 blocked by Task 5."
→ Task 3: ✅ done                 → Claude tự biết làm gì tiếp
→ (hết session)                     Không cần re-explain
```

**Overhead thực tế:**

- Setup MCP server cho Beads
- Phải discipline tạo task + update status
- Thêm `.beads/` vào repo
- Phần lớn task xong trong 1–2 session → không cần Beads

**Đáng dùng khi:**

- Epic kéo dài nhiều ngày, nhiều task, có dependency graph
- Bạn hay quay lại task dở dang sau vài ngày / 1 tuần
- Team nhiều người cùng làm 1 epic, cần biết ai đang ở đâu

**Không đáng dùng khi:**

- Task xong trong 1–2 session (phần lớn trường hợp)
- `/continue` + session naming đã đủ resume
- Solo dev, task nhỏ, không có dependency phức tạp

### Cây quyết định tổng hợp

```
Bạn đang dùng Claude Code native workflow (Phase 3).
Hỏi bản thân:

Q1: Claude Code có hay code sai yêu cầu không?
    ├── Có, dù đã Plan Mode → Thử OpenSpec
    └── Không, Plan Mode đủ → Giữ nguyên

Q2: Claude Code có hay skip test / viết test vô nghĩa không?
    ├── Có, CLAUDE.md rule không đủ → Thử Superpowers
    └── Không, test quality OK → Giữ nguyên

Q3: Feature có kéo dài qua nhiều session không?
    ├── Có, mất context liên tục → Thử Beads
    └── Không, /continue đủ → Giữ nguyên

Q4: Bạn có gặp tất cả 3 vấn đề trên?
    └── Xem xét Hyperpowers (= Superpowers + Beads tích hợp)
```

💡 **Mental model**: Đừng coi đây là "level up" — coi đây là **tủ thuốc**. Bạn không uống hết thuốc trong tủ. Bạn chẩn đoán bệnh rồi lấy đúng lọ.

---

<a name="7"></a>

## 📌 7. Phase 4: Tối Ưu Liên Tục

Workflow không phải setup một lần rồi xong. Nó cần iterate.

### Review CLAUDE.md hàng tuần

- Claude Code làm sai gì tuần này? → Thêm rule
- Rule nào Claude Code đã tuân thủ tốt mà không cần nhắc? → Xóa bớt
- Rule nào Claude Code vẫn vi phạm dù đã có? → Chuyển sang hook

**Coi CLAUDE.md như living document** — cả team commit thay đổi vào, giống code.

### Khi nào tạo custom agent

Nếu bạn thấy mình lặp lại cùng một loại task với cùng instruction → tạo agent:

```markdown
# .claude/agents/code-reviewer.md

---

name: code-reviewer
description: Review code for security and conventions
tools: Read, Grep, Glob
model: sonnet

---

You are a senior reviewer. Check for:

- Security vulnerabilities (OWASP top 10)
- Violations of project conventions in CLAUDE.md
- Missing error handling at system boundaries
- Test coverage for new code paths
```

### Khi nào tạo skill

Nếu bạn có **workflow lặp lại với output format cố định** → tạo skill:

- Generate API documentation
- Create migration scripts
- Write changelog entries

### Metrics để theo dõi

Không cần dashboard phức tạp — tự hỏi:

- Bao nhiêu % code Claude Code sinh ra pass review mà không cần sửa?
- Bạn `/clear` bao nhiêu lần vì Claude Code đi sai hướng?
- CLAUDE.md có đang phình ra không kiểm soát không?

Nếu tỷ lệ sửa lại cao → CLAUDE.md cần cải thiện hoặc bạn cần scope task tốt hơn. Nếu cải thiện rồi mà vẫn đau → quay lại [Section 6](#6) để chẩn đoán cần tool nào.

---

## Tổng kết

💡 **Insight quan trọng nhất**: Claude Code native (CLAUDE.md + hooks + Plan Mode) đã cover 70–80% bài toán thực tế. Tool mở rộng là thuốc cho pain point cụ thể — hiệu quả khi đúng bệnh, lãng phí khi dùng phòng.

**Sau bài này, bạn nên:**

1. Tạo CLAUDE.md cho dự án tiếp theo — viết tay, dưới 200 dòng, có `@import` đến docs/
2. Setup 3 hook cơ bản (lint, block dangerous, post-compact reminder)
3. Chạy workflow Explore → Plan → Implement → Verify → Commit
4. Khi gặp pain point cụ thể → quay lại Section 6, chẩn đoán, dùng đúng tool

**Giới hạn của bài viết**: Quy trình này dựa trên nghiên cứu best practices từ Anthropic docs, community blogs, và kinh nghiệm training — chưa được kiểm chứng qua dự án production dài hạn. Workflow cụ thể sẽ cần điều chỉnh theo tech stack, team size, và loại dự án. OpenSpec, Superpowers, Beads đều còn khá mới — ecosystem đang phát triển nhanh, bản thân các tool cũng sẽ thay đổi.

**Bước tiếp theo cho người muốn đi sâu hơn:**

- Headless mode để tích hợp Claude Code vào CI/CD pipeline
- Worktree isolation khi cần chạy nhiều task song song
- Claude Code `--teammate-mode` cho agent-to-agent collaboration

## Đọc thêm

- [Best Practices for Claude Code — Anthropic](https://code.claude.com/docs/en/best-practices)
- [Common Workflows — Claude Code Docs](https://code.claude.com/docs/en/common-workflows)
- [Hooks Guide — Claude Code Docs](https://code.claude.com/docs/en/hooks-guide)
- [Memory (CLAUDE.md) — Claude Code Docs](https://code.claude.com/docs/en/memory)
- [Create Custom Subagents — Claude Code Docs](https://code.claude.com/docs/en/sub-agents)
- [OpenSpec — Spec-Driven Development](https://github.com/Fission-AI/OpenSpec)
- [Superpowers — Agentic Skills Framework](https://github.com/obra/superpowers)
- [Beads — Git-Native AI Task Tracker](https://steve-yegge.medium.com/the-beads-revolution-how-i-built-the-todo-system-that-ai-agents-actually-want-to-use-228a5f9be2a9)
- [Hyperpowers — Superpowers + Beads](https://github.com/withzombies/hyperpowers)
- [Agentic Coding Recommendations — Armin Ronacher](https://lucumr.pocoo.org/2025/6/12/agentic-coding/)
- [Writing a Good CLAUDE.md — HumanLayer](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [How Anthropic Teams Use Claude Code](https://claude.com/blog/how-anthropic-teams-use-claude-code)
