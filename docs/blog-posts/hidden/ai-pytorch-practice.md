---
title: Thực hành Deep Learning với PyTorch
---

# Thực hành Deep Learning với PyTorch

![PyTorch](./images/ai-pytorch.png)

Sau khi tìm hiểu lý thuyết nền tảng AI và PyTorch, bước tiếp theo là làm bài toán ứng dụng thực tế.

Tuy nhiên, chúng ta vẫn sẽ giữ đúng hướng đi ban đầu là không thuần nghiên cứu, mà là xây hệ thống AI dùng được.

[1. Setup môi trường PyTorch](#1)

[2. Bài toán Dự đoán giá nhà](#2)

[3. Bài toán Giao dịch bình thường / bất thường](#3)

<!-- [1. Setup môi trường PyTorch](#1)

[2. Image classification - Phân loại ảnh](#2)

[3. Object detection – Phát hiện đối tượng](#3)

[4. Segmentation](#4)

[5. Pose estimation - Dự đoán tư thế](#5)

[6. Image generation – Tạo ảnh](#6)

[7. Anomaly Detection & Phát hiện điểm bất thường](#7)

[8. Sentiment analysis - Phân tích cảm xúc](#8)

[9. Video classification - Phân loại video](#9) -->

<a name="1"></a>

## 📌 1. Setup môi trường PyTorch

- ❌ Dùng Google Colab hay Jupyter local chỉ phù hợp cho lúc học PyTorch, test, demo & research, hay khi cần GPU tạm mà máy local không có.

- ✔️ Recommend mọi người dùng VS Code + venv (môi trường ảo) luôn bởi:
  - ✧ Giống môi trường thực tế
  - ✧ Dễ deploy
  - ✧ Dễ đóng gói .exe
  - ✧ Dễ debug
  - ✧ Quản lý code rõ ràng

### ⚙️ Setup

- ❶ Cài Python chính thức

- ❷ Tạo folder project

- ❸ Tạo môi trường ảo

  ```bash
  python -m venv venv
  ```

- ❹ Active môi trường ảo

  ```bash
  venv\Scripts\activate
  ```

- ❺ Cài PyTorch

  ```bash
  pip install torch torchvision torchaudio
  ```

  - Ở đây chúng ta dùng CPU là đủ, chưa cần GPU.

- ❻ VS Code setup
  - ✧ Mở project trên VS Code
  - ✧ Chọn Python Interpreter → venv
  - ✧ Cài extension: Python, Pylance

<a name="2"></a>

## 📌 2. Bài toán AI dự đoán đơn giản (Linear Regression)

- Bài toán kinh điển: Dự đoán giá nhà

### 1️⃣ Phân tích bài toán

- Input: đặc trưng ngôi nhà
- Output: giá nhà (số thực)

- 👉 AI sẽ phải học xu hướng từ dữ liệu:
  - **“Với các đặc trưng này, giá thường nằm ở khoảng nào?”**

### 2️⃣ Dữ liệu giả lập

- Chúng ta tạo dataset đơn giản nhưng thực tế:
  | Feature | Ý nghĩa |
  | -------- | --------- |
  | area | Diện tích (m²) |
  | bedrooms | Số phòng |
  | distance | Khoảng cách tới trung tâm (km) |

  - 👉 3 feature → 1 giá

### 3️⃣ Structure project

- ```
  house_price/
  │
  ├─ venv/
  ├─ data.py          # Dữ liệu
  ├─ model.py         # Định nghĩa Model
  ├─ train.py         # Học
  ├─ predict.py       # Dự đoán
  └─ requirements.txt
  ```

- Tham khảo source [tại đây](https://github.com/sy-duc/house_price_ai).

### 4️⃣ Import & tạo dữ liệu

#### ❶ Tạo dữ liệu

- Để hiểu PyTorch, chúng ta thường sẽ tạo dữ liệu giả lập để dễ kiểm soát hoàn toàn logic, tránh rối bởi preprocessing sớm.

  - 👉 Khi hiểu rồi sẽ thay bằng dữ liệu thật (CSV, DB, API).

- `data.py`:

  ```python
  def generate_house_data(num_samples=1000):
      """
      Tạo dữ liệu giả lập cho bài toán dự đoán giá nhà
      Gồm 1000 mẫu dữ liệu
      Trong thực tế, hàm này sẽ là load CSV / query DB / call API
      """

      # Giữ cho dữ liệu random luôn giống nhau mỗi lần chạy code
      np.random.seed(42)  # 42 không có ý nghĩa kỹ thuật đặc biệt — nó là một “con số truyền thống” trong giới lập trình

      # Diện tích (m²): số thực từ 30 -> 200
      area = np.random.uniform(30, 200, num_samples)
      # Số phòng ngủ: số nguyên từ 1 -> 5
      bedrooms = np.random.randint(1, 6, num_samples)
      # Khoảng cách tới trung tâm (km): số thực từ 1 -> 20
      distance = np.random.uniform(1, 20, num_samples)

      # Công thức giá (chỉ giả định để tạo dữ liệu, AI không biết công thức này)
      price = (
          area * 5000                               # Nhà to → giá cao
          + bedrooms * 100000                       # Nhiều phòng → đắt
          - distance * 30000                        # Xa trung tâm → rẻ
          + np.random.normal(0, 50000, num_samples) # Noise (bởi thực tế sẽ không hoàn hảo. Không có noise → model học quá dễ, không thực tế)
      )

      # Gom feature thành ma trận X - dạng AI có thể dùng do AI không hiểu biến rời rạc
      X = np.column_stack((area, bedrooms, distance))  # Mỗi dòng = 1 căn nhà
      y = price # Nhãn (giá nhà)

      return X, y
  ```

#### ❷ Chuẩn hóa dữ liệu (Normalize)

- Tương đương bước tiền xử lý (preprocessing).

- Ví dụ:

  ```
  Area (m²):      [50, 120, 200]
  Bedrooms:      [1, 3, 5]
  Distance (km): [2, 10, 18]
  ```

  - 👉 Scale khác nhau rất lớn, Gradient học:
    - ✧ Area áp đảo
    - ✧ Bedrooms gần như bị “bỏ qua”

- ✔️ Normalize = đưa về cùng thang đo:

  | Feature  | Trước    | Sau          |
  | -------- | -------- | ------------ |
  | Area     | 50 → 200 | -1.19 → 1.25 |
  | Bedrooms | 1 → 5    | -1.22 → 1.22 |
  | Distance | 2 → 18   | -1.15 → 1.15 |

  - 👉 Model học công bằng hơn.

- ⚠️ Cần chuẩn hóa dữ liệu cho cả input và output (price).

- `data.py`:

  ```python
  def normalize_features(X):
      mean = X.mean(axis=0) # Tính trung bình
      std = X.std(axis=0)   # Tính độ lệch chuẩn (các giá trị cách xa trung bình bao nhiêu)

      X_norm = (X - mean) / std
      return X_norm, mean, std

  def normalize_target(y):
      mean = y.mean()
      std = y.std()
      y_norm = (y - mean) / std
      return y_norm, mean, std
  ```

#### ❸ Tạo Dataset

- `data.py`:

  ```python
  class HousePriceDataset(Dataset):
      def __init__(self, X, y):
          self.X = torch.tensor(X, dtype=torch.float32)  # Chuyển numpy → torch.Tensor
          self.y = torch.tensor(y, dtype=torch.float32).view(-1, 1)  # view(-1, 1) để đảm bảo shape label khớp output, tránh lỗi

      def __len__(self):
          return len(self.X)

      def __getitem__(self, idx):
          return self.X[idx], self.y[idx]
  ```

### 5️⃣ Định nghĩa Model

- Chúng ta cần kế thừa `nn.Module` để PyTorch coi đây là model.

- `model.py`:

  ```python
  import torch.nn as nn  # Neural Network module

  class HousePriceModel(nn.Module):
      def __init__(self, input_dim):  # input_dim - số feature đầu vào (trong bài toán này là 3 - area, bedrooms, distance)
          super().__init__()
          self.linear = nn.Linear(input_dim, 1)  # Neural Network với 1 layer (Linear Regression)

      def forward(self, x):
          return self.linear(x)
  ```

### 6️⃣ Training Loop

- Đây là nơi AI "học".

#### ❶ Chuẩn bị dữ liệu

- `train.py`:

  ```python
  # Chuẩn bị dữ liệu
  X, y = generate_house_data(1000)
  X_norm, mean, std = normalize_features(X)
  y_norm, y_mean, y_std = normalize_target(y)

  # Tạo dataset
  dataset = HousePriceDataset(X_norm, y_norm)
  # Tạo DataLoader để dễ dàng lấy batch dữ liệu
  dataloader = DataLoader(dataset, batch_size=32, shuffle=True) # Không học 1000 mẫu cùng lúc mà học từng mini-batch (shuffle=True tránh model học theo thứ tự)
  ```

- ✦ Batch size ảnh hưởng đến cái gì?

  | Batch size         | Ảnh hưởng              |
  | ------------------ | ---------------------- |
  | Nhỏ (8,16)         | Học chậm, noisy        |
  | Trung bình (32,64) | Ổn định, phổ biến      |
  | Lớn (256+)         | Nhanh nhưng dễ overfit |

- ✦ Batch size trong AI thực tế phổ biến:

  | Hệ thống          | Batch  |
  | ----------------- | ------ |
  | OCR realtime      | 1–8    |
  | Chatbot embedding | 32–128 |
  | Vision training   | 32–64  |
  | Fine-tune LLM     | 1–4    |

#### ❷ Khởi tạo model

- `train.py`:

  ```python
  # Khởi tạo model với 3 feature
  model = HousePriceModel(input_dim=3)
  ```

#### ❸ Loss Function

- `train.py`:

  ```python
  # Thiết lập hàm mất mát (Loss Function) và optimizer
  criterion = torch.nn.MSELoss()
  optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
  ```

  - `lr=001`: learning rate - Mỗi lần update weight, chỉ thay đổi 0.1% theo hướng giảm loss.

  - Learning rate quá lớn làm cho Loss nhảy loạn.

  - Learning rate quá nhỏ làm cho Loss giảm rất chậm và train rất lâu.

#### ❹ Training Loop

- `train.py`:

```python
epochs = 100  # Số epoch để huấn luyện (1 epoch = học hết dataset 1 lần)

for epoch in range(epochs):
    total_loss = 0

    # Lặp qua từng batch
    for X_batch, y_batch in dataloader:
        # Forward pass (dự đoán)
        preds = model(X_batch)
        # Tính loss (so sánh với giá thật)
        loss = criterion(preds, y_batch)
        # Zero gradients trước khi backward (PyTorch cộng dồn gradient → nếu không reset → gradient sai)
        optimizer.zero_grad()
        # Backward pass (tính gradient)
        loss.backward()
        # Weight thay đổi → model thông minh hơn
        optimizer.step()

        total_loss += loss.item()

    # In kết quả: Loss giảm = model học được
    print(f"Epoch {epoch+1}/{epochs}, Loss: {total_loss:.4f}")
```

#### ❺ Lưu model và thông tin chuẩn hóa

- `train.py`:

  ```python
  torch.save({
      "model_state": model.state_dict(),
      "X_mean": mean,
      "X_std": std,
      "y_mean": y_mean,
      "y_std": y_std
  }, "model.pth")
  ```

### 7️⃣ Dự đoán

#### ❶ Load checkpoint an toàn

- Load model đã train và các thông tin chuẩn hóa dữ liệu đã lưu trước đó:

- `predict.py`:

  ```python
  checkpoint = torch.load("model.pth", weights_only=False)

  model_state = checkpoint["model_state"]
  X_mean = checkpoint["X_mean"]
  X_std = checkpoint["X_std"]
  y_mean = checkpoint["y_mean"]
  y_std = checkpoint["y_std"]
  ```

#### ❷ Khởi tạo model đã học

- `predict.py`:

  ```python
  model = HousePriceModel(input_dim=3)
  ```

#### ❸ Load trọng số đã học

- `predict.py`:

  ```python
  model.load_state_dict(model_state)
  ```

#### ❹ Chuyển sang chế độ đánh giá

- `predict.py`:

  ```python
  model.eval()
  ```

#### ❺ Chuẩn bị dữ liệu đầu vào

- Nhập dữ liệu mới (chưa từng thấy) để model dự đoán kết quả giá nhà.

- `predict.py`:

  ```python
  # Tạo một mẫu dữ liệu để dự đoán (1 căn nhà: 120 m² + 3 phòng + cách trung tâm 5 km)
  sample = torch.tensor([[120, 3, 5]], dtype=torch.float32)

  # Normalize input giống lúc train
  sample_norm = (sample - X_mean) / X_std
  sample_tensor = torch.tensor(sample_norm, dtype=torch.float32)
  ```

#### ❻ Forward – AI dự đoán

- ⚠️ Khi predict phải dùng cùng mean & std đã chuẩn hóa trước đó.

- `predict.py`:

  ```python
  with torch.no_grad():  # Tắt gradient khi predict
    # Forward – AI dự đoán
    y_pred_norm = model(sample_tensor)

  # Denormalize output → giá thật
  price = y_pred_norm.item() * y_std + y_mean

  # In kết quả ra dạng số
  print(f"Predicted price: {price:,.0f} VND")
  ```

### 7️⃣ Chạy chương trình dự đoán

#### ❶ Chạy TRAIN tạo model dự đoán giá nhà

- ```bash
  python train.py
  ```

  - 👉 Sinh ra file `model.pth`

#### ❷ Chạy PREDICT (dự đoán)

- ```bash
  python predict.py
  ```

- Ở những lần chạy dự đoán giá nhà sau sẽ không cần chạy train nữa (trừ khi muốn train lại).

### ⚠️ Quan trọng:

- Trong bài đoán vừa làm chỉ là Linear Regression viết bằng PyTorch, nó đang phù hợp với hoàn cảnh bài toán iện tại:

  - Dữ liệu ít (diện tích, số phòng, khoảng cách)
  - Quan hệ gần tuyến tính
  - 👉 Nhiều hệ thống production cũng chỉ cần có vậy.

- Tuy nhiên, thực tế sẽ có những bài toán dự đoán với data nhiều, phụ thuộc phức tạp (quan hệ phi tuyến):

  - Ví dụ giá nhà phụ thuộc thêm cả tuổi thọ, nội thất, v.v.
  - 👉 Linear không biểu diễn được “logic điều kiện”, và sẽ cần đến Deep Learning với các hidden layers (MLP – Multi-Layer Perceptron):

    ```
    x → Linear → ReLU → Linear → ReLU → Linear → y
    ```

<a name="3"></a>

## 📌 3. Bài toán Multi-Layer Perceptron (Binary Classification)

- Bài toán: Giao dịch bình thường / bất thường

### 1️⃣ Phân tích bài toán

- Input: Thông tin giao dịch
- Output: Bình thường / Bất thường

- ⚠️ **Lưu ý**:

  - ✧ Model sẽ KHÔNG trả về trực tiếp 0 (giao dịch bình thường) và 1 (giao dịch bất thường).
  - ✧ Model sẽ trả về 1 số thực (gọi là **logit**) → sau đó qua **Sigmoid** (hàm Logistic - đường chữ S) → **xác suất**.
  - ✧ Ví dụ:
    | Logit | Sigmoid | Kết luận |
    | ----- | ------- | ----------- |
    | 2.3 | 0.91 | Bất thường |
    | -1.2 | 0.23 | Bình thường |

    ```
    prob >= 0.5 → bất thường
    ```

### 2️⃣ Dữ liệu giả lập

- Mỗi giao dịch có các đặc trưng (feature).

  - Ví dụ:
    | Feature | Ý nghĩa |
    | -------------- | ------------------------- |
    | amount | Số tiền |
    | hour | Giờ giao dịch (0–23) |
    | location_score | Mức độ lạ của vị trí |
    | device_score | Mức độ lạ của thiết bị |
    | freq_24h | Số giao dịch 24h gần nhất |

- Trong bài này chúng ta sẽ sử dụng dataset mẫu có rất nhiều feature.
  - 👉 Tuy nhiên, bạn cũng không cần thiết hiểu ý nghĩa từng feature như vậy, bởi sau cùng thì Neural Network chỉ cần số, không cần biết đó là gì.

### 3️⃣ Import dữ liệu

- Chúng ta sẽ dùng Dataset có sẵn do [Kaggle](https://www.kaggle.com) cung cấp.

#### ❶ Tải Dataset mẫu

- Tải dataset Credit Card Fraud Detection [tại đây](https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud).

- Giải nén ra file `creditcard.csv` và đặt vào project.

#### ❷ Chia train / validation

- Hãy đánh giá lại Dataset mẫu chúng ta sử dụng:

  - ~99.8% là các data có class = 0 (giao dịch bình thường)
  - ~0.2% là các data có class = 1 (fraud - giao dịch bất thường)
  - 👉 Mất cân bằng nghiêm trọng.

- ❓ Chuyện gì xảy ra nếu KHÔNG chia train / validation?

  - Giả sử 1000 giao dịch:

    - ✧ 998 normal
    - ✧ 2 fraud

  - Chia train / validation = 80/20:

    - ✧ Train: 798 normal + 2 fraud
    - ✧ Val: 200 normal + 0 fraud ❌

  - 👉 Đánh giá là **vô nghĩa** do validation không có fraud nào.

- Với AI cảnh báo, validation trở nên vô cùng quan trọng:

  - Sai 1 giao dịch = hậu quả lớn.

- ✅ Do vậy, chúng ta cần giữ tỷ lệ fraud giống nhau ở train & val.

- `prepare_data.py`:

  ```python
  import pandas as pd
  from sklearn.model_selection import train_test_split

  df = pd.read_csv("data/creditcard.csv")

  train_df, temp_df = train_test_split(
      df,
      test_size=0.3,
      random_state=42,
      stratify=df["Class"]
  )

  val_df, test_df = train_test_split(
      temp_df,
      test_size=0.5,
      random_state=42,
      stratify=temp_df["Class"]
  )

  train_df.to_csv("data/train.csv", index=False)
  val_df.to_csv("data/val.csv", index=False)
  test_df.to_csv("data/test.csv", index=False)
  ```

  - ✧ Ở đây chúng ta chia 70% dữ liệu cho training, 30% cho validation và test (trong 30% này chia 50:50 cho validation và test).
  - ✧ Dữ liệu sau khi chia được lưu vào 3 file `.csv` riêng biệt.
  - ✧ `stratify = df["Class"] (y)` giữ tỷ lệ fraud giống nhau ở train & val.

#### ❸ Chuẩn hóa dữ liệu

- Nếu quan sát Dataset mẫu sẽ thấy:

  - V1..V28 → giá trị quanh 0.
  - Amount → có thể lên tới vài chục nghìn.

- ❌ Nếu không chuẩn hóa:

  - Neural Network học lệch.
  - Gradient khó hội tụ.

- ✔️ Chúng ta sẽ dùng công cụ hỗ trợ chuẩn hóa phổ biến `StandardScaler`.

- `fit_scaler.py`:

  ```python
  import pandas as pd
  from sklearn.preprocessing import StandardScaler
  import joblib

  # Đọc dữ liệu huấn luyện
  df = pd.read_csv("data/train.csv")
  X = df.drop(columns=["Class", "Time"])

  # Chuẩn hóa dữ liệu
  scaler = StandardScaler()
  scaler.fit(X)

  # Lưu trữ scaler
  joblib.dump(scaler, "artifacts/scaler.pkl")
  ```

  - Tạm thời không dùng cột `Time` do đây là số giây kể từ giao dịch đầu tiên, không mang ý nghĩa rõ ràng cho bài toán anomaly → dễ gây nhiễu.

  - Cột `Class` dùng cho label (nhãn) → tổng còn 29 feature.

- ⚠️ KHÔNG chuẩn hóa `y` trong bài toán Classification bởi `y` mang ý nghĩa logic (0 hoặc 1) chứ không phải giá trị đo lường.

### 4️⃣ Tạo PyTorch Dataset

- Khi training, validation và test thì đều cần tạo Dataset

  - 👉 Ta sẽ truyền `csv_path` đến file dữ liệu mẫu đã chia ban đầu.

- `dataset.py`:

  ```python
  import pandas as pd
  import torch
  from torch.utils.data import Dataset

  class FraudDataset(Dataset):
      def __init__(self, csv_path, scaler=None):
          df = pd.read_csv(csv_path)

          X_df = df.drop(columns=["Class", "Time"])
          y = df["Class"].values

          # Chuẩn hóa dữ liệu nếu scaler được cung cấp
          if scaler is not None:
              # Áp dụng chuẩn hóa (mean, std) đã học
              X = scaler.transform(X_df)
          else:
              X = X_df.values

          self.X = torch.tensor(X, dtype=torch.float32)
          self.y = torch.tensor(y, dtype=torch.float32).view(-1, 1)

      def __len__(self):
          return len(self.y)

      def __getitem__(self, idx):
          return self.X[idx], self.y[idx]
  ```

### 5️⃣ Định nghĩa Model

- `model.py`:

  ```python
  import torch.nn as nn

  class FraudMLP(nn.Module):
      def __init__(self, input_dim):
          super().__init__()

          self.model = nn.Sequential(
              nn.Linear(input_dim, 64),
              nn.ReLU(),
              nn.Linear(64, 32),
              nn.ReLU(),
              nn.Linear(32, 1)
          )

      def forward(self, x):
          return self.model(x)
  ```

- Cấu trúc MLP cơ bản:

  ```scss
  Input (29)
     ↓
  Linear(29 → 64)
     ↓
  ReLU
     ↓
  Linear(64 → 32)
     ↓
  ReLU
     ↓
  Linear(32 → 1)
     ↓
  Logits
  ```

  - `Linear(29 → 64)`: Layer 1 - lấy 29 số đầu vào tạo ra 64 đặc trưng mới.

    - Ví dụ:
      - Feature 1: “mẫu giao dịch lạ ban đêm”
      - Feature 2: “số tiền cao + vị trí bất thường”
      - v.v.

  - `Linear(64 → 32)`: Layer 2 - gom 64 đặc trưng trung gian, chắt lọc thành 32 đặc trưng trừu tượng hơn.

    - Nôm na nếu coi Layer 1 là các pattern nhỏ thì Layer 2 cho chúng ta thấy các dấu hiệu gian lận, bất thường.

  - `Linear(32 → 1)`: Output layer - 1 con số duy nhất thể hiện độ tin (chưa phải xác suất mà mới chỉ là **logit**) rằng giao dịch này là fraud.

  - `ReLU`: Tạo phi tuyến, cho phép model học quan hệ phức tạp.
    - Ví dụ muốn phát hiện “Giao dịch ban đêm và số tiền lớn thì đáng nghi”:
      - Nếu ban ngày → giá trị âm → ReLU = 0 → không quan tâm
      - Nếu ban đêm → giá trị dương → ReLU giữ lại → kích hoạt
      - 👉 Nếu không có `ReLU`: trời sáng hay tối không quan tâm → ban ngày vẫn bị đáng nghi

- ⚠️ **Lưu ý**:
  - Các con số 64, 32 là do kinh nghiệm + thử nghiệm, không có công thức chính xác.

### 6️⃣ Training Loop

- Nhìn chung, khung Training Loop trong bài toán này cũng tương tự bài toán Dự đoán giá nhà.

  - Điểm khác biệt là sử dụng hàm mất mát (Loss Function) `BCEWithLogitsLoss` giúp tự động áp dụng Sigmoid:

    ```
    BCEWithLogitsLoss = Sigmoid(logit) + BCELoss
    ```

- `train.py`:

  ```python
  import torch
  import joblib
  from torch.utils.data import DataLoader
  from torch import nn, optim

  from model import FraudMLP
  from dataset import FraudDataset

  # Load scaler
  scaler = joblib.load("artifacts/scaler.pkl")

  # Tạo Dataset
  train_ds = FraudDataset("data/train.csv", scaler)

  # Tạo DataLoader
  train_loader = DataLoader(train_ds, batch_size=256, shuffle=True)

  # Khởi tạo model, loss function và optimizer
  model = FraudMLP(29).to("cpu")
  criterion = nn.BCEWithLogitsLoss()
  optimizer = optim.Adam(model.parameters(), lr=0.001)

  # Huấn luyện mô hình
  EPOCHS = 10
  for epoch in range(EPOCHS):
      model.train()
      total_loss = 0

      for X, y in train_loader:
          X, y = X.to("cpu"), y.to("cpu").view(-1, 1)

          optimizer.zero_grad()
          logits = model(X)
          loss = criterion(logits, y)
          loss.backward()
          optimizer.step()

          total_loss += loss.item()

      avg_loss = total_loss / len(train_loader)
      print(f"Epoch {epoch+1}, loss={avg_loss:.4f}")

  torch.save(model.state_dict(), "artifacts/model.pth")
  ```

### 7️⃣ Validation & Metrics

- ❌ Training loss chỉ cho biết model nhớ data train tốt tới đâu, không giúp tổng quát hóa model.

  - Bởi thực tế với data mà model chưa từng thấy, output có thể fail.

- ✔️ Validation giúp:

  - ✦ Kiểm tra khả năng tổng quát:

    - Model học có áp dụng được cho dữ liệu mới không?

  - ✦ Quyết định dừng train:

    ```
    Epoch 10: Val loss nhỏ nhất → giữ model
    Epoch 11+: Val loss tăng → stop
    ```

  - ✦ So sánh model / hyperparameter:

    ```
    LR = 0.01 → val loss = 0.42
    LR = 0.001 → val loss = 0.31 ✅
    ```

    - 👉 Chọn cái tốt trên validation, không phải train.

  - ✦ Chọn threshold / metric phù hợp:

    - ✧ Với lượng Dataset mẫu 99% là normal, 1% là fraud:

      - Ví dụ output:
        | Giao dịch | Xác suất fraud |
        | ---------- | -------------- |
        | Fraud thật | 0.42 |
        | Fraud thật | 0.37 |
        | Normal | 0.05 |
      - 👉 Nếu threshold = 0.5 sẽ không bắt được fraud nào.

    - ✧ Chúng ta sẽ cần:

      - ➀ Precision

        ```
        Trong những cái mình báo fraud → bao nhiêu cái là fraud thật
        ```

        - 👉 Precision cao → ít báo nhầm

      - ➁ Recall

      ```
      Trong tất cả fraud thật → mình bắt được bao nhiêu
      ```

      - 👉 Recall thấp → bỏ sót gian lận

    - 🔥 **Tóm lại**:

      - ✧ Không có threshold “đúng”, chỉ có threshold phù hợp mục tiêu kinh doanh.

      - ✧ Chọn threshold: Ưu tiên Recall (Recall ≥ 85%) hoặc cân bằng Precision / Recall hoặc cân bằng chi phí tiền bạc:
        - Ví dụ:
          - Bỏ sót 1 fraud = mất 1.000$
          - Báo nhầm 1 giao dịch = tốn 5$
          - 👉 Ta chọn threshold báo nhầm còn hơn bỏ sót.

- ⚠️ **Validation loop chỉ forward + đo metric, KHÔNG backward.**

- `validation.py`:

  ```python
  import torch
  import joblib
  import numpy as np
  import json
  from sklearn.metrics import recall_score
  from torch.utils.data import DataLoader

  from dataset import FraudDataset
  from model import FraudMLP

  # Load scaler
  scaler = joblib.load("artifacts/scaler.pkl")

  # Tạo Dataset
  val_ds = FraudDataset("data/val.csv", scaler)

  # Tạo DataLoader
  val_loader = DataLoader(val_ds, batch_size=256, shuffle=False)

  # Khởi tạo model
  model = FraudMLP(29).to("cpu")
  state_dict = torch.load("artifacts/model.pth", weights_only=True)
  model.load_state_dict(state_dict)

  # Chuyển đổi model sang chế độ đánh giá
  model.eval()

  all_probs, all_labels = [], []

  with torch.no_grad():
      for X, y in val_loader:
          X, y = X.to("cpu"), y.to("cpu").view(-1, 1)

          logits = model(X)
          probs = torch.sigmoid(logits)

          all_probs.append(probs.detach().cpu().numpy())
          all_labels.append(y.detach().cpu().numpy())

  # Gộp tất cả các dự đoán và nhãn lại
  probs = np.vstack(all_probs).ravel()
  labels = np.vstack(all_labels).ravel()

  # Khởi tạo threshold mặc định ban đầu
  best_threshold, best_recall = 0.5, 0

  # Tìm kiếm ngưỡng tốt nhất
  # Quét threshold từ 0.1 đến 0.9 với step 0.05 để tối ưu hóa
  for t in np.arange(0.1, 0.9, 0.05):
      # Dự đoán nhãn
      preds = (probs >= t).astype(int)
      # Tính Recall
      recall = recall_score(labels, preds)
      # Giữ threshold tốt nhất
      if recall > best_recall:
          best_recall = recall
          best_threshold = t

  # Lưu threshold và recall tốt nhất vào file config.json
  config = {
      "threshold": float(best_threshold),
      "recall": float(best_recall)
  }

  with open("artifacts/config.json", "w") as f:
      json.dump(config, f, indent=2)

  print("Best threshold:", best_threshold)
  ```

### 8️⃣ Test

- ✦ Là bước đánh giá cuối cùng.

- ✦ Khi test phải dùng dữ liệu thực tế mà model chưa từng thấy.

  - 👉 Chúng ta sử dụng dữ liệu test đã chia ban đầu.

- ✦ Sau bước validation, chúng ta đã khóa model + threshold.

  - 👉 Giai đoạn test sẽ áp dụng threshold đã chọn để kiểm chứng việc nếu đưa model ra production thì nó sẽ hoạt động ra sao.

- ✦ Để kiểm chứng kết quả test:

  - ✧ Có bỏ sót fraud nhiều không?
  - ✧ Báo nhầm bao nhiêu?
  - 👉 Log báo cáo test là khâu quan trọng và bắt buộc.

- `test.py`:

  ```python
  import json
  import torch
  import joblib
  import numpy as np
  from torch.utils.data import DataLoader
  from sklearn.metrics import classification_report, roc_auc_score

  from model import FraudMLP
  from dataset import FraudDataset

  # Load scaler
  scaler = joblib.load("artifacts/scaler.pkl")

  # Tạo Dataset
  test_ds = FraudDataset("data/test.csv", scaler)

  # Tạo DataLoader
  test_loader = DataLoader(test_ds, batch_size=256, shuffle=False)

  # Khởi tạo model
  model = FraudMLP(29).to("cpu")
  state_dict = torch.load("artifacts/model.pth", weights_only=True)
  model.load_state_dict(state_dict)

  # Chuyển đổi model sang chế độ đánh giá
  model.eval()

  # Tìm ngưỡng tối ưu học từ validation
  with open("artifacts/config.json") as f:
      threshold = json.load(f)["threshold"]

  all_probs, all_labels = [], []

  with torch.no_grad():
      for X, y in test_loader:
          X, y = X.to("cpu"), y.to("cpu").view(-1, 1)
          probs = torch.sigmoid(model(X))
          all_probs.append(probs.numpy())
          all_labels.append(y.numpy())

  probs = np.vstack(all_probs).ravel()
  labels = np.vstack(all_labels).ravel()

  # Dự đoán nhãn
  preds = (probs >= threshold).astype(int)

  print(classification_report(labels, preds))
  print("AUC:", roc_auc_score(labels, probs))
  ```

- ✦ Ví dụ log kết quả test:

  - **➀ `classification_report` – Đọc TỪNG DÒNG**

    ```markdown
                      precision    recall  f1-score   support

                0.0       1.00      1.00      1.00      42648
                1.0       0.77      0.84      0.80         74

          accuracy                            1.00      42722
          macro avg       0.88      0.92      0.90      42722
        weighted avg      1.00      1.00      1.00      42722
    ```

    - Chúng ta sẽ chỉ quan tâm dòng `1.0`:
      - `support = 74`: có 74 giao dịch gian lận thật trên 42648 giao dịch.
      - `recall = 0.84`: trong 74 giao dịch gian lận model bắt được 84% (≥ 0.8 là TỐT).
      - `precision = 0.77`: trong các giao dịch model bắt gian lận, 77% là thật.
      - `f1-score = 0.80`: trung bình của precision & recall (≥ 0.75 là TỐT).

  - **➁ `roc_auc_score`**
    - Là xác xuất model ưu tiên đánh giá 1 giao dịch gian lận hay không lên trên giao dịch bình thường.
    - AUC KHÔNG phụ thuộc threshold.
    - | AUC  | Đánh giá |
      | ---- | -------- |
      | 0.5  | Random   |
      | 0.7  | Tạm      |
      | 0.8  | Tốt      |
      | 0.9  | Rất tốt  |
      | 0.97 | Xuất sắc |

### 9️⃣ Triển khai inference - Đưa model đã train ra sử dụng thật

#### ➀ Mục tiêu

- Đưa model đã train ra sử dụng thật.

- Sử dụng được cho các giao dịch realtime → cần nhanh.

- Không bị lệ thuộc code train.

- Kết quả giống test.

#### ➁ Chuẩn hóa artifact cần deploy

- Sau khi train xong, deploy KHÔNG cần dataset:

  - ✔️ Chỉ cần:

    ```
    artifacts/
    ├── model.pth        # weight
    ├── scaler.pkl       # fitted scaler (chuẩn hóa dữ liệu)
    ├── config.json      # threshold
    ```

  - ❌ Không cần:
    - `train.py`
    - `validation.py`
    - `creditcard.csv`

#### ➂ Inference pipeline

- ```
  Raw input
     ↓
  Preprocessing (chuẩn hóa dữ liệu)
     ↓
  Tensor
     ↓
  Model (logits)
     ↓
  Sigmoid → xác suất
     ↓
  Threshold
     ↓
  Decision (Normal / Fraud)
  ```

#### ➃ Thiết kế deploy structure

- ```
  inference/
  ├── inference.py
  ├── model_loader.py
  ├── preprocess.py
  ├── schema.py
  ```

- `model_loader.py`:

  ```python
  import torch
  from model import FraudMLP

  def load_model(model_path, input_dim, device):
      model = FraudMLP(input_dim).to(device)
      state_dict = torch.load(model_path, weights_only=True, map_location=device)  #  map_location=device → chạy được cả CPU/GPU
      model.load_state_dict(state_dict)
      model.eval()
      return model
  ```

- `preprocess.py`:

  ```python
  import pandas as pd
  from inference.schema import FEATURE_ORDER

  def preprocess(features, scaler):
      df = pd.DataFrame([features], columns=FEATURE_ORDER)
      x_scaled = scaler.transform(df)
      return x_scaled
  ```

- `schema.py`:

  ```python
  FEATURE_ORDER = [
      "V1","V2","V3",...,"V28","Amount"
  ]

  def validate_features(features):
      for f in FEATURE_ORDER:
          if f not in features:
              raise ValueError(f"Missing feature: {f}")
  ```

- `inference.py`:

  ```python
  import torch
  import joblib
  import json
  from inference.model_loader import load_model
  from inference.preprocess import preprocess

  DEVICE = "cpu"

  class FraudInference:
      def __init__(self):
          self.scaler = joblib.load("artifacts/scaler.pkl")

          with open("artifacts/config.json") as f:
              self.threshold = json.load(f)["threshold"]

          self.model = load_model(
              "artifacts/model.pth",
              input_dim=29,
              device=DEVICE
          )

      def predict(self, features: dict):
          x_scaled = preprocess(features, self.scaler)
          x_tensor = torch.tensor(x_scaled, dtype=torch.float32).to(DEVICE)

          with torch.no_grad():
              prob = torch.sigmoid(self.model(x_tensor)).item()

          is_fraud = prob >= self.threshold

          return {
              "probability": prob,
              "is_fraud": is_fraud
          }
  ```

- Sử dụng:

  ```python
  from inference.inference import FraudInference
  from inference.schema import validate_features

  engine = FraudInference()

  tx = {
      "V1": 1.37855899734127,
      "V2": 1.28938093711056,
      "V3": -5.00424678441137,
      ...
      "V28": 0.186636547522687,
      "Amount": 0.76
  }

  validate_features(tx)
  result = engine.predict(tx)
  print(result)
  ```

#### ➄ Deploy dạng gì?

- Option 1: Batch (offline):

  ```
  CSV → inference.py → CSV result
  ```

- Option 2: REST API (phổ biến nhất):

  ```
  Client → FastAPI → inference.py → Response
  ```
