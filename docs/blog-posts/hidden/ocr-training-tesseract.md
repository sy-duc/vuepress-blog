---
title: Huấn luyện Tesseract (training AI OCR)
---

# Huấn luyện Tesseract (training AI OCR)

![Huấn luyện Tesseract](./images/ocr-training-tesseract.png)

- Mặc dù Tesseract OCR đã được huấn luyện sẵn với nhiều ngôn ngữ và chữ số, nhưng trong thực tế (ví dụ: màn hình máy đo, thiết bị công nghiệp, bảng hiển thị số, font chữ đặc thù, dữ liệu mờ/nhỏ) thì kết quả nhận dạng thường chưa chính xác.

- Lúc này, training Tesseract trên dữ liệu thực tế sẽ giúp:

  - ✔️ Tăng độ chính xác khi nhận dạng ký tự đặc thù.

  - ✔️ Giảm lỗi nhầm lẫn giữa các ký tự dễ bị OCR đọc sai (ví dụ: 0 ↔ O, 1 ↔ I, 5 ↔ S, 2 ↔ 7, 3 ↔ 8, A ↔ 4, v.v.).

  - ✔️ Tùy biến linh hoạt: chỉ cần train trên bộ ký tự nhỏ (digit-only, ký tự đặc biệt), không bắt buộc phải huấn luyện toàn bộ bộ chữ.

