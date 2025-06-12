---
title: Redis Advanced
summary: "Tìm hiểu những kỹ thuật nâng cao của Redis và cách áp dụng chúng vào các tình huống thực tế để khai thác tối đa sức mạnh."
date: "2025-06-17"
image: "/vuepress-blog/images/posts/redis.png"
category: "BACK-END"
---

# Redis Advanced

[1. Redis Transaction & Scripting](#1)

[2. Redis Pub/Sub & Stream](#2)

[3. Tối ưu hóa Redis (Performance Tuning)](#3)

[4. Kết hợp Redis với các ngôn ngữ lập trình](#4)

[5. Redis Use Case (Ứng dụng thực tế)](#5)

<a name="1"></a>

## 📌 1. Redis Transaction & Scripting

### 🔹 Redis Transaction là gì?

Redis hỗ trợ Transaction để thực hiện nhiều lệnh cùng lúc một cách an toàn.

🔨 Các bước thực hiện Transaction:

- MULTI – Bắt đầu transaction
- Thêm các lệnh vào hàng đợi
- EXEC – Thực thi tất cả lệnh một lần

Ví dụ:

```sh
MULTI
SET user:1 "Alice"
INCR balance:1
EXEC
```

### 🔹 Cách Rollback trong Redis

❌ Redis không hỗ trợ ROLLBACK như SQL. Nếu một lệnh lỗi, các lệnh trước đó vẫn thực thi.

```sh
MULTI
SET user:1 "Alice"
INCR user:1  # ❌ Lỗi! (Vì "Alice" không phải số)
EXEC
```

👉 Transaction vẫn chạy, nhưng lệnh INCR user:1 bị lỗi.

💡 Để tránh lỗi, có thể dùng WATCH để kiểm tra điều kiện trước khi thực hiện Transaction.

### 🔹 Kiểm soát Transaction với WATCH

WATCH giúp giám sát một key, nếu key này thay đổi trước khi EXEC, Redis sẽ hủy Transaction.

```sh
WATCH balance:1
MULTI
DECRBY balance:1 50  # Giảm 50 đơn vị
EXEC
```

👉 Nếu balance:1 bị thay đổi bởi client khác trước EXEC, Transaction sẽ bị hủy.

### 🔹 Redis Scripting

- Redis hỗ trợ **Lua Scripting** giúp chạy logic phức tạp ngay trên server, giúp tăng tốc thay vì gửi nhiều lệnh riêng lẻ.

- Ví dụ Lua tính tổng 2 số:

  ```sh
  EVAL "return ARGV[1] + ARGV[2]" 0 10 20
  ```

- Lợi ích của Redis Scripting:
  - Nhanh hơn: Lua script chạy trên server, giảm độ trễ.
  - Atomic: Toàn bộ script chạy như một Transaction, không bị xen ngang.
  - Có thể dùng biến tạm: Xử lý logic phức tạp mà không cần lưu xuống Redis.

<a name="2"></a>

## 📌 2. Redis Pub/Sub & Stream

Redis cung cấp hai cơ chế giao tiếp theo mô hình message queue:

- Pub/Sub (Publish/Subscribe) – Hệ thống gửi/nhận tin nhắn theo kênh (channel).
- Stream – Cơ chế lưu trữ & xử lý dữ liệu dạng log

### 🔹 Redis Pub/Sub

🚀 Cách hoạt động:

- Publisher gửi tin nhắn vào một channel.
- Subscribers đang lắng nghe channel đó sẽ nhận được tin nhắn ngay lập tức.
- Không lưu trữ tin nhắn: Nếu subscriber offline, sẽ không nhận được tin cũ.

### 🔹 Redis Pub/Sub

🚀 Cách hoạt động:

- Producer ghi dữ liệu vào Stream.
- Consumer đọc dữ liệu từ Stream
- Tin nhắn được lưu lại theo thời gian.

### 🔹 So sánh Redis Pub/Sub & Stream

|       Tính năng        |      Pub/Sub      |      Stream       |
| :--------------------: | :---------------: | :---------------: |
|    Lưu trữ tin nhắn    | ❌ Không lưu trữ  |     ✅ Có lưu     |
|   Xử lý lại tin nhắn   |   ❌ Không được   |     ✅ Có thể     |
|    Mô hình sử dụng     | Push ngay lập tức | Hàng đợi tin nhắn |
| Hỗ trợ Consumer Groups |     ❌ Không      |       ✅ Có       |

🚀 Dùng Pub/Sub khi cần truyền dữ liệu theo thời gian thực.

🚀 Dùng Stream khi cần lưu trữ và xử lý tin nhắn lại sau này.

<a name="3"></a>

## 📌 3. Tối ưu hóa Redis (Performance Tuning)

Redis là một trong những hệ thống lưu trữ nhanh nhất, nhưng vẫn cần tối ưu để đạt hiệu suất cao nhất.

Dưới đây là các chiến lược tối ưu Redis hiệu quả.

### 🔹 Cấu hình Redis tối ưu

#### 1️⃣ Điều chỉnh maxmemory để tránh hết RAM (Out of Memory)

```sh
# Đặt giới hạn bộ nhớ trong file redis.conf
maxmemory 1gb  # Giới hạn Redis chỉ dùng tối đa 1GB RAM
```

👉 Nếu bộ nhớ đầy, Redis sẽ xóa key theo maxmemory-policy. Một số policy phổ biến:

- noeviction (mặc định) → Không xóa, trả lỗi khi hết bộ nhớ.
- allkeys-lru → Xóa key ít được sử dụng nhất (Least Recently Used - LRU).
- volatile-lru → Chỉ xóa key có TTL (time-to-live).

👉 Đổi policy trong redis.conf:

```sh
maxmemory-policy allkeys-lru
```

#### 2️⃣ Tối ưu appendonly và save để giảm I/O disk

Nếu Redis bị chậm do ghi đĩa (fsync quá nhiều), điều chỉnh như sau:

```sh
# Tắt ghi đĩa liên tục (appendonly) nếu không cần thiết
appendonly no  # Mặc định là "yes", đổi thành "no" nếu không cần persistence

# Điều chỉnh snapshot để giảm tần suất ghi disk
save 900 1  # Lưu snapshot sau mỗi 900 giây nếu có ít nhất 1 thay đổi
save 300 10 # Lưu snapshot sau mỗi 300 giây nếu có ít nhất 10 thay đổi
```

🔥 Nếu Redis chỉ làm cache, có thể tắt luôn snapshot.

### 🔹 Tối ưu Query trong Redis

#### 1️⃣ Giảm số lần truy vấn bằng Pipelining

Khi gửi nhiều lệnh Redis, thay vì gọi từng lệnh một (tốn nhiều round-trip), có thể dùng pipelining để gửi nhiều lệnh cùng lúc:

❌ Cách không tối ưu (gửi từng lệnh riêng lẻ, tốn nhiều round-trip):

```sh
SET user:1:name "Alice"
SET user:1:age "30"
SET user:1:email "alice@example.com"
```

✔️ Cách tối ưu với Pipelining:

```sh
redis-cli --pipe <<EOF
SET user:1:name "Alice"
SET user:1:age "30"
SET user:1:email "alice@example.com"
EOF
```

👉 Pipeline giúp giảm đáng kể thời gian phản hồi của Redis!

#### 2️⃣ Sử dụng MGET thay vì nhiều GET

Nếu cần lấy nhiều key cùng lúc, thay vì gọi nhiều GET, hãy dùng MGET:

```sh
MGET user:1:name user:1:age user:1:email
```

### 🔹 Tối ưu Dữ liệu trong Redis

#### 1️⃣ Dùng Hash thay vì quá nhiều String nhỏ

Nếu lưu trữ nhiều thông tin về một đối tượng, hãy dùng Hash thay vì nhiều key riêng lẻ.

❌ Không tối ưu (tốn bộ nhớ và chậm):

```sh
SET user:1:name "Alice"
SET user:1:age "30"
SET user:1:email "alice@example.com"
```

✔️ Cách tối ưu (gộp vào 1 Hash để tiết kiệm RAM và tăng tốc truy vấn):

```sh
HSET user:1 name "Alice" age "30" email "alice@example.com"
```

#### 2️⃣ Dùng EXPIRE để tự động xóa dữ liệu không cần thiết

Nếu dữ liệu chỉ cần tồn tại trong một khoảng thời gian, đặt Time-To-Live (TTL) để tiết kiệm RAM.

```sh
SET session:user123 "token_data" EX 3600  # Xóa sau 1 giờ, tránh dữ liệu "rác" chiếm bộ nhớ Redis quá lâu.
```

### 🔹 Tối ưu Replica & Cluster

#### 1️⃣ Dùng Redis Replication để giảm tải cho master

Nếu một Redis instance xử lý quá nhiều request, hãy dùng replica để chia tải:

```sh
replicaof 192.168.1.100 6379  # Cấu hình replica của master
```

👉 Master xử lý ghi, Replica xử lý đọc → Giảm tải đáng kể.

#### 2️⃣ Dùng Redis Cluster để mở rộng ngang

Nếu một máy chủ Redis không đủ xử lý, có thể dùng Redis Cluster để chia dữ liệu thành nhiều node.

### 🔹 Giám sát & Debug Redis

Nếu Redis bị chậm, kiểm tra lệnh nào tốn thời gian nhất:

```sh
SLOWLOG GET 5  # Xem 5 lệnh chậm nhất
```

<a name="4"></a>

## 📌 4. Kết hợp Redis với các ngôn ngữ lập trình

Redis có thể tích hợp với hầu hết các ngôn ngữ lập trình thông qua Redis client.

### 🔹 Redis với Python (redis-py)

- Cài đặt Redis client cho Python:

  ```bash
  pip install redis
  ```

- Kết nối và thao tác với Redis:

  ```python
  import redis

  # Kết nối Redis
  r = redis.Redis(host='localhost', port=6379, decode_responses=True)

  # Lưu dữ liệu vào Redis
  r.set('name', 'Alice')

  # Lấy dữ liệu từ Redis
  print(r.get('name'))  # Output: Alice
  ```

### 🔹 Redis với Java (Jedis, Lettuce)

- Thêm dependency vào Maven:

  ```xml
  <dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>4.3.1</version>
  </dependency>
  ```

- Kết nối và thao tác với Redis:

  ```java
  import redis.clients.jedis.Jedis;

  public class RedisExample {
    public static void main(String[] args) {
      Jedis jedis = new Jedis("localhost");
      jedis.set("name", "Charlie");
      System.out.println(jedis.get("name"));
      jedis.close();
    }
  }
  ```
