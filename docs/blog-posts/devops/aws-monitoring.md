---
title: Theo dõi hoạt động các tài nguyên trong AWS
summary: "Monitoring trong AWS giúp doanh nghiệp theo dõi hiệu năng, tài nguyên và hoạt động người dùng một cách toàn diện."
date: "2025-09-16"
image: "/vuepress-blog/images/posts/aws-monitoring.png"
category: "DEVOPS"
tags:
  - aws
  - aws-saa
  - cloud-computing
  - training-aws
  - monitoring
  - cloudwatch
  - cloudtrail
---

# Dịch vụ theo dõi hoạt động (Monitoring) các tài nguyên trong AWS

Monitoring trong AWS giúp doanh nghiệp theo dõi hiệu năng, tài nguyên và hoạt động người dùng một cách toàn diện.

Nhờ đó, hệ thống luôn được kiểm soát chặt chẽ, đảm bảo hiệu suất, bảo mật và khả năng vận hành ổn định.

[1. Amazon CloudWatch – Giám sát hiệu năng và tài nguyên](#1)

[2. AWS CloudTrail – Theo dõi hoạt động người dùng/API](#2)

<a name="1"></a>

## 📌 1. Amazon CloudWatch – Giám sát hiệu năng và tài nguyên

- ✦ Amazon CloudWatch giúp giám sát CPU, RAM, network, disk, log, và alert khi có sự cố.

- ✦ Bằng cách thu thập dữ liệu trên các tài nguyên AWS, CloudWatch cung cấp khả năng:
  - ✧ Hiển thị hiệu suất trên toàn hệ thống

  - ✧ Cho phép người dùng đặt báo động, tự động phản ứng với các thay đổi và có được cái nhìn thống nhất về tình trạng hoạt động.

### 🔧 Thành phần chính:
- 
    |   Thành phần   |                              Mô tả                               |
    | :------------: | :--------------------------------------------------------------: |
    |    Metrics     | Cho phép thu thập và lưu trữ các thông số về dịch vụ và ứng dụng |
    |      Logs      |         Ghi lại log từ EC2, Lambda, ECS, API Gateway...          |
    |     Alarms     |        Cảnh báo khi metric vượt ngưỡng (ví dụ: CPU > 80%)        |
    |   Dashboard    |                 Giao diện trực quan hóa dữ liệu                  |
    | Events / Rules |         Tự động phản ứng (ví dụ: restart EC2 khi crash)          |

### 🔁 Ví dụ dùng thực tế:
- ✧ Tạo Alarm cho EC2 nếu CPU > 70% → gửi email (SNS).

- ✧ Theo dõi log của Lambda để debug lỗi.

- ✧ Tạo dashboard giám sát toàn hệ thống.

<a name="2"></a>

## 📌 2. AWS CloudTrail – Theo dõi hoạt động người dùng/API

- ✦ Khi tương tác với AWS, ta có thể dùng AWS Console, CLI hoặc SDK. Dù sử dụng cách nào thì về mặt bản chất chúng vẫn sẽ phát sinh ra các lệnh API.

- ✦ Nếu ta log vào các lệnh API này sẽ biết chính xác ai đã làm tác vụ gì, vào thời điểm nào, từ đâu và tương tác với tài nguyên nào trên môi trường AWS.

- 👉 AWS CloudTrail là dịch vụ cho phép ta thực hiện điều đó:

    - ✧ CloudTrail cho phép kiểm tra, giám sát bảo mật và khắc phục sự cố vận hành bằng    cách theo dõi hoạt động người dùng và lệnh gọi API.

    - ✧ Mỗi lượt truy cập vào ALI, CloudTrail sẽ ghi nhận lại dưới dạng một bản log JSON.  Có thể cấu hình để đẩy các bản log JSON này vào S3 hoặc CloudWatch để tiếp tục xử lý     và phân tích.

    - ✧ Mặc định, CloudTrail sẽ lưu lại các lệnh gọi API tạo, sửa, xóa tài nguyên trong vòng tối đa 90 ngày. Có thể custom điều này bằng việc tạo ra các trail mới.
