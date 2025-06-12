---
title: Redis Basic
summary: "Redis (REmote DIctionary Server) là một kho lưu trữ cấu trúc dữ liệu trong bộ nhớ, cho phép tạo ra một Server có chức năng dùng bộ nhớ để lưu trữ dữ liệu."
date: "2025-06-16"
image: "/vuepress-blog/images/posts/redis.png"
category: "BACK-END"
---

# Redis Basic

[1. Giới thiệu về Redis](#1)

[2. Các kiểu dữ liệu trong Redis](#2)

[3. Các câu lệnh cơ bản làm việc với Redis](#3)

[4. Persistence trong Redis (Lưu trữ dữ liệu lâu dài)](#4)

[5. Redis Replication (Nhân bản dữ liệu)](#5)

[6. Redis Cluster (Phân tán dữ liệu)](#6)

<a name="1"></a>

## 📌 1. Giới thiệu về Redis

### 🔹 Redis là gì?

- Redis (REmote DIctionary Server) là một kho lưu trữ cấu trúc dữ liệu trong bộ nhớ:

  - Là một cơ sở dữ liệu phi quan hệ.
  - Lưu trữ dữ liệu trực tiếp trong RAM thay vì trên đĩa cứng hay SSD.

- Redis cho phép tạo ra một Server có chức năng dùng bộ nhớ để lưu trữ dữ liệu.

### 🔹 Redis lưu trữ dữ liệu như thế nào?

- Dữ liệu lưu trữ ở dạng cặp key/value, với giá trị lưu trữ là các chuỗi, danh sách, tập hợp

- Mặc định Server Redis lắng nghe ở cổng 6379, có nhiều thư viện hỗ trợ kết nối cho các ngôn ngữ như PHP, C#, Java …

### 🔹 Tại sao nên dùng Redis?

✔️ Tốc độ cao: Vì dữ liệu được lưu trữ trong RAM, Redis có tốc độ truy xuất cực kỳ nhanh, thường đạt đến hàng trăm nghìn đến hàng triệu thao tác mỗi giây.

✔️ Đa dạng cấu trúc dữ liệu: Redis hỗ trợ nhiều loại cấu trúc dữ liệu như strings, lists, sets, sorted sets, hashes

✔️ Persistence: Redis cung cấp các cơ chế để lưu trữ dữ liệu xuống đĩa (snapshotting và append-only file), đảm bảo dữ liệu không bị mất khi server bị tắt.

✔️ Tính sẵn sàng cao và dễ mở rộng.

### 🔹 Ứng dụng của Redis

Với ưu điểm là tốc độ, an toàn (có cơ chế xác thực) nên Redis được ứng dụng trong Caching.

### 🔹 Cài đặt Redis

Để cài đặt Redis, chúng ta truy cập [redis.io](https://redis.io/download/) và làm theo hướng dẫn.

🔥 **Lưu ý:**

- Dù có support cho cả Linux và Windows, nhưng phiên bản support cho Windows có từ khá lâu và không còn được update.

- Để dễ cho việc thực hành, có thể download các phiên bản cũ để chạy thử và test trên windows tại [Github - Redis](https://github.com/MicrosoftArchive/redis/releases).
  - Cách cài có thể tham khảo [tại đây](https://stackjava.com/redis/huong-dan-cai-dat-redis-server-tren-windows.html).

<a name="2"></a>

## 📌 2. Các kiểu dữ liệu trong Redis

|             Kiểu dữ liệu              |                                            Mô tả                                             |
| :-----------------------------------: | :------------------------------------------------------------------------------------------: |
|            String (Chuỗi)             |         Là kiểu dữ liệu đơn giản nhất, có thể chứa văn bản, số nguyên, hoặc số thực          |
|           List (Danh sách)            |                   Danh sách có thứ tự, hỗ trợ thêm/xóa phần tử từ hai đầu                    |
|             Set (Tập hợp)             |                  Một tập hợp không có thứ tự, không chứa phần tử trùng lặp                   |
|              Sorted Set               |                Giống Set nhưng mỗi phần tử có một điểm số (score) để sắp xếp                 |
|              Hash (Băm)               |                      Lưu trữ dữ liệu dạng key-value trong một key cha.                       |
|       Bitmap (Dữ liệu nhị phân)       | Lưu trữ bit (0/1), phù hợp để theo dõi trạng thái theo thời gian (ví dụ: check-in mỗi ngày). |
| HyperLogLog (Đếm phần tử không trùng) |             Ước lượng số lượng phần tử duy nhất mà không cần lưu toàn bộ dữ liệu             |

<a name="3"></a>

## 📌 3. Các câu lệnh cơ bản làm việc với Redis

### 🔹 Kết nối với Redis

Trước khi chạy các lệnh Redis, chúng ta cần kết nối đến Redis Server.

Dưới đây là cách kết nối Redis theo từng môi trường:

- Khởi động Redis Server:

  ```sh
  # Chạy Redis trên máy cục bộ (Local)
  redis-server

  # Chạy Redis với Docker
  docker run --name my-redis -d -p 6379:6379 redis

  # Kết nối Redis đã chạy với Docker
  redis-cli -h localhost -p 6379
  ```

- Kết nối đến Redis:

  ```sh
  # Kết nối Redis đang chạy trên máy cục bộ
  redis-cli

  # Kết nối Redis Server từ xa
  redis-cli -h 192.168.1.100 -p 6379

  # Nếu Redis có mật khẩu
  redis-cli -h 192.168.1.100 -p 6379 -a yourpassword
  ```

### 🔹 Các câu lệnh chung

|        Lệnh        |                        Mô tả                         |
| :----------------: | :--------------------------------------------------: |
|        PING        |        Kiểm tra xem Redis có đang chạy không         |
|    SELECT index    | Chọn database (Redis có 16 DB mặc định, từ 0 đến 15) |
|      FLUSHDB       |     Xóa toàn bộ dữ liệu trong database hiện tại      |
|      FLUSHALL      |      Xóa toàn bộ dữ liệu trong tất cả databases      |
|     EXISTS key     |   Kiểm tra key có tồn tại không (1: có, 0: không)    |
|      DEL key       |                       Xóa key                        |
| EXPIRE key seconds |     Đặt thời gian sống cho key (tính bằng giây)      |
|      TTL key       |       Kiểm tra thời gian sống còn lại của key        |
|    PERSIST key     |      Xóa thời gian sống của key, giữ vĩnh viễn       |
|      KEYS \*       |              Lấy tất cả các key hiện có              |

📝 Ví dụ:

```sh
SET user "Alice"
EXISTS user    # Kết quả: 1
DEL user
EXISTS user    # Kết quả: 0
```

### 🔹 Các câu lệnh làm việc với String

|             Lệnh             |               Mô tả                |
| :--------------------------: | :--------------------------------: |
|        SET key value         |        Gán giá trị cho key         |
|           GET key            |        Lấy giá trị của key         |
|           INCR key           |   Tăng giá trị số của key lên 1    |
|           DECR key           |  Giảm giá trị số của key xuống 1   |
|       INCRBY key value       |   Tăng giá trị của key lên value   |
|       DECRBY key value       |  Giảm giá trị của key xuống value  |
| MSET key1 value1 key2 value2 |   Gán nhiều key-value cùng lúc 1   |
|        MGET key1 key2        | Lấy giá trị của nhiều key cùng lúc |
|       APPEND key value       |      Nối thêm dữ liệu vào key      |

📝 Ví dụ:

```sh
SET counter 10
INCR counter   # Kết quả: 11
INCRBY counter 5  # Kết quả: 16
DECR counter   # Kết quả: 15
GET counter    # Kết quả: "15"
```

### 🔹 Các câu lệnh làm việc với Hash (Bảng băm)

|                 Lệnh                  |                 Mô tả                 |
| :-----------------------------------: | :-----------------------------------: |
|         HSET key field value          | Gán giá trị vào một field trong hash  |
|            HGET key field             |         Lấy giá trị của field         |
|              HGETALL key              | Lấy toàn bộ field và value trong hash |
|            HDEL key field             |         Xóa field trong hash          |
|               HLEN key                |     Đếm số lượng field trong hash     |
|           HEXISTS key field           |    Kiểm tra field có tồn tại không    |
| HMSET key field1 value1 field2 value2 |      Gán nhiều field trong hash       |
|        HMGET key field1 field2        |       Lấy nhiều field cùng lúc        |

📝 Ví dụ:

```sh
HSET user:1 name "Alice"
HSET user:1 age 25
HGET user:1 name   # Kết quả: "Alice"
HGETALL user:1     # Kết quả: {"name": "Alice", "age": "25"}
```

### 🔹 Các câu lệnh làm việc với List

|         Lệnh          |                   Mô tả                   |
| :-------------------: | :---------------------------------------: |
|    LPUSH key value    |      Thêm phần tử vào đầu danh sách       |
|    RPUSH key value    |      Thêm phần tử vào cuối danh sách      |
|       LPOP key        |     Lấy và xóa phần tử đầu danh sách      |
|       RPOP key        |     Lấy và xóa phần tử cuối danh sách     |
|       LLEN key        |      Đếm số phần tử trong danh sách       |
| LRANGE key start stop | Lấy danh sách trong khoảng (chỉ mục từ 0) |
| LREM key count value  |    Xóa count phần tử có giá trị value     |

📝 Ví dụ:

```sh
LPUSH queue "Task1"
LPUSH queue "Task2"
RPUSH queue "Task3"
LRANGE queue 0 -1  # Kết quả: ["Task2", "Task1", "Task3"]
LPOP queue  # Kết quả: "Task2"
```

### 🔹 Các câu lệnh làm việc với List

|        Lệnh         |               Mô tả               |
| :-----------------: | :-------------------------------: |
|   SADD key value    |       Thêm phần tử vào set        |
|   SREM key value    |       Xóa phần tử khỏi set        |
|    SMEMBERS key     |   Lấy tất cả phần tử trong set    |
| SISMEMBER key value | Kiểm tra phần tử có tồn tại không |
|      SCARD key      |  Đếm số lượng phần tử trong set   |
|  SUNION key1 key2   |            Hợp hai set            |
|  SINTER key1 key2   |   Lấy phần tử chung của hai set   |

📝 Ví dụ:

```sh
SADD fruits "Apple" "Banana"
SADD fruits "Orange"
SMEMBERS fruits  # Kết quả: {"Apple", "Banana", "Orange"}
SISMEMBER fruits "Banana"  # Kết quả: 1 (true)
```

<a name="4"></a>

## 📌 4. Persistence trong Redis

- Mặc dù Redis là một in-memory database (cơ sở dữ liệu lưu trữ trong bộ nhớ RAM), nhưng nó vẫn cung cấp các cơ chế persistence để đảm bảo dữ liệu không bị mất khi server gặp sự cố hoặc khởi động lại.

- Redis hỗ trợ hai phương pháp lưu trữ chính:

  - RDB (Redis Database Backup) - Lưu trữ theo thời điểm (Snapshot)
  - AOF (Append-Only File) - Ghi log từng thao tác

  🔥 Redis cũng có thể kết hợp cả hai để đảm bảo dữ liệu an toàn hơn.

### 🔹 RDB (Redis Database Snapshot)

RDB lưu trữ toàn bộ dữ liệu của Redis vào một file .rdb theo từng khoảng thời gian.

Khi Redis khởi động lại, nó sẽ load dữ liệu từ file .rdb.

✔️ Ưu điểm:

- Tốc độ lưu trữ nhanh vì nó ghi theo kiểu snapshot.
- File .rdb gọn nhẹ, dễ sao lưu.

❌ Nhược điểm:

- Có thể mất dữ liệu giữa các lần snapshot.
- Ghi file .rdb tốn tài nguyên nếu dữ liệu lớn.

🚀 Cách bật RDB:

RDB được kích hoạt mặc định trong redis.conf:

```sh
save 900 1   # Lưu sau 900 giây nếu có ít nhất 1 thay đổi
save 300 10  # Lưu sau 300 giây nếu có ít nhất 10 thay đổi
save 60 10000 # Lưu sau 60 giây nếu có ít nhất 10000 thay đổi
```

Hoặc lưu ngay bằng lệnh:

```sh
BGSAVE
```

File .rdb mặc định được lưu tại:

```sh
/var/lib/redis/dump.rdb
```

### 🔹 AOF (Append Only File)

AOF ghi lại toàn bộ lệnh thay đổi dữ liệu của Redis vào file log (appendonly.aof).

Khi Redis restart, nó sẽ chạy lại các lệnh này để khôi phục dữ liệu.

✔️ Ưu điểm:

- Đảm bảo không mất dữ liệu.
- Ghi log theo từng lệnh nên có thể khôi phục chi tiết.

❌ Nhược điểm:

- File AOF lớn hơn RDB vì ghi từng lệnh.
- Cần tối ưu hóa (AOF rewrite) để tránh file quá lớn.

🚀 Cách bật AOF:

Bật AOF trong redis.conf:

```sh
appendonly yes
appendfilename "appendonly.aof"
appendfsync everysec # Ghi vào disk mỗi giây (cân bằng hiệu suất và an toàn)
```

Hoặc bật AOF ngay bằng lệnh:

```sh
CONFIG SET appendonly yes
```

### 🔹 Hybrid Mode (Kết hợp RDB + AOF)

Redis cho phép dùng cả RDB & AOF cùng lúc để tận dụng ưu điểm của cả hai.

🚀 Cách bật Hybrid:

```sh
aof-use-rdb-preamble yes
```

Lúc này, Redis sẽ ghi đè AOF bằng snapshot .rdb để tối ưu dung lượng.

<a name="5"></a>

## 📌 5. Redis Replication (Nhân bản dữ liệu)

Replication giúp Redis tạo nhiều bản sao (slave) của master, giúp đạt được tính sẵn sàng cao:

- Load balancing (chia tải).
- Backup dữ liệu phòng trường hợp master bị lỗi.
- Hỗ trợ failover tự động.

### 🔹 Cấu hình Master-Slave

Mặc định, Redis chỉ có một Master, nhưng có thể thêm nhiều Slave.

- Cấu hình Slave:

  ```sh
  SLAVEOF <master-ip> <master-port>

  # Ví dụ master chạy ở 192.168.1.100:6379
  SLAVEOF 192.168.1.100 6379
  ```

  hoặc thêm vào redis.conf:

  ```sh
  replicaof 192.168.1.100 6379
  ```

- Kiểm tra Replication:

  ```sh
  # Trên Master, kiểm tra các Slave bằng lệnh:
  INFO replication
  ```

  Kết quả sẽ hiển thị các Slave kết nối đến Master.

### 🔹 Cấu hình Redis Sentinel (Failover tự động)

Sentinel giúp tự động chuyển đổi Master-Slave khi Master bị lỗi.

- Cấu hình Sentinel:

  Tạo file sentinel.conf:

  ```sh
  sentinel monitor mymaster 192.168.1.100 6379 2
  sentinel down-after-milliseconds mymaster 5000
  sentinel failover-timeout mymaster 60000
  sentinel parallel-syncs mymaster 1
  ```

  Chạy Sentinel:

  ```sh
  redis-sentinel sentinel.conf
  ```

  Khi Master bị lỗi, Sentinel sẽ tự động chuyển một Slave thành Master.

<a name="6"></a>

## 📌 6. Redis Cluster (Phân tán dữ liệu)

Redis không chỉ hỗ trợ Persistence (Lưu trữ dữ liệu lâu dài) và Replication (Nhân bản dữ liệu) mà còn có Cluster (Phân tán dữ liệu) để đảm bảo hiệu suất cao và mở rộng quy mô.

Redis Cluster giúp chia dữ liệu thành nhiều node, giúp:

- Chia tải để tăng hiệu suất.
- Tránh single point of failure (SPoF).
- Hỗ trợ mở rộng dễ dàng.

### 🔹 Cách Redis Cluster hoạt động

Redis sử dụng "slots" thay vì key-value đơn thuần

- **Sharding (Chia dữ liệu)**:

  - Redis chia dữ liệu thành 16384 hash slot (tương đương 16,384 phần dữ liệu).
  - Mỗi key khi lưu vào Redis sẽ được băm (hash) để xác định nó thuộc slot nào.
  - Mỗi node trong cluster sẽ chịu trách nhiệm lưu một tập hợp các slots.
  - Ví dụ với 3 node:
    - Node A lưu dữ liệu từ slot 0 – 5500.
    - Node B lưu dữ liệu từ slot 5501 – 11000.
    - Node C lưu dữ liệu từ slot 11001 – 16383.

- **Multiple Masters**: Redis Cluster có nhiều master, mỗi master quản lý một phần slot.

- **Automatic Failover**: Nếu một master bị lỗi, slave của nó sẽ tự động được nâng lên làm master.

Ví dụ Redis Cluster 6 node:

```
[ Master 1 ] <--> [ Master 2 ] <--> [ Master 3 ]
    |                 |                 |
[ Slave 1 ]       [ Slave 2 ]       [ Slave 3 ]
```

👉 Master chứa dữ liệu chính, Slave hỗ trợ dự phòng.

💡 Nếu Master 2 bị lỗi, Slave 2 tự động thăng cấp thành Master mới

### 🔹 Cấu hình Redis Cluster

Để tạo Redis Cluster, cần ít nhất 3 master + 3 slave (tổng 6 node).

- **Bước 1**: Chạy nhiều Redis instance

  Giả sử bạn có 6 Redis node trên 3 server:

  |  Node   |      IP       | Port |
  | :-----: | :-----------: | :--: |
  | redis-1 | 192.168.1.101 | 7001 |
  | redis-2 | 192.168.1.102 | 7002 |
  | redis-3 | 192.168.1.103 | 7003 |
  | redis-4 | 192.168.1.101 | 7004 |
  | redis-5 | 192.168.1.102 | 7005 |
  | redis-6 | 192.168.1.103 | 7006 |

  Chạy Redis với cấu hình sau (ví dụ redis-1.conf):

  ```sh
  port 7001
  cluster-enabled yes    # Bật chế độ cluster
  cluster-config-file nodes-7001.conf    # Lưu thông tin cluster
  cluster-node-timeout 5000    # Timeout cho cluster (5 giây)
  appendonly yes    # Bật persistence (AOF)
  ```

  Tương tự, tạo file config cho các node còn lại (redis-2.conf, redis-3.conf...).

  Khởi động các Redis instance:

  ```sh
  redis-server redis-1.conf
  redis-server redis-2.conf
  ...
  ```

- **Bước 2**: Tạo Cluster

  ```sh
  redis-cli --cluster create 192.168.1.101:7001 192.168.1.102:7002 192.168.1.103:7003 192.168.1.101:7004 192.168.1.102:7005 192.168.1.103:7006 --cluster-replicas 1
  ```

  --cluster-replicas 1: Mỗi master sẽ có 1 slave.

  Redis sẽ tự động phân chia slot và cấu hình master/slave.

### 🔹 Kiểm tra Cluster

```sh
# Xem trạng thái cluster
redis-cli -c -p 7001 cluster info

# Xem danh sách node
redis-cli -c -p 7001 cluster nodes

# Thử set/get key
redis-cli -c -p 7001 set mykey "Hello Redis Cluster"
redis-cli -c -p 7002 get mykey
```

### 🔹 Auto Failover

Khi một master bị lỗi, Redis Cluster sẽ tự động nâng cấp một slave thành master.

Mô phỏng lỗi bằng cách dừng redis-1:

```sh
# Dừng redis-1
redis-cli -c -p 7001 shutdown

# Sau đó, kiểm tra cluster
redis-cli -c -p 7002 cluster nodes
```

Bạn sẽ thấy một slave đã trở thành master.

### 🔹 So sánh Replication vs Cluster

|         Tính năng         |      Replication       |          Cluster           |
| :-----------------------: | :--------------------: | :------------------------: |
|          Số node          | 1 master + nhiều slave | Nhiều master + nhiều slave |
|      Tăng tốc độ đọc      |         ✔️ Có          |           ✔️ Có            |
|      Tăng tốc độ ghi      |        ❌ Không        |           ✔️ Có            |
|     Tự động failover      |         ✔️ Có          |           ✔️ Có            |
|     Chia nhỏ dữ liệu      |        ❌ Không        |      ✔️ Có (Sharding)      |
| Mở rộng ngang (Scale-out) |        ❌ Không        |           ✔️ Có            |
