---
title: Mô hình Serverless trong AWS
summary: "Mô hình Serverless trong AWS cho phép chạy ứng dụng và dịch vụ mà không cần quản lý máy chủ, giúp nhà phát triển tập trung vào logic nghiệp vụ thay vì hạ tầng."
date: "2025-10-15"
image: "/vuepress-blog/images/posts/aws-serverless.png"
category: "DEVOPS"
tags:
  - aws
  - aws-saa
  - cloud-computing
  - training-aws
  - serverless
  - lambda
  - api gateway
---

# Mô hình thực thi chạy ứng dụng và dịch vụ không máy chủ (Serverless)

[1. Tổng quan Serverless](#1)

[2. AWS Lambda](#2)

[3. API Gateway](#3)

<a name="1"></a>

## 📌 1. Tổng quan Serverless

- Serverless không phải là không có server — mà là:

  - ✅ Bạn không cần quản lý máy chủ (server)

  - ✅ AWS sẽ lo phần hạ tầng, bạn chỉ lo viết logic ứng dụng

- 👉 Bạn chỉ triển khai code và AWS sẽ chạy nó cho bạn khi có request đến.

### 🔹 Khi nào nên dùng serverless?

- ➀ Không muốn vận hành/duy trì server (EC2, patch OS, scaling, v.v.)

- ➁ App có lưu lượng không đều (lúc đông lúc vắng)

- ➂ Cần tiết kiệm chi phí (chỉ trả tiền khi chạy)

Các dịch vụ chính trong mô hình serverless AWS:

<a name="2"></a>

## 📌 2. AWS Lambda

Chạy đoạn code nhỏ (function) để xử lý logic → trả kết quả.

### 🔹 Bạn chỉ cần:

- ❶ Viết hàm bằng Python, Node.js, v.v.

- ❷ Đăng lên AWS

- ❸ AWS sẽ tự chạy hàm đó mỗi khi có trigger (API, S3, SNS, SQS...)

### 🔹 Ví dụ thực tế

- ❶ Upload file lên S3 → Lambda xử lý resize ảnh

- ❷ User đăng ký → Lambda ghi thông tin vào DynamoDB

### 🔹 Lambda Runtime lifecycle

#### 1️⃣ Initialization (Khởi tạo)

- ✦ Đây là giai đoạn đầu tiên khi Lambda function được khởi chạy.

- ✦ Lambda tạo một execution environment (môi trường thực thi) mới để thực thi mã của bạn.

- ✦ Cold start: là lần đầu tiên hoặc khi Lambda tạo ra một môi trường thực thi mới. Quá trình khởi tạo này có thể mất thời gian, phụ thuộc vào kích thước hàm và mức độ phức tạp của mã khởi tạo.

- ✦ Warm start: Là các lần gọi tiếp theo vào cùng một môi trường và sẽ không phải khởi tạo lại, dẫn đến hiệu suất tốt hơn.

#### 2️⃣ Invocation (Thực thi)

- ✦ Sau khi quá trình khởi tạo hoàn tất, Lambda chuyển sang giai đoạn invocation (thực thi hàm).

- ✦ Khi có một sự kiện kích hoạt hàm Lambda, môi trường thực thi sẽ chạy mã của hàm với tham số sự kiện đã cung cấp.

#### 3️⃣ Shutdown (Tắt)

- ✦ Môi trường thực thi của Lambda không tồn tại mãi mãi. Nếu không có yêu cầu nào sử dụng lại môi trường thực thi trong một khoảng thời gian, AWS Lambda sẽ đóng nó để giải phóng tài nguyên.

- ✦ Quá trình shutdown diễn ra tự động và bạn không cần quản lý.

- ✅ Khi sử dụng AWS Lambda, bạn sẽ trả tiền theo thời gian chạy thực tế (tính theo mili-giây).

<a name="3"></a>

## 📌 3. API Gateway – Tạo endpoint API cho Lambda

Dùng để expose API REST hoặc HTTP để người dùng bên ngoài gọi vào Lambda.

### 🔹 Bạn định nghĩa:

- ➀ Endpoint: /orders

- ➁ Phương thức: POST

- ➂ Kết nối: Lambda xử lý đơn hàng

- ✅ Có thể thêm auth, CORS, v.v.

## 📚 Một ứng dụng serverless hoàn chỉnh sẽ gồm:

|       Thành phần        |              Mô tả               |
| :---------------------: | :------------------------------: |
|         Lambda          |           Xử lý logic            |
|       API Gateway       |    Là cổng tiếp nhận request     |
|        DynamoDB         |           Lưu dữ liệu            |
|           S3            |             Lưu file             |
| EventBridge / SNS / SQS | Gửi sự kiện và phối hợp các bước |