[1. Giới thiệu](#1)

[2. Các phương pháp training](#2)

[3. Fine-tuning Tesseract](#3)

[4. Bản chất của việc training trong Tesseract](#4)

<a name="1"></a>

## 📌 1. Giới thiệu

- Như đã biết, Tesseract v4+ (đã tích hợp LSTM – một dạng AI OCR). Và cũng chính từ phiên bản 4 trở đi, Tesseract hỗ trợ training/fine-tuning LSTM model.

- Ưu điểm thì đã nhắc đến ngay đầu bài viết, còn về nhược điểm:

  - ❌ Cần thời gian, kiến thức để chuẩn bị và huấn luyện.

  - ❌ Model càng lớn có thể ảnh hưởng performance.

<a name="2"></a>

## 📌 2. Các phương pháp training

- Có hai phương pháp chính để huấn luyện Tesseract nhằm cải thiện độ chính xác OCR:

### 1️⃣ Fine-tuning (Huấn luyện bổ sung)

- Dựa trên model ngôn ngữ có sẵn của Tesseract (vd: eng.traineddata) và huấn luyện thêm bằng dữ liệu thực tế.

- ✅ Ưu điểm:

  - ✧ Nhanh chóng, không cần nhiều dữ liệu.

  - ✧ Phù hợp khi chỉ muốn cải thiện một nhóm ký tự (ví dụ: chữ số, ký hiệu đặc biệt).

  - ✧ Ít tốn tài nguyên.

- ❌ Nhược điểm:

  - ✧ Nếu dữ liệu khác biệt quá nhiều so với model gốc, độ chính xác vẫn hạn chế.

  - ✧ Bộ mặc định của Tesseract chứa cả chữ cái, số, ký hiệu. Nếu bạn chỉ muốn model chuyên biệt (ví dụ đọc các số 0-9) thì base trên model có sẵn sẽ gây nặng, có thể ảnh hưởng đến tốc độ.

### 2️⃣ Full training (Training từ đầu)

- Xây dựng model OCR mới hoàn toàn từ dữ liệu thu thập được.

- ✅ Ưu điểm:

  - ✧ Kiểm soát toàn diện bộ ký tự, font chữ, ngôn ngữ.

  - ✧ Model tập trung học nhận dạng, giảm nhiễu, tăng độ chính xác và cải thiện tốc độ hơn.

- ❌ Nhược điểm:

  - ✧ Yêu cầu rất nhiều dữ liệu và công sức.

  - ✧ Thời gian huấn luyện lâu, đòi hỏi tài nguyên tính toán mạnh.

- 🚀 Trong bài viết này chúng ta sẽ chỉ tập trung phương pháp Fine-tuning.

<a name="3"></a>

## 📌 3. Fine-tuning Tesseract

- Model LSTM chuẩn (đã training sẵn của Tesseract 4.x, 5.x) đã được train trên nhiều ngôn ngữ và bộ dữ liệu đa dạng:

  - ✔️ Tốc độ xử lý khá nhanh, tối ưu tốt trên phần lớn máy tính hiện đại.

  - ✔️ Độ chính xác khá cao, phù hợp với nhiều trường hợp.

  - 👉 Thường không cần training lại hoặc chỉ nên training nhẹ (fine-tune trên bộ dữ liệu thực tế).

- 🔥 Để cho trực quan hơn khi đi vào các bước Fine-tuning, mọi người có thể kết hợp xem qua video hướng dẫn của các pháp sư Ấn Độ [tại đây](https://www.youtube.com/watch?v=SvhoBT-PnME).

### 1️⃣ Yêu cầu ban đầu

- ➀ Tesseract v4.x, 5x (có sẵn LSTM OCR).

- ➁ Python khuyên dùng 3.8 hoặc 3.9 hay 3.10, tránh bản mới nhất vì có thể Tessract chưa ổn định trên bản mới.

- ➂ Máy chủ training: Nếu dùng với tài nguyên giới hạn (RAM hoặc CPU), thời gian có thể chậm hơn đáng kể, thậm chí dễ bị out-of-memory:

  - ✧ Ubuntu/Linux (khuyên dùng WSL nếu Windows).

  - ✧ RAM: tối thiểu 8GB

  - ✧ Dung lượng: ~5GB trống

### 2️⃣ Thiết lập môi trường

- Môi trường build và compile của Tesseract cực kỳ thân thiện với Linux.

- Trường hợp vẫn muốn training Tesseract trên Windows → khuyên dùng WSL (Windows Subsystem for Linux) để tránh gặp các lỗi kỳ quặc do không tương thích trên Windows.

#### ❶ Kiểm tra máy đã cài WSL chưa

- Mở Command Prompt hoặc PowerShell, gõ:

  ```bash
  wsl --list --verbose
  ```

- Nếu thấy như dưới tức là bạn đã cài WSL và có Ubuntu sẵn.

  ```bash
  NAME      STATE           VERSION
  Ubuntu    Running         2
  ```

- Nếu hiện lỗi kiểu như dưới, hoặc không thấy Ubuntu trong danh sách → bạn chưa cài WSL → xem bước 2.:
  ```bash
  'wsl' is not recognized as an internal or external command
  ```

#### ❷ Cài đặt WSL + Ubuntu (nếu chưa có)

- Mở PowerShell (Admin) rồi chạy:

  ```shell
  wsl --install
  ```

- 👉 Sau khi xong, bạn cần restart máy.

#### ❸ Mở Ubuntu (WSL) và kiểm tra

- ✦ Sau khi cài xong, tìm "Ubuntu" trong Start Menu → mở lên.

- ✦ Nhập username + password lần đầu.

- ✦ Sau đó thử để chắc chắn WSL hoạt động:
  ```bash
  ls ~
  ```

#### ➃ Tesseract

- Đương nhiên training Tesseract thì cần cài Tesseract trên Ubuntu (WSL).

- Nếu bạn dùng Ubuntu 22.04 và cần training → bạn nên build Tesseract từ source phiên bản đầy đủ vì phiên bản mặc định thường không đi kèm các tool training (combine_tessdata, lstmtraining, text2image,...):
  ```bash
  sudo apt install tesseract-ocr
  sudo apt install tesseract-ocr-all
  sudo apt install libtesseract-dev
  sudo apt install libleptonica-dev
  ```

### 3️⃣ Tạo project training

- Tạo một thư mục project riêng để:

  - Chuẩn bị dữ liệu.

  - Fine-tune mô hình sẵn có.

  - Lưu các file .traineddata đầu ra sau khi training.

#### ❶ Cài đặt các gói phụ thuộc cho tesstrain

- Mở Ubuntu:

  ```bash
  sudo apt install -y build-essential git make pkg-config \
      libpng-dev libjpeg8-dev libtiff5-dev zlib1g-dev \
      libicu-dev libpango1.0-dev libcairo2-dev \
      python3 python3-venv python3-pip libleptonica-dev \
      tesseract-ocr
  ```

- Ngoài ra, để chạy lệnh huấn luyện, cần cài thêm `make` - công cụ chuẩn để chạy các tác vụ tự động hóa:
  ```sh
  sudo apt install make
  ```

#### ❷ Clone repo tesstrain – công cụ chuẩn để training Tesseract

- Cài git:

  ```sh
  sudo apt install git -y
  ```

- Thực hiện clone:

  ```sh
  git clone https://github.com/tesseract-ocr/tesstrain.git
  cd tesstrain
  ```

- 🎯 Tại sao cần tesstrain?

  - ✔️ Repo tesstrain này là nơi chứa:

    - ✧ Các script và Makefile để xử lý tập dữ liệu.
    - ✧ Các ví dụ mẫu về cách train/fine-tune.
    - ✧ Logic gọi combine_tessdata, lstmtraining, text2image, v.v.

  - ✔️ Việc training Tesseract thủ công rất phức tạp. tesstrain giúp:
    - ✧ Quản lý dữ liệu (ảnh + groundtruth .gt.txt).
    - ✧ Tự động gọi đúng lệnh lstmtraining.
    - ✧ Tự động sinh .traineddata với model kế thừa (--continue_from).

#### ❸ Tạo môi trường ảo

- Cài thêm gói venv cho Python (ví dụ cho Python v3.10):

  ```sh
  sudo apt update
  sudo apt install python3.10-venv
  ```

- Tạo môi trường ảo Python và kích hoạt:
  ```sh
  python3.10 -m venv venv
  source venv/bin/activate
  ```

#### ❹ Cài đặt các dependencies cần thiết cho tesstrain

- ```sh
  pip install -r requirements.txt
  ```

### 4️⃣ Chuẩn bị dữ liệu training

- ✦ Tesseract training cần:

  - ✧ Ảnh (thường là ảnh đen trắng hoặc ảnh màu TIFF hoặc PNG).
  - ✧ File `.gt.txt`: chứa nội dung chính xác của ảnh tương ứng (ground truth text).
  - ✧ File `.box` (tùy chọn): định nghĩa vị trí bounding box và ký tự trên ảnh.

- ✦ Thông thường bạn sẽ dùng cặp: ảnh + .gt.txt hoặc ảnh + .box.

#### ❶ Chuẩn bị ảnh

- ✦ Ảnh nên được crop đúng vùng chứa chữ cần training. Tốt hơn là thêm cả padding (viền trắng) cho vùng ảnh.

- ✦ Ảnh nên có định dạng TIFF hoặc PNG, nhưng `.tif` được Tesseract ưu thích hơn cả khi training.
  - Ví dụ:
    ```sh
    001.tif
    002.tif
    ```
- 💡 Mình thường thêm logic lưu ảnh sau khi tiền xử lý và comment out. Lúc nào cần ảnh training thì bỏ comment out và chạy lại để lấy data training.

#### ❷ Tạo file ground truth text (.gt.txt)

- ✦ Đây là file text thuần chứa nội dung ký tự chính xác tương ứng ảnh.

- ✦ Tên file giống tên ảnh, ví dụ:
  123.gt.txt → chứa text của 123.tif

  - Ví dụ nội dung file 123.gt.txt:
    ```sh
    123
    ```

### 5️⃣ Setup cấu trúc môi trường training

#### ❶ Mở thư mục làm việc trong WSL từ Windows Explorer

- ```sh
  \\wsl$\Ubuntu-22.04\home\hosyduc\train_data
  ```

- ✅ Mục đích: Dễ thao tác file từ Windows dù đang làm việc trên Ubuntu (WSL).

#### ❷ Mở folder project `tesstrain` vừa clone

- ✦ Giải nén thư mục `ocrd-testset` (dữ liệu đã có sẵn tesseract dùng để training)

- ✦ Đây là dataset mẫu chứa các ví dụ ảnh `.tif/.png` và text `.gt.txt` đã dùng để training.

#### ❸ Tạo thư mục `data` trong project và di chuyển thư mục `ocrd-testset` vừa giải nén vào

#### ❹ Đổi tên thư mục `/data/ocrd-testset`

- ✦ Có thể đổi thành tên bất kỳ làm model training cho bạn nhưng cần kết thúc bằng ground-truth để tesstrain nhận diện.

  - Ví dụ: `hsd-ground-truth`

- ✦ Các ảnh `.tif` và text `.gt.txt` đã chuẩn bị trước đó cũng sẽ đưa vào trong thư mục này để mô hình mới sẽ kế thừa và được fine-tune thêm bằng ảnh bạn cung cấp.

#### ❺ Tải mô hình gốc để fine-tune (START_MODEL)

- ✦ Để fine-tune, bạn cần một mô hình nền đã học cơ bản, gọi là START_MODEL như `eng.traineddata`, `deu.traineddata`, `deu_latf.traineddata`, v.v.

- ✦ Download file START_MODEL (ví dụ `deu_latf.traineddata`) tại:
  - 🔗 https://github.com/tesseract-ocr/tessdata_best/blob/main/deu_latf.traineddata

#### ❻ Tạo thư mục `tessdata` cùng cấp với thư mục project `tesstrain`

- Copy file START_MODEL `deu_latf.traineddata` vừa tải tại bước ⑤ vào thư mục `tessdata`.

- ```sh
  tesstrain/
  ├── data/
  │   └── hsd-ground-truth/
  │       ├── sample1.tif
  │       ├── sample1.gt.txt
  │       ├── ...
  tesstrain/
  ├── deu_latf.traineddata
  ```

### 6️⃣ Tiến hành huấn luyện mô hình

#### ❶ Mở lại Ubuntu (tại môi trường ảo đã kích hoạt)

- ✦ Chạy lệnh training ví dụ sau:

  ```sh
  make training MODEL_NAME=hsd START_MODEL=deu_latf TESSDATA=../tessdata MAX_ITERATIONS=500 LEARNING_RATE=0.001
  ```

- ✦ Ý nghĩa các tham số:
  | Tham số | Ý nghĩa |
  | :--------------------------: | :--------------------------------: |
  | MODEL_NAME | Tên mô hình mới (hsd.traineddata) |
  | START_MODEL | Mô hình gốc để fine-tune (deu_latf.traineddata) |
  | TESSDATA | Đường dẫn đến thư mục chứa mô hình gốc |
  | MAX_ITERATIONS | Số vòng lặp huấn luyện (quá cao có thể overfit) |
  | LEARNING_RATE | Tốc độ học – nhỏ thì học kỹ, lớn thì học nhanh (nhưng dễ sai) |

  - ⚠️ Tham khảo thêm ý nghĩa các tham số trong file README.md tại thư mục dự án [tesstrain](https://github.com/tesseract-ocr/tesstrain).

#### ❷ Đợi lệnh training chạy xong, sẽ tạo ra file `.traineddata` tại `\tesstrain\data\` (ví dụ: `hsd.traineddata`)

- ✦ Quá trình training Tesseract có thể kéo dài khá lâu, tùy vào các yếu tố sau:

  - ➀ Số lượng ảnh bạn dùng để huấn luyện.
  - ➁ Cấu hình hệ thống của bạn.
  - ➂ Giá trị các tham số thiết định như: MAX_ITERATIONS.

- ✦ Khi training có thể bạn sẽ thấy các dòng log như:

  ```sh
  2 Percent improvement time-162, best error was 11.087 @ 1211
  At iteration 1373/1800/1800, Mean rms=0.744%, delta=1.13%, char train=8.625%, word train=13.878%, skip ratio=0%, New best char error = 8.625 wrote best model:data/svc/checkpoints/hsd8.625_1373.checkpoint wrote checkpoint.
  ```

  - Giải thích:
    | Thành phần | Ý nghĩa |
    | :--------------------------: | :--------------------------------: |
    | iteration 7124/8200/8200 | Đang ở vòng lặp thứ 7124, tổng số là 8200 |
    | Mean rms=0.6.508% | Mức lỗi trung bình theo kiểu root-mean-square (giá trị càng thấp càng tốt, thường < 1% mới là tốt) |
    | delta=6.154% | Mức thay đổi gần đây nhất trong lỗi, phản ánh mức cải thiện so với checkpoint trước |
    | char train=228.95% | Mức huấn luyện ký tự, > 100% nghĩa là đang bị "overfitting" hoặc dữ liệu chưa ổn định |
    | word train=99.2% | Mức huấn luyện từ, thường ~ 100% là tốt |
    | skip ratio=0% | Tỷ lệ ảnh bị bỏ qua vì lỗi. Nếu > 0% thì có vấn đề với dữ liệu (lstmf lỗi, ảnh sai) |
    | wrote checkpoint | Đã lưu checkpoint `.checkpoint` để resume nếu cần |

### 7️⃣ Sử dụng mô hình vừa huấn luyện với Tesseract

#### ❶ Copy file `.traineddata` vừa train vào thư mục `tessdata` của `Tesseract-OCR`

- Ví dụ:
  ```sh
  C:\Program Files\Tesseract-OCR\tessdata\hsd.traineddata
  ```

#### ❷ Sử dụng với Tesseract CLI bằng Python

- ```python
  cmd = [
      TESSERACT_CMD,
      tmp_path,
      out_base,
      "-l", "hsd", # 👈 Dòng này thêm vào để sử dụng model huấn luyện mới (MODEL_NAME)
      "--psm", str(psm)
  ]

  if output_type == "data":
      cmd.append("tsv")

  if whitelist:
      cmd += ["-c", f"tessedit_char_whitelist={whitelist}"]

  subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
  ```

### 📝 Lưu ý:

- ❶ Trường hợp bạn muốn tiếp tục huấn luyện (fine-tune tiếp) do cần thêm dữ liệu training (ảnh):

  - Chỉ cần thêm ảnh mới vào `ground-truth/` và chạy lại lệnh huấn luyện, nó sẽ tiếp tục từ checkpoint cũ.

- ❷ Trường hợp bạn muốn Fine-tuning lại từ đầu (reset):

  - ✧ Xoá toàn bộ thư mục `data/<MODEL_NAME>`:

    ```sh
    rm -rf data/hsd
    ```

  - ✧ Xoá file `hsd.traineddata` nếu đã sinh ra trước đó:

    ```sh
    rm -f svc.traineddata
    ```

  - ✧ Sau đó chạy lại lệnh huấn luyện.

  - ✧ Nếu không xoá sạch `data/svc/`, Tesseract sẽ cố tiếp tục từ checkpoint cũ (mà có thể không còn hợp lệ), dẫn đến lỗi.

### 👀 Box file (`.box`) và LSTM training file (`.lstmf`):

- Sau khi chạy lệnh huấn luyện, các file tự động sinh ra từ `image.tif` + `image.gt.txt` là file `.box` và `.lstm`.

#### ❶ Box file (`.box`) - dữ liệu nhãn (label file) đi kèm với ảnh `.tif`

- ✦ Mỗi dòng chứa ký tự, bounding box (tọa độ), và số trang.

- ✦ Cấu trúc:

  ```
  <char> <x0> <y0> <x1> <y1> <page>
  ```

  - Trong đó:
    - ✧ `char`: ký tự mà bounding box này đại diện (nhãn ground-truth). Ví dụ: A, 1, @, v.v.
    - ✧ `x0` và `y0`: tọa độ góc dưới bên trái (bottom-left) của bounding box, tính theo pixel.
    - ✧ `x1` và `y1`: tọa độ góc trên bên phải (top-right) của bounding box.
      - `x1` > `x0` và `y1` > `y0`
    - ✧ `page`: số trang trong ảnh gốc (đa phần là 0, trừ khi file `.tif` có nhiều trang).

- ✦ Ví dụ:

  ```
  1  10 12 28 40 0
  2  35 12 53 40 0
  ```

  - Nghĩa là: ký tự 1 nằm trong khung (10,12) → (28,40) trên trang 0.

- ✦ Ý nghĩa: chỉ ra ký tự nào nằm ở đâu trong ảnh, để Tesseract học cách map pixel → ký tự.

#### ❷ LSTM training file (`.lstmf`)

- ✦ Đây mới là input trực tiếp cho vòng huấn luyện.

- ✦ Nội dung : binary format (không đọc tay được), chứa:
  - ➀ Features đã trích xuất từ ảnh (`image.tif`)
  - ➁ Nhãn ground-truth (`image.gt.txt`).
  - ➂ Map unicharset - tập hợp tất cả ký tự mà model biết và có thể OCR

### 💡 Kinh nghiệm:

- ✔️ Trường hợp lỗi ngay từ khi vừa chạy lệnh huấn luyện, nguyên nhân có thể đến từ việc file `.gt.txt` chưa khớp với ảnh file `.tif`.

- ✔️ Sau khi chạy lệnh huấn luyện lần đầu, cần kiểm tra box file (`.box`). Có thể cần chỉnh tay box file nếu phát hiện sai lệch:

  - ➀ Kiểm tra nhãn (`char`) đã khớp chưa.
  - ➁ Đo tọa độ pixel bằng `Paint` app và chỉnh lại x0 y0 x1 y1 sao cho ô bao trọn ký tự, không cắt, không quá rộng.

- ✔️ Như đã nói, training đòi hỏi thời gian huấn luyện lâu. Việc phải thêm ảnh và lặp lại training nhiều vòng để tăng độ ổn định là bình thường.

<a name="4"></a>

## 📌 4. Bản chất của việc training trong Tesseract

### 1️⃣ Tesseract dùng LSTM – một loại mạng học sâu

- ✦ Khi training:

  - ✧ Bạn cung cấp ảnh đầu vào (dòng text thật sự chứa ký tự cần OCR).
  - ✧ Bạn cung cấp ground truth text tương ứng (`.gt.txt`).

- ✦ Tesseract sử dụng các data này để:

  - ✔️ So sánh ảnh và nội dung thật (label).
  - ✔️ Dùng thuật toán học sâu tối ưu lại mô hình, sao cho đầu ra từ ảnh càng gần label càng tốt.
  - ✔️ Cập nhật để “hiểu” tốt hơn mối quan hệ giữa hình dạng ảnh và ký tự.

- 👉 Tesseract không "ghi nhớ" từng ảnh → mà học mô hình tổng quát (hình dạng số 1 nhìn như nào, sự thay đổi ra sao vẫn là số 1).
  - Nôm na là mô hình học được "bản chất", chứ không chỉ nhớ ảnh cụ thể.

### 2️⃣ Cần bao nhiêu ảnh là đủ traning?

- 📄 Giả sử bạn đang không đọc được giá trị tại ảnh số 1 và ảnh số 11:

  - ✧ Có nghĩa nếu hình dạng số 1 trong ảnh số 1 và số 11 giống nhau, thì chỉ cần 1 ảnh để training là đủ.

  - ✧ Ngược lại, nếu có sự khác biệt về hình dạng, nên cung cấp nhiều ảnh hơn về độ đa dạng của số đó để mô hình training mới học được bản chất của số đó.

- ⚠️ Nếu bạn chỉ toàn training với "11" và chưa từng thấy "1" đứng một mình:

  - Có khả năng mô hình không hiểu "1" đứng đơn lẻ là một ký tự hợp lệ (nhất là khi khoảng cách ảnh khác nhau).

  - 👉 Nên có một số ảnh chứa "1" đứng một mình, hoặc "10", "21", "1A",... để mô hình thấy "1" trong nhiều ngữ cảnh.

### 3️⃣ Cơ chế hoạt động Tesseract

- 🧠 Tesseract mặc định dùng `eng.traineddata` để OCR ảnh với mô hình tiếng Anh chuẩn. Có thể xem tại: `Tesseract-OCR\tessdata\eng.traineddata`

- 🚀 Khi chỉ định model mới, Tesseract sẽ bỏ qua `eng` và chỉ dùng model bạn đã training.

### 4️⃣ START_MODEL - Mô hình gốc để fine-tune

- Như đã biết:

  ```
  Fine-tuning = Khởi động từ 1 mô hình đã học (START_MODEL) + dữ liệu mới.
  ```

- Có thể dùng `eng.traineddata` để fine-tune luôn, bởi nó là mô hình mặc định tiếng Anh, học rất tốt các ký tự Latin.

- ⚠️ Tuy nhiên:

  - `eng.traineddata` được huấn luyện để tổng quát nhiều font, layout, nên có thể hơi "chung chung".

  - 👉 Nếu bạn cần OCR văn bản kiểu chữ Gothic, hay font công nghiệp hiếm, nên chọn `deu_latf`, `osd`, hoặc custom model khác.

#### 🧐 Nên fine-tune từ model gốc nào?

|                         Trường hợp                         | START_MODEL phù hợp |
| :--------------------------------------------------------: | :-----------------: |
| OCR ký tự đơn giản, rõ ràng, tiếng Anh, số serial, barcode |   eng.traineddata   |
|        OCR ký tự dạng cổ điển, hoặc font máy móc cũ        |  deu_latf<br/> osd  |
|                 OCR tiếng Việt hoặc có dấu                 |   vie.traineddata   |

- Việc chọn START_MODEL (mô hình gốc để fine-tune) ảnh hưởng trực tiếp đến performance của mô hình cuối cùng (cả về độ chính xác lẫn tốc độ nhận diện):

#### ❶ Ảnh hưởng đến độ chính xác (Accuracy)

|                           START_MODEL                           |        Ảnh hưởng đến         |                           Giải thích                            |
| :-------------------------------------------------------------: | :--------------------------: | :-------------------------------------------------------------: |
|                  Gần với kiểu dữ liệu thực tế                   |     ✅ Tăng độ chính xác     |         Vì mô hình đã học gần đúng kiểu dữ liệu cần OCR         |
| Quá khác biệt (VD: dùng mô hình Gothic để OCR font công nghiệp) |     ❌ Giảm độ chính xác     | Model không nhận diện tốt ký tự/font/layout mà nó chưa từng học |
|                   Model best (tessdata_best)                    | ✅ Chính xác, nhưng chậm hơn |         Vì đã huấn luyện sâu hơn trên nhiều dạng ký tự          |

#### ❷ Ảnh hưởng đến tốc độ nhận diện (Speed)

- Nếu truy cập 🔗 https://github.com/tesseract-ocr để tải START_MODEL, chúng ta sẽ thấy 2 loại: `tessdata_fast` và `tessdata_best`

|                Loại model                 |    Tốc độ    |                            Ghi chú                             |
| :---------------------------------------: | :----------: | :------------------------------------------------------------: |
|               tessdata_fast               | ⚡ Rất nhanh |    Được tối ưu cho tốc độ, phù hợp với môi trường real-time    |
|               tessdata_best               | 🐢 Chậm hơn  |   Chính xác hơn, nhưng nặng hơn do dùng LSTM nhiều tầng hơn    |
| Fine-tune từ base nhẹ (như tessdata_fast) | ⚖️ Cân bằng  | Nếu training đúng hướng, vẫn đạt accuracy tốt mà không bị chậm |

#### ❸ Ảnh hưởng đến khả năng generalization (khả năng mô hình học tốt dữ liệu mới)

- ✦ START_MODEL tổng quát (multi-font, nhiều ký tự) → học chậm hơn, cần nhiều ảnh để fine-tune triệt để.

- ✦ START_MODEL chuyên biệt (VD: eng đã học font tương tự ảnh bạn) → dễ fine-tune, nhanh converge.
