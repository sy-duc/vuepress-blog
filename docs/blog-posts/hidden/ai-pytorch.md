---
title: Deep Learning với PyTorch
---

# Deep Learning với PyTorch

![PyTorch](./images/ai-pytorch.png)

[PyTorch](https://pytorch.org/) là framework cho phép xây dựng – huấn luyện – kiểm soát – triển khai một hệ Deep Learning.

Để dễ hình dung, model `MiniLM-L6-v2` chúng ta sử dụng tại bài [Thực hành triển khai Chatbot](https://sy-duc.github.io/vuepress-blog/blog-posts/hidden/ai-practice.html) chính là PyTorch model. Chỉ khác là chúng ta dùng model đã train sẵn.

[1. PyTorch trong hệ sinh thái AI](#1)

[2. Tensor – ngôn ngữ nền tảng của PyTorch](#2)

[3. Autograd – PyTorch “tự suy nghĩ” như thế nào?](#3)

[4. Model & Optimizer trong PyTorch](#4)

[5. Loss – Objective & tư duy tối ưu](#5)

[6. Dữ liệu & Data Pipeline](#6)

[7. Debug & hiểu model đang làm gì](#7)

[8. Fine-tuning & Transfer Learning](#8)

[9. PyTorch trong ứng dụng AI thực tế](#9)

Todo...

<a name="1"></a>

## 📌 1. PyTorch trong hệ sinh thái AI

- PyTorch không phải AI.

  - 👉 PyTorch là engine giúp chúng ta xây & chạy Deep Learning.

- PyTorch không phải là framework Deep Learning duy nhất.

  - Các framework phổ biến khác có thể kể đến như:

    - ✧ TensorFlow
    - ✧ JAX
    - ✧ Keras

  - 👉 Khi làm việc với Deep Learning, thư viện nào phía trên cũng đều sử dụng tốt. Tuy nhiên, PyTorch đem đến sự đơn giản, tối ưu triển khai hơn trong đa số tình huống, model. Xu hướng gần đây PyTorch đang phổ biến hơn.

<a name="2"></a>

## 📌 2. Tensor – ngôn ngữ nền tảng của PyTorch

### 1️⃣ Tensor là gì?

- Tensor tương tự mảng nhiều chiều (giống NumPy), tuy nhiên vậy là chưa đủ:

  - **Tensor = dữ liệu + ngữ cảnh tính toán + khả năng tham gia học**

  - 👉 Hiểu đơn giản, Tensor là Smart Data, không phải array bình thường.

  |               NumPy               |            Tensor            |
  | :-------------------------------: | :--------------------------: |
  |           Chỉ chứa data           |       Data + ngữ cảnh        |
  |             CPU-only              |          CPU / GPU           |
  | Không biết mình được dùng thế nào | Biết mình tham gia tính toán |
  |         Dùng xong là hết          |    Có thể tham gia “học”     |

- Ví dụ:

  - Chúng ta có ảnh screenshot:

    ```
    1920 x 1080 pixel, grayscale
    ```

  - ❌ Trong PyTorch, ảnh đó không phải:

    ```
    int[1920][1080]
    ```

  - ✔️ Mà là:

    ```
    Tensor:
    - shape = (1, 1, 1080, 1920)
    - dtype = float32
    - device = cpu / gpu
    ```

  - 👉 Tensor mô tả đầy đủ ảnh đó đang được xử lý như thế nào.

### 2️⃣ Shape – hình dạng tư duy

- Shape giống như:

  - Schema của DB
  - DTO trong API
  - Interface của function

- ❌ Model không hiểu:

  ```
  “đây là ảnh”, “đây là chữ”
  ```

- ✔️ Nó chỉ hiểu:

  ```
  “dimension 0 là batch, dimension 1 là channel…”
  ```

- 👉 Model không hiểu ý nghĩa, chỉ hiểu shape.

- Ví dụ:

  - Chúng ta có OCR model (giúp máy tính nhận dạng và trích xuất văn bản từ hình ảnh) nhận input:

    ```
    (batch, channel, height, width)
    ```

  - Nếu chúng ta truyền:

    ```
    (height, width)
    ```

  - 👉 Giống gọi API thiếu field → runtime error.

### 3️⃣ Dtype – bản chất số học

- Hãy coi dtype giống như kiểu của biến:

  ```
  int    → số nguyên
  float  → số thực
  double → số thực chính xác cao hơn
  ```

- Nhưng trong PyTorch, hậu quả của việc chọn sai dtype là rất lớn.

  - Model học bằng cách: đo sai → chỉnh → đo lại → chỉnh tiếp.

    - "Chỉnh từng chút" lúc này nghĩa là:

      ```
      +0.001
      -0.0003
      ```

    - Nếu chúng ta dùng `int`:
      ```
      3 + 0.001 = 3  (bị làm tròn)
      ```

  - 👉 Tensor dùng để học bắt buộc phải là float (số thực) để có những lần chỉnh rất nhỏ.

- **Tóm lại**:
  - dtype ảnh hưởng tới việc hệ thống có “học” được không.

### 4️⃣ Device - nơi data thực sự được xử lý

- Device giống:

  - Local machine
  - Remote server
  - GPU worker

- 👉 Tensor và model (data và code) phải ở cùng nơi. Giống như không thể gửi object ở server A cho function ở server B.

- Ví dụ:

  - Model load lên GPU
  - Ảnh vẫn ở CPU
  - Khi chạy:
    ```
    RuntimeError: expected device cuda but got cpu
    ```

### 5️⃣ Biến đổi tensor & pipeline xử lý data

- Trong PyTorch, tensor không đứng yên mà luôn di chuyển.

  - **Model = chuỗi phép biến đổi tensor**

    - Mỗi bước: nhận tensor, trả ra tensor mới.

- Hai loại biến đổi quan trọng:

  - ➀ Biến đổi hình dạng, data không đổi.

  - ➁ Biến đổi nội dung, giá trị thay đổi.

### 6️⃣ Broadcasting – auto xử lý hàng loạt

- Broadcasting giống như auto loop.

- Ví dụ:

  ```
  data (1000 records)
  + threshold (1 value)
  ```

  - 👉 Framework sẽ:
    - Copy threshold cho 1000 record
    - Apply song song

- ✔️ Broadcasting đúng → code gọn

- ❌ Broadcasting sai → model học lệch mà không báo lỗi → bug khó phát hiện nhất.

### 7️⃣ Batch thinking – xử lý nhiều item cùng lúc

- ❌ Deep Learning không xử lý từng record:

  ```
  process(image)
  ```

- ✔️ Mà Deep Learning xử lý list / batch:

  ```
  process(list<image>)
  ```

- 👉 Batch giúp chạy nhanh, ổn định, tận dụng GPU.

<a name="3"></a>

## 📌 3. Autograd – PyTorch “tự suy nghĩ” như thế nào

- **Autograd = hệ thống theo dõi “ai đã làm gì với dữ liệu”**

  - Mục đích để khi kết quả sai, biết phải sửa chỗ nào.

- 👉 Autograd như là debug system cho Deep Learning.

### 1️⃣ Computational graph

- Computational graph giống như trace log, trong đó graph là luồng xử lý dữ liệu.

- Ví dụ hình dung:

  - Chúng ta có logic code:

    ```
    x = input
    y = x * 2
    z = y + 3
    loss = z - target
    ```

  - PyTorch không chỉ tính kết quả, nó còn ghi nhớ:

    ```
    loss
     ↑
    z = y + 3
     ↑
    y = x * 2
     ↑
    x
    ```

  - 👉 Đây chính là **computational graph**

### 2️⃣ Forward → Backward

- Forward = chạy chương trình bình thường để ra kết quả.

  - Gọi function → PyTorch tính kết quả → ghi lại trace với computational graph

- Backward = PyTorch chạy ngược lại chương trình đó để:

  - Tìm xem mỗi tham số đã góp phần gây lỗi bao nhiêu.
    - 👉 Từ đó biết nên chỉnh tham số theo hướng nào.

### 3️⃣ Gradient sinh ra ở đâu và khi nào?

- **Gradient** cho biết muốn loss giảm thì mỗi tham số nên tăng hay giảm, và giảm/tăng bao nhiêu.

  - 👉 Gradient sinh ra sau backward và được gắn vào tensor.

- Tuy nhiên, Gradient sinh ra sẽ không tự áp dụng. Optimizer mới dùng gradient để update (sẽ tìm hiểu ở mục tiếp theo).

### 4️⃣ Computational graph có thể bị đứt

- Khi nào computational graph bị phá vỡ?

- #### ➀ Dùng code Python “ngoài PyTorch”

  - Ví dụ:

    ```
    value = tensor.item()
    new_tensor = torch.tensor(value)
    ```

    - Trong ví dụ trên chúng ta đã rút dữ liệu ra khỏi graph và tạo tensor mới không có lịch sử.

      - 👉 Graph bị đứt.

- #### ➁ Convert sang NumPy

  ```
  arr = tensor.numpy()
  ```

  - 👉 PyTorch mất quyền theo dõi

- #### ➂ Dùng tensor không cần gradient

  - Tensor chỉ tham gia học nếu:

    ```
    requires_grad = True
    ```

    - 👉 Không bật → PyTorch coi như constant.

### 5️⃣ Kiểm soát gradient

- PyTorch cho chúng ta quyền chủ động kiểm soát gradient:

  - ➀ detach – “cắt dây thần kinh”: dùng kết quả, nhưng không học từ nó.

  - ➁ no_grad – “chạy mà không ghi log”: run code nhưng không bật debug trace.

  - ➂ retain_graph – không xóa log”.

<a name="4"></a>

## 📌 4. Model & Optimizer trong PyTorch

### 1️⃣ Model trong PyTorch

- Model = một chương trình có tham số mà PyTorch dùng output của nó để có thể:

  - ✧ Theo dõi
  - ✧ Tính gradient
  - ✧ Cập nhật tự động

- Ví dụ đơn giản:

  ```python
  y = w * x + b
  ```

  - `w`, `b` là tham số.
    - 👉 PyTorch biết chúng cần gradient và sẽ được optimizer cập nhật.

- Thay vì viết code rời rạc, PyTorch cho chúng ta 1 khung chuẩn, đó là `nn.Module`:

  ```python
  class MyModel(nn.Module): # "nn" ám chỉ Neural Network
    def __init__(self):
        ...
    def forward(self, x):
        ...
  ```

  - ✧ `forward` = business logic
  - ✧ `backward` PyTorch tự lo

- ⚠️ Model chỉ nhận input, trả output. Nó không tự update, không biết loss, không biết "học".
  - Bản chất:
    - Model = code + tham số
    - Training = tìm giá trị tốt cho tham số đó

### 2️⃣ Optimizer trong PyTorch

- | Thành phần | Tương đương    |
  | ---------- | -------------- |
  | Model      | Code           |
  | Loss       | Bug score      |
  | Gradient   | Log lỗi        |
  | Optimizer  | Người sửa code |

- 👉 **Optimizer** = cơ chế cập nhật tham số dựa trên gradient

- Công việc cụ thể của Optimizer:
  - Sau khi backward, Optimizer đi qua từng parameter:
    - ➀ Xem .grad
    - ➁ Chỉnh giá trị parameter một chút

### 3️⃣ Tại sao optimizer tách khỏi model?

- Việc Optimizer tách khỏi Model giúp chúng ta có thể đổi Optimizer mà vẫn giữ nguyên Model.

  - Giống như code không đổi nhưng vẫn có thể đổi cách debug / tuning khác nhau.

- Nhiều Optimizer cho chúng ta nhiều chiến lược sửa lỗi, cải tiến.

<a name="5"></a>

## 📌 5. Loss – Objective & tư duy tối ưu

- Trong xuyên suốt các bài viết trước, chúng ta chắc hẳn đều biết về `loss` - độ sai của mô hình so với thực tế.

- Trong PyTorch:
  - **Loss function = hàm đánh giá output của model tệ đến mức nào**
  - 👉 Không có loss → không biết sửa gì

### 1️⃣ Loss không sửa model – loss chỉ “phán xét”

- ❌ Loss không làm model học, hay update tham số.

- ✔️ Loss chỉ nhận output → so với target → trả về một con số:

  ```
  Loss = 0   → hoàn hảo
  Loss = 10  → sai nhiều
  ```

  - 👉 Loss giống như unit test, không phải code sửa bug.

### 2️⃣ Loss phải là “hàm số”, không phải if–else

- ❌ Loss không phải if–else:

  - Ví dụ:

    ```python
    if y == target:
        loss = 0
    else:
        loss = 1
    ```

  - 👉 Nhìn có vẻ hợp lý, nhưng mỗi vậy thì sẽ không biết hướng sửa nên chỉnh weight tăng hay giảm.

- ✔️ Loss phải trả lời được hai câu hỏi:

  - ➀ Sai bao nhiêu? (magnitude)
  - ➁ Sai theo hướng nào? (direction)

- Ví dụ bài toán dự đoán giá nhà:

  ```
  loss = (prediction - target)^2
  ```

  - 👉 Bình phương để:
    - Sai nhiều → phạt nặng
    - Sai ít → phạt nhẹ

<a name="6"></a>

## 📌 6. Dữ liệu & Data Pipeline

### 1️⃣ Dataset

- Dataset KHÔNG phải là “data”.

  - **Dataset = cách truy cập data**

- Trong PyTorch:

  ```python
  class MyDataset(Dataset):
    def __getitem__(self, idx):
        ...
    def __len__(self):
        ...
  ```

  - 👉 Dataset không phải nơi “chứa dữ liệu”, mà chỉ định nghĩa lấy 1 sample (`__getitem__`) như thế nào:
    - ✧ Đọc từ file
    - ✧ Đọc từ DB
    - ✧ Đọc từ RAM
    - ✧ Generate realtime

### 2️⃣ DataLoader

- **DataLoader = engine kéo dữ liệu**

  - DataLoader gọi `Dataset.__getitem__`
    - → gom nhiều sample thành batch
      - → chạy song song (nhanh và ổn định).

- Nếu xem **Dataset = what**
  - 👉 **DataLoader = how**

### 3️⃣ Online data vs Offline data

- ✦ Offline data:

  - Ảnh, CSV, log, JSON

  - Dataset cố định
  - ✔️ Dễ debug
  - ❌ Không linh hoạt

- ✦ Online / Streaming data:

  - Data sinh trong lúc train (log hệ thống, sensor / IoT, v.v.)

  - Dataset lúc này fetch data mới

### 4️⃣ Augmentation & tiền xử lý

- Một sample data thô thường sẽ đi như sau:

  ```
  Raw data
     ↓
  Tiền xử lý (chuẩn hóa, làm sạch, chuyển dạng)
     ↓
  Augmentation (chỉ khi training)
     ↓
  Tensor → Model
  ```

- 👉 Tiền xử lý là quá trình bắt buộc
  - Augmentation là chiến thuật, chỉ dùng cho training.

#### ➀ Tiền xử lý (Preprocessing)

- Tiền xử lý là việc biến dữ liệu thực tế lộn xộn thành dạng ổn định, nhất quán, model hiểu được.

  - Giống như việc data normalization trước khi insert DB.

- Ví dụ:

  - Text thô:

    ```
    "Xin chào!!!   Tôi   là Đức :)"
    ```

  - Tiền xử lý:

    - ✧ Lowercase
    - ✧ Bỏ ký tự thừa
    - ✧ Tokenize
    - ✧ Convert → id

    ```
    ["xin", "chào", "tôi", "là", "đức"]
    → [124, 532, 87, 9, 3021]
    ```

#### ➁ Augmentation

- Augmentation là việc cố tình làm dữ liệu xấu đi một chút (không làm thay đổi nhãn) để model học được bản chất, không học thuộc.

  - Bởi data thực tế luôn biến thiên đa dạng, trong khi dataset của chúng ta thì nhỏ
    - 👉 Nếu không augmentation, gặp dữ liệu hơi khác rất dễ fail.

- Ví dụ:
  - Ảnh gốc con mèo.
  - Augmentation: xoay nhẹ, zoom, đổi sáng.
  - 👉 Mèo không phụ thuộc vào góc chụp.

#### Tóm lại:

- **Preprocessing** giúp model “hiểu” dữ liệu.

- **Augmentation** giúp model “chịu đựng” dữ liệu.

### 5️⃣ Hiệu năng I/O & memory

#### ➀ num_workers

- ```python
  DataLoader(num_workers=4)
  ```

  - `num_workers` = số process load data song song.
    - 👉 Nếu = 0 → load data trên main thread.

- Thông thường:
  - ✧ HDD: `num_workers` = 2–4
  - ✧ SSD: `num_workers` = 4–8
  - ✧ Server mạnh: `num_workers` = 8–16

#### ➁ pin_memory

- ```python
  pin_memory=True
  ```

  - 👉 Giúp copy CPU → GPU nhanh hơn

#### ➂ Dataset nặng → cache

- Model nhanh nhưng data chậm = training chậm

- Ví dụ ảnh lớn → decode ảnh tốn CPU → có thể cache.

<a name="7"></a>

## 📌 7. Debug & hiểu model đang làm gì

- **Debug model = debug dòng chảy dữ liệu & trạng thái**

- Các tầng Debug nên theo đúng thử tự như dưới:

### 1️⃣ Data

- Input có đúng như mình nghĩ không?
- Nhãn có lệch không?

### 2️⃣ Forward

- Tensor shape có đúng?
- Giá trị có toàn 0 / NaN không?

### 3️⃣ Loss

- Loss có giảm không?
- Loss có quá nhỏ ngay từ đầu?

### 4️⃣ Gradient

- grad có bằng 0 / None / NaN không?

<a name="8"></a>

## 📌 8. Fine-tuning & Transfer Learning

### 1️⃣ Fine-tuning

- Huấn luyện từ đầu rất tốn kém khi cần rất nhiều data, compute, rất dễ fail.

  - 👉 **Fine-tuning** = chỉnh lại tham số đã học cho bài toán mới.

- Bản chất của việc Fine-tuning là việc Gradient tiếp tục chảy vào weights cũ.

- ✔️ Khi nào nên Fine-tuning:

  - ✧ Data ít
  - ✧ Task gần giống
  - ✧ Compute hạn chế

- ❌ Khi nào không nên Fine-tuning:

  - ✧ Task rất khác
  - ✧ Data rất lớn
  - ✧ Domain mới hoàn toàn

### 2️⃣ Transfer Learning

- **Transfer Learning** = dùng lại kiến thức đã học từ bài toán khác
  - Giống như:
    - ✧ Dùng thư viện thay vì code từ đầu
    - ✧ Dùng framework thay vì tự viết runtime

<a name="9"></a>

## 📌 9. PyTorch trong ứng dụng AI thực tế

### 1️⃣ PyTorch KHÔNG phải lúc nào cũng xuất hiện

- Nhiều người mới học AI thường hiểu nhầm:

  - ❌ “Làm AI là phải train model bằng PyTorch”

- 👉 Thực tế:
  - PyTorch là framework xây dựng & huấn luyện model.
  - Nhưng rất nhiều hệ thống AI chỉ DÙNG model, không train.

### 2️⃣ Chatbot & AI hội thoại (Website, App)

- 80% ~ 90% chatbot trên các website hiện nay KHÔNG cần train model từ đầu (dùng PyTorch trực tiếp) mà sẽ sử dụng Pretrained model. Ví dụ:

  - ✧ OpenAI (GPT-4/4o/5)
  - ✧ Claude
  - ✧ Gemini
  - ✧ LLaMA / Mistral (chạy local)
  - ✧ sentence-transformers cho embedding

- 🔥 Một số ít Chatbot sử dụng model riêng khi:
  - ✧ Dữ liệu cực kỳ đặc thù
  - ✧ Yêu cầu bảo mật cao
  - ✧ Quy mô lớn (enterprise)
  - 👉 Thậm chí đa phần trong này sẽ Fine-tuning, ngoại trừ các nhóm Big Tech.

### 3️⃣ AI dự đoán, cảnh báo, ra quyết định (Prediction / Anomaly)

- Đây là nơi PyTorch xuất hiện MẠNH NHẤT.

- Ví dụ thực tế:
  - ✧ Dự đoán sản lượng
  - ✧ Phát hiện lỗi máy
  - ✧ Cảnh báo bất thường
  - ✧ Dự báo xu hướng
  - ✧ Quality monitoring

### 4️⃣ Computer Vision

- Ứng dụng phổ bến trong lĩnh vực này như:

  - ✧ Classification - Phân loại (ví dụ phân loại ảnh)
  - ✧ Object detection - Phát hiện đối tượng
  - ✧ OCR - Trích xuất văn bản từ hình ảnh
  - v.v.

- 👉 PyTorch thường dùng fine-tune, không train từ đầu.

### 5️⃣ Generative AI (Image, Text, Audio)

- Gần như toàn dùng pretrained.
