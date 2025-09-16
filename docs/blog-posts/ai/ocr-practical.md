---
title: Ứng dụng OCR vào bài toán thực tế
summary: "Bài viết này trình bày cách áp dụng OCR vào một bài toán thực tế trong sản xuất. Hy vọng mọi người có thể tận dụng được trong các kịch bản tại từng bài toán OCR khác nhau."
date: "2025-09-04"
image: "/vuepress-blog/images/posts/ocr-tesseract.png"
category: "AI / Machine Learning"
tags:
  - ai
  - machine learning
  - ocr
  - tesseract
---

# Ứng dụng & tích hợp OCR vào bài toán thực tế

Bài viết này trình bày cách áp dụng OCR (Optical Character Recognition) vào một bài toán thực tế trong sản xuất.

Thông qua quá trình phân tích, thiết kế và triển khai giải pháp, mọi người không chỉ nắm được cách giải quyết một bài toán cụ thể, mà còn có thêm tư duy nhạy bén trong việc nhận diện các kịch bản có thể tận dụng OCR. Từ đó, OCR có thể được tích hợp hiệu quả vào nhiều bài toán thuộc nhiều lĩnh vực khác.

[1. Bài toán](#1)

[2. Phân tích hướng tiếp cận](#2)

[3. Quy trình triển khai OCR trong bài toán](#3)

[4. Source demo](#4)

<a name="1"></a>

## 📌 1. Bài toán

### 📍 Hiện trạng

- ✦ Các dây chuyền sản xuất trong nhà máy tích hợp sẵn phần mềm phân loại sản phẩm.

- ✦ Nhân viên phải định kỳ nhập tay kết quả (tổng số sản phẩm, sản phẩm loại 1, loại 2, loại 3).

- ✦ Dựa vào dữ liệu nhập tay để tạo báo cáo theo ngày/tháng.

### ⏳ Mong muốn

- ✦ Tạo công cụ tự động thu thập dữ liệu và tạo file báo cáo (excel) để giảm sai sót do thao tác thủ công.

- ✦ Chú ý không can thiệp phần mềm phân loại đang hoạt động.

<a name="2"></a>

## 📌 2. Phân tích hướng tiếp cận

### ❌ Hạn chế

- Không can thiệp phần mềm kiểm tra đang hoạt động.

- Không có sẵn log từ phần mềm kiểm tra.

### ✅ Giải pháp

- Tạo tool (máy server) dùng OCR ảnh màn hình máy kiểm tra (máy client) để đọc giá trị cần thiết cho báo cáo.

### 📝 Ngôn ngữ

- Chúng ta sẽ lựa chọn Python bởi nó có hệ sinh thái phong phú cho OCR và xử lý ảnh: Tesseract OCR, OpenCV, Pillow.

<a name="3"></a>

## 📌 3. Quy trình triển khai

### 1️⃣ Thu thập ảnh

- ✦ Ảnh kết quả kiểm tra sẽ được thu thập bằng cách chụp màn hình máy kiểm tra (máy test - máy client) và gửi về máy server thông qua thư mục chia sẻ (shared folder).

- ✦ Thu thập ảnh bằng tool riêng (Capture Tool) cài trên từng máy client:

  - ✧ Tool chủ yếu chỉ chứa logic chụp ảnh màn hình nên sẽ dùng Console App chạy ngầm.

    - Để tool tương thích mọi hệ điều hành thì tốt nhất nên dùng .NET (C#) version thấp thôi. Khuyên dùng .NET `v.4.7.2`.

  - ✧ Do là môi trường nhà máy sản xuất hàng loạt nên đánh giá sẽ hoạt động 24/24 và test liên tục từ sản phẩm này qua sản phẩm khác.

    - 👉 Ảnh cần được chụp định kỳ tùy thời gian test xong sản phẩm.

  - ✧ Để giảm số lượng ảnh gửi về máy server gây ảnh hưởng performance khi OCR, nên có logic check chỉ gửi ảnh nếu ảnh chụp có sự thay đổi.

  - ✧ Ảnh nên đặt tên theo timestamp để quản lý lịch sử.

- ⚠️ **Note:**
  - Capture Tool về cơ bản là khá đơn giản nên mọi người tự xử nhé. Nội dung bài viết này sẽ chỉ tập trung vào OCR thôi.

### 2️⃣ OCR - Nhận dạng dữ liệu

- Tạo OCR Tool với Python + Tesseract OCR để xử lý ảnh:

  #### ❶ Phát hiện ảnh

  - ✦ Sử dụng thư viện `watchdog` trong Python để theo dõi thư mục ảnh (shared folder).

  - ✦ Khi có ảnh mới được gửi về từ máy client, sự kiện được kích hoạt.

  #### ❷ Chờ ảnh sẵn sàng

  - ✦ Để tránh trường hợp OCR đọc khi file ảnh chưa ghi xong (ảnh nặng hoặc sự cố đường truyền), cần kiểm tra file ảnh ổn định và sẵn sàng trước khi đưa vào xử lý.

  - ✦ Ảnh mới đã sẵn sàng xử lý được đưa vào hàng đợi xử lý (Queue) giúp tách biệt luồng “nhận ảnh” và “OCR”, giúp hệ thống không bị nghẽn khi nhiều ảnh xuất hiện cùng lúc.

  #### ❸ Tiền xử lý ảnh

  - ✦ Do ảnh chụp màn hình, các máy test trong nhà máy sản xuất hầu như hiển thị theo kiểu font cũ. Do vậy không tránh được các vùng giá trị cần đọc trên ảnh bị mờ, nhiễu.

  - ✦ Việc tiền xử lý ảnh trước khi OCR gần như là bắt buộc.

  #### ❹ OCR từng vùng dữ liệu

  - ✦ Dựa vào file cấu hình (file `config.json`) để định nghĩa các vùng cần đọc giá trị trên ảnh (x, y, width, height).

  - ✦ Do các máy test trên dây chuyền nhà máy có thể khác nhau độ phân giải, các vùng OCR nhiều khi cần định nghĩa cho từng máy.

### 3️⃣ Hậu xử lý kết quả OCR

- ✦ Kết quả OCR nên qua thêm một bước validate như:

  - ✧ Chỉ chấp nhận các kết quả đọc được. Kết quả None thì bỏ qua

  - ✧ Có thêm cơ chế check, ví dụ:

    `Tổng số sản phẩm = Sản phẩm loại 1 + Sản phẩm loại 2 + Sản phẩm loại 3`

### 4️⃣ Phân tích dữ liệu

- ✦ Kết quả OCR trước khi dùng báo cáo cần qua bước phân tích và xử lý tùy thuộc require (yêu cầu file báo cáo).

### 5️⃣ Báo cáo

- ✦ Kết quả hợp lệ sau khi phân tích nên được ghi vào file báo cáo trung gian JSON Line (`.jsonl`) để dễ đọc/ghi.

- ✦ Do ảnh đến với tần suất cao (dây chuyền nhiều máy), việc ghi file excel liên tục có thể gây tốn thời gian, thậm chí nghẽn I/O.

- ✦ Việc tạo file báo cáo nên tự động thực hiện định kỳ (ví dụ 5p một lần), và data chính dùng cho file báo cáo chính là kết quả OCR đã được phân tích và ghi vào file báo cáo trung gian (`.jsonl`).

<a name="4"></a>

## 📌 4. Source code demo

TODO...
