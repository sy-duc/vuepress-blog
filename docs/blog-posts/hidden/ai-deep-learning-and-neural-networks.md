---
title: Deep Learning & Neural Networks
---

# Deep Learning & Neural Networks

[1. Perceptron](#1)

[2. Neural Network](#2)

[3. Tensor, GPU, Autograd](#3)

[4. PyTorch](#4)

[5. CNN – xử lý ảnh](#5)

[6. RNN/LSTM – xử lý chuỗi](#6)

[7. Transformers fundamentals](#7)

<a name="1"></a>

## 📌 1. Perceptron

Perceptron là một “bộ quyết định” tự động cho các câu hỏi kiểu Có / Không.

Ví dụ:

- ✦ Có duyệt đơn vay không?

- ✦ Có phải email spam không?

Perceptron làm 4 việc theo đúng thứ tự:

**① Nhận nhiều yếu tố đầu vào**

Ví dụ:

- ✦ Tuổi

- ✦ Số năm kinh nghiệm

**② Mỗi yếu tố có mức độ quan trọng khác nhau**

- ✦ Yếu tố quan trọng → hệ số (weight) cao.

- ✦ Yếu tố ít quan trọng → hệ số (weight) thấp.

**③ Cộng tất cả lại thành 1 con số**

- Nôm na:

- ```
  Điểm = (tuổi × mức quan trọng) + (kinh nghiệm × mức quan trọng)
  ```

**④ So với một ngưỡng**

- ✦ Nếu điểm ≥ ngưỡng → trả về 1 (Có)

- ✦ Nếu điểm < ngưỡng → trả về 0 (Không)

Perceptron chỉ có thể phân loại chính xác khi hai lớp là tuyến tính phân biệt được, tức là có thể tách biệt bằng một đường thẳng.

- 👉 Không giải được bài toán phi tuyến (dữ liệu phức tạp, chồng chéo, nhận diện ảnh, chữ viết, v.v.).

⚠️ Do 1 Perceptron không đủ thông minh => đây là lý do **Deep Learning** ra đời.

<a name="2"></a>

## 📌 2. Neural Network

Neural Network = Nhiều Perceptron ghép lại.

- Hay có thể hiểu: Neuron = Perceptron nâng cấp.

- Thay vì:

- ```
  Input → Output
  ```

- thì:

- ```
  Input → Perceptron → Perceptron → Output
  ```

- 👉 Các Perceptron ở giữa gọi là Hidden layer.

### Cấu trúc Neural Network:

- ![Neural Network](./images/ai-neural-network.png)

  - ✧ 1–2 hidden layer → Neural Network

  - ✧ Nhiều hidden layer (5, 10, 100…) → Deep Learning

### Quy trình Neural Network học:

- **① Forward**

  - Dữ liệu chạy từ trái → phải.

  - Ra kết quả dự đoán.

- **② So sánh với đáp án đúng**

  - Tính loss (sai bao nhiêu).

- **③ Backward**

  - Truy ngược từ output về input.

  - Điều chỉnh weight cho mỗi neuron.

- **④ Lặp lại rất nhiều lần**

<a name="3"></a>

## 📌 3. Tensor, GPU, Autograd

### 1️⃣ Tensor (mảng số nhiều chiều)

Ví dụ:

- |       Loại        |  Tương đương   |
  | :---------------: | :------------: |
  |        Số         | Tensor 0 chiều |
  |   Array [1,2,3]   | Tensor 1 chiều |
  |   Bảng (matrix)   | Tensor 2 chiều |
  | Ảnh (H × W × RGB) | Tensor 3 chiều |
  |     Batch ảnh     | Tensor 4 chiều |

Tensor giúp:

- ✔️ Chuẩn hóa dữ liệu.

- ✔️ Tối ưu tính toán song song.

⚠️ Tensor **KHÔNG** phải khái niệm mới, chỉ là cách gọi chuẩn trong Deep Learning.

### 2️⃣ GPU

Như đã biết, Neural Network = toán ma trận khổng lồ.

- 👉 DL cần số lượng hơn chất lượng, và GPU sinh ra để làm việc này (rất nhiều lõi nhỏ, lõi đơn giản nhưng mạnh với nhân, cộng, matrix).

Ví dụ dễ hiểu:

- ✧ CPU = 8 người rất giỏi.

- ✧ GPU = 10.000 người làm phép cộng cực nhanh.

### 3️⃣ Autograd

Là công cụ tự động tính toán đạo hàm, giúp model biết “sửa sai bao nhiêu là vừa” trong quá trình training.

<a name="4"></a>

## 📌 4. PyTorch

PyTorch là framework Deep Learning, cung cấp:

- ✧ Tensor (dữ liệu)

- ✧ Autograd (tự tính gradient - cho biết muốn loss giảm thì mỗi tham số nên tăng hay giảm, và giảm/tăng bao nhiêu)

- ✧ Neural Network (layer, model)

- ✧ Optimizer (cập nhật weight)

PyTorch không phải AI, nó là tool để xây AI.

- |  PyTorch  | Cách tư duy khác |
  | :-------: | :--------------: |
  |   Model   |  Business logic  |
  |  Forward  | Request handling |
  |   Loss    |    Validation    |
  | Backward  |  Phân tích lỗi   |
  | Optimizer | Fix bug tự động  |

- Chi tiết về PyTorch tham khảo [tại đây](https://sy-duc.github.io/vuepress-blog/blog-posts/hidden/ai-pytorch.html).

<a name="5"></a>

## 📌 5. CNN – xử lý ảnh

Với Neural Network thường không phù hợp trực tiếp với ảnh.

- Lý do là ngay cả với hình ảnh đơn giản nhất, các pixel liền kề có sự phụ thuộc lẫn nhau, liên quan đến nhau để có thể hiểu được "hình dạng".

  - 👉 Việc biến đổi thành vector sẽ làm mất đi thông tin phụ thuộc này và làm thay đổi ý nghĩa của bức hình.

- Giống như việc con người khi nhìn ảnh không nhìn vào pixel riêng lẻ, mà sẽ nhìn vào góc, cạnh, khối, vật thể.

### CNN (Convolutional Neural Networks)

- ✦ Là thuật toán được xây dựng có khả năng ghi lại sự phụ thuộc không gian của hình ảnh kể từ khi nó xử lý chúng dưới dạng ma trận và phân tích toàn bộ các phần của một hình ảnh tại một thời điểm, tùy thuộc vào kích thước của bộ lọc.

- ✦ Nôm na, Convolutional đã xử lý, phân tích ảnh như sau:

  - ✧ Hãy hình dung bạn cầm 1 miếng khuôn 3×3 và:

  - ```
    ➀ Đặt lên ảnh
    ➁ Phân tích 9 điểm ảnh tại một thời điểm
    ➂ Trượt khuôn đi khắp ảnh cho đến khi nó bao phủ toàn bộ hình ảnh
    ```

  - ✧ Miếng khuôn đó gọi là bộ lọc (Filter / Kernel)

  - ![CNN (Convolutional Neural Networks)](./images/ai-cnn.png)

- ✦ CNN suy luận theo tầng (như con người):

  - #### 1️⃣ Tầng nông (early layers):

    - Nhận ra: cạnh, đường, texture.

  - #### 2️⃣ Tầng giữa:

    - Ghép cạnh → hình đơn giản: mắt, bánh xe, chữ số.

  - #### 3️⃣ Tầng sâu:

    - Ghép hình → đối tượng: khuôn mặt, con mèo, số 8.

- ✦ Sau khi filter quét xong, ta có **Feature Map** thể hiện:

  - ✧ Nơi nào khớp → giá trị lớn

  - ✧ Nơi nào không khớp → gần 0

  - 👉 Trả lời việc: “Mẫu này xuất hiện ở đâu, mạnh hay yếu?”

- ✦ Sau nhiều layer, CNN có rất nhiều feature map, mỗi map là 1 loại “bằng chứng”.

- ✦ Bước quyết định:

  - ✧ Từ feature map, CNN chuyển thành 1 vector dài - bản tóm tắt mọi thứ CNN nhìn thấy.

  - ✧ Cuối cùng CNN dùng Neural Network thường để trả lời cho câu hỏi: "Với bằng chứng này thì đây là gì?"

- ✦ Khi training, CNN xác định việc output đúng hay sai dựa vào ảnh + label:

  - ✧ Dự đoán từ ảnh → so với label để tính loss.

  - ✧ Mỗi lần backward, ngoài sửa weight thì filter cũng sẽ không cố định do cũng được học và sửa.

### 🔥 Tóm lại:

- CNN không trực tiếp “nhìn ảnh”, mà “thu thập bằng chứng”, rồi dùng Neural Network thường để kết luận.

<a name="6"></a>

## 📌 6. RNN/LSTM – xử lý chuỗi

### 1️⃣ RNN (Recurrent Neural Network)

Có thể thấy CNN mạnh ở:

- Không gian 2D (ảnh)

- Pixel gần nhau

Nhưng chuỗi có đặc điểm khác:

- ➀ Thứ tự quan trọng.

- ➁ Phụ thuộc theo thời gian

- Ví dụ:
  - Văn bản
  - Giọng nói
  - Log hệ thống
  - Chuỗi số đo theo thời gian

✔️ **RNN (Recurrent Neural Network)** có khả năng nhớ lại những gì đã thấy trước đó sau mỗi bước xử lý.

- Nôm na mỗi block RNN sẽ lấy thông tin từ các block trước (hidden state - bộ nhớ) và input hiện tại.

  - 👉 **CNN nhìn không gian, RNN nhớ thời gian.**

❌ Tuy nhiên, nhược điểm của RNN:

- Nhớ ngắn hạn: đối với chuỗi dài, model có thể “quên” thông tin đầu chuỗi.

👉 LSTM ra đời để giải quyết vấn đề này.

### 2️⃣ LSTM (Long Short-term memory)

**LSTM = RNN có bộ nhớ thông minh hơn**

- Thay vì 1 hidden state, LSTM có:

  - ✦ Cell state (bộ nhớ dài hạn)

  - ✦ Các cổng (gate) điều khiển có vai trò:

    - ✧ Quên cái không cần
    - ✧ Nhớ cái mới
    - ✧ Biết lấy gì ra dùng

- 👉 LSTM giữ thông tin quan trọng lâu hơn.

<a name="7"></a>

## 📌 7. Transformers fundamentals

### ❌ Vấn đề của RNN/LSTM:

- ➀ Đọc chuỗi từng bước một

- ➁ Không song song

- ➂ Chuỗi dài → chậm & khó học

- 👉 Không tận dụng được khả năng tính toán song song của máy tính (GPU/TPU)

### ✔️ Transformers sẽ không đọc tuần tự nữa — nhìn toàn bộ chuỗi cùng lúc

- Tại mỗi từ, Transformers nhìn thấy tất cả từ khác và tự quyết định từ nào quan trọng (gọi là Self-Attention).

- Ví dụ:

  - Khi bạn đọc câu:

    - ```
      “Con mèo đang ngủ trên ghế vì nó rất mệt”
      ```

    - 👉 Dưới góc nhìn con người, chúng ta tự hiểu rằng `“Nó”` đang nói tới mèo, không phải ghế. Tức là chúng ta đang có sự chú ý có chọn lọc.

  - Self-Attention làm điều này bằng số, cụ thể:

    - 🧐 Với mỗi từ sẽ tự hỏi: `“Tôi nên chú ý từ nào?”`

      - ✧ Ví dụ từ `“Nó”`:

        - ① Nhìn toàn bộ câu:
          - ```
            Con | mèo | đang | ngủ | trên | ghế | vì | nó | rất | mệt
            ```
        - ② Đánh giá mức độ liên quan:

          - `“Nó”` tự đánh giá:
            - ```
              Liên quan đến “mèo” → cao
              Liên quan đến “ghế” → thấp
              Các từ khác → rất thấp
              ```

        - 👉 `“Nó”` mang nghĩa của mèo.

      - ✧ Không chỉ từ `“Nó”`:

        - ```
          “ngủ” → chú ý tới “mèo”
          “mệt” → chú ý tới “nó”
          “mèo” → chú ý tới “ngủ”
          ```

        - 👉 Tất cả từ trao đổi thông tin với nhau.

    - 🚀 Kết quả đọc là "Ai cũng sẽ nhìn thấy ai":

      - ```
        Con ↔ mèo ↔ ngủ ↔ nó ↔ mệt
        ```

### 🔥 Tóm lại:

- Transformer hiểu chuỗi bằng cách cho mỗi phần tử “nhìn toàn bộ phần còn lại”.
