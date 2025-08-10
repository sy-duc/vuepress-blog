---
title: OCR với Tesseract
summary: "Bài viết này giúp bạn hiểu cách Tesseract xử lý hình ảnh, nhận dạng văn bản, và các yếu tố ảnh hưởng đến độ chính xác như chất lượng ảnh, font chữ, bố cục."
date: "2025-07-28"
image: "/vuepress-blog/images/posts/ocr-tesseract.png"
category: "AI / Machine Learning"
tags:
  - ai
  - machine learning
  - ocr
  - tesseract
---

# OCR với Tesseract

[1. Giới thiệu Tesseract](#1)

[2. Cài đặt Tesseract](#2)

[3. Làm quen với Tesseract + Python](#3)

<a name="1"></a>

## 📌 1. Giới thiệu Tesseract

- ● Tesseract là một [OCR engine](https://sy-duc.github.io/vuepress-blog/blog-posts/ai/ocr-tong-quan.html) mã nguồn mở do Hewlett-Packard phát triển từ những năm 1980 và hiện được Google duy trì.

- ● Nó hỗ trợ hơn 100 ngôn ngữ, bao gồm cả tiếng Việt, và có thể huấn luyện thêm để nhận dạng phông chữ hoặc ký tự đặc thù (sẽ giới thiệu ở cấc bài viết sau).

- ### 🚀 Cách hoạt động:

  - ● Tesseract phân tích bố cục ảnh, sau đó nhận diện các vùng văn bản, và cuối cùng chuyển đổi các ký tự thành dạng text.

  - ● Tesseract hoạt động tốt nhất khi ảnh:

    - ✧ Có độ tương phản cao (chữ đen trên nền trắng).

    - ✧ Không bị mờ hoặc méo chữ.

    - ✧ Có font phổ biến.

- ### ✔️ Ưu điểm:

  - ● Miễn phí, mã nguồn mở.

  - ● Hỗ trợ đa ngôn ngữ, dễ dàng thêm bộ ngôn ngữ mới.

  - ● Có thể tích hợp với nhiều ngôn ngữ lập trình (Python, Java, C++, v.v.).

  - ● Cho phép tùy chỉnh cấu hình (psm - kiểu khối văn bản trên ảnh, whitelist - danh sách ký tự đúng, v.v. để tăng độ chính xác khi OCR).

- ### ❌ Nhược điểm:

  - ● Độ chính xác phụ thuộc nhiều vào chất lượng ảnh đầu vào.

  - ● OCR tốc độ không quá cao cho ảnh lớn.

<a name="2"></a>

## 📌 2. Cài đặt

- 🔗 Tải Tesseract tại:

  - https://github.com/UB-Mannheim/tesseract/wiki (bản UB Mannheim tối ưu cho Windows).

- 📂 Mặc định đường dẫn sau cài đặt tại:

  ```makefile
  C:\Program Files\Tesseract-OCR
  ```

- 🔍 Kiểm tra cài đặt:

  ```bash
  tesseract --version
  ```

- ⚙️ Cài đặt Tesseract cho Python:
  - Cài thư viện pytesseract để Python giao tiếp với Tesseract:
    ```bash
    pip install pytesseract pillow opencv-python
    ```

<a name="3"></a>

## 📌 3. Làm quen với Tesseract + Python

### 1️⃣ Gọi Tesseract với pytesseract

```python
# main.py
import pytesseract
from PIL import Image

# Chỉ định đường dẫn Tesseract (nếu chưa thêm vào PATH)
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# Đọc ảnh
img = Image.open("sample.png")

# OCR ảnh
text = pytesseract.image_to_string(img, lang="vie")  # 'vie' cho tiếng Việt
print(text)
```

### 2️⃣ Gọi Tesseract trực tiếp bằng CLI (Command Line Interface)

- Có thể chạy Tesseract trực tiếp từ command line để test mà không cần code.

  ```bash
  tesseract sample.png output -l vie
  ```

### 3️⃣ Gọi Tesseract từ Python thông qua CLI

- Trong một số trường hợp bạn muốn:

  - ✧ Toàn quyền sử dụng các tham số CLI của Tesseract.

  - ✧ Không phụ thuộc vào pytesseract (ví dụ khi dùng Python như một wrapper cho nhiều tool khác).

  👉 Khi đó, bạn có thể gọi trực tiếp Tesseract CLI từ Python bằng subprocess:

  ```python
  import subprocess

  # Đường dẫn Tesseract (nếu chưa add vào PATH)
  tesseract_path = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

  input_image = "sample.png"
  output_txt = "output"  # File tạm chứa kết quả OCR (Tesseract sẽ tự thêm .txt)

  # Lệnh CLI tương đương: tesseract sample.png output -l vie
  cmd = [
      tesseract_path,
      input_image,
      output_txt,
      "-l", "vie"
  ]

  # Chạy lệnh và chờ hoàn tất
  subprocess.run(cmd, check=True)

  # Đọc kết quả từ file .txt
  with open(f"{output_txt}.txt", "r", encoding="utf-8") as f:
      text = f.read()

  print("OCR Result:")
  print(text)
  ```

- ✔️ Ưu điểm so với pytesseract:
  - ✧ Có thể dùng toàn bộ tính năng và tham số của CLI (thậm chí cả những tham số mà pytesseract chưa hỗ trợ).

  - ✧ Tránh phụ thuộc vào thư viện trung gian, chỉ cần Tesseract đã cài.

- ❌ Nhược điểm:
  - Cần đọc kết quả từ file trung gian (hoặc stdout), chậm hơn một chút (không đáng kể).

  - Không tiện khi xử lý ảnh trong RAM (phải lưu ra file tạm).

### 4️⃣ Cách chạy mã nguồn Python
- Khi đã viết xong code Python OCR với Tesseract, bạn có hai cách để chạy:

#### ❶ Cách 1 — Chạy trực tiếp bằng Python
- Mở terminal hoặc Command Prompt:
```bash
python main.py
```

- ✔️ Ưu điểm: nhanh, dễ debug.

- ❌ Nhược điểm: máy chạy cần có Python và các thư viện cần thiết đi kèm (pytesseract, opencv-python, Pillow, ...). Tại sao cần opencv-python hay Pillow sẽ đề cập ở các phần sau.

#### ❷ Cách 2 — Build thành file .exe bằng PyInstaller
- ➀ Cài PyInstaller:
  ```bash
  pip install pyinstaller
  ```

- ➁ Build
  ```bash
  pyinstaller --onefile --name ocr_tool main.py
  ```

  - Trong đó:
    - ✧ --onefile: tạo 1 file .exe duy nhất
    - ✧ -name ocr_tool: tên file đầu ra

- Sau khi build xong, file .exe sẽ nằm trong thư mục dist/ocr_tool.exe

- ✔️ Ưu điểm: có thể chạy trên máy khác mà không cần cài Python (nhưng vẫn cần cài Tesseract hoặc copy hoặc đóng gói cả Tesseract OCR vào cùng .exe nếu không muốn cài Tesseract trên máy đích).
