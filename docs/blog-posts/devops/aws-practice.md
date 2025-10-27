---
title: Luyện đề AWS SAA
summary: "Đây là giai đoạn kiểm tra kiến thức, củng cố tư duy thiết kế hệ thống trên AWS và làm quen dần với phong cách câu hỏi thực tế có trong kỳ thi AWS SAA."
date: "2025-10-21"
image: "/vuepress-blog/images/posts/aws-practice.png"
category: "DEVOPS"
tags:
  - aws
  - aws-saa
  - cloud-computing
  - training-aws
  - practice
---

# Luyện đề AWS SAA

- 🎯 **Mô hình luyện đề**:

  - ❶ Luyện câu hỏi thực tế (trích từ đề mock hoặc practice exam).

  - ❷ Phân tích chi tiết từng lựa chọn — tại sao đúng, sai.

  - ❸ Tóm tắt kiến thức chính (Key takeaway).

  - ❹ Mở rộng kiến thức: Best practice, hạn chế, tình huống áp dụng thực tế.

  - ❺ Học lại phần yếu.

  - ❻ Làm lại đề sau 3-5 ngày.

[1. Mục tiêu](#1)

[2. Cấu trúc kỳ thi AWS Certified Solutions Architect – Associate (SAA-C03)](#2)

[3. Phương pháp luyện đề hiệu quả](#3)

[4. Tổng hợp KEYWORDS → PATTERN → SERVICE](#4)

[5. Checklist tình huống hay gặp trong đề thi](#5)

[6. Sample tư duy trả lời câu hỏi khi luyện đề](#6)

<a name="1"></a>

## 📌 1. Mục tiêu

- 🎯 Mục tiêu:

  - Củng cố kiến thức, kiểm tra hiểu biết qua các câu hỏi.

  - Làm quen với cấu trúc, phong cách câu hỏi thực tế trong kỳ thi AWS SAA.

  - Phân tích chi tiết từng câu hỏi.

  - Mở rộng kiến thức với các khái niệm liên quan.

  - Làm quen format và “bẫy” thường gặp trong đề thi thật.

  - Tập luyện tư duy giải pháp “Architect mindset” — luôn đặt câu hỏi: Giải pháp này có bảo mật, tối ưu chi phí, và có độ sẵn sàng cao không?

- ⚠️ **Note**: Bài viết chỉ sample vài câu hỏi để giúp dễ hình dung câu hỏi đề thi thực tế hơn. Hãy luyện tập để tích lũy thêm từ nhiều nguồn khác: google, youtube, udemy, v.v.

<a name="2"></a>

## 📌 2. Cấu trúc kỳ thi AWS Certified Solutions Architect – Associate (SAA-C03)

### 🎯 Thông tin cơ bản

- **Tên kỳ thi**: AWS Certified Solutions Architect – Associate (SAA-C03).

- **Mức phí**: 150 USD (có thể khác nhau tùy khu vực).

- **Thời gian làm bài**: 130 phút.

- **Số câu hỏi**: Khoảng 65 câu hỏi (bao gồm 50 tính điểm + 15 câu không được chấm điểm).

- **Đánh giá kết quả**: Hình thức là Pass/Fail (điểm số Pass: 720/1000 điểm tương ứng 36/50 câu tính điểm).

- **Thời hạn chứng chỉ**: 3 năm (hãy cập nhật hoặc thi lại khi hết hạn).

### 📚 Dạng câu hỏi và cách chấm điểm

- Có hai loại câu hỏi:

  - ❶ Multiple choice: chọn 1 đáp án đúng từ nhiều lựa chọn.

  - ❷ Multiple response: chọn 2 hoặc nhiều đáp án đúng từ các lựa chọn.

- Không có điểm trừ cho đáp án sai — nếu không biết chắc, tốt hơn là thử chọn chứ không để trống.

- Một số câu hỏi có thể là “unscored” (dùng để kiểm tra thử nội dung cho kỳ thi tương lai) — vẫn làm như bình thường nhưng chúng không ảnh hưởng đến điểm thi cuối cùng.

### 🧭 Các Domain & Tỉ lệ trọng số

- Kỳ thi SAA-C03 được chia thành 4 domain chính, mỗi domain có trọng số khác nhau trong đề thi. Ví dụ:

  | Domain                                                     | Mục tiêu chính                                                                    |
  | ---------------------------------------------------------- | --------------------------------------------------------------------------------- |
  | **Domain 1: Design Secure Architectures** (~30 %)          | Thiết kế kiến trúc bảo mật — IAM, mạng, mã hóa, truy cập, đa tài khoản.           |
  | **Domain 2: Design Resilient Architectures** (~26 %)       | Khả năng chịu lỗi và sẵn sàng cao — multi-AZ/Region, sao lưu khôi phục, phân tán. |
  | **Domain 3: Design High-Performing Architectures** (~24 %) | Hiệu năng, khả năng mở rộng — compute, network, storage, database.                |
  | **Domain 4: Design Cost-Optimized Architectures** (~20 %)  | Tối ưu chi phí — lựa chọn dịch vụ, quản lý sử dụng, tiết kiệm.                    |

- Tỉ lệ có thể thay đổi nhẹ theo từng lần thi, nên chuẩn bị toàn diện.

<a name="3"></a>

## 📌 3. Phương pháp luyện đề hiệu quả

### 1️⃣ Nguồn đề luyện thi

- Để luyện các đề sát thực tế nhất, từng xuất hiện trong bộ đề AWS SAA cũ, mình khuyên mọi người nên mua các khóa luyện đề có phần phân tích câu trả lời chi tiết.

- Ví dụ mình đã luyện bộ đề tại [cloudexam.pro](https://cloudexam.pro/course/practice-exams-aws-certified-solutions-architect-associate) (không seeding, được bạn bè giới thiệu).

### 2️⃣ Hiểu mục tiêu câu hỏi

- Phần lớn câu hỏi AWS SAA đều thuộc loại scenario-based (dạng tình huống). Ví dụ thay vì hỏi bạn “dịch vụ này làm gì?”, thì sẽ hỏi “trong tình huống này, chọn giải pháp nào tốt nhất?”, do đó:

  - ❶ Đọc kỹ đề ít nhất 2 lần để nắm rõ bối cảnh.

  - ❷ Gạch dưới (hoặc ghi chú) từ khóa định hướng như:

    - `High availability` → liên quan đến Multi-AZ, Auto Scaling, Load Balancer.

    - `Cost optimized` → Spot Instances, S3 Glacier, Savings Plans.

    - `Low latency` → edge caching (CloudFront), placement group, DynamoDB DAX.

    - `Compliance / encryption` → KMS, SSE, CSE, IAM policy.

  - ❸ Xác định vấn đề chính mà AWS đang test: bảo mật, sẵn sàng, hiệu năng, hay chi phí.

### 3️⃣ Sử dụng phương pháp loại trừ

- Phần lớn câu hỏi sẽ có 4–5 lựa chọn, trong đó:

  - ✧ 1 đáp án rõ ràng sai (hoặc không liên quan).

  - ✧ 1–2 đáp án gần đúng nhưng thiếu điều kiện.

  - ✧ 1 đáp án đúng hoàn toàn theo best practice AWS.

- 🧩 Phương pháp:

  - ❶ Loại nhanh các đáp án sai rõ ràng.

  - ❷ So sánh 2 đáp án gần đúng → hỏi: “Cái nào an toàn hơn / tiết kiệm hơn / resilient hơn?”

  - ❸ Chọn đáp án phù hợp với use case cụ thể.

### 4️⃣ Quản lý thời gian làm bài

- ✦ Tổng thời gian: 130 phút / ~65 câu → 2 phút/câu.

- ✦ Ưu tiên câu dễ – đánh dấu câu khó để quay lại sau.

- ✦ Không để trống — không có điểm trừ cho đáp án sai.

- ✦ Dành 10 phút cuối để xem lại các câu đã đánh dấu.

- ✦ Với những câu dạng tính toán chi phí, đừng sa đà vào con số — tập trung vào loại pricing model nào phù hợp nhất.

### 5️⃣ Tạo cho mình chiến lược ghi chép phù hợp khi luyện đề

- Các chiến lược ghi chép cụ thể có thể áp dụng:

  - ❶ Tạo bản đồ 40 service AWS chia theo nhóm + use case chính.

  - ❷ Tạo bảng “keywords → pattern → service” (cực hữu ích khi làm đề).

  - ❸ Tạo checklist các tình huống hay gặp trong đề thi SAA (mỗi tình huống ~1 dòng, để ôn nhanh).

<a name="4"></a>

## 📌 4. Tổng hợp KEYWORDS → PATTERN → SERVICE

- 🚀 Chiến lược sử dụng:

  - ❶ Đọc đề, gạch chân keyword (ví dụ: “least effort”, “multi-region”, “securely store credentials”).

  - ❷ Tra trong bảng để xác định pattern đúng.

  - ❸ Chọn dịch vụ tương ứng, loại bỏ các option không cùng hướng.

- 📊 Bảng tổng hợp KEYWORDS → PATTERN → SERVICE (phiên bản dành cho ôn SAA-C03):

- | Keyword                    | Pattern                              | Service                                            |
  | -------------------------- | ------------------------------------ | -------------------------------------------------- |
  | **High availability (HA)** | Triển khai trên nhiều AZ hoặc Region | Multi-AZ RDS, ALB + Auto Scaling, Aurora Global DB |

### 1️⃣ Compute & EC2

- | Keyword                              | Ý nghĩa                             | Hướng chọn                                       |
  | ------------------------------------ | ----------------------------------- | ------------------------------------------------ |
  | **Spot Instance**                    | Giá rẻ, không ổn định               | Dùng cho batch, job ngắn, có thể gián đoạn       |
  | **On-Demand**                        | Linh hoạt, trả theo giờ             | Dùng cho workload không ổn định                  |
  | **Reserved Instance / Savings Plan** | Tiết kiệm chi phí, workload ổn định | Dùng cho ứng dụng chạy 24/7                      |
  | **Auto Scaling**                     | Tự mở rộng                          | Gắn với ELB, target tracking, scaling policy     |
  | **User Data**                        | Script khởi tạo EC2                 | Dành cho cấu hình ban đầu, không bảo trì dài hạn |
  | **Instance Store**                   | Storage tạm                         | Mất dữ liệu khi stop/terminate                   |

### 2️⃣ Storage & Database

- | Keyword                                   | Ý nghĩa                        | Hướng chọn                              |
  | ----------------------------------------- | ------------------------------ | --------------------------------------- |
  | **Durable / Persistent**                  | Cần lưu lâu dài                | Chọn EBS, S3, EFS, Aurora               |
  | **Temporary / Cache / Scratch data**      | Dữ liệu tạm                    | Chọn Instance Store, ElastiCache        |
  | **Unpredictable / Intermittent workload** | Tải khó đoán                   | Aurora Serverless                       |
  | **Read-heavy workload**                   | Nhiều truy vấn đọc             | Read Replica, Aurora Reader Endpoint    |
  | **Data warehouse / Analytics**            | Phân tích dữ liệu              | Redshift                                |
  | **Key-Value / NoSQL**                     | Không quan hệ                  | DynamoDB                                |
  | **Workload constant & predictable**       | Data không đổi và dự đoán được | Provisioned mode: specify RCUs and WCUs |

### 3️⃣ Networking & Security

- | Keyword                           | Ý nghĩa                                     | Hướng chọn                      |
  | --------------------------------- | ------------------------------------------- | ------------------------------- |
  | **Private subnet**                | Không internet                              | Database, backend               |
  | **Public subnet**                 | Có internet                                 | Load Balancer, NAT Gateway      |
  | **Least privilege**               | Nguyên tắc tối thiểu                        | IAM Role / Policy hạn chế quyền |
  | **Secure / Encrypt**              | Bảo mật                                     | Sử dụng KMS, HTTPS, TLS         |
  | **VPC Peering / Transit Gateway** | Kết nối VPC                                 | Tuỳ số lượng và quy mô          |
  | **AWS WAF**                       | Chống tấn công L7 (Web app: SQLi, XSS, Bot) |                                 |
  | **AWS Shield**                    | Chống DDoS (L3/L4)                          |                                 |
  | **Amazon Inspector**              | Quét lỗ hổng trên EC2, ECR (không chặn)     |                                 |

### 4️⃣ High Availability & Fault Tolerance

- | Keyword                         | Ý nghĩa             | Hướng chọn                       |
  | ------------------------------- | ------------------- | -------------------------------- |
  | **Multi-AZ**                    | Dự phòng (HA)       | Database như RDS, Aurora         |
  | **Multi-Region**                | Phòng thảm họa (DR) | Khi cần redundancy toàn cầu      |
  | **Auto-healing / Self-healing** | Tự khôi phục        | Chọn ASG, ELB, ECS health checks |
  | **Decouple**                    | Giảm phụ thuộc      | Dùng SQS, SNS, EventBridge       |

### 5️⃣ Cost Optimization

- | Keyword                  | Ý nghĩa                 | Hướng chọn                                |
  | ------------------------ | ----------------------- | ----------------------------------------- |
  | **Cost-efficient**       | Tiết kiệm chi phí       | Spot, Serverless, S3 IA                   |
  | **Predictable workload** | Ổn định                 | Reserved Instance                         |
  | **Idle resources**       | Không dùng thường xuyên | Schedule stop/start hoặc Lambda scheduler |

### 6️⃣ Monitoring & Operations

- | Keyword                               | Ý nghĩa           | Hướng chọn                        |
  | ------------------------------------- | ----------------- | --------------------------------- |
  | **Monitor / Metrics / Alarms**        | Giám sát          | CloudWatch                        |
  | **Audit / Track API / User Activity** | Ghi vết hành động | CloudTrail                        |
  | **Centralized Logs**                  | Gom log           | CloudWatch Logs hoặc S3 + Athena  |
  | **Automation / Run Script**           | Tự động hóa       | Systems Manager (SSM) hoặc Lambda |

### 7️⃣ Khác

- | Keyword                                                                                                                            | Hướng chọn                                           |
  | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
  | **Unpredictable / variable load**                                                                                                  | Serverless hoặc Auto Scaling                         |
  | **High availability**                                                                                                              | Multi-AZ / Load Balancer                             |
  | **Disaster recovery / cross-region**                                                                                               | Multi-Region setup                                   |
  | **Reduce cost**                                                                                                                    | Spot, Serverless, Schedule stop                      |
  | **Secure access**                                                                                                                  | IAM, KMS, Private subnet                             |
  | **Scalable database**                                                                                                              | Aurora Serverless hoặc DynamoDB                      |
  | **Confidential or sensitive files / Authorized users only / Secure access for remote employees / On-premises Windows File Server** | FSx for Windows File Server + Active Directory + VPN |

<a name="5"></a>

## 📌 5. Checklist tình huống hay gặp trong đề thi

| #      | Tình huống / Keyword trong đề                                                                                | Service / Giải pháp chính                     | Ghi chú                                                                                                                                                                                                                                           |
| ------ | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**  | API Gateway access control limited IP                                                                        | **Create a resource policy**                  | Resource Policy là một cách không mất tiền để định nghĩa quyền kiểm soát truy cập API Gateway theo IP                                                                                                                                             |
| **2**  | Active Directory + AWS Organizations                                                                         | **IAM Identity Center**                       | Liên kết người dùng Active Directory để cho phép truy cập account trong Organization                                                                                                                                                              |
| **3**  | Distribution rights content around the world                                                                 | **Route53 Geolocation Routing Policy**        | Cho phép định tuyến traffic dựa trên vị trí địa lý của user                                                                                                                                                                                       |
| **4**  | Traffic (to S3, DynamoDB) from the application must not travel across the internet                           | **Gateway Endpoint**                          | Gateway Endpoint cho S3 là dịch vụ miễn phí, cho phép kết nối đến S3 với traffic đi trực tiếp trong đường truyền nội bộ của AWS, không qua internet                                                                                               |
| **5**  | Improve the performance of the static website                                                                | **CloudFront**                                | CloudFront là CDN service, cho phép cache các loại data như content tĩnh ở điểm cung cấp dịch vụ gần với người dùng nhất (edge locations), từ đó giúp giảm độ trễ                                                                                 |
|        |                                                                                                              | **S3 Transfer Acceleration**                  | S3 Transfer Acceleration là một tính năng của S3 cho phép upload bằng cách route traffic đến edge location, từ đó đi qua mạng nội bộ của AWS, giúp giảm độ trễ                                                                                    |
| **6**  | Workflow                                                                                                     | **Step Functions**                            | Step Functions là serverless service giúp điều phối & tự động hoá, cho phép build các luồng công việc (workflow) phức tạp                                                                                                                         |
| **7**  | Image processing jobs                                                                                        | **Lambda, ECS Fargate, AWS Batch**            | Chạy job mà tốn ít effort, không phải quản lý toàn bộ cơ sở hạ tầng                                                                                                                                                                               |
| **8**  | EC2 instances run 100% CPU                                                                                   | **Auto Scaling Group**                        | Tự động scale khi bị bottleneck (nút thắt cổ chai) ở EC2 Processing Tier                                                                                                                                                                          |
| **9**  | SQS queue fills up                                                                                           | **ApproximateNumberOfMessages**               | Trigger scale EC2 khi số lượng message đang có trong queue nhiều mà không xử lý hết                                                                                                                                                               |
| **10** | Migrate lift-and-shift or migrate server                                                                     | **Application Migration Service**             | Thực hiện migrate server từ on-premise lên AWS thông qua hình thức lift-and-shift (di chuyển nguyên trạng)                                                                                                                                        |
| **11** | Application stateless need to scale                                                                          | **Auto Scaling Group & Spot Instances**       | Spot Fleet giúp tiết kiệm, dù có thể bị thu hồi nhưng application stateless và có khả năng chịu lỗi cao nên không ảnh hưởng                                                                                                                       |
| **12** | ETL (extract-transform-load)                                                                                 | **AWS Glue**                                  | AWS Glue là dịch vụ ETL serverless, phù hợp cho việc extract-transform-load với ít effort nhất                                                                                                                                                    |
| **13** | Deploy the static content                                                                                    | **S3 + CloudFront**                           | S3 + CloudFront là giải pháp tối ưu cho static content, scale không giới hạn                                                                                                                                                                      |
| **14** | Rapidly evolve schema                                                                                        | **DynamoDB**                                  | DynamoDB là NoSQL Databse nên sẽ hỗ trợ schema linh hoạt                                                                                                                                                                                          |
| **15** | Sentiment analysis                                                                                           | **Amazon Comprehend**                         | Amazon Comprehend là dịch vụ chuyên dụng cho sentiment analysis để thực hiện phân tích thái độ                                                                                                                                                    |
| **16** | Slow for International Customers                                                                             | **AWS Global Accelerator**                    | Global Accelerator là giải pháp giúp tăng tốc, cải thiện hiệu suất cho phép các kết nối trên khắp thế giới đến hệ thống một cách nhanh nhất thông qua mạng lưới nội bộ toàn cầu của AWS                                                           |
| **17** | Storage solution for application on premises                                                                 | **S3 File Gateway**                           | S3 File Gateway cung cấp NFS/SMB interface để ứng dụng on-premises có thể truy cập S3 như là local file system và có local cache để đảm bảo việc truy cập với độ trễ thấp (low-latency) cho data truy cập thường xuyên (frequently accessed data) |
| **18** | Robust, continuously available, and resilient DynamoDB architecture to maintain a seamless gaming experience | **DynamoDB global tables**                    | Giúp đảm bảo tính khả dụng cao và khả năng chịu lỗi đồng thời có thể phục vụ được lượng người dùng trên khắp thế giới tốt hơn                                                                                                                     |
| **19** | Data must not be lost because of a scaling event                                                             | **Amazon Simple Queue Service (SQS)**         | SQS queue đóng vai trò buffer cho việc truyền data đến mỗi nhóm EC2, từ đó giúp đảm bảo không mất data khi EC2 scale                                                                                                                              |
| **20** | Solution storage for on-premises block storage                                                               | **Volume Gateway**                            | Volume Gateway tương thích với block storage (iSCSI protocol)                                                                                                                                                                                     |
| **21** | Data đọc nhiều, ghi ít                                                                                       | **ElastiCache**                               | DB dạng quan hệ mà data đọc nhiều, ghi ít thì có thể sử dụng ElastiCache để cache data                                                                                                                                                            |
| **21** | Traffic to Amazon S3 does not use the public endpoint                                                        | **Gateway VPC endpoint**                      | VPC endpoint cho phép application trong VPC access đến các service khác một cách an toàn, không đi qua internet                                                                                                                                   |
| **22** | Structured database must be scalable                                                                         | **Aurora Serverless**                         | Aurora Serverless hỗ trợ DB dạng quan hệ có khả năng tự scale để đáp ứng traffic                                                                                                                                                                  |
| **23** | DB credentials be encrypted and rotated                                                                      | **Secrets Manager**                           | AWS Secrets Manager là service giúp lưu trữ các thông tin quan trọng như db credentials, username, password, v.v.. một cách an toàn với cơ chế làm mới (rotation) định kỳ                                                                         |
| **24** | Connect on-premise to VPC securely                                                                           | **Site-to-Site VPN**                          | Để kết nối on-premise đến VPC an toàn, có mã hoá trên đường truyền thì có thể sử dụng Site-to-Site VPN                                                                                                                                            |
| **25** | Storage solution tương thích NFS khi migrate                                                                 | **Elastic File System (Amazon EFS)**          | EFS là fully managed NFS service, hỗ trợ NFS                                                                                                                                                                                                      |
| **26** | Traffic TCP                                                                                                  | **Network Load Balancer, Global Accelerator** | Network Load Balancer là lựa chọn tối ưu vì được thiết kế đặc biệt cho Layer 4 (TCP/UDP)                                                                                                                                                          |
| **27** | Fileshare for Linux instance                                                                                 | **Elastic File System (Amazon EFS)**          | EFS là managed service cho phép các EC2 instances Linux truy cập cùng lúc vào cùng một file system                                                                                                                                                |
| **28** | Sử dụng S3 không biết trước tần suất                                                                         | **S3 Intelligent-Tiering**                    | S3 Intelligent-Tiering tự động chuyển đổi giữa các storage class dựa trên tần suất truy cập thực tế, tính khả dụng cao, chỉ trả phí theo usage thực tế                                                                                            |
| **29** | Dynamic content globally                                                                                     | **CloudFront**                                | Dù CloudFront chủ yếu dùng để cache static content tại edge locations gần user, giúp giảm độ trễ nhưng nó cũng giúp cho việc delivery dyanmic content đến người dùng một cách nhanh hơn                                                           |
| **30** | Connect on-premise to AWS accounts with DirectConnect                                                        | **AWS Transit Gateway**                       | Transit Gateway cho phép quản lí kết nối tập trung giữa nhiều accounts và môi trường on-premises thông qua một cổng kết nối duy nhất                                                                                                              |
| **31** | Temporary access to S3 & tích hợp tốt với IAM Identity Center                                                | **IAM Roles Anywhere**                        | IAM Roles Anywhere cho phép workload on-premises sử dụng credentials tạm thời thông qua certificate-based authentication                                                                                                                          |
| **32** | Backup tự động lưu trữ > 35 ngày                                                                             | **AWS Backup**                                | AWS Backup là managed service hỗ trợ backup tự động với thời gian lưu trữ vô thời hạn (RDS automated backups chỉ hỗ trợ lưu trữ tối đa 35 ngày)                                                                                                   |
| **32** | Phục hồi db về thời điểm cụ thể                                                                              | **Point-in-time recovery**                    | Là cơ chế backup tăng tiến tự động của RDS, giúp có thể quay lại bất cứ thời điểm nào trong quá khứ (tối đa 35 ngày)                                                                                                                              |

<a name="6"></a>

## 📌 6. Sample tư duy trả lời câu hỏi khi luyện đề

- Dưới đây là ví dụ vài câu hỏi theo Domain kèm chiến lược phân tích trả lời cụ thể để bạn làm quen tư duy luyện đề hiểu quả.
  - ⚠️ Để tôn trọng bản quyền tác giả thì các câu hỏi trong bộ Practice Exams mình đã từng luyện sẽ không đề cập tại đây.

### 1️⃣ Domain Design Secure Architectures

- 🎯 Mục tiêu: Đảm bảo ứng dụng an toàn, cách ly và kiểm soát truy cập.

#### Question 1:

- > Which of the following is the best method to quickly and temporarily deny access from the specified IP addresses?  
  > A. Configure the firewall in the operating system of the EC2 instances to deny access from the IP address block.  
  > B. Create a policy in IAM to deny access from the IP Address block.  
  > C. Add a rule in the Security Group of the EC2 instances to deny access from the IP Address block.  
  > D. Modify the Network Access Control List associated with all public subnets in the VPC to deny access from the IP Address block.

- 🧩 Bối cảnh:

  - Hệ thống đang chạy trên EC2 instance trong VPC, và có yêu cầu chặn tạm thời nhanh các IP cụ thể → chặn IP không mong muốn truy cập vào hệ thống một cách nhanh, gọn và ít gây ảnh hưởng.

- 🧐 Phân tích đáp án:

  | Option | Phân tích                                                                                                                                                                                                                    | Kết quả |
  | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
  | **A**  | Có thể làm được (vd: iptables trong Linux, Windows Firewall), **nhưng không “quick” và không “temporary-friendly” ở quy mô nhiều instance**. Phải SSH vào từng máy, không quản lý tập trung. Không phải best practice AWS.   | ⚠️      |
  | **B**  | **Sai logic.** IAM policy chỉ điều khiển **API calls đến AWS services**, không áp dụng cho network traffic đến EC2 (HTTP, SSH, v.v.). Không thể chặn IP truy cập vào instance qua IAM.                                       | ❌      |
  | **C**  | **Sai kỹ thuật.** Security Group trong AWS chỉ có **allow rules (whitelist)**, **không có deny rules**. Bạn chỉ có thể loại bỏ rule “allow” chứ không “deny” IP cụ thể.                                                      | ❌      |
  | **D**  | ✅ **Đây là cách đúng nhất.** NACL hỗ trợ **explicit deny rule** và áp dụng ở **mức subnet**, nên bạn có thể chặn nhanh 1 dải IP trên toàn subnet (public-facing layer). Phù hợp cho yêu cầu “quickly and temporarily deny”. | ✅      |

#### Question 2:

- > There was an incident in your production environment where user data stored in an S3 bucket was accidentally deleted by one of the engineers.
  > You are tasked to improve the protection of your S3 objects from both accidental deletion and overwriting.
  >
  > Which combination of the following will protect your data? (Select TWO)
  >
  > A. Enable Multi-Factor Authentication Delete  
  > B. Disallow S3 Delete using an IAM bucket policy  
  > C. Enable Versioning  
  > D. Provide access strictly through pre-signed URLs  
  > E. Enable S3 Intelligent-Tiering

- 🧩 Bối cảnh:

  - Dữ liệu bị xóa nhầm bởi người thật (DevOps engineer) → đây không phải lỗi hệ thống, mà là human error.

  - Mục tiêu: ngăn xóa nhầm và ghi đè nhầm (overwriting).

- 🧐 Phân tích đáp án:

  | Option                                     | Phân tích                                                                                                                  | Kết luận                                                     |
  | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
  | **A. Enable MFA Delete**                   | Bật thêm MFA Delete để yêu cầu xác thực bằng token MFA khi thực hiện hành động delete object hoặc disable versioning.      | ✅ Bảo vệ mạnh chống xóa nhầm.                               |
  | **B. Disallow S3 Delete using IAM policy** | Nếu chặn `s3:DeleteObject` hoàn toàn thì **sẽ không xóa được kể cả khi cần thiết**. Không thực tế, vì đôi khi cần cleanup. | ⚠️ Có thể dùng cho tạm thời, nhưng không phải best practice. |
  | **C. Enable Versioning**                   | Khi bật Versioning, mỗi lần ghi đè (PUT) hoặc xóa sẽ **tạo một phiên bản mới**, không mất dữ liệu cũ.                      | ✅ Bảo vệ khỏi ghi đè và xóa nhầm.                           |
  | **D. Pre-signed URL only**                 | Chỉ là cách kiểm soát truy cập tạm thời (URL có expiration). Không bảo vệ dữ liệu đã lưu.                                  | ❌ Không liên quan.                                          |
  | **E. S3 Intelligent-Tiering**              | Là lớp lưu trữ tự động tối ưu chi phí dựa trên tần suất truy cập.                                                          | ❌ Không liên quan tới bảo vệ dữ liệu.                       |

#### Question 3:

- > Your company needs to store sensitive customer data in Amazon S3.
  > The security team requires that all objects are encrypted using keys managed by AWS.
  >
  > Which solution should you choose?
  >
  > A. SSE-S3  
  > B. SSE-KMS  
  > C. SSE-C  
  > D. Client-side encryption

- 🧩 Bối cảnh:

  - Dữ liệu là sensitive customer data → yêu cầu bảo mật cao.

  - Có yêu cầu “keys managed by AWS” → tức là không phải do khách hàng tự quản lý.

  - Không có yêu cầu “bring your own key” hoặc “client-side encryption”.

- 🧐 Phân tích đáp án:

  | Option                        | Mô tả                                                                | Đánh giá                                                                                                                         |
  | ----------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
  | **A. SSE-S3**                 | Mã hóa do S3 quản lý key AES-256, AWS tự quản lý toàn bộ.            | AWS quản lý key nhưng không kiểm soát được quyền truy cập hoặc audit log. Phù hợp khi yêu cầu chỉ là “AWS quản lý key đơn giản”. |
  | **B. SSE-KMS**                | Dùng AWS Key Management Service quản lý key, có audit log, rotation. | Vẫn là AWS-managed keys nhưng có kiểm soát & logging tốt hơn. ✅                                                                 |
  | **C. SSE-C**                  | Customer-provided keys, khách hàng phải tự gửi key khi upload.       | ❌ Không phải AWS quản lý key.                                                                                                   |
  | **D. Client-side encryption** | Mã hóa trước khi upload, AWS không biết key.                         | ❌ Không phù hợp với yêu cầu.                                                                                                    |

#### Question 4:

- > A company needs to provide its employees with secure access to confidential and sensitive files.  
  > The company wants to ensure that the files can be accessed only by authorized users. The files must be downloaded securely to the employees’ devices.  
  > The files are stored in an on-premises Windows file server. However, due to an increase in remote usage, the file server is running out of capacity.
  >
  > Which solution will meet these requirements?
  >
  > A.Migrate the file server to an Amazon EC2 instance in a public subnet. Configure the security group to limit inbound traffic to the employees’ IP addresses.  
  > B.Migrate the files to an Amazon FSx for Windows File Server file system. Integrate the Amazon FSx file system with the on-premises Active Directory (AD). Configure AWS Client VPN.  
  > C.Migrate the files to Amazon S3, and create a private VPC endpoint. Create a signed URL to allow download.  
  > D.Migrate the files to Amazon S3, and create a public VPC endpoint. Allow employees to sign on with AWS IAM Identity Center (AWS Single Sign-On).

- 🧩 Bối cảnh:

  - Công ty đang có Windows file server on-premises, chứa tài liệu nhạy cảm, bảo mật cao, phục vụ nhân viên nội bộ.

  - Chỉ người được ủy quyền (authorized users) mới truy cập được.

  - File phải được download an toàn về máy nhân viên.

  - Nhưng số người làm việc từ xa (remote users) tăng mạnh → File server cũ quá tải (out of capacity).

- 🧐 Phân tích đáp án:

  | **Option** | **Phân tích**                                                                                                                                                                                                                                                                                                                                                                                                                                      | **Kết quả** |
  | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: |
  | **A.**     | Không an toàn/không thực tế: Security Group là dựa trên IP — khó quản lý khi nhân viên remote có IP động; public subnet tăng bề mặt tấn công; không có tích hợp với AD để đảm bảo chỉ **authorized users** được truy cập.                                                                                                                                                                                                                          |     ❌      |
  | **B**      | ✅ Phù hợp nhất: **FSx for Windows** cung cấp SMB native, tích hợp với Active Directory để dùng authentication/authorization sẵn có (chỉ người dùng AD được phép). **AWS Client VPN** cung cấp kết nối TLS/IPsec an toàn từ thiết bị nhân viên đến VPC, cho phép mount share như trên mạng nội bộ — file được truyền/download qua kết nối mã hoá và chỉ người được ủy quyền mới truy cập. Thiết kế phù hợp cho lift-and-shift file server Windows. |     ✅      |
  | **C**      | S3 + signed URL có thể cho download an toàn theo từng link, nhưng **signed URL là "possession-based"** (ai có URL là có thể download) và không tích hợp trực tiếp với AD user auth; private VPC endpoint chỉ dành cho nguồn truy cập từ trong VPC — không giải quyết trực tiếp remote users trừ khi có application/proxy trung gian. Không đảm bảo quy mô quản lý truy cập người dùng AD.                                                          |     ⚠️      |
  | **D**      | Sai/không hợp lý: "Public VPC endpoint" không đúng khái niệm; dùng IAM Identity Center để cấp quyền truy cập S3 có thể làm được nhưng thường cần thêm ứng dụng/portal để phục vụ download file (S3 không là file share SMB native), và triển khai này thường đòi hỏi thay đổi client workflow. So với FSx + VPN, giải pháp này phức tạp hơn và không trực tiếp cung cấp SMB experience.                                                            |     ❌      |

### 2️⃣ Domain Design Resilient Architectures

- 🎯 Mục tiêu: Đảm bảo hệ thống chịu lỗi, tự phục hồi và tính sẵn sàng cao.

### 3️⃣ Domain Design High-Performing Architectures

- 🎯 Mục tiêu: Tối ưu hiệu năng và tính mở rộng (scalability).

#### Question 1:

- > You are working for a FinTech startup as their AWS Solutions Architect.
  > You deployed an application on an Amazon EC2 instance with attached Instance Store volumes and an Elastic IP address.
  > The server is only accessed from 8 AM to 6 PM and can be stopped from 6 PM to 8 AM for cost efficiency using Lambda with the script that automates this based on tags.
  >
  > Which of the following will occur when the EC2 instance is stopped and started? (Select TWO.)
  >
  > A. All data on the attached instance-store devices will be lost  
  > B. There will be no changes  
  > C. The ENI (Elastic Network Interface) is detached  
  > D. The underlying host for the instance is possibly changed  
  > E. The Elastic IP address is disassociated with the instance

- 🧩 Bối cảnh:

  - Một startup FinTech có ứng dụng chạy trên Amazon EC2 instance.

  - EC2 có:

    - Instance Store volumes (tức là ephemeral storage — lưu tạm trên host vật lý).

    - Elastic IP address (địa chỉ IP tĩnh có thể gán lại).

  - Để tiết kiệm chi phí, instance được tự động stop từ 6 PM → 8 AM bằng Lambda script.

  - Khi EC2 bị stop và start lại, ta cần biết những thay đổi nào sẽ xảy ra.

- 🧐 Phân tích đáp án:

  | **Option** | **Phân tích chi tiết**                                                                                                                                                                                   | **Kết quả** |
  | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
  | **A**      | Instance Store lưu trực tiếp trên **host vật lý**, nên khi EC2 bị stop (host được giải phóng), **toàn bộ dữ liệu trên Instance Store sẽ bị mất**. Chỉ **EBS volume** mới giữ lại dữ liệu sau stop/start. | ✅          |
  | **B**      | Khi stop/start, **có thay đổi**: Instance Store mất dữ liệu, underlying host có thể thay đổi. Không thể nói “no changes”.                                                                                | ❌          |
  | **C**      | **Primary ENI** vẫn gắn với instance sau stop/start. Chỉ khi **terminate** instance thì ENI mới bị xóa (nếu cấu hình mặc định).                                                                          | ❌          |
  | **D**      | Khi start lại, instance có thể được gán sang **một host vật lý khác** trong cùng AZ. Đây là hành vi bình thường khi stop/start.                                                                          | ✅          |
  | **E**      | Elastic IP vẫn được giữ lại và **gắn lại với instance khi start lại**. Chỉ bị mất khi **terminate** hoặc **release** thủ công.                                                                           | ❌          |

#### Question 2:

- > An online shopping platform is hosted on an Auto Scaling group of Spot EC2 instances and uses Amazon Aurora PostgreSQL as its database.
  > There is a requirement to optimize your database workloads in your cluster where you have to direct the write operations of the production traffic to your high-capacity instances and point the reporting queries sent by your internal staff to the low-capacity instances.
  >
  > Which is the most suitable configuration for your application as well as your Aurora database cluster to achieve this requirement?
  >
  > A. Do nothing since by default, Aurora will automatically direct the production traffic to your high-capacity instances and the reporting queries to your low-capacity instances.  
  > B. In your application, use the instance endpoint of your Aurora database to handle the incoming production traffic and use the cluster endpoint to handle reporting queries.  
  > C. Configure your application to use the reader endpoint for both production traffic and reporting queries, which will enable your Aurora database to automatically perform load-balancing among all the Aurora Replicas.  
  > D. Create a custom endpoint in Aurora based on the specified criteria for the production traffic and another custom endpoint to handle the reporting queries.

- 🧩 Bối cảnh:

  - Doanh nghiệp là nền tảng thương mại điện tử (online shopping platform) chạy trên EC2 Auto Scaling group dùng Spot Instances → nghĩa là lớp ứng dụng hướng đến tối ưu chi phí và tự động mở rộng.

  - Phần database sử dụng Amazon Aurora PostgreSQL, là database cluster có tính năng tự động mở rộng và tách biệt writer – reader.

  - Phải tối ưu workload của database cluster sao cho:

    - Các tác vụ ghi (write operations) của production traffic → gửi đến high-capacity instances (máy mạnh, ưu tiên hiệu năng).

    - Các truy vấn báo cáo nội bộ (reporting queries) → chạy trên low-capacity instances (máy yếu hơn, tiết kiệm chi phí).

- 🧐 Phân tích đáp án:

  | **Option** | **Phân tích**                                                                                                                                                                                                                                                                                                                                                                                                                        | **Kết quả** |
  | :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------: |
  |   **A**    | Sai. **Aurora không tự động phân biệt** “production write” vs “reporting read” theo kiểu chọn instance dựa trên capacity. Mặc định: **writes → writer (cluster endpoint)**; **reads → reader endpoint (tự load-balance trên tất cả read replicas)**. Nó không tự phân chia theo “high-capacity vs low-capacity” trừ khi bạn cấu hình cụ thể.                                                                                         |     ❌      |
  |   **B**    | Sai / không phù hợp. **Instance endpoint** trỏ tới một instance cụ thể (có thể dùng nếu bạn muốn target 1 node duy nhất). **Cluster endpoint** là điểm đến cho writer (viết). Đổi chỗ như đề xuất (instance → production, cluster → reporting) là ngược lại so với chức năng chuẩn và sẽ phá vỡ write/read routing.                                                                                                                  |     ❌      |
  |   **C**    | Sai và cực kỳ rủi ro. **Reader endpoint** chỉ cho reads — nếu bạn gửi writes production vào reader endpoint sẽ bị lỗi (writer-only operations fail). Dù reader endpoint load-balance reads, nó không phân biệt replica “low-capacity” hay “high-capacity” theo mục đích; không đáp ứng yêu cầu.                                                                                                                                      |     ❌      |
  |   **D**    | Đúng. **Custom endpoints (Aurora)** cho phép bạn tạo **endpoint nhóm** gồm một tập con của Aurora Replicas theo tiêu chí (tags, instance role, instance class, v.v.). Bạn có thể: đặt writer là high-capacity; tạo **custom reader endpoint** nhóm các read replicas low-capacity dành cho reporting; và (nếu cần) tạo endpoint dành cho production reads that need higher-capacity replicas. Đây là cách linh hoạt và phù hợp nhất. |     ✅      |

#### Question 3:

- > A Docker application, which is running on an Amazon ECS cluster behind a load balancer, is heavily using DynamoDB.
  > You are instructed to improve the database performance by distributing the workload evenly and using the provisioned throughput efficiently.
  >
  > Which of the following would you consider to implement for your DynamoDB table?
  >
  > A. Reduce the number of partition keys in the DynamoDB table.  
  > B. Use partition keys with high-cardinality attributes, which have a large number of distinct values for each item.  
  > C. Use partition keys with low-cardinality attributes, which have a few number of distinct values for each item.  
  > D. Avoid using a composite primary key, which is composed of a partition key and a sort key.

- 🧩 Bối cảnh:

  - Một ứng dụng Docker chạy trên Amazon ECS (Elastic Container Service).

  - Đứng sau một Load Balancer → nghĩa là có thể có nhiều task xử lý song song, truy cập vào cùng một DynamoDB table.

  - DynamoDB đang bị performance issue → có nghĩa là workload không được phân phối đều giữa các partition.

  - Yêu cầu tránh hotspot và tận dụng đều throughput trên các partition của DynamoDB.

- 🧐 Phân tích đáp án:

  | **Option** | **Phân tích chi tiết**                                                                                                                                                                                                                     | **Kết quả** |
  | :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------: |
  |   **A**    | Làm giảm số partition key khác nhau → tập trung truy cập vào ít partition hơn → tăng nguy cơ **hot partition**. Trái với mục tiêu “distribute workload evenly”.                                                                            |     ❌      |
  |   **B**    | ✅ Đúng. High-cardinality (nhiều giá trị khác nhau) giúp dữ liệu được phân phối đều qua nhiều partition vật lý → giảm hotspot, tận dụng tốt throughput. Đây là **best practice** DynamoDB cho workload có nhiều concurrent requests.       |     ✅      |
  |   **C**    | Low-cardinality (ít giá trị khác nhau, ví dụ `status = "active"/"inactive"`) khiến nhiều item chia sẻ cùng một partition key → dễ gây **bottleneck**.                                                                                      |     ❌      |
  |   **D**    | Sai. Composite key thường **giúp tối ưu truy cập và phân phối dữ liệu** (vì cùng partition key có thể sắp xếp bằng sort key). Tránh dùng composite key không giúp phân phối tốt hơn — thậm chí có thể làm giảm tính linh hoạt trong query. |     ❌      |

### 4️⃣ Domain Design Cost-Optimized Architectures

- 🎯 Mục tiêu: Giảm chi phí nhưng vẫn đảm bảo hiệu năng và độ tin cậy.

#### Question 1:

- > A retail website has intermittent, sporadic, and unpredictable transactional workloads throughout the day that are hard to predict. The website is currently hosted on-premises and is slated to be migrated to AWS. A new relational database is needed that autoscale capacity to meet the needs of the application's peak load and scales back down when the surge of activity is over.
  >
  > Which of the following option is the MOST cost-effective and suitable database setup in this scenario?
  >
  > A. Launch an Amazon Aurora Provisioned DB cluster with burstable performance DB instance class types.  
  > B. Launch an Amazon Redshift data warehouse cluster with Concurrency Scaling.  
  > C. Launch an Amazon Aurora Serverless DB cluster then set the minimum and maximum capacity for the cluster.  
  > D. Launch a DynamoDB Global table with Auto Scaling enabled.

- 🧩 Bối cảnh:

  - Một website bán lẻ (retail website) hiện đang on-premises, sắp migrate lên AWS.

  - Đặc điểm workload:

    - Transactional workload (OLTP) → tức là insert/update/delete, đơn hàng, thanh toán, giỏ hàng...

    - Intermittent, sporadic, unpredictable → lưu lượng không đều, có thể tăng đột biến theo thời điểm (ví dụ giờ cao điểm mua sắm, flash sale) rồi giảm mạnh.

    - Cần relational database.

  - Yêu cầu: tự động scale (autoscaling capacity) lên khi peak, xuống khi idle → để tiết kiệm chi phí.

- 🧐 Phân tích đáp án:

  | **Option** | **Phân tích**                                                                                                                                                                                                                                                                                                                                                                                                       | **Kết quả** |
  | :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------: |
  |   **A**    | Provisioned instances (even burstable like t-class) vẫn yêu cầu bạn chọn kích thước trước — không tự động scale CPU/memory/storage theo tải OLTP theo cách mượt mà như serverless. Burstable instances có thể bùng nổ trong ngắn hạn nhưng không phù hợp cho **liên tục** xử lý các spike không thể dự đoán và có thể gặp giới hạn credits; bạn phải quản lý scaling (manual/Auto Scaling of instances is limited). |     ❌      |
  |   **B**    | Redshift là **data warehouse** cho analytics/batch queries, không phải hệ quản trị quan hệ OLTP transactional cho website bán lẻ. Concurrency Scaling giúp xử lý tải truy vấn phân tích, nhưng không phù hợp cho transactional workloads và không phải là lựa chọn cost-effective cho OLTP.                                                                                                                         |     ❌      |
  |   **C**    | **Đúng phù hợp.** Aurora Serverless (đặc biệt Aurora Serverless v2) autoscale capacity theo workload, tự tăng khi peak và giảm khi không cần nữa. Hỗ trợ transactional relational workloads, giữ tính tương thích với MySQL/PostgreSQL, và thường là giải pháp tiết kiệm chi phí cho **intermittent & unpredictable** traffic. Bạn có cấu hình min/max ACU và scaling policies.                                     |     ✅      |
  |   **D**    | DynamoDB là NoSQL, cực kỳ scale tốt và cost-efficient cho nhiều transactional usecases, nhưng **câu hỏi yêu cầu “a new relational database”** — nghĩa là cần RDBMS. Chuyển sang DynamoDB đòi hỏi redesign schema/queries; do đó không phải lựa chọn trực tiếp phù hợp với yêu cầu.                                                                                                                                  |     ❌      |
