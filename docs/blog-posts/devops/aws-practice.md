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

  - ❶ Câu hỏi thực tế (trích từ đề mock hoặc practice exam).

  - ❷ Phân tích chi tiết từng lựa chọn — tại sao đúng, sai.

  - ❸ Tóm tắt kiến thức chính (Key takeaway).

  - ❹ Mở rộng kiến thức: Best practice, hạn chế, tình huống áp dụng thực tế.

  - ❺ Học lại phần yếu.

  - ❻ Làm lại đề sau 3-5 ngày.

[1. Mục tiêu](#1)

[2. Cấu trúc kỳ thi AWS Certified Solutions Architect – Associate (SAA-C03)](#2)

[3. Phương pháp luyện đề hiệu quả](#3)

[4. Mẹo nhận diện câu hỏi và đáp án](#4)

[5. Domain Design Secure Architectures](#5)

[6. Domain Design Resilient Architectures](#6)

[7. Domain Design High-Performing Architectures](#7)

[8. Design Cost-Optimized Architectures](#8)

<a name="1"></a>

## 📌 1. Mục tiêu

- 🎯 Mục tiêu:

  - Củng cố kiến thức, kiểm tra hiểu biết qua các câu hỏi.

  - Làm quen với cấu trúc, phong cách câu hỏi thực tế trong kỳ thi AWS SAA.

  - Phân tích chi tiết từng câu hỏi.

  - Mở rộng kiến thức với các khái niệm liên quan.

  - Làm quen format và “bẫy” thường gặp trong đề thi thật.

  - Tập luyện tư duy giải pháp “Architect mindset” — luôn đặt câu hỏi: Giải pháp này có bảo mật, tối ưu chi phí, và có độ sẵn sàng cao không?

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

Cách đọc hiểu câu hỏi dạng tình huống (scenario-based).

Loại trừ đáp án sai (elimination method).

Ghi chú, tổng hợp “key takeaway” sau mỗi nhóm câu.

Liên hệ tài liệu chính thức: AWS Documentation, Whitepapers, Exam Guide.

### 1️⃣ Hiểu mục tiêu câu hỏi

- Phần lớn câu hỏi AWS SAA đều thuộc loại scenario-based (dạng tình huống), do đó:

  - ❶ Đọc kỹ đề ít nhất 2 lần để nắm rõ bối cảnh.

  - ❷ Gạch dưới (hoặc ghi chú) từ khóa định hướng như:

    - `High availability` → liên quan đến Multi-AZ, Auto Scaling, Load Balancer.

    - `Cost optimized` → Spot Instances, S3 Glacier, Savings Plans.

    - `Low latency` → edge caching (CloudFront), placement group, DynamoDB DAX.

    - `Compliance / encryption` → KMS, SSE, CSE, IAM policy.

  - ❸ Xác định vấn đề chính mà AWS đang test: bảo mật, sẵn sàng, hiệu năng, hay chi phí.

### 2️⃣ Sử dụng phương pháp loại trừ

- Phần lớn câu hỏi sẽ có 4–5 lựa chọn, trong đó:

  - ✧ 1 đáp án rõ ràng sai (hoặc không liên quan).

  - ✧ 1–2 đáp án gần đúng nhưng thiếu điều kiện.

  - ✧ 1 đáp án đúng hoàn toàn theo best practice AWS.

- 🧩 Phương pháp:

  - ❶ Loại nhanh các đáp án sai rõ ràng.

  - ❷ So sánh 2 đáp án gần đúng → hỏi: “Cái nào an toàn hơn / tiết kiệm hơn / resilient hơn?”

  - ❸ Chọn đáp án phù hợp với use case cụ thể.

### 3️⃣ Quản lý thời gian làm bài

- ✦ Tổng thời gian: 130 phút / ~65 câu → 2 phút/câu.

- ✦ Ưu tiên câu dễ – đánh dấu câu khó để quay lại sau.

- ✦ Không để trống — không có điểm trừ cho đáp án sai.

- ✦ Dành 10 phút cuối để xem lại các câu đã đánh dấu.

- ✦ Với những câu dạng tính toán chi phí, đừng sa đà vào con số — tập trung vào loại pricing model nào phù hợp nhất.

<a name="4"></a>

## 📌 4. Mẹo nhận diện câu hỏi và đáp án

- Bảng tổng hợp key thường gặp, chia theo chủ đề AWS và hướng tư duy khi gặp key đó:

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

- | Keyword                                   | Ý nghĩa            | Hướng chọn                           |
  | ----------------------------------------- | ------------------ | ------------------------------------ |
  | **Durable / Persistent**                  | Cần lưu lâu dài    | Chọn EBS, S3, EFS, Aurora            |
  | **Temporary / Cache / Scratch data**      | Dữ liệu tạm        | Chọn Instance Store, ElastiCache     |
  | **Unpredictable / Intermittent workload** | Tải khó đoán       | Aurora Serverless                    |
  | **Read-heavy workload**                   | Nhiều truy vấn đọc | Read Replica, Aurora Reader Endpoint |
  | **Data warehouse / Analytics**            | Phân tích dữ liệu  | Redshift                             |
  | **Key-Value / NoSQL**                     | Không quan hệ      | DynamoDB                             |

### 3️⃣ Networking & Security

- | Keyword                           | Ý nghĩa              | Hướng chọn                      |
  | --------------------------------- | -------------------- | ------------------------------- |
  | **Private subnet**                | Không internet       | Database, backend               |
  | **Public subnet**                 | Có internet          | Load Balancer, NAT Gateway      |
  | **Least privilege**               | Nguyên tắc tối thiểu | IAM Role / Policy hạn chế quyền |
  | **Secure / Encrypt**              | Bảo mật              | Sử dụng KMS, HTTPS, TLS         |
  | **VPC Peering / Transit Gateway** | Kết nối VPC          | Tuỳ số lượng và quy mô          |

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

- | Dấu hiệu                           | Hướng phân tích nhanh           |
  | ---------------------------------- | ------------------------------- |
  | “Unpredictable / variable load”    | Serverless hoặc Auto Scaling    |
  | “High availability”                | Multi-AZ / Load Balancer        |
  | “Disaster recovery / cross-region” | Multi-Region setup              |
  | “Reduce cost”                      | Spot, Serverless, Schedule stop |
  | “Secure access”                    | IAM, KMS, Private subnet        |
  | “Scalable database”                | Aurora Serverless hoặc DynamoDB |

<a name="5"></a>

## 📌 5. Domain Design Secure Architectures

- 🎯 Mục tiêu: Đảm bảo ứng dụng an toàn, cách ly và kiểm soát truy cập.

### 1️⃣ IAM & Access Control

### 2️⃣ Network Security

### 3️⃣ Data Protection

#### Question 1:

- ```
  There was an incident in your production environment where user data stored in an S3  bucket was accidentally deleted by one of the engineers.
  You are tasked to improve the protection of your S3 objects from both accidental  deletion and overwriting.

  Which combination of the following will protect your data? (Select TWO)
  A. Enable Multi-Factor Authentication Delete
  B. Disallow S3 Delete using an IAM bucket policy
  C. Enable Versioning
  D. Provide access strictly through pre-signed URLs
  E. Enable S3 Intelligent-Tiering
  ```

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

#### Question 2:

- ```
  Your company needs to store sensitive customer data in Amazon S3.
  The security team requires that all objects are encrypted using keys managed by AWS.
  Which solution should you choose?

  A. SSE-S3
  B. SSE-KMS
  C. SSE-C
  D. Client-side encryption
  ```

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

### 4️⃣ Secure Application Integration

<a name="6"></a>

## 📌 6. Domain Design Resilient Architectures

- 🎯 Mục tiêu: Đảm bảo hệ thống chịu lỗi, tự phục hồi và tính sẵn sàng cao.

### 1️⃣ High Availability

### 2️⃣ Fault Tolerance & Disaster Recovery

### 3️⃣ Decoupling Components

### 4️⃣ Data Durability

<a name="7"></a>

## 📌 7. Domain Design High-Performing Architectures

- 🎯 Mục tiêu: Tối ưu hiệu năng và tính mở rộng (scalability).

### 1️⃣ Compute Optimization

#### Question 1:

- ```
  You are working for a FinTech startup as their AWS Solutions Architect. You deployed an application on an Amazon EC2 instance with attached Instance Store volumes and an Elastic IP address. The server is only accessed from 8 AM to 6 PM and can be stopped from 6 PM to 8 AM for cost efficiency using Lambda with the script that automates this based on tags.
  Which of the following will occur when the EC2 instance is stopped and started? (Select TWO.)

  A. All data on the attached instance-store devices will be lost.
  B. There will be no changes.
  C. The ENI (Elastic Network Interface) is detached.
  D. The underlying host for the instance is possibly changed.
  E. The Elastic IP address is disassociated with the instance.
  ```

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

### 2️⃣ Storage Optimization

### 3️⃣ Database Optimization

#### Question 1:

- ```
  An online shopping platform is hosted on an Auto Scaling group of Spot EC2 instances and uses Amazon Aurora PostgreSQL as its database. There is a requirement to optimize your database workloads in your cluster where you have to direct the write operations of the production traffic to your high-capacity instances and point the reporting queries sent by your internal staff to the low-capacity instances.

  Which is the most suitable configuration for your application as well as your Aurora database cluster to achieve this requirement?

  A. Do nothing since by default, Aurora will automatically direct the production traffic to your high-capacity instances and the reporting queries to your low-capacity instances.

  B. In your application, use the instance endpoint of your Aurora database to handle the incoming production traffic and use the cluster endpoint to handle reporting queries.

  C. Configure your application to use the reader endpoint for both production traffic and reporting queries, which will enable your Aurora database to automatically perform load-balancing among all the Aurora Replicas.

  D. Create a custom endpoint in Aurora based on the specified criteria for the production traffic and another custom endpoint to handle the reporting queries.
  ```

- 🧩 Bối cảnh:

  - Doanh nghiệp là nền tảng thương mại điện tử (online shopping platform) chạy trên EC2 Auto Scaling group dùng Spot Instances → nghĩa là lớp ứng dụng hướng đến tối ưu chi phí và tự động mở rộng.

  - Phần database sử dụng Amazon Aurora PostgreSQL, là database cluster có tính năng tự động mở rộng và tách biệt writer – reader.

  - Phải tối ưu workload của database cluster sao cho:

    - Các tác vụ ghi (write operations) của production traffic → gửi đến high-capacity instances (máy mạnh, ưu tiên hiệu năng).

    - Các truy vấn báo cáo nội bộ (reporting queries) → chạy trên low-capacity instances (máy yếu hơn, tiết kiệm chi phí).

- 🧐 Phân tích đáp án:

  | **Option** | **Phân tích**                                                                                                                                                                                                                                                                                                                                                                                                                        | **Kết quả** |
  | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------: |
  | **A**      | Sai. **Aurora không tự động phân biệt** “production write” vs “reporting read” theo kiểu chọn instance dựa trên capacity. Mặc định: **writes → writer (cluster endpoint)**; **reads → reader endpoint (tự load-balance trên tất cả read replicas)**. Nó không tự phân chia theo “high-capacity vs low-capacity” trừ khi bạn cấu hình cụ thể.                                                                                         |     ❌      |
  | **B**      | Sai / không phù hợp. **Instance endpoint** trỏ tới một instance cụ thể (có thể dùng nếu bạn muốn target 1 node duy nhất). **Cluster endpoint** là điểm đến cho writer (viết). Đổi chỗ như đề xuất (instance → production, cluster → reporting) là ngược lại so với chức năng chuẩn và sẽ phá vỡ write/read routing.                                                                                                                  |     ❌      |
  | **C**      | Sai và cực kỳ rủi ro. **Reader endpoint** chỉ cho reads — nếu bạn gửi writes production vào reader endpoint sẽ bị lỗi (writer-only operations fail). Dù reader endpoint load-balance reads, nó không phân biệt replica “low-capacity” hay “high-capacity” theo mục đích; không đáp ứng yêu cầu.                                                                                                                                      |     ❌      |
  | **D**      | Đúng. **Custom endpoints (Aurora)** cho phép bạn tạo **endpoint nhóm** gồm một tập con của Aurora Replicas theo tiêu chí (tags, instance role, instance class, v.v.). Bạn có thể: đặt writer là high-capacity; tạo **custom reader endpoint** nhóm các read replicas low-capacity dành cho reporting; và (nếu cần) tạo endpoint dành cho production reads that need higher-capacity replicas. Đây là cách linh hoạt và phù hợp nhất. |     ✅      |

#### Question 2:

- ```
  A Docker application, which is running on an Amazon ECS cluster behind a load balancer, is heavily using DynamoDB. You are instructed to improve the database performance by distributing the workload evenly and using the provisioned throughput efficiently.

  Which of the following would you consider to implement for your DynamoDB table?

  A. Reduce the number of partition keys in the DynamoDB table.
  B. Use partition keys with high-cardinality attributes, which have a large number of distinct values for each item.
  C. Use partition keys with low-cardinality attributes, which have a few number of distinct values for each item.
  D. Avoid using a composite primary key, which is composed of a partition key and a sort key.
  ```

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

### 4️⃣ Network Performance

<a name="8"></a>

## 📌 8. Domain Design Cost-Optimized Architectures

- 🎯 Mục tiêu: Giảm chi phí nhưng vẫn đảm bảo hiệu năng và độ tin cậy.

### 1️⃣ Compute Cost Optimization

### 2️⃣ Storage Cost Optimization

### 3️⃣ Database & Network Cost Optimization

#### Question 1:

- ```
  A retail website has intermittent, sporadic, and unpredictable transactional workloads throughout the day that are hard to predict. The website is currently hosted on-premises and is slated to be migrated to AWS. A new relational database is needed that autoscale capacity to meet the needs of the application's peak load and scales back down when the surge of activity is over.

  Which of the following option is the MOST cost-effective and suitable database setup in this scenario?

  A. Launch an Amazon Aurora Provisioned DB cluster with burstable performance DB instance class types.
  B. Launch an Amazon Redshift data warehouse cluster with Concurrency Scaling.
  C. Launch an Amazon Aurora Serverless DB cluster then set the minimum and maximum capacity for the cluster.
  D. Launch a DynamoDB Global table with Auto Scaling enabled.
  ```

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

### 4️⃣ Monitoring & Governance
