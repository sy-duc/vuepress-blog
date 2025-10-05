---
title: Git Tips - Giải quyết các case thường gặp
summary: "Nội dung bài viết sẽ tập trung vào các case thực tế, điển hình và quan trọng khi làm việc với Git."
date: "2025-09-21"
image: "/vuepress-blog/images/posts/git-practices.png"
category: "Workflows"
tags:
  - worklows
  - git
---

# Git Tips: Giải quyết các case hay gặp khi làm việc hằng ngày

Bài viết tổng hợp những tình huống thường gặp khi làm việc với Git, từ commit nhầm, push sai, muốn revert, stash thay đổi tạm thời, đến reset hoặc revert lịch sử, v.v.

[1. Xem lại lịch sử thay đổi ngắn gọn](#1)

[2. Sửa message commit](#2)

[3. Lỡ commit thiếu file](#3)

[4. Lưu thay đổi tạm mà chưa commit](#4)

[5. Gộp nhiều commit nhỏ thành 1 commit](#5)

[6. Revert commit](#6)

[7. Reset commit](#7)

[8. Đổi tên branch](#8)

[9. Tách nhánh mới từ một commit cũ](#9)

[10. Checkout commit khác vào branch của mình](#10)

[11. Khắc phục conflict khi merge/rebase](#11)

<a name="1"></a>

## 📌 1. Xem lại lịch sử thay đổi ngắn gọn

- ✦ Không quá khi nói commit ID chính là “xương sống” trong mọi thao tác với Git.

- ✦ Trong Git, mọi thao tác quan trọng (revert, reset, restore, checkout, tách nhánh…) đều cần đến commit ID.

- ✦ Vì vậy, bước đầu tiên khi xử lý sự cố là phải xem lại lịch sử commit.

### 1️⃣ Xem lịch sử đầy đủ
-
  ```bash
  git log
  ```
  → Hiển thị chi tiết commit id (SHA), tác giả, ngày giờ, message.

### 2️⃣ Xem lịch sử ngắn gọn (mỗi commit 1 dòng)
-
  ```bash
  git log --oneline
  ```

- Ví dụ:
  ```bash
  a1b2c3d Fix lỗi OCR sai model
  e4f5g6h Thêm chức năng stash
  123abcd Cập nhật README
  ```
  → `a1b2c3d` chính là commit id (rút gọn từ SHA thật).

### 3️⃣ Xem lịch sử dạng cây (branch/merge dễ hình dung)
-
  ```bash
  git log --oneline --graph --all
  ```
  → Hiển thị mối quan hệ giữa các nhánh và merge trực quan hơn.

### 4️⃣ Chỉ muốn xem commit gần nhất
-
  ```bash
  git log --oneline -n 5
  ```
  → Hiển thị 5 commit cuối.

<a name="2"></a>

## 📌 2. Sửa message commit

### 1️⃣ Commit chưa push
-
  ```bash
  git commit --amend -m "Message mới"
  ```
  → Git sẽ thay thế commit message cũ gần nhất bằng message mới (commit id cũng thay đổi).

### 2️⃣ Commit đã push (nhưng chưa ai khác pull)
- ❶ Chạy amend sửa message như bình thường:
  ```bash
  git commit --amend -m "Message mới"
  ```

- ❷ Force push để ghi đè lên remote:
  ```bash
  git push --force
  ```

- ⚠️ **Chú ý**:
  - Chỉ nên làm nếu bạn chắc chắn không ai khác đã clone/pull commit cũ.
    - Nếu không, đồng đội sẽ bị “lịch sử không đồng bộ” và dễ gây lỗi.

### 3️⃣ Commit cần sửa không phải commit gần nhất

- Ví dụ: bạn muốn sửa message commit số 3 trong lịch sử (không phải commit cuối).
  - → Lúc này cần dùng rebase tương tác.

- ❶ Mở interactive rebase cho 5 commit gần nhất (tính từ HEAD lùi về):
  ```bash
  git rebase -i HEAD~5
  ```

- ❷ Git sẽ mở một file tạm trong editor, hiển thị danh sách commit:
  ```bash
  pick a1b2c3d Commit 1
  pick e4f5g6h Commit 2
  pick 123abcd Commit 3
  pick 456defg Commit 4
  pick 789ghij Commit 5
  ```

- ❸ Đổi pick thành reword ở commit muốn sửa message:
  ```bash
  pick a1b2c3d Commit 1
  reword 123abcd Commit 3
  pick 456defg Commit 4
  pick 789ghij Commit 5
  ```

- ❹ Lưu & đóng file editor.

- ❺ Git tiếp tục rebase
  - ✦ Ngay sau khi lưu file ở bước ❹, Git bắt đầu rebase.

  - ✦ Khi nó tới commit có reword, Git sẽ tự động mở thêm một file khác trong editor.
    - File này chỉ chứa commit message hiện tại của commit đó và cho phép bạn sửa message commit đó.
      ```
      Commit 3
      ```

- ❻ Sửa message
  - Tại file chứa commit message đã mở từ ❺, bạn có thể gõ sửa lại message mới của commit đó.
    ```
    Update commit 3
    ```

- ❼ Lưu & đóng file editor commit message
  - ✦ Sau khi sửa message mới, việc lưu & đóng file editor chính là “lưu message commit”.

  - ✦ Git sẽ tiếp tục rebase, apply lại các commit còn lại sau đó (e4f5g6h, a1b2c3d) dựa trên message mới bạn vừa sửa.

- ❽ Push lại
  - ✦ Nếu commit chưa push → xong.

  - ✦ Nếu commit đã push → bạn phải force push:
    ```bash
    git push --force
    ```

<a name="3"></a>

## 📌 3. Lỡ commit thiếu file

### 1️⃣ Commit chưa push
- Ví dụ: bạn commit "Update OCR config" nhưng quên thêm file config.yaml.
  ```bash
  git add config.yaml
  git commit --amend --no-edit
  ```
  - `--no-edit` nghĩa là giữ nguyên message cũ.

  - Nếu bạn muốn đổi luôn message (vd: "Update OCR config + add config.yaml") thì bỏ `--no-edit`:
    ```bash
    git commit --amend -m "Update config + add config.yaml"
    ```

- → `amend` sẽ thay thế commit cuối bằng một commit mới có cả file bị quên.

### 2️⃣ Commit đã push (nhưng chưa ai khác pull)
- ❶ Chạy amend add file như bình thường:
  ```bash
  git add config.yaml
  git commit --amend --no-edit
  ```

- ❷ Force push để ghi đè lên remote:
  ```bash
  git push --force
  ```

- ⚠️ **Chú ý**:
  - Trong team, kinh nghiệm là bạn nên tạo commit mới thay vì `amend` sau khi push để đồng đội tránh conflict nếu đã pull commit cũ.
    - → Lịch sử sẽ rõ ràng, ít rủi ro hơn.

<a name="4"></a>

## 📌 4. Lưu thay đổi tạm mà chưa commit

- Bạn đang code dở, chưa muốn commit nhưng cần chuyển branch hoặc pull code mới.
  - 👉 Dùng `stash` là cách chuẩn và phổ biến nhất.

- ❶ Lưu thay đổi tạm thời:
  ```bash
  git stash push -m "Save temp"
  ```
  hoặc đơn giản:
  ```bash
  git stash
  ```
  → Git lưu tất cả thay đổi (kể cả staged & unstaged), working directory trở lại “sạch”.

- ❷ Chuyển branch khác nếu muốn.

- ❸ Xem danh sách stash:
  - Khi quay lại branch cũ và cần xem lại danh sách stash đã lưu trước đó:
    ```bash
    git stash list
    ```
    Ví dụ:
    ```bash
    stash@{0}: On main: Work in progress: OCR config
    stash@{1}: On dev: Refactor logger
    ```

- ❹ Áp dụng lại thay đổi:
  - Lấy lại và xóa khỏi stash:
    ```bash
    git stash pop
    ```
  
  - Lấy lại nhưng vẫn giữ trong stash:
    ```bash
    git stash apply stash@{0}
    ```

<a name="5"></a>

## 📌 5. Gộp nhiều commit nhỏ thành 1 commit

- Đây là tình huống hay gặp khi code lặt vặt → commit nhiều lần → lịch sử bị "rác".

- ✅ Thường thì trước khi merge vào main/develop, ta muốn gộp các commit đó thành 1 commit gọn gàng hơn.

### 1️⃣ Các commit chưa push lên remote

#### Cách 1: `git rebase -i`

- ❶ Xác định số commit cần gộp, ví dụ 3 commit gần nhất:
  ```bash
  git rebase -i HEAD~3
  ```
  → Git sẽ mở file tạm trong editor, hiển thị danh sách commit.

- ❷ Trong editor, giữ commit đầu pick, các commit sau đổi thành squash (hoặc s):
  ```bash
  pick abc123 Fix bug nhỏ
  squash def456 Thêm log debug
  squash ghi789 Dọn code
  ```

- ❸ Lưu lại → Git mở tiếp editor để sửa message → viết message gọn gàng.

#### Cách 2: `git reset --soft`

- ❶ Reset về trước 3 commit:
  ```bash
  git reset --soft HEAD~3
  ```
  → Lúc này, thay đổi của cả 3 commit nằm ở staging area.

- ❷ Tạo 1 commit mới:
  ```bash
  git commit -m "Commit gọn gàng"
  ```

### 2️⃣ Commit đã push lên remote

#### Trường hợp 1: Bạn chắc chắn chỉ mình bạn làm việc trên nhánh này

- ❶ Rebase/gộp lại như như bình thường

- ❷ Push với --force
  ```bash
  git push --force
  ```

#### Trường hợp 2: Nhánh đã có nhiều người cùng làm

- ⚠️ Cần cẩn trọng, KHÔNG nên rebase vì thay đổi lịch sử sẽ ảnh hưởng đến người khác và gây conflict lịch sử.

- ✅ Cách an toàn: giữ nguyên commit cũ, tạo thêm 1 commit mới “cleanup” hoặc “final version”.

<a name="6"></a>

## 📌 6. Revert commit

- Dùng khi muốn hủy thay đổi của một commit nhưng vẫn giữ lịch sử commit (tạo ra một commit mới đảo ngược thay đổi cũ).

  - 👉 Revert là cách an toàn, không phá lịch sử khi đã push commit lên remote, team đã dùng chung.

### 1️⃣ Revert một commit
- 
  ```bash
  git revert <commit_id>
  ```

  → Git sẽ tạo ra commit mới với nội dung ngược lại commit_id.

### 2️⃣ Revert nhiều commit
- 
  ```bash
  git revert <commit_id1> <commit_id2>
  ```

<a name="7"></a>

## 📌 7. Reset commit

- Dùng khi muốn xóa hẳn commit khỏi lịch sử (làm như commit đó chưa từng tồn tại).

### 1️⃣ Reset về commit trước đó (bỏ 1 commit gần nhất)
- 
  ```bash
  git reset --hard HEAD~1
  ```

  Các mode reset:
    - ✧ `--soft`: giữ nguyên thay đổi trong staging (index).

    - ✧ `--mixed` (mặc định): giữ thay đổi trong working dir, bỏ staging.

    - ✧ `--hard`: xóa hết thay đổi (cẩn thận, dễ mất code).

### 2️⃣ Reset về commit cụ thể
- 
  ```bash
  git reset --hard <commit_id>
  ```

### 3️⃣ Reset commit đã push
- Ví dụ lịch sử commit:
  ```bash
  a1b2c3d Fix bug nhỏ
  b2c3d4e Thêm log debug
  c3d4e5f Cập nhật README
  ```

- ❶ Reset về commit mong muốn như bình thường
  ```bash
  git reset --hard a1b2c3d
  ```

- ❷ Force push để đồng bộ remote:
  ```bash
  git push --force
  ```

  → Lúc này commit b2c3d4e và c3d4e5f biến mất khỏi remote, coi như chưa từng tồn tại.

### ⚠️ Chú ý
- Nếu đã push thì KHÔNG nên dùng `reset + force push` trừ khi chắc chắn nhánh chỉ mình bạn làm.
  - 👉 Thay vào đó hãy dùng `revert commit`.

<a name="8"></a>

## 📌 8. Đổi tên branch

### 1️⃣ Branch chỉ tồn tại local
- 
  ```bash
  git branch -m <tên_nhánh_cũ> <tên_nhánh_mới>
  ```

- Nếu đang ở trong branch đó, chỉ cần:
  ```bash
  git branch -m <tên_nhánh_mới>
  ```

### 2️⃣ Branch đã push lên remote

- ❶ Đổi tên branch local như bình thường:
  ```bash
  git branch -m <tên_nhánh_cũ> <tên_nhánh_mới>
  ```

- ❷ Xóa branch cũ trên remote
  ```bash
  git push origin --delete <tên_nhánh_cũ>
  ```

- ❸ Push branch mới lên remote
  ```bash
  git push origin <tên_nhánh_mới>
  ```

  → Giờ remote có branch mới, branch cũ bị xóa.

- ❹ Liên kết lại (set upstream)
  ```bash
  git push --set-upstream origin <tên_nhánh_mới>
  ```

<a name="9"></a>

## 📌 9. Tách nhánh mới từ một commit cũ

- 🎯 Tách nhánh mới từ commit khi cần:
  - Làm lại code từ một phiên bản cũ mà không ảnh hưởng nhánh hiện tại.
  - Tạo branch để fix bug hoặc thử nghiệm dựa trên commit cụ thể trong lịch sử.


  ```bash
  git checkout -b <tên_nhánh_mới> <commit_id>
  ```

  → Lúc này bạn sẽ ở branch mới với nội dung đúng như tại thời điểm commit tại commit_id chỉ định.

<a name="10"></a>

## 📌 10. Checkout commit khác vào branch hiện tại

- Nếu bạn muốn branch hiện tại chứa code của một commit trong branch khác:

  ```bash
  git cherry-pick <commit-id>
  ```

  → Git sẽ sao chép commit đó vào branch hiện tại.

<a name="11"></a>

## 📌 11. Xử lý conflict trong Merge Request / Pull Request

- Trong quy trình làm việc nhóm, conflict thường xuất hiện khi bạn tạo Merge Request (MR) để merge ví dụ nhánh `feature` vào `main`.

- ❶ Tạo merge request
  - Trên các nền tảng như GitHub/GitLab, bạn tạo MR từ `feature` → `main`.
  - → Nếu có conflict, giao diện web sẽ hiển thị cảnh báo.

- ❷ Quay lại branch `feature` để xử lý
  ```bash
  git checkout feature
  ```

- ❸ Merge nhánh `main` vào `feature` để cập nhật code mới nhất
  ```bash
  git merge main
  ```

  → Git sẽ thông báo các file bị conflict.

- ❹ Sửa conflict thủ công trong code editor (VS Code, v.v.)
  - Git đánh dấu vùng xung đột bằng ký hiệu:
    ```diff
    <<<<<<< HEAD
    code trong nhánh hiện tại (main)
    =======
    code trong nhánh feature
    >>>>>>> feature
    ```

- ❺ Đánh dấu đã sửa và commit lại
  ```bash
  git add .
  git commit
  git push
  ```

- ❻ Reload lại hoặc tạo lại merge request
  - Lúc này sẽ không còn conflict và Merge request đã sẵn sàng để review hoặc merge.
