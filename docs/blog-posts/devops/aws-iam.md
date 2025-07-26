---
title: AWS IAM
summary: "AWS IAM (Identity and Access Management) là dịch vụ giúp kiểm soát ai được truy cập vào tài nguyên AWS và họ được phép làm gì."
date: "2025-07-26"
image: "/vuepress-blog/images/posts/aws-iam.png"
category: "DEVOPS"
tags:
  - aws
  - aws-saa
  - cloud-computing
  - training-aws
  - iam
---

# AWS IAM (Identity and Access Management)

[1. Giới thiệu AWS IAM](#1)

[2. Các khái niệm chính](#2)

[3. Multi-Factor Authentication (MFA)](#3)

<a name="1"></a>

## 📌 1. Giới thiệu AWS IAM

![AWS IAM](./images/aws-gioi-thieu-iam.png)

- AWS IAM (Identity and Access Management) là dịch vụ giúp bạn quản lý quyền truy cập vào các tài nguyên AWS một cách an toàn.

- Nó cho phép bạn kiểm soát ai có thể thực hiện những hành động nào trên những tài nguyên nào trong môi trường AWS.

<a name="2"></a>

## 📌 2. Các khái niệm chính

|         Khái niệm         |      Giải thích      |      Ghi chú      |
| :------------------: | :-----------------: | :-----------------: |
|    Root user     | - Tài khoản mặc định được tạo khi bạn đăng ký một tài khoản AWS mới.<br/>- Tài khoản root này có toàn quyền truy cập vào tất cả các dịch vụ và tài nguyên trong tài khoản AWS. | AWS không khuyến khích chia sẻ và sử dụng root account cho các tác quản trị và vận hành hàng ngày (trừ khi thực sự cần thiết).  |
|  Users  | - Đại diện cho cá nhân (người) hoặc hệ thống (ứng dụng) có quyền truy cập vào các tài nguyên AWS.<br/>- Mỗi user có thể có thông tin đăng nhập riêng (như username, mật khẩu) và các khóa truy cập để sử dụng qua giao diện dòng lệnh hoặc API.  |   |
|    Groups    | - Cho phép gộp các user lại với nhau để áp dụng các quyền giống nhau.<br/>- Ví dụ có thể tạo nhóm “Admin” với quyền quản trị và thêm tất cả những user có vai trò quản trị vào nhóm này. | - Groups chỉ chứa các users, không chứa Gropus khác.<br/>- Các users không nhất thiết phải thuộc về 1 group, và 1 user có thể thuộc về nhiều groups.  |
| Policies | - Các quy tắc định nghĩa quyền truy cập cho mỗi user, xác định các hành động (actions) nào được cho phép hoặc không cho phép với các tài nguyên nào.<br/>- Các policies này có thể được gán cho users, groups, hoặc roles.<br/>- Policies có thể ở dạng JSON và chứa các yếu tố như Action, Resource, và Effect (Allow hoặc Deny). | AWS có sẵn nhiều Polices mà bạn có thể sử dụng ngay như: AdministratorAccess (quản trị viên), AmazonEC2FullAccess (developer). |
| Roles | - Trao quyền truy cập tạm thời cho các thực thể khác mà không cần sử dụng username hay mật khẩu.<br/>- Ví dụ, một ứng dụng chạy trên EC2 có thể assume (nhận) một role để có quyền truy cập tài nguyên mà không cần thông tin đăng nhập. | - Roles cũng bao gồm các IAM Policies.<br/>- Roles chỉ tạo ra các Access Key tạm thời để sử dụng trong thời gian ngắn. |

![AWS Các khái niệm chính trong IAM](./images/aws-cac-khai-niem-trong-iam.png)

<a name="3"></a>

## 📌 3. Multi-Factor Authentication (MFA)

MFA hay xác thực nhiều lớp là phương thức bảo mật bổ sung cho mật khẩu.

Khi bật MFA, ngoài mật khẩu sẽ cần cũng cấp thêm một mã xác thực.

![Multi-Factor Authentication (MFA)](./images/aws-mfa.png)

⚠️ AWS khuyến khích việc bật MFA để tăng cường bảo mật cho tài khoản AWS, đặc biệt là tài khoản root.

### Ví dụ các thiết bị MFA trong AWS:

#### 1️⃣ Thiết bị MFA ảo (Virtual MFA)

![Virtual MFA](./images/aws-virtual-mfa.png)

#### 2️⃣ Khóa bảo mật Universal 2nd Factor (U2F)

![Universal 2nd Factor](./images/aws-u2f-mfa.png)
