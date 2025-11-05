---
title: Template Matching - Giải pháp hỗ trợ nhận diện ký tự khó OCR
---

# Template Matching - Giải pháp hỗ trợ nhận diện ký tự khó OCR

![Giới thiệu OCR](./images/ocr-template-matching.png)

- Template Matching là một phương pháp so khớp hình ảnh đơn giản nhưng hiệu quả, thường được sử dụng như giải pháp bổ trợ cho OCR trong các trường hợp ký tự nhỏ, mờ hoặc khó đọc mà Tesseract chưa nhận diện chính xác.

- Dù không linh hoạt bằng các mô hình OCR dựa trên AI, Template Matching vẫn rất hữu ích trong các ứng dụng công nghiệp và hệ thống nhận diện ký tự chuyên biệt.

[1. Giới thiệu](#1)

[2. Bản chất của Template Matching](#2)

[3. Quy trình triển khai Template Matching](#3)

[4. Ví dụ code minh họa (Python + OpenCV)](#4)

<a name="1"></a>

## 📌 1. Giới thiệu

- Việc sử dụng mô hình học máy để phân tích và chuyển đổi hình ảnh thành văn bản đôi khi gặp khó khăn khi ký tự trên ảnh bị nhỏ, mờ, méo, hoặc có nhiễu nền.

- 💡 Trong những tình huống này, một phương pháp đơn giản nhưng hiệu quả có thể hỗ trợ OCR là **Template Matching** (so khớp mẫu).

### 🎯 Ý tưởng chính:

- ⏳ **Bài toán**: Đọc các giá trị số hiển thị trong Textbox.

- ❶ Ta chuẩn bị sẵn bộ ảnh mẫu (template) cho từng ký tự cần nhận dạng (ví dụ: 0–9).

- ❷ Khi cần đọc ảnh đầu vào, ta cắt ra vùng ký tự và so sánh trực tiếp với các template để tìm ký tự khớp nhất.

### 👀 Template Matching hoạt động tốt khi nào?

- ✧ Vị trí vùng OCR cố định (biết trước vùng OCR).

- ✧ Bộ font hoặc kiểu hiển thị ít thay đổi.

- ✧ Chỉ cần nhận dạng tập ký tự hạn chế (ví dụ: chỉ số 0–9).

- ✧ Các ký tự không đứng dính quá sát liền nhau.

### ✅ Ưu điểm:

- Dù không thay thế được OCR toàn diện, nhưng Template Matching mang lại ưu điểm riêng:

  - ✧ Nhanh. Nếu bạn đã từng đo thời gian OCR với Tesseract rồi thì thời gian khi dùng phương pháp này sẽ khiến bạn ngạc nhiên khi có thể giảm hơn nửa thời gian.

  - ✧ Dễ triển khai.

  - ✧ Độ tin cậy cao (lên đến 100% nếu trong điều kiện hoạt động tốt nhất như đã đề cập phía trên).

<a name="2"></a>

## 📌 2. Bản chất của Template Matching

- Template Matching trong OpenCV là kỹ thuật so sánh hình ảnh, cụ thể là:

  - ✦ So sánh một mẫu (template) nhỏ với toàn bộ ảnh gốc, để tìm vị trí trong ảnh giống mẫu nhất.

  - ✦ Template Matching không hiểu ý nghĩa của hình (như số mấy), chỉ biết so sánh điểm ảnh.

    - ✧ Do vậy, để xác định giá trị số mấy thì cách hay dùng nhất là gán "ý nghĩa" cho từng template bằng chính tên ảnh mẫu.

    - ✧ Ví dụ: Ảnh template `5.png` nếu giống ảnh gốc nhất thì số trong ảnh gốc là tên ảnh template, tức số `5`.

### 🧠 Cơ chế hoạt động

- ✦ Giả sử:

  - ✧ Ảnh gốc: hình chụp chứa vùng cần đọc giá trị.
  - ✧ Template: ảnh số 5 (cắt ra từ ảnh thật).

- ✦ Bước thực hiện:
  - ❶ OpenCV trượt template qua từng vị trí của ảnh gốc (giống như trượt cửa sổ).
  - ❷ Tại mỗi vị trí, nó tính toán độ tương đồng (similarity score) giữa vùng ảnh đó và template.
  - ❸ Kết quả là một ma trận giá trị tương đồng → chỗ nào điểm cao nhất là vị trí giống template nhất.

### 🚀 Phương pháp so khớp phổ biến (OpenCV)

- Trong OpenCV hỗ trợ nhiều phương pháp tính độ khớp. Một số phương pháp hay dùng:

#### 1️⃣ cv2.TM_SQDIFF

- 🧠 Nguyên lý: Tính tổng bình phương sai khác giữa template và ảnh tại từng vị trí.

- 🎯 Giá trị tốt nhất: Càng nhỏ càng tốt (0 nghĩa là trùng khớp tuyệt đối).

- 👀 Khi nào dùng:

  - ✧ Khi ảnh và template có độ tương phản cao.

  - ✧ Khi bạn muốn phát hiện sự giống nhau tuyệt đối về pixel.

  - ✧ Template nhỏ: Hiệu quả với template kích thước nhỏ (ví dụ 8x16).

  - ✧ Khi cần phân biệt rõ ràng: Phân biệt số gần giống nhau như 6 vs 8, 0 vs O, v.v.

- ✅ Ưu điểm: Đơn giản, nhanh.

- ❌ Nhược điểm: Nhạy cảm với thay đổi ánh sáng, nhiễu, scale.

#### 2️⃣ cv2.TM_CCORR

- 🧠 Nguyên lý: Tính tích chập (correlation) giữa template và ảnh.

- 🎯 Giá trị tốt nhất: Càng lớn càng tốt (1 là khớp hoàn toàn).

- 👀 Khi nào dùng:

  - ✧ Khi ảnh và template có cường độ pixel tương quan tuyến tính.

  - ✧ Template lớn hơn: Khi template có nhiều detail.

- ✅ Ưu điểm: Ổn hơn so với SQDIFF khi ánh sáng thay đổi một chút.

- ❌ Nhược điểm: Vẫn nhạy với nhiễu và thay đổi tương phản.

#### 3️⃣ cv2.TM_CCOEFF

- 🧠 Nguyên lý: Loại bỏ ảnh hưởng của trung bình cường độ pixel trước khi tính tương quan.

- 🎯 Giá trị tốt nhất: Càng lớn càng tốt.

- 👀 Khi nào dùng:

  - ✧ Khi ảnh đầu vào có độ sáng hoặc độ tương phản thay đổi.

  - ✧ Phù hợp với OCR trong môi trường sản xuất, nơi ánh sáng có thể thay đổi theo ca.

- ✅ Ưu điểm: Ổn định hơn SQDIFF và CCORR.

<a name="3"></a>

## 📌 3. Quy trình triển khai Template Matching

### ❶ Chuẩn bị dữ liệu

- ✦ Ảnh gốc (input image): Là ảnh chứa vùng giá trị cần nhận diện.

- ✦ Tiền xử lý ảnh gốc:

  - ✧ Chuyển sang ảnh grayscale để giảm nhiễu màu.
  - ✧ Áp dụng thresholding hoặc adaptive thresholding để tách nền – ký tự.
  - ✧ Cân nhắc resize ảnh về cùng kích thước với template.

- ✦ Template:
  - ✧ Tập hợp ảnh mẫu của từng giá trị (Ví dụ: 0–9, A–Z, v.v.)
  - ✧ Thường chúng ta sẽ tạo một hàm tạm chứa logic lưu ảnh gốc sau tiền xử lý. Sau đó OCR các ảnh riêng biệt chỉ chứa ký tự từ 0-9 để thu về các ảnh sau khi tiền xử lý làm ảnh mẫu luôn. Mục đích để ảnh mẫu giống với ảnh gốc nhất.

### ❷ Chạy thuật toán so khớp

- ✦ Sử dụng hàm `cv2.matchTemplate(image, template, method)` với một trong các phương pháp so khớp:
  - ✧ `cv2.TM_SQDIFF` hoặc `cv2.TM_SQDIFF_NORMED`
  - ✧ `cv2.TM_CCOEFF` hoặc `cv2.TM_CCOEFF_NORMED`
  - ✧ `cv2.TM_CCORR` hoặc `cv2.TM_CCORR_NORMED`

### ❸ Tìm vị trí và kết quả khớp

- ✦ Dùng `cv2.minMaxLoc()` để lấy giá trị min/max khớp (tùy phương pháp).

- ✦ So sánh với một ngưỡng tin cậy (threshold) để quyết định ký tự có được nhận diện hay không.
  - Ví dụ khớp trên 95% thì mới đủ tin tưởng.

### ❹ Hậu xử lý kết quả

- ✦ Nếu có nhiều vị trí trùng khớp, chọn vị trí có giá trị tốt nhất (min hoặc max).

- ✦ Nếu kết quả nằm dưới ngưỡng tin cậy → có thể gán nhãn “không xác định” để tránh sai sót.

<a name="4"></a>

## 📌 4. Ví dụ code minh họa (Python + OpenCV)

### 1️⃣ Tạo lớp riêng chuyên xử lý các logic cho Template Maching

- Ví dụ chúng ta tạo file `template_matching_worker.py` trong folder `core`.

### 2️⃣ Tạo hàm lấy đường dẫn đến folder chứa ảnh mẫu (template)

- ```python
  # template_matching_worker.py

  def get_template_folder():
      if hasattr(sys, '_MEIPASS'):
          # When running as a bundled executable (e.g., PyInstaller)
          return os.path.join(sys._MEIPASS, "data", "templates")
      else:
          # When running as a script (e.g., python main.py)
          return os.path.join("data", "templates")
  ```

- ✦ Như ví dụ trên thì ta đang đặt các ảnh mẫu trong folder `data/templates`.

- ✦ Các ảnh mẫu sẽ chứa 1 ký tự, gồm các ảnh từ ký tự số 0-9.
  - Trường hợp 1 số có nhiều kiểu hình dáng khác nhau thì tạo nhiều hơn 1 ảnh tương ứng cho số đó.

### 3️⃣ Tạo hàm load template images

- Chúng ta sẽ load và lưu các ảnh template dưới dạng:

  - ✧ `key`: tên ảnh, mục đích làm giá trị nhận diện khi sử dụng Template Matching.
  - ✧ `value`: numpy array chứa dữ liệu ảnh grayscale, mục đích để sử dụng làm giá trị matching.

- ```python
  # template_matching_worker.py

  def load_templates():
      template_dir = get_template_folder()
      templates = {}

      # Check if the template directory exists
      if not os.path.exists(template_dir):
          return templates

      # Load templates
      for fname in os.listdir(template_dir):
          # Only access load PNG files for template matching
          if fname.endswith('.png'):
              # Use the first part of the filename as the label (Ex:'1-a.png' → '1')
              label = os.path.splitext(fname)[0].split("-")[0]
              # Load the image in grayscale
              img = cv2.imread(os.path.join(template_dir, fname), cv2. IMREAD_GRAYSCALE)

              if img is not None:
                  templates[label] = img

      return templates
  ```

### 4️⃣ Tạo hàm matching ảnh chứa vùng OCR với ảnh mẫu

- ✦ Ảnh gốc truyền vào là ảnh đã qua tiền xử lý và chỉ chứa vùng cần đọc giá trị.

- ✦ Templates truyền vào chính là giá trị trả về của hàm `load_templates`.

- Các bước matching:

  - ❶ Copy và chuyển ảnh gốc thành dạng nền đen, chữ trắng.

    - Thông thường khi tiền xử lý ảnh gốc sẽ chuyển về nền trắng chữ đen. Việc chuyển lại ảnh về nền đen chữ trắng giúp các hàm matching xử lý đơn giản hơn.

  - ❷ Tính số pixel trắng mỗi cột trên ảnh gốc (mỗi cột là 1 pixel theo trục dọc).

    - ✧ Các vùng chứa ký tự sẽ là vùng chứa liên tiếp các cột có pixel trắng.

    - ✧ Cột không có pixel trắng được hiểu là khoảng ngăn cách giữa các ký tự.

  - ❸ Duyệt từng vùng chứa ký tự và resize về kích thước chuẩn template (ảnh mẫu).

    - Việc resize về kích thước chuẩn template (ảnh mẫu) để tránh những exception xảy ra khi mmatching do kích thước template > ảnh gốc.

  - ❹ Matching từng vùng chứa ký tự với ảnh mẫu, tìm ảnh khớp nhất để xác định giá trị.

  - ❺ Nối từng giá trị đã xác định được tại mỗi vùng thành chuỗi 1 giá trị cuối cùng.

```python
def match_template(ocr_img, templates, threshold=0.9):
    # Check if templates exist for the given stage
    if not templates:
        return None

    # Copy ảnh gốc
    input_img = ocr_img.copy()
    # Chuyển ảnh gốc thành dạng nền đen, chữ trắng
    inv_img = 255 - input_img
    # Tính số pixel trắng mỗi cột (trắng = chữ)
    hist = np.sum(inv_img // 255, axis=0)

    # Tìm các vùng chứa ký tự
    chars_bounds = []
    in_char = False
    start_x = 0
    for x, val in enumerate(hist):
        if val > 0 and not in_char:
            in_char = True
            start_x = x
        elif val == 0 and in_char:
            end_x = x
            if end_x - start_x >= 8: # Giả sử vùng được xem chứa ký tự rộng tối thiểu 8px
                in_char = False
                chars_bounds.append((start_x - 1, end_x + 1)) # Padding rộng vùng chứa ký tự
    if in_char:  # Trường hợp ký tự cuối cùng dính sát mép
        chars_bounds.append((start_x, len(hist)-1))

    # Xử lý từng ký tự
    result_digits = []
    for (start_x, end_x) in chars_bounds:
        char_img = ocr_img[:, start_x:end_x]

        # Resize ký tự về kích thước chuẩn template
        first_template = next(iter(templates.values()))
        char_resized = normalize_to_template(char_img, first_template)

        # Match template từng số, chọn score nhỏ nhất (khớp nhất)
        best_match = None
        best_score = -1
        for label, tmpl in templates_img.items():
            res = cv2.matchTemplate(char_resized, tmpl, cv2.TM_SQDIFF_NORMED)
            min_val, _, _, _ = cv2.minMaxLoc(res)
            score = 1 - min_val

            if score > best_score and score >= threshold:
                best_score = score
                best_match = label
        if best_match is not None:
            result_digits.append(best_match)

    return "".join(result_digits)


def normalize_to_template(ocr_img, template_img):
    h_t, w_t = template_img.shape[:2]
    h_i, w_i = ocr_img.shape[:2]

    # Copy để không sửa ảnh gốc
    img = ocr_img.copy()

    # Xử lý chiều cao (H)
    if h_i > h_t:
        # Cắt bớt 2 bên, ưu tiên giữ phần giữa
        cut_total = h_i - h_t
        cut_top = cut_total // 2
        cut_bottom = cut_total - cut_top
        img = img[cut_top:h_t-cut_bottom, :]
    elif h_i < h_t:
        # Pad trắng trên dưới
        pad_total = h_t - h_i
        pad_top = pad_total // 2
        pad_bottom = pad_total - pad_top
        img = cv2.copyMakeBorder(img, pad_top, pad_bottom, 0, 0,
                                  borderType=cv2.BORDER_CONSTANT,
                                  value=255)

    # Xử lý chiều rộng (W)
    h_i, w_i = img.shape[:2] # Cập nhật lại kích thước sau khi xử lý height
    if w_i > w_t:
        # Cắt bớt 2 bên, ưu tiên giữ phần giữa
        cut_total = w_i - w_t
        cut_left = cut_total // 2
        cut_right = cut_total - cut_left
        img = img[:, cut_left:w_i-cut_right]
    elif w_i < w_t:
        # Pad trắng 2 bên
        pad_total = w_t - w_i
        pad_left = pad_total // 2
        pad_right = pad_total - pad_left
        img = cv2.copyMakeBorder(img, 0, 0, pad_left, pad_right,
                                 borderType=cv2.BORDER_CONSTANT,
                                 value=255)

    return img
```

### 5️⃣ Gọi và sử dụng Template Matching

- Tùy bối cảnh bài toán mà chúng ta sẽ gọi Template Matching trước khi OCR hoặc sau OCR để tăng độ chính xác:

  - ❶ Gọi hàm load template images một lần ngay khi khởi động ứng dụng, tránh việc load lại images mỗi lần OCR, cải thiện đáng kể performance.

  - ❷ Giả sử chúng ta sẽ gọi Template Matching trước, nếu không có giá trị trả về thì gọi OCR sau:
    ```python
    # Preprocess image (convert to grayscale, thresholding, etc.)
    processed = preprocess_crop_image()
    # Call Template Matching
    result = match_template(pre_processed, templates)
    ```
