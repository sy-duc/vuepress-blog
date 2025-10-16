---
title: Tự động hóa trong AWS
summary: "Tự động hóa trong AWS là một trong những chủ đề quan trọng giúp tối ưu hoá vận hành, giảm thiểu lỗi thủ công, tiết kiệm chi phí và tăng tốc độ triển khai hệ thống."
date: "2025-10-14"
image: "/vuepress-blog/images/posts/aws-automation.png"
category: "DEVOPS"
tags:
  - aws
  - aws-saa
  - cloud-computing
  - training-aws
  - automation
  - cloudformation
  - elastic beanstalk
  - systems manager
---

# Tự động hóa trong AWS

[1. Tổng quan Tự động hóa trong AWS](#1)

[2. CloudFormation](#2)

[3. Elastic Beanstalk](#3)

[4. Systems Manager](#4)

<a name="1"></a>

## 📌 1. Tổng quan Tự động hóa trong AWS

- Tự động hóa (Automation) trong AWS bao gồm việc sử dụng các dịch vụ, công cụ và script để:

  - ✦ Tự động triển khai hạ tầng (Infrastructure as Code).
  
  - ✦ Tự động triển khai ứng dụng.
  
  - ✦ Tự động giám sát và phản hồi theo sự kiện.
  
  - ✦ Tự động backup, patching, scaling.
  
  - ✦ Tự động quản lý cấu hình và bảo mật.

<a name="2"></a>

## 📌 2. CloudFormation

- ✦ CloudFormation là một dịch vụ Infrastructure as Code (IaC), cho phép bạn mô tả hạ tầng (EC2, RDS, S3, VPC…) bằng file YAML hoặc JSON.

- ✦ Mặc dù không phải tất cá tài nguyên AWS đều được hỗ trợ, nhưng hầu hết đều có thể được cấu hình bằng CloudFormation.

### 🔹 Quy trình tổng quan

  #### 1️⃣ Viết template (kịch bản mô tả hạ tầng)

  - ✦ File định dạng YAML hoặc JSON

  - ✦ Gồm các thành phần:

    - ➀ Resources: phần bắt buộc, định nghĩa các tài nguyên (EC2, S3, RDS, VPC…)

    - ➁ Parameters: giá trị nhập từ người dùng (VD: instance type)

    - ➂ Outputs: xuất ra thông tin sau khi stack tạo xong (VD: IP của EC2)

    - ➂ Conditions, Mappings, Metadata, Transform… (tùy chọn)

  - ✦ Ví dụ:
    ```yaml
    Resources:
    MyEC2Instance:
      Type: AWS::EC2::Instance
      Properties:
        InstanceType: t2.micro
        ImageId: ami-0abcdef1234567890
    ```

#### 2️⃣ Deploy template để tạo Stack

- ✦ Mỗi lần bạn deploy 1 template → CloudFormation tạo 1 Stack

- ✦ Stack là tập hợp các tài nguyên AWS được quản lý cùng nhau

#### 3️⃣ CloudFormation thực hiện “orchestration” tạo tài nguyên

- ✦ CloudFormation tự động xử lý thứ tự tạo các tài nguyên

- ✦ Biết được tài nguyên nào phụ thuộc tài nguyên nào

- ✦ Ví dụ:
  ```
  Tạo VPC → Subnet → EC2 → Attach SecurityGroup
  ```

#### 4️⃣ Quản lý vòng đời của Stack

- ✦ Bạn có thể update Stack bằng cách thay đổi template → CloudFormation tự so sánh & cập nhật

- ✦ Hoặc Delete Stack → CloudFormation sẽ xóa toàn bộ tài nguyên theo đúng thứ tự

- ✦ Có thể thiết lập Rollback khi lỗi xảy ra (giữ nguyên trạng thái cũ nếu tạo lỗi)

#### 5️⃣ Xem Outputs, Events, và Logs

- CloudFormation cung cấp:

  - ➀ Events: các bước đang xảy ra (tạo EC2, tạo S3…)

  - ➁ Outputs: các giá trị được export (IP EC2, URL S3…)

  - ➂ Template designer: xem sơ đồ kiến trúc trực quan từ template

<a name="3"></a>

## 📌 3. Elastic Beanstalk

- ✦ Elastic Beanstalk là một dịch vụ PaaS (Platform as a Service) trong AWS, giúp bạn triển khai ứng dụng một cách tự động mà không cần quản lý hạ tầng chi tiết.

- ✦ Bạn chỉ cần cung cấp mã nguồn ứng dụng → Beanstalk sẽ lo mọi việc còn lại như:

  - ✧ Cấu hình EC2, load balancer, scaling, monitoring

  - ✧ Cài đặt môi trường (Node.js, Python, Java, .NET, PHP…)

  - ✧ Triển khai code, cập nhật, rollback

- ✦ Elastic Beanstalk phù hợp khi:

  - ✧ Bạn là dev, muốn deploy nhanh mà không cần quản lý hạ tầng

  - ✧ App đơn giản hoặc trung bình (monolith, microservice nhỏ)

  - ✧ Không muốn dùng dịch vụ thấp tầng như EC2/VPC trực tiếp

<a name="4"></a>

## 📌 4. Systems Manager

- AWS Systems Manager (SSM) là một dịch vụ quản lý và tự động hóa vận hành hạ tầng AWS, giúp bạn:

  - ➀ Quản lý cấu hình, chạy lệnh từ xa

  - ➁ Tự động hoá tác vụ bảo trì (backup, update, restart…)

  - ➂ Giám sát trạng thái EC2 và tài nguyên AWS

  - ➃ Tích hợp bảo mật (IAM, audit, encryption)
