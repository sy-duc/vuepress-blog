---
title: Định hình tư duy AI Engineer
---

# Định hình tư duy AI Engineer

Sau khi chúng ta có chút kiến thức về AI, điều quan trọng tiếp theo là cần định hình lại cách nhìn AI để không bị lạc đường.

[1. Không nhìn AI như trí tuệ thay người](#1)

[2. Phân biệt 4 lớp trong hệ AI](#2)

<a name="1"></a>

## 📌 1. Không nhìn AI như trí tuệ thay người

- ❌ Tư duy sai:

  - ✧ Model này accuracy (độ chính xác) bao nhiêu?

  - ✧ LLM trả lời sai là do prompt chưa tốt.

  - ✧ Fine-tune thêm (train bổ sung trên model có sẵn) là xong.

- ✅ Tư duy AI Engineer:

  - ✧ AI sai có kiểm soát không.

  - ✧ Model chỉ là 1 phần rất nhỏ.

  - ✧ Phần khó trong AI là: Input, Context, Validation, Decision.

  - ✧ Không để AI được quyền quyết định cuối cùng nếu hậu quả lớn.

    - Công thức vàng của AI lúc này sẽ là:

      ```
      AI đề xuất  →  Rule / Validation  →  Quyết định cuối
      ```

  - ✧ Khi dùng AI luôn đi kèm 3 câu hỏi:

    - ➀ Nếu AI sai thì chuyện gì xảy ra?

    - ➁ Sai có phát hiện được không?

    - ➂ Sai có rollback / ignore được không?

  - ✧ Không cần AI đúng nhiều hơn mà cần AI sai ít nguy hiểm hơn.

<a name="2"></a>

## 📌 2. Phân biệt 4 lớp trong hệ AI

### 1️⃣ Lớp 1 – Data / Input

- Bao gồm: Ảnh, Text, Log, Sensor.

- 80% lỗi AI sẽ nằm ở đây.

- Không cho “data rác” vào AI.

- Nếu có thể phát hiện data rác sớm, nên reject sớm.

- Model hiếm khi chết — data làm AI chết.

### 2️⃣ Lớp 2 – AI Core

- Bao gồm các Model prediction.

  - 👉 Không tin tuyệt đối kết quả nhận được.

### 3️⃣ Lớp 3 – Validation / Rule

- Bao gồm các hành động kiểm tra kết quả nhận được từ model:

  - ✧ So sánh với ngưỡng (threshold).

  - ✧ Kiểm tra logic.

  - ✧ Kiểm tra history.

  - v.v.

  - 👉 Đây là quyền quyết định thực sự.

### 4️⃣ Lớp 4 – Decision
