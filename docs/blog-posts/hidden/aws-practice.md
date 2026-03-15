---
title: Luyện đề AWS SAA
---

# Chiến lược luyện đề AWS SAA

Đây là giai đoạn kiểm tra kiến thức, củng cố tư duy thiết kế hệ thống trên AWS và làm quen dần với phong cách câu hỏi thực tế có trong kỳ thi AWS SAA.

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

[4. Learning Map AWS SAA](#4)

[5. Sample tư duy trả lời câu hỏi khi luyện đề](#5)

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

- **Hình thức**: Thi trên máy tính tại Test center hoặc thi online tại nhà (qua webcam & micro).

- **Quy định thi**:
  - ✧ Có timer đếm ngược góc màn hình.
  - ✧ Có thể xem lại và đổi đáp án trước khi nộp.
  - ✧ Không cho mở web, tài liệu, hay ghi chép ngoài (vì bị giám sát webcam nếu thi online).

- **Đánh giá kết quả**: Hình thức là Pass/Fail (điểm số Pass: 720/1000 điểm tương ứng 36/50 câu tính điểm).

- **Thời gian có kết quả**: Có trên màn hình ngay sau khi thi xong.
  - ✧ Bảng điểm chi tiết cần tối đa 5 ngày làm việc để xử lý và xác minh kết quả.
  - ✧ Khi có bảng điểm chi tiết thì bạn sẽ nhận được mail từ AWS để xem hoặc tải.
  - ✧ Chứng chỉ thường có trong vòng 24–48 giờ sau khi kết quả được xác minh (nếu Pass).

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

- Có thể tham khảo bộ đề luyện thi tại [cloudexam.pro](https://cloudexam.pro/course/practice-exams-aws-certified-solutions-architect-associate).

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

## 📌 4. Learning Map AWS SAA

| #       | Tình huống / Keyword trong đề                                                                                | Service / Giải pháp chính                                                   | Ghi chú                                                                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1**   | API Gateway access control limited IP                                                                        | **Create a resource policy**                                                | Resource Policy là một cách không mất tiền để định nghĩa quyền kiểm soát truy cập API Gateway theo IP                                                                                                                                                |
| **2**   | Active Directory + AWS Organizations                                                                         | **IAM Identity Center**                                                     | Liên kết người dùng Active Directory để cho phép truy cập account trong Organization                                                                                                                                                                 |
| **3**   | Distribution rights content around the world                                                                 | **Route53 Geolocation Routing Policy**                                      | Cho phép định tuyến traffic dựa trên vị trí địa lý của user                                                                                                                                                                                          |
| **4**   | Traffic (to S3, DynamoDB) from the application must not travel across the internet                           | **Gateway Endpoint**                                                        | Gateway Endpoint cho S3 là dịch vụ miễn phí, cho phép kết nối đến S3 với traffic đi trực tiếp trong đường truyền nội bộ của AWS, không qua internet                                                                                                  |
| **5**   | Improve the performance of the static website                                                                | **CloudFront**                                                              | CloudFront là CDN service, cho phép cache các loại data như content tĩnh ở điểm cung cấp dịch vụ gần với người dùng nhất (edge locations), từ đó giúp giảm độ trễ                                                                                    |
|         |                                                                                                              | **S3 Transfer Acceleration**                                                | S3 Transfer Acceleration là một tính năng của S3 cho phép upload bằng cách route traffic đến edge location, từ đó đi qua mạng nội bộ của AWS, giúp giảm độ trễ                                                                                       |
| **6**   | Workflow                                                                                                     | **Step Functions**                                                          | Step Functions là serverless service giúp điều phối & tự động hoá, cho phép build các luồng công việc (workflow) phức tạp                                                                                                                            |
| **7**   | Image processing jobs                                                                                        | **Lambda, ECS Fargate, AWS Batch**                                          | Chạy job mà tốn ít effort, không phải quản lý toàn bộ cơ sở hạ tầng. Nếu jobs chạy trên 15 phút sẽ loại ngay Lambda, ưu tiên chọn các solution managed, serverless như ECS Fargate, Batch. Nếu thời gian dưới 15 phút thì thường sẽ lựa chọn Lambda. |
| **8**   | EC2 instances run 100% CPU                                                                                   | **Auto Scaling Group**                                                      | Tự động scale khi bị bottleneck (nút thắt cổ chai) ở EC2 Processing Tier                                                                                                                                                                             |
| **9**   | SQS queue fills up                                                                                           | **ApproximateNumberOfMessages**                                             | Trigger scale EC2 khi số lượng message đang có trong queue nhiều mà không xử lý hết                                                                                                                                                                  |
| **10**  | Migrate lift-and-shift or migrate server                                                                     | **Application Migration Service**                                           | Thực hiện migrate server từ on-premise lên AWS thông qua hình thức lift-and-shift (di chuyển nguyên trạng)                                                                                                                                           |
| **11**  | Application stateless need to scale                                                                          | **Auto Scaling Group & Spot Instances**                                     | Spot Fleet giúp tiết kiệm, dù có thể bị thu hồi nhưng application stateless và có khả năng chịu lỗi cao nên không ảnh hưởng                                                                                                                          |
| **12**  | ETL (extract-transform-load)                                                                                 | **AWS Glue**                                                                | AWS Glue là dịch vụ ETL serverless, phù hợp cho việc extract-transform-load với ít effort nhất                                                                                                                                                       |
| **13**  | Deploy the static content                                                                                    | **S3 + CloudFront**                                                         | S3 + CloudFront là giải pháp tối ưu cho static content, scale không giới hạn                                                                                                                                                                         |
| **14**  | Rapidly evolve schema                                                                                        | **DynamoDB**                                                                | DynamoDB là NoSQL Databse nên sẽ hỗ trợ schema linh hoạt                                                                                                                                                                                             |
| **15**  | Sentiment analysis                                                                                           | **Amazon Comprehend**                                                       | Amazon Comprehend là dịch vụ chuyên dụng cho sentiment analysis để thực hiện phân tích thái độ                                                                                                                                                       |
| **16**  | Slow for International Customers                                                                             | **AWS Global Accelerator**                                                  | Global Accelerator là giải pháp giúp tăng tốc, cải thiện hiệu suất cho phép các kết nối trên khắp thế giới đến hệ thống một cách nhanh nhất thông qua mạng lưới nội bộ toàn cầu của AWS                                                              |
| **17**  | Storage solution for application on premises                                                                 | **S3 File Gateway**                                                         | S3 File Gateway cung cấp NFS/SMB interface để ứng dụng on-premises có thể truy cập S3 như là local file system và có local cache để đảm bảo việc truy cập với độ trễ thấp (low-latency) cho data truy cập thường xuyên (frequently accessed data)    |
| **18**  | Robust, continuously available, and resilient DynamoDB architecture to maintain a seamless gaming experience | **DynamoDB global tables**                                                  | Giúp đảm bảo tính khả dụng cao và khả năng chịu lỗi đồng thời có thể phục vụ được lượng người dùng trên khắp thế giới tốt hơn                                                                                                                        |
| **19**  | Data must not be lost because of a scaling event                                                             | **Amazon Simple Queue Service (SQS)**                                       | SQS queue đóng vai trò buffer cho việc truyền data đến mỗi nhóm EC2, từ đó giúp đảm bảo không mất data khi EC2 scale                                                                                                                                 |
| **20**  | Solution storage for on-premises block storage                                                               | **Volume Gateway**                                                          | Volume Gateway tương thích với block storage (iSCSI protocol)                                                                                                                                                                                        |
| **21**  | Data đọc nhiều, ghi ít                                                                                       | **ElastiCache**                                                             | DB dạng quan hệ mà data đọc nhiều, ghi ít thì có thể sử dụng ElastiCache để cache data                                                                                                                                                               |
| **21**  | Traffic to Amazon S3 does not use the public endpoint                                                        | **Gateway VPC endpoint**                                                    | VPC endpoint cho phép application trong VPC access đến các service khác một cách an toàn, không đi qua internet                                                                                                                                      |
| **22**  | Structured database must be scalable                                                                         | **Aurora Serverless**                                                       | Aurora Serverless hỗ trợ DB dạng quan hệ có khả năng tự scale để đáp ứng traffic                                                                                                                                                                     |
| **23**  | DB credentials be encrypted and rotated                                                                      | **Secrets Manager**                                                         | AWS Secrets Manager là service giúp lưu trữ các thông tin quan trọng như db credentials, username, password, v.v.. một cách an toàn với cơ chế làm mới (rotation) định kỳ                                                                            |
| **24**  | Connect on-premise to VPC securely                                                                           | **Site-to-Site VPN**                                                        | Để kết nối on-premise đến VPC an toàn, có mã hoá trên đường truyền thì có thể sử dụng Site-to-Site VPN                                                                                                                                               |
| **25**  | Storage solution tương thích NFS khi migrate                                                                 | **Elastic File System (Amazon EFS)**                                        | EFS là fully managed NFS service, hỗ trợ NFS                                                                                                                                                                                                         |
| **26**  | Traffic TCP                                                                                                  | **Network Load Balancer, Global Accelerator**                               | Network Load Balancer là lựa chọn tối ưu vì được thiết kế đặc biệt cho Layer 4 (TCP/UDP)                                                                                                                                                             |
| **27**  | Fileshare for Linux instance                                                                                 | **Elastic File System (Amazon EFS)**                                        | EFS là managed service cho phép các EC2 instances Linux truy cập cùng lúc vào cùng một file system                                                                                                                                                   |
| **28**  | Sử dụng S3 không biết trước tần suất                                                                         | **S3 Intelligent-Tiering**                                                  | S3 Intelligent-Tiering tự động chuyển đổi giữa các storage class dựa trên tần suất truy cập thực tế, tính khả dụng cao, chỉ trả phí theo usage thực tế                                                                                               |
| **29**  | Dynamic content globally                                                                                     | **CloudFront**                                                              | Dù CloudFront chủ yếu dùng để cache static content tại edge locations gần user, giúp giảm độ trễ nhưng nó cũng giúp cho việc delivery dyanmic content đến người dùng một cách nhanh hơn                                                              |
| **30**  | Connect on-premise to AWS accounts with DirectConnect                                                        | **AWS Transit Gateway**                                                     | Transit Gateway cho phép quản lí kết nối tập trung giữa nhiều accounts và môi trường on-premises thông qua một cổng kết nối duy nhất                                                                                                                 |
| **31**  | Temporary access to S3 & tích hợp tốt với IAM Identity Center                                                | **IAM Roles Anywhere**                                                      | IAM Roles Anywhere cho phép workload on-premises sử dụng credentials tạm thời thông qua certificate-based authentication                                                                                                                             |
| **32**  | Backup tự động lưu trữ > 35 ngày                                                                             | **AWS Backup**                                                              | AWS Backup là managed service hỗ trợ backup tự động với thời gian lưu trữ vô thời hạn (RDS automated backups chỉ hỗ trợ lưu trữ tối đa 35 ngày)                                                                                                      |
| **32**  | Phục hồi db về thời điểm cụ thể                                                                              | **Point-in-time recovery**                                                  | Là cơ chế backup tăng tiến tự động của RDS, giúp có thể quay lại bất cứ thời điểm nào trong quá khứ (tối đa 35 ngày)                                                                                                                                 |
| **33**  | Encryption at rest                                                                                           | **AWS KMS**                                                                 | Với yêu cầu mã hóa đầu cuối (encryption at rest) thì solution là KMS                                                                                                                                                                                 |
| **34**  | Encryption in transit                                                                                        | **AWS Certificate Manager (ACM) SSL/TLS certificates**                      | Với yêu cầu mã hoá trên đường truyền (encryption in transit) thì cần sử dụng giao thức an toàn có mã hoá như HTTPS TLS SSL                                                                                                                           |
| **35**  | Routing users to the closest server                                                                          | **Route53 Geolocation Routing Policy**                                      | Route53 Geolocation Routing Policy giúp routing người dùng đến server gần nhất                                                                                                                                                                       |
| **36**  | Query data trên S3 không thường xuyên                                                                        | **Amazon Athena**                                                           | Athena là dịch vụ serverless cho phép query data trực tiếp trên S3. Vì là serverless nên sẽ thích hợp cho việc truy vấn occasional (không thường xuyên)                                                                                              |
| **37**  | Cerfiticate in CloudFront to upload the photo files to the S3                                                | **us-east-1**                                                               | Cerfiticate cho CloudFront bắt buộc phải tạo ở region us-east-1                                                                                                                                                                                      |
| **38**  | Use Amazon CloudFront                                                                                        | **CloudFront origin access control (OAC)**                                  | OAC là cách thức được AWS khuyến nghị để giới hạn việc truy cập đến S3 bắt buộc phải thông qua CloudFront, từ đó giúp tăng tính security, tránh việc người dùng truy cập trực tiếp đến S3 mà bỏ qua CloudFront                                       |
| **39**  | Malicious attacks                                                                                            | **Amazon GuardDuty**                                                        | GuardDuty giúp phát hiện hoạt động bất thường, đáng ngờ (malicious)                                                                                                                                                                                  |
| **40**  | Security findings                                                                                            | **AWS Security Hub**                                                        | Security Hub giúp tổng hợp và quản lý các phát hiện security (security findings)                                                                                                                                                                     |
| **41**  | Container with the LEAST operational overhead                                                                | **App2Container**                                                           | App2Container là service chuyên dụng để container hoá các ứng dụng một cách tự động, giảm effort thủ công                                                                                                                                            |
|         |                                                                                                              | **ECS Fargate**                                                             | ECS Fargate là serverless platform để chạy container mà không cần quản lý hạ tầng bên dưới                                                                                                                                                           |
| **42**  | Real-time                                                                                                    | **Kinesis Data Streams**                                                    | Kinesis Data Streams dành cho việc streaming data và processing data trong thời gian thực (real-time)                                                                                                                                                |
| **43**  | Search, real-time update                                                                                     | **OpenSearch**                                                              | OpenSearch Service chuyên cho việc search data, support search data real-time                                                                                                                                                                        |
| **44**  | Visualization                                                                                                | **QuickSight**                                                              | QuickSight là AWS native service cho việc hiển thị hoá data, support liên kết với OpenSearch                                                                                                                                                         |
| **45**  | No data is lost & exactly-once processing                                                                    | **Amazon SQS FIFO**                                                         | SQS đảm bảo data không bị mất, SQS FIFO đảm bảo được việc chỉ xử lý message đúng 1 lần duy nhất (exactly-once processing)                                                                                                                            |
| **46**  | Migrate hundreds of TB or PB of data to AWS                                                                  | **AWS Snowball**                                                            | Với lượng data hàng trăm TB hay hàng PB thì việc migrate hầu như sẽ thực hiện qua Snowball Edge                                                                                                                                                      |
| **47**  | DDoS attack on the website                                                                                   | **AWS WAF by rate-based rules**                                             | WAF có thể hạn chế tấn công DDoS thông qua Rate-based rule                                                                                                                                                                                           |
|         |                                                                                                              | **AWS Shield Advanced**                                                     | AWS Shield Advanced cung cấp khả năng phát hiện và giảm thiểu tấn công DDoS nâng cao với điểm nổi bật là có proactive engagement - AWS chủ động liên hệ và hỗ trợ khách hàng khi phát hiện tấn công                                                  |
| **48**  | Data transfer between regions                                                                                | **S3 Cross-Region Replication (CRR)**                                       | S3 Cross-Region Replication (CRR) giúp truyền data giữa các region                                                                                                                                                                                   |
| **49**  | Database failovers                                                                                           | **Amazon RDS Proxy**                                                        | RDS Proxy giúp giảm thời gian failover cho RDS hoặc Aurora                                                                                                                                                                                           |
| **50**  | Single-digit latency                                                                                         | **Direct Connect**                                                          | Độ trễ hàng mili giây (single-digit latency) kết nối đến môi trường on-premise thì nghĩ đến Direct Connect                                                                                                                                           |
| **51**  | Auto Scaling Group cần scale tự động                                                                         | **target tracking scaling**                                                 | Target tracking scaling là cơ chế tự động scale EC2 dựa trên ngưỡng metric do mình định nghĩa (Vd: CPU 40%). Khi traffic tăng đột biến, sẽ tự động scale out ngay lập tức và scale in khi traffic giảm                                               |
| **52**  | Third-party SaaS + private connectivity                                                                      | **AWS PrivateLink**                                                         | AWS PrivateLink là dịch vụ cho phép tạo private endpoint trong VPC của mình để truy cập các AWS services hoặc third-party services nằm trên AWS mà không cần đi qua internet                                                                         |
| **53**  | Networking inspection                                                                                        | **AWS Gateway Load Balancer**                                               | Gateway Load Balancer là service chuyên dụng cho việc kiểm tra traffic (traffic inspection)                                                                                                                                                          |
| **54**  | Cost breakdown by application                                                                                | **Cost allocation tags + Cost Explorer**                                    | Cost allocation tags cho phép quản lý và phân chia chi phí theo tag, và Cost Explorer cung cấp dashboard trực quan với khả năng tạo report, cập nhật thường xuyên tự động - tất cả đều hoàn toàn miễn phí                                            |
| **55**  | Automatic key rotation                                                                                       | **AWS Managed KMS keys (SSE-KMS)**                                          | Chỉ KMS mới có automatic rotation, tiết kiệm hơn so với customer managed keys (vì không mất phí lưu trữ & quản lý key)                                                                                                                               |
| **56**  | Long-running workloads                                                                                       | **Reserved Instances/Savings Plans**                                        | Cam kết sử dụng dài hạn (3 năm) + thanh toán trả trước toàn bộ (All Upfront) sẽ mang lại mức chiết khấu cao nhất, tối ưu chi phí tốt nhất                                                                                                            |
| **57**  | Share data between multiple instances                                                                        | **Amazon Elastic File System (EFS)**                                        | EFS là file system được thiết kế chuyên để share data giữa nhiều EC2 instances đồng thời                                                                                                                                                             |
| **58**  | Cost optimizations across EC2/Auto Scaling group/EBS                                                         | **Configure AWS Compute Optimizer**                                         | AWS Compute Optimizer là dịch vụ được thiết kế chuyên biệt để phân tích và đưa ra các khuyến cáo về việc tối ưu chi phí cho EC2, Auto Scaling groups và EBS volumes                                                                                  |
| **59**  | Multi-protocol + NFS and SMB                                                                                 | **FSx for NetApp ONTAP**                                                    | FSx for NetApp ONTAP là dịch vụ duy nhất trong các lựa chọn có thể hỗ trợ đồng thời cả NFS và SMB protocols trên cùng một file system                                                                                                                |
| **60**  | Session state + high availability                                                                            | **ElastiCache Redis**                                                       | Cache lưu độc lập bên trong ElastiCache, tách biệt khỏi web server, do đó nếu web server gặp sự cố thì cũng không ảnh hưởng. Có cơ chế replication data → đảm bảo không mất dữ liệu                                                                  |
| **61**  | 24 hours recovery point objective(RPO)/recovery time objective (RTO)                                         | **snapshots**                                                               | Sử dụng Snapshot là đủ, không cần continuous replication như DMS hay Read Replica                                                                                                                                                                    |
| **62**  | Regulatory compliance + prevent deletion/modification                                                        | **S3 Object Lock Compliance Mode**                                          | S3 Object Lock là tính năng cho phép khóa file, bảo vệ file trong S3 khỏi bị xóa hoặc sửa đổi trong một khoảng thời gian nhất định. Compliance Mode sẽ không cho phép ai có thể bypass, kể cả root user - chuyên dùng để đảm bảo tuân thủ            |
| **63**  | Review permissions + over-privileged                                                                         | **S3 Object Lock IAM Access Analyzer**                                      | IAM Access Analyzer được thiết kế chuyên biệt để phân tích permissions và phát hiện unused permissions (quyền được cấp mà không dùng) hoặc over-privileged access (quyền cấp thừa)                                                                   |
| **64**  | Prevent sharing same hardware                                                                                | **Spread Placement Group**                                                  | Spread Placement Group được thiết kế chính xác cho mục đích đặt vị trí EC2 đảm bảo mỗi instance chạy trên phần cứng vật lý riêng biệt (separate underlying hardware)                                                                                 |
| **65**  | pub/sub pattern                                                                                              | **Amazon SNS**                                                              | SNS là service phù hợp đáp ứng cho pub/sub pattern - một publisher có thể gửi message đến nhiều subscribers                                                                                                                                          |
| **66**  | Accessed once or twice per year + immediately available                                                      | **Glacier Instant Retrieval**                                               | Glacier Instant Retrieval phù hợp cho yêu cầu truy cập ít trong năm đầu (năm 1, 2 lần) với độ trễ thấp nhất (immediately available) và chi phí tiết kiệm hơn Standard-IA                                                                             |
| **67**  | Millions of small files                                                                                      | **Group the files into large objects**                                      | Group các file nhỏ thành file to giúp giảm chi phí request cho S3 (hàng triệu files nhỏ = hàng triệu request)                                                                                                                                        |
| **68**  | Millions of objects                                                                                          | **S3 Batch Operations**                                                     | S3 Batch Operations cho phép thao tác hàng loạt trên hàng triệu/tỷ S3 objects                                                                                                                                                                        |
| **69**  | Performance analysis                                                                                         | **CloudWatch Metrics**                                                      | CloudWatch metrics cung cấp sẵn các thông số performance quan trọng như CPU, memory, disk I/O, network để có thể thực hiện phân tích ngay lập tức. Trong khi CloudWatch logs không chứa performance metrics                                          |
| **70**  | Granularity 1-2 minutes                                                                                      | **CloudWatch Detailed Monitoring**                                          | Detailed monitoring là tính năng cho phép CloudWatch thu thập metrics với quãng 1 phút / lần                                                                                                                                                         |
| **71**  | External users + MOST securely + AWS Organizations                                                           | **IAM Identity Center**                                                     | IAM Identity Center quản lý tập trung quyền truy cập vào AWS Account / Console cho các user                                                                                                                                                          |
| **72**  | OS access to private instances                                                                               | **Session Manager**                                                         | Session Manager là chức năng thuộc service Systems Manager cho phép truy cập thẳng vào OS mà không cần SSH keys hay thông qua bastion host                                                                                                           |
| **73**  | Accidentally deleted + Prevent data loss                                                                     | **Recycle Bin**                                                             | Recycle Bin là tính năng AWS cho phép khôi phục EBS Snapshot hoặc AMI đã bị xóa (dù nhầm lẫn) trong khoảng thời gian nhất định                                                                                                                       |
| **74**  | TCP/UDP traffic                                                                                              | **Network Load Balancer & AWS Global Accelerator**                          | Global Accelerator hỗ trợ TCP/UDP raw traffic (còn CloudFront là CDN cho HTTP/HTTPS)                                                                                                                                                                 |
| **75**  | Restrict application to specific prefix                                                                      | **Access Point Policies**                                                   | S3 Access Points cho phép tạo các điểm truy cập (access point) vào S3 với để kiểm soát truy cập theo prefix tương ứng                                                                                                                                |
| **76**  | Third-party certificate authority CA                                                                         | **Import certificate into AWS Certificate Manager (ACM)**                   | ACM không thể tạo certificate được ký bởi third-party CA                                                                                                                                                                                             |
| **77**  | Hybrid environment + on-premises + container                                                                 | **ECS Anywhere**                                                            | ECS Anywhere phù hợp cho chạy container on-premise vì là service cho phép quản lý và chạy containers trên hạ tầng bên ngoài AWS nhưng vẫn sử dụng AWS ECS control plane để điều khiển từ AWS Console                                                 |
| **78**  | SMB clients + LEAST administrative overhead                                                                  | **FSx for Windows File Server**                                             | FSx for Windows File Server là managed service về file share storage cho Windows, hỗ trợ giao thức SMB protocol                                                                                                                                      |
| **78**  | Automatic security controls/guardrails                                                                       | **AWS Control Tower**                                                       | AWS Control Tower giúp setup và bảo vệ multi-account AWS environment (AWS Organizations) một cách tự động                                                                                                                                            |
| **78**  | Centrally managed networking                                                                                 | **AWS RAM**                                                                 | AWS RAM cho phép quản lý tập trung và chia sẻ các networking components như subnet, vpc cho các account khác, giảm thiểu operational overhead vì không cần quản lý riêng lẻ                                                                          |
| **79**  | Store petabytes data                                                                                         | **AWS S3**                                                                  | S3 là dịch vụ object storage có khả năng lưu trữ không giới hạn                                                                                                                                                                                      |
| **80**  | Identify S3 configuration across regions / S3 analytics / Monitor S3 compliance                              | **S3 Storage Lens**                                                         | S3 Storage Lens là công cụ analytics and monitoring chính thức của AWS để theo dõi cấu hình S3                                                                                                                                                       |
| **81**  | SQL Server to PostgreSQL + minimal code changes                                                              | **Babelfish on Aurora PostgreSQL**                                          | S3 Storage Lens là công cụ analytics and monitoring chính thức của AWS để theo dõi cấu hình S3                                                                                                                                                       |
| **82**  | Database migration                                                                                           | **AWS Schema Conversion Tool (SCT) + AWS Database Migration Service (DMS)** | AWS SCT giúp convert schema từ SQL Server sang PostgreSQL, AWS DMS giúp migrate dữ liệu từ source sang target database                                                                                                                               |
| **83**  | Cost Analytics                                                                                               | **Cost and Usage Report → S3 → Athena → QuickSight**                        | QuickSight là dịch vụ BI chuyên dụng cho việc tạo dashboard và visualization từ dữ liệu cost, Athena là công cụ phù hợp nhất để query Cost and Usage Report trực tiếp từ S3                                                                          |
| **84**  | Database query overload                                                                                      | **ElastiCache**                                                             | ElastiCache caching layer giảm tải cho database bằng cách lưu trữ dữ liệu thường xuyên truy cập trong memory, giúp giảm response time và số lượng queries đến Aurora                                                                                 |
| **85**  | SQL injection + XSS                                                                                          | **AWS WAF**                                                                 | AWS WAF được thiết kế chuyên biệt để bảo vệ web applications khỏi các cuộc tấn công layer 7 như SQL injection và XSS                                                                                                                                 |
| **86**  | DDoS attacks                                                                                                 | **AWS Shield**                                                              | AWS Shield bảo vệ chống DDoS attacks (layer 3/4)                                                                                                                                                                                                     |
| **87**  | Email notification                                                                                           | **Amazon Simple Notification Service (SNS)**                                | SNS có thể gửi email notification trực tiếp hoặc integrate với Amazon Simple Email Service (SES)                                                                                                                                                     |
| **88**  | Transport layer                                                                                              | **Network Load Balancer**                                                   | Cần Network Load Balancer để handle TCP/UDP traffic, cung cấp high availability và distribute traffic across instances                                                                                                                               |
| **89**  | Automate OS updates/patching                                                                                 | **AWS Systems Manager Patch Manager**                                       | Systems Manager Patch Manager được thiết kế chuyên biệt để automate OS patching và inventory management cho cả Windows và Linux                                                                                                                      |
| **90**  | Vulnerability assessment + monthly reports                                                                   | **Amazon Inspector**                                                        | Amazon Inspector chuyên về vulnerability assessment và security findings cho EC2 instances                                                                                                                                                           |
| **91**  | Multiple AWS accounts + centralized control                                                                  | **AWS Organizations + Service Control Policie (SCP)**                       | AWS Organizations với Service Control Policies (SCPs) được thiết kế để manage permissions across multiple accounts                                                                                                                                   |
| **92**  | Serverless auth/authz                                                                                        | **Amazon Cognito + Lambda@Edge**                                            | Amazon Cognito là serverless authentication service, perfect cho scalable user management, Lambda@Edge chạy tại CloudFront edge locations → low latency authorization                                                                                |
| **93**  | .csv files                                                                                                   | **Glue crawler + Athena**                                                   | Glue crawler tự động discover schema của .csv files trong S3                                                                                                                                                                                         |
| **94**  | SMB file share                                                                                               | **S3 File Gateway (NFS/SMB interface)**                                     | S3 File Gateway cung cấp SMB interface để devices có thể write data trực tiếp                                                                                                                                                                        |
| **95**  | Analyze cost and recommend optimizations                                                                     | **AWS Compute Optimizer**                                                   | AWS Compute Optimizer được thiết kế chuyên biệt để analyze và recommend optimizations cho AWS resources bao gồm EBS volumes                                                                                                                          |
| **96**  | SAP application + high memory utilization                                                                    | **Memory optimized instances**                                              | Memory optimized instances (R-series, X-series) được thiết kế specifically cho workloads như SAP và in-memory databases                                                                                                                              |
| **97**  | High volume write operations                                                                                 | **Provisioned IOPS SSD storage**                                            | Provisioned IOPS SSD storage được thiết kế đặc biệt cho high-performance, write-heavy workloads                                                                                                                                                      |
| **98**  | High performance computing (HPC) workload + low latency + high throughput                                    | **Cluster placement groups**                                                | Cluster placement groups được thiết kế chuyên biệt cho HPC workloads                                                                                                                                                                                 |
| **99**  | No static credentials + secure authentication                                                                | **IAM database authentication**                                             | IAM database authentication loại bỏ hoàn toàn static credentials                                                                                                                                                                                     |
| **100** | Shared storage + multiple EC2 instances                                                                      | **Amazon EFS**                                                              | Amazon EFS là shared file system có thể mount đồng thời trên multiple EC2 instances                                                                                                                                                                  |
| **101** | IT infrastructure map + relationships                                                                        | **Graph database (Neptune)**                                                | Neptune là graph database được thiết kế chuyên biệt cho việc lập bản đồ relationships                                                                                                                                                                |
| **102** | Third-party features + privileged access                                                                     | **RDS Custom**                                                              | RDS Custom for Oracle cho phép privileged access và customization cần thiết cho third-party features                                                                                                                                                 |
| **103** | Discover personally identifiable information (PII) + S3 buckets                                              | **Amazon Macie**                                                            | Amazon Macie được thiết kế chuyên biệt cho PII discovery và data classification trong S3                                                                                                                                                             |
| **104** | SFTP + managed solution                                                                                      | **AWS Transfer Family**                                                     | AWS Transfer Family được thiết kế chuyên biệt cho managed SFTP services                                                                                                                                                                              |
| **105** | Many-to-many relationships + mutual connections                                                              | **Graph database (Neptune)**                                                | Amazon Neptune là graph database được thiết kế chuyên biệt cho relationship data. Many-to-many relationships được handle naturally trong graph databases                                                                                             |
| **106** | Query strings/parameters routing                                                                             | **Application Load Balancer (ALB)**                                         | Application Load Balancer (ALB) là lựa chọn duy nhất hỗ trợ query parameter-based routing (định tuyến dựa trên query string)                                                                                                                         |
| **107** | Centrally manage + Self-service                                                                              | **AWS Service Catalog**                                                     | AWS Service Catalog là dịch vụ cho phép các tổ chức tạo và quản lý catalog tập trung các sản phẩm IT đã được phê duyệt (như CloudFormation templates, AMIs, applications) mà end users có thể tự triển khai thông qua giao diện web đơn giản         |
| **108** | Large data size + DynamoDB                                                                                   | **S3 + DynamoDB reference pattern**                                         | DynamoDB có giới hạn 400 KB/item. Với dữ liệu 700 KB và tiếp tục tăng, cần lưu trữ bên ngoài và S3 là giải pháp tối ưu cho lưu file giá rẻ, DynamoDB sẽ chỉ lưu các thông tin phụ của data (metadata) và đường dẫn đến data trên S3                  |
| **109** | Real-time data ingestion                                                                                     | **Kinesis Data Streams**                                                    | Kinesis Data Streams là giải pháp tối ưu cho việc streaming data trong thời gian thực (real-time) từ nhiều nguồn khác nhau                                                                                                                           |
| **110** | Expose service privately to other accounts                                                                   | **PrivateLink with NLB/ALB**                                                | AWS PrivateLink là dịch vụ cho phép kết nối private giữa các VPC, AWS services. Traffic đi hoàn toàn trong mạng nội bộ AWS, đảm bảo bảo mật cao và độ trễ thấp                                                                                       |
| **111** | Giảm độ trễ cho Lambda                                                                                       | **Provisioned Concurrency**                                                 | Provisioned concurrency là tính năng giữ cho môi trường thực thi Lambda luôn sẵn sàng, có thể chạy luôn mà không cần khởi tạo lại từ đầu, giúp loại bỏ cold start, đảm bảo latency thấp và ổn định                                                   |
| **112** | Kiểm soát khả năng scale của Lambda                                                                          | **Reserved Concurrency**                                                    | Reserved concurrency giới hạn số function chạy đồng thời                                                                                                                                                                                             |
| **113** | Detect unwanted content in images                                                                            | **Amazon Rekognition**                                                      | Amazon Rekognition là dịch vụ managed AI , tích hợp model có sẵn của AWS, dùng để phân tích ảnh, phát hiện nội dung không phù hợp như bạo lực, nội dung nhạy cảm... mà KHÔNG cần training model từ đầu                                               |
| **114** | Quản lý và xác thực đăng nhập người dùng (authentication)                                                    | **Cognito User Pool**                                                       |                                                                                                                                                                                                                                                      |
| **115** | Cấp quyền cho người dùng thao tác với AWS Service (authorization)                                            | **Cognito Identity Pool**                                                   |                                                                                                                                                                                                                                                      |
| **116** | Control Tower + Prevent/Block deployment                                                                     | **Proactive Controls**                                                      | Proactive controls là loại guardrails giúp ngăn chặn trước khi resource được tạo, hoạt động bằng cách validate CloudFormation templates và block deployment nếu vi phạm policy được quy định sẵn                                                     |
| **117** | Collect data/usage/configuration on-premises servers                                                         | **AWS Application Discovery Service**                                       | AWS Application Discovery Service là service cho phép tự động thu thập thông tin về servers on-premises (CPU, memory, disk, network, dependencies) thông qua Agent cài ở phía on-premise                                                             |
| **118** | Tracking chi phí theo từng phòng ban                                                                         | **Cost allocation tags**                                                    | AWS Cost allocation tags giúp gắn tag owner cho từng resource, cho phép tracking chi phí theo từng phòng ban                                                                                                                                         |
| **119** | RDS to Aurora migration                                                                                      | **Aurora read replica**                                                     | Từ RDS PosgresQL có thể tạo trực tiếp Aurora read replica, data sẽ được đồng bộ giữa 2 instance này.                                                                                                                                                 |

Quá trình diễn ra không ảnh hưởng đến instance gốc, downtime cực ngắn |

<a name="5"></a>

## 📌 5. Sample tư duy trả lời câu hỏi khi luyện đề

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
