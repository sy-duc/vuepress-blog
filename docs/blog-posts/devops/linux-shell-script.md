---
title: Linux - Shell Script
summary: "Shell Script giúp bạn tự động hóa các thao tác trên Linux thay vì nhập từng lệnh thủ công."
date: "2025-06-09"
image: "/vuepress-blog/images/user-images/user-3.jpg"
category: "DEVOPS"
---

# Shell Script

Shell Script giúp bạn tự động hóa các thao tác trên Linux thay vì nhập từng lệnh thủ công.

[1. Shell Script là gì?](#1)

[2. Trình soạn thảo nano](#2)

[3. Biến trong Shell Script](#3)

[4. Thực hiện các phép tính trong Shell Bash](#4)

[5. Cấu trúc điều kiện](#5)

[6. Cấu trúc vòng lặp](#6)

[7. Mảng trong Shell Script](#7)

[8. Hàm trong Shell Script](#8)

[9. Debug trong Shell Script](#9)

<a name="1"></a>

## 📌 1. Shell Script là gì?

Là một tập hợp các lệnh Linux được viết trong một file script (đuôi .sh) và có thể thực thi như một chương trình.

### 🔹 Ví dụ đơn giản:

```bash
#!/bin/bash # Đánh dấu việc sử dụng bash để thực thi
echo "Hello, Linux!"
```

### 🔹 Cách chạy script:

```bash
chmod +x script.sh  # Cấp quyền thực thi
./script.sh         # Chạy script
```

### 🔹 Lưu ý:

- Mỗi dòng lệnh được viết trên một dòng riêng.

- Bắt đầu script bằng dòng shebang _#!/bin/bash_ để chỉ định shell mà script sẽ sử dụng (trường hợp này là bash).

- Kết thúc mỗi dòng lệnh bằng dấu chấm phẩy hoặc không cần dấu chấm phẩy nếu mỗi lệnh đươc viết trên một dòng.

<a name="2"></a>

## 📌 2. Trình soạn thảo nano

Khi viết Shell Script, cần một trình soạn thảo để chỉnh sửa nội dung file .sh.

Trình soạn thảo nano là một trong những lựa chọn phổ biến:

- Dễ sử dụng hơn so với Vim.
- Hỗ trợ cú pháp đơn giản & gợi ý lệnh.
- Tạo và chỉnh sửa nhanh chóng.
- Phù hợp với người mới bắt đầu làm quen với Shell Script.

Để mở file trong trình soạn thảo nano:

```bash
nano myscript.sh
```

Dưới đây là một số thao tác cơ bản khi sử dụng trình soạn thảo nano:

### 🔹 Điều hướng trong nano

|        Action        |                Lệnh                 |
| :------------------: | :---------------------------------: |
|  Di chuyển con trỏ   |          Dùng phím mũi tên          |
| Nhảy đến dòng cụ thể | Ctrl + \_, nhập số dòng, nhấn Enter |
|   Tìm kiếm từ khóa   | Ctrl + W, nhập từ khóa, nhấn Enter  |
|  Tìm kiếm tiếp theo  |   Ctrl + W rồi nhấn Enter lần nữa   |

### 🔹 Chỉnh sửa và lưu file

|      Action       |                         Lệnh                          |
| :---------------: | :---------------------------------------------------: |
| Xóa dòng hiện tại |                       Ctrl + K                        |
|   Sao chép dòng   |  Alt + 6 (đánh dấu), Ctrl + K (cắt), Ctrl + U (dán)   |
|     Lưu file      |                 Ctrl + O, nhấn Enter                  |
|    Thoát nano     | Ctrl + X, nếu có thay đổi, chọn Y để lưu hoặc N để bỏ |

### 🔹 Một số phím tắt hữu ích

|        Action        |      Lệnh       |
| :------------------: | :-------------: |
| Bật/tắt đánh số dòng | Alt + Shift + # |
|       Hoàn tác       |     Alt + U     |
|    Làm lại (Redo)    |     Alt + E     |

<a name="3"></a>

## 📌 3. Biến trong Shell Script

Shell hỗ trợ biến hệ thống và biến do người dùng định nghĩa.

### 🔹 Biến hệ thống (có sẵn)

```bash
echo "User hiện tại: $USER"
echo "Thư mục HOME: $HOME"
echo "Shell đang dùng: $SHELL"
```

### 🔹 Biến tự định nghĩa

```bash
name="Linux"
echo "Chào mừng bạn đến với $name!"
```

### 🔹 Một số quy định về tên biến

- Bắt đầu bằng ký tự hoặc dấu gạch chân (\_)

- Không được có khoảng trắng

- Biến có phân biệt chữ hoa chữ thường

- Có thể khai báo một biến có giá trị NULL như sau:

  ```bash
  var1=
  # hoặc
  var2=""
  ```

- Không dùng ?, \* để đặt tên biến

<a name="4"></a>

## 📌 4. Thực hiện các phép tính trong Shell Bash

Bash không hỗ trợ trực tiếp toán học như các ngôn ngữ lập trình khác, nhưng có nhiều cách để thực hiện các phép tính.

### 🔹 Sử dụng expr (Phép toán cơ bản)

```bash
a=10
b=5
sum=$(expr $a + $b)    # Cộng
diff=$(expr $a - $b)   # Trừ
prod=$(expr $a \* $b)  # Nhân (* phải có \ do là ký tự đặc biệt trong shell)
quot=$(expr $a / $b)   # Chia (chỉ lấy phần nguyên)
mod=$(expr $a % $b)    # Lấy dư
```

### 🔹 Sử dụng let (Tương tự expr nhưng gọn hơn)

```bash
a=10
b=3
let "a += b"
echo "a sau khi cộng: $a"  # 13
# cách viết khác
let a=10+3
```

### 🔹 Sử dụng $(( )) (Cách tốt nhất)

```bash
a=10
b=3
sum=$((a + b))
diff=$((a - b))
prod=$((a * b))
quot=$((a / b))  # Lấy phần nguyên
mod=$((a % b))
```

### 🔹 Sử dụng bc (Tính toán số thực)

Do expr, $(( )) chỉ hỗ trợ số nguyên, sử dụng bc để tính toán số thực như sau:

```bash
echo "scale=2; 5 / 3" | bc  # 1.66
```

<a name="5"></a>

## 📌 5. Cấu trúc điều kiện

```bash
#!/bin/bash
echo "Nhập số:"
read num
if [ $num -gt 10 ]; then
    echo "Số lớn hơn 10"
else
    echo "Số nhỏ hơn hoặc bằng 10"
fi
```

🔥 Một số toán tử kiểm tra:

|  Toán tử  |              Ý nghĩa              |
| :-------: | :-------------------------------: |
|    -eq    |               Bằng                |
|    -ne    |               Khác                |
|    -gt    |              Lớn hơn              |
|    -lt    |              Nhỏ hơn              |
|    -ge    |         Lớn hơn hoặc bằng         |
|    -le    |         Nhỏ hơn hoặc bằng         |
| = hoặc == | So sánh bằng nhưng dùng cho chuỗi |
|    !=     | So sánh khác nhưng dùng cho chuỗi |

<a name="6"></a>

## 📌 6. Cấu trúc vòng lặp

### 🔹 Vòng lặp for

```bash
for i in {1..5}; do
    echo "Số: $i"
done
```

### 🔹 Vòng lặp while

```bash
count=1
while [ $count -le 5 ]; do
    echo "Lần $count"
    ((count++))
done
```

<a name="7"></a>

## 📌 7. Mảng trong Shell Script

Bash hỗ trợ mảng chỉ số (indexed array) và mảng kết hợp (associative array).

### 🔹 Mảng chỉ số (Indexed Array)

- Khai báo mảng:

  ```bash
  # Khởi tạo mảng
  arr=(10 20 30 40 "Hello")

  # Cách khác
  arr[0]=10
  arr[1]=20
  arr[2]=30
  arr[3]=40
  arr[4]="Hello"
  ```

- Truy cập phần tử trong mảng:

  ```bash
  # Lấy giá trị của một phần tử (chỉ số bắt đầu từ 0)
  echo "${arr[0]}"  # 10

  # Lấy toàn bộ giá trị của mảng
  echo "${arr[@]}"  # 10 20 30 40 Hello
  echo "${arr[*]}"  # 10 20 30 40 Hello

  # Lấy số lượng phần tử trong mảng
  echo "${#arr[@]}"  # 5

  # Lấy danh sách chỉ mục (index) của mảng
  echo "${!arr[@]}"  # 0 1 2 3 4
  ```

- Duyệt mảng:

  ```bash
  # Duyệt mảng bằng for
  for item in "${arr[@]}"; do
      echo "$item"
  done

  # Duyệt mảng bằng chỉ mục (for và seq)
  for i in "${!arr[@]}"; do
      echo "Phần tử $i: ${arr[$i]}"
  done
  ```

- Thêm, sửa, xóa phần tử trong mảng:

  ```bash
  # Thêm phần tử vào mảng
  arr+=(50 60)  # Thêm nhiều phần tử
  echo "${arr[@]}"  # 10 20 30 40 Hello 50 60

  # Cập nhật giá trị
  arr[1]=100
  echo "${arr[@]}"  # 10 100 30 40 Hello

  # Xóa phần tử khỏi mảng
  unset arr[2]
  echo "${arr[@]}"  # 10 100 40 Hello

  # Xóa toàn bộ mảng
  unset arr
  echo "${arr[@]}"  # Không còn phần tử nào
  ```

### 🔹 Mảng kết hợp (Associative Array)

Chỉ hỗ trợ trong Bash 4.0+

```bash
declare -A user
user[name]="John"
user[age]=25
user[email]="john@example.com"

echo "Tên: ${user[name]}"
echo "Tuổi: ${user[age]}"
echo "Email: ${user[email]}"
```

Để duyệt mảng kết hợp:

```bash
for key in "${!user[@]}"; do
    echo "$key: ${user[$key]}"
done
```

<a name="8"></a>

## 📌 8. Hàm trong Shell Script

Shell Script cũng hỗ trợ hàm để tái sử dụng code.

### 🔹 Khai báo & gọi hàm

```bash
# Khai báo hàm
hello() {
    echo "Xin chào, $1!"
}

# Gọi hàm
hello "Linux"
```

### 🔹 Hàm trả về giá trị

- **Cách 1:** Trả về giá trị bằng return

  - return chỉ trả về mã trạng thái (exit code), thường dùng để kiểm tra thành công/thất bại.
  - Số trả về nằm trong khoảng 0-255.

  ```bash
  check_even() {
      local num=$1
      if (( num % 2 == 0 )); then
          return 0  # Thành công
      else
          return 1  # Thất bại
      fi
  }

  check_even 10
  # Dùng $? lấy giá trị return của hàm
  if [ $? -eq 0 ]; then
      echo "10 là số chẵn"
  else
      echo "10 là số lẻ"
  fi
  ```

- **Cách 2:** Trả về giá trị bằng echo

  - Dùng echo để trả về chuỗi, số nguyên, mảng, hoặc bất kỳ dữ liệu nào.
  - Kết hợp với $(...) để lấy giá trị trả về.

  ```bash
  sum() {
    local a=$1
    local b=$2
    echo $((a + b))  # In kết quả ra màn hình
  }

  result=$(sum 10 20)
  echo "Tổng là: $result"
  ```

<a name="9"></a>

## 📌 9. Debug trong Shell Script

### 🔹 Chạy script ở chế độ debug (-x)

Sử dụng bash -x script.sh hoặc thêm dòng set -x vào script để hiển thị từng lệnh được thực thi.

- Ví dụ 1: Chạy script với -x

  ```bash
  bash -x script.sh
  ```

  📝 Kết quả: Hiển thị từng lệnh trước khi thực thi, giúp dễ dàng kiểm tra lỗi.

- Ví dụ 2: Thêm set -x vào script

  ```bash
  #!/bin/bash
  set -x  # Bật debug mode

  echo "Bắt đầu script"
  x=5
  y=10
  sum=$((x + y))
  echo "Tổng: $sum"

  set +x  # Tắt debug mode
  echo "Script hoàn thành!"
  ```

  📝 Kết quả:

  ```bash
  + echo 'Bắt đầu script'
  Bắt đầu script
  + x=5
  + y=10
  + sum=15
  + echo 'Tổng: 15'
  Tổng: 15
  + set +x
  Script hoàn thành!
  ```

### 🔹 Debug từng dòng bằng echo

Thêm echo để kiểm tra giá trị biến tại từng bước

```bash
#!/bin/bash
echo "Script bắt đầu"
var="Linux"
echo "Giá trị của var: $var"
```

### 🔹 Kiểm tra lỗi cú pháp (-n)

Dùng bash -n script.sh để kiểm tra lỗi cú pháp mà không chạy script.

```bash
bash -n script.sh
```

📝 Kết quả: Nếu có lỗi cú pháp, bash sẽ báo lỗi ngay.

### 🔹 Hiển thị lỗi chi tiết (-v)

Dùng bash -v script.sh để hiển thị từng dòng lệnh trước khi thực thi.

```bash
bash -v script.sh
```

### 🔹 Bắt lỗi runtime (set -e, set -u)

```bash
#!/bin/bash
set -e  # Dừng khi gặp lỗi
set -u  # Báo lỗi khi dùng biến chưa khai báo

echo "Chạy lệnh..."
ls /khong_ton_tai   # Lệnh này sẽ gây lỗi và dừng script
echo "Dòng này sẽ không chạy"
```

📝 Kết quả:

```bash
Chạy lệnh...
ls: cannot access '/khong_ton_tai': No such file or directory
```

Lệnh echo "Dòng này sẽ không chạy" không được thực thi do set -e.
