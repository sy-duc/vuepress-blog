---
title: Store Procedure, Function, Cursor và Triggers trong PL/SQL
---

# Store Procedure, Function, Cursor và Triggers

[1. Store Procedure](#1)

[2. Function](#2)

[3. Cursor](#3)

[4. Triggers](#4)

[5. Package](#5)

<a name="1"></a>

## 📌 1. Store Procedure trong PL/SQL

Một PROCEDURE trong PL/SQL là một khối mã có thể tái sử dụng, thực hiện một nhiệm vụ cụ thể mà không trả về giá trị trực tiếp (khác với FUNCTION).

### 🔹 Tạo một PROCEDURE

Cú pháp chung:

```sql
CREATE [OR REPLACE] PROCEDURE procedure_name
(
    param1 [IN | OUT | IN OUT] datatype,
    param2 [IN | OUT | IN OUT] datatype,
    ...
)
IS
    -- Khai báo biến (nếu cần)
BEGIN
    -- Khối lệnh thực thi
EXCEPTION
    -- Xử lý lỗi (nếu cần)
END procedure_name;
```

🔥 Giải thích:

- CREATE OR REPLACE PROCEDURE → Tạo hoặc thay thế một procedure.
- procedure_name → Tên procedure.
- param1, param2, ... → Danh sách tham số (có thể không có).
  - IN → Tham số đầu vào (mặc định).
  - OUT → Tham số đầu ra (trả về giá trị sau khi thực thi).
  - IN OUT → Tham số vừa nhập vào, vừa xuất ra.
- IS / AS → Bắt đầu phần thân của procedure.
- BEGIN ... END; → Chứa logic thực thi.
- EXCEPTION → Xử lý lỗi nếu có.

### 🔹 Ví dụ cơ bản

#### 1️⃣ Procedure không có tham số:

```sql
CREATE OR REPLACE PROCEDURE say_hello
IS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Hello, PL/SQL!');
END say_hello;
```

📢 Cách gọi procedure:

```sql
BEGIN
    say_hello;
END;
```

#### 2️⃣ Procedure có tham số đầu vào (IN):

```sql
CREATE OR REPLACE PROCEDURE greet_user(p_name IN VARCHAR2)
IS
BEGIN
    DBMS_OUTPUT.PUT_LINE('Xin chào, ' || p_name || '!');
END greet_user;
```

📢 Cách gọi procedure:

```sql
BEGIN
    greet_user('John');
END;
```

#### 3️⃣ Procedure có tham số đầu ra (OUT):

```sql
CREATE OR REPLACE PROCEDURE get_salary(
    p_emp_id IN NUMBER,
    p_salary OUT NUMBER
)
IS
BEGIN
    SELECT salary INTO p_salary FROM employees WHERE emp_id = p_emp_id;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        p_salary := NULL;
END get_salary;
```

#### 4️⃣ Procedure có tham số vừa nhập vừa xuất (IN OUT):

```sql
CREATE OR REPLACE PROCEDURE update_salary(
    p_emp_id IN NUMBER,
    p_new_salary IN OUT NUMBER
)
IS
BEGIN
    UPDATE employees SET salary = p_new_salary WHERE emp_id = p_emp_id;
    COMMIT;
    p_new_salary := p_new_salary + 100; -- Thay đổi giá trị tham số
END update_salary;
```

### 🔹 Xóa một PROCEDURE

Để xóa một procedure, dùng lệnh:

```sql
DROP PROCEDURE procedure_name;
```

<a name="2"></a>

## 📌 2. Function trong PL/SQL

Một FUNCTION trong PL/SQL là một khối mã có thể tái sử dụng, thực hiện một nhiệm vụ cụ thể và bắt buộc phải trả về một giá trị.

### 🔹 Tạo một FUNCTION

Cú pháp chung:

```sql
CREATE [OR REPLACE] FUNCTION function_name
(
    param1 [IN] datatype,
    param2 [IN] datatype,
    ...
)
RETURN return_datatype
IS
    -- Khai báo biến (nếu cần)
BEGIN
    -- Thực hiện xử lý
    RETURN giá_trị;
EXCEPTION
    -- Xử lý lỗi (nếu cần)
END function_name;
```

🔥 Giải thích:

- CREATE OR REPLACE FUNCTION → Tạo hoặc thay thế function
- function_name → Tên function
- param1, param2, ... → Danh sách tham số (chỉ hỗ trợ IN, không có OUT hoặc IN OUT)
- RETURN return_datatype → Xác định kiểu dữ liệu trả về.
- RETURN giá_trị; → Function bắt buộc phải có câu lệnh RETURN

### 🔹 Ví dụ cơ bản

#### 1️⃣ Function tính tổng hai số:

```sql
CREATE OR REPLACE FUNCTION sum_two_numbers(
    p_num1 IN NUMBER,
    p_num2 IN NUMBER
)
RETURN NUMBER
IS
BEGIN
    RETURN p_num1 + p_num2;
END sum_two_numbers;
```

🔥 Giải thích:
Function trên nhận hai số p_num1 và p_num2, sau đó trả về tổng của chúng.

📢 Cách gọi function:

```sql
DECLARE
    v_result NUMBER;
BEGIN
    v_result := sum_two_numbers(10, 20);
    DBMS_OUTPUT.PUT_LINE('Tổng hai số: ' || v_result);
END;
```

#### 2️⃣ Function lấy lương nhân viên:

```sql
CREATE OR REPLACE FUNCTION get_salary(p_emp_id IN NUMBER)
RETURN NUMBER
IS
    v_salary NUMBER;
BEGIN
    SELECT salary INTO v_salary FROM employees WHERE emp_id = p_emp_id;
    RETURN v_salary;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN NULL;
END get_salary;
```

🔥 Giải thích:

- Function truy vấn lương của nhân viên theo emp_id và trả về kết quả.
- Nếu không tìm thấy nhân viên, function trả về NULL.

📢 Cách gọi function trong SQL:

```sql
SELECT get_salary(101) FROM dual;
```

📢 Hoặc trong PL/SQL block

```sql
DECLARE
    v_salary NUMBER;
BEGIN
    v_salary := get_salary(101);
    DBMS_OUTPUT.PUT_LINE('Lương nhân viên: ' || v_salary);
END;
```

#### 3️⃣ Function có xử lý ngoại lệ:

```sql
CREATE OR REPLACE FUNCTION get_department_name(p_dept_id IN NUMBER)
RETURN VARCHAR2
IS
    v_dept_name VARCHAR2(100);
BEGIN
    SELECT name INTO v_dept_name FROM departments WHERE dept_id = p_dept_id;
    RETURN v_dept_name;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN 'Không tìm thấy phòng ban';
END get_department_name;
```

### 🔹 Xóa một FUNCTION

Để xóa một function, dùng lệnh:

```sql
DROP FUNCTION function_name;
```

Ví dụ:

```sql
DROP FUNCTION sum_two_numbers;
```

<a name="3"></a>

## 📌 3. Cursor trong PL/SQL

- Khi thực hiện một truy vấn SELECT, dữ liệu trả về có thể là nhiều dòng.
- Cursor giúp lặp qua từng dòng dữ liệu đó một cách có kiểm soát.
- Có hai loại Cursor trong PL/SQL:
  - Implicit Cursor (Con trỏ ẩn): Oracle tự động tạo ra.
  - Explicit Cursor (Con trỏ tường minh): Do lập trình viên định nghĩa

### 🔹 Implicit Cursor (Con trỏ ẩn)

Oracle tự động sử dụng Implicit Cursor khi thực hiện các lệnh INSERT, UPDATE, DELETE hoặc SELECT INTO.

🔍 Ví dụ: Sử dụng Implicit Cursor với SELECT INTO

```sql
DECLARE
    v_emp_name employees.last_name%TYPE;
    v_salary employees.salary%TYPE;
BEGIN
    SELECT last_name, salary
    INTO v_emp_name, v_salary
    FROM employees
    WHERE employee_id = 100;

    DBMS_OUTPUT.PUT_LINE('Employee: ' || v_emp_name || ', Salary: ' || v_salary);
END;
/
```

⚠️ _Lưu ý:_ SELECT INTO chỉ hoạt động khi kết quả trả về đúng một dòng, nếu có nhiều hơn sẽ bị lỗi.

### 🔹 Explicit Cursor (Con trỏ tường minh)

Explicit Cursor giúp lấy nhiều dòng dữ liệu và duyệt qua từng dòng một cách linh hoạt.

Cách sử dụng:

#### 1️⃣ Khai báo Cursor:

```sql
CURSOR cursor_name IS <SELECT query>;
```

#### 2️⃣ Mở Cursor

```sql
OPEN cursor_name;
```

#### 3️⃣ Lấy dữ liệu từ Cursor

```sql
FETCH cursor_name INTO variable1, variable2, ...;
```

#### 4️⃣ Đóng Cursor

```sql
CLOSE cursor_name;
```

### 🔹 Ví dụ cơ bản Explicit Cursor

```sql
DECLARE
    CURSOR emp_cursor IS
        SELECT employee_id, last_name, salary FROM employees;

    v_id employees.employee_id%TYPE;
    v_name employees.last_name%TYPE;
    v_salary employees.salary%TYPE;
BEGIN
    OPEN emp_cursor;

    LOOP
        FETCH emp_cursor INTO v_id, v_name, v_salary;
        EXIT WHEN emp_cursor%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE('ID: ' || v_id || ', Name: ' || v_name || ', Salary: ' || v_salary);
    END LOOP;

    CLOSE emp_cursor;
END;
/
```

🔥 Giải thích:

- FETCH emp_cursor INTO v_id, v_name, v_salary; lấy từng dòng dữ liệu.
- EXIT WHEN emp_cursor%NOTFOUND; dừng vòng lặp khi không còn dữ liệu.
- CLOSE emp_cursor; giải phóng con trỏ sau khi sử dụng.

### 🔹 Thuộc tính của Cursor

PL/SQL cung cấp 4 thuộc tính giúp kiểm soát quá trình làm việc với Cursor:

| Thuộc tính |                        Ý nghĩa                        |
| :--------: | :---------------------------------------------------: |
|   %FOUND   | TRUE nếu FETCH thành công, FALSE nếu không có dữ liệu |
| %NOTFOUND  |    TRUE nếu không có dữ liệu, FALSE nếu có dữ liệu    |
|  %ISOPEN   |      TRUE nếu Cursor đang mở, FALSE nếu đã đóng       |
| %ROWCOUNT  |               Số dòng đã lấy từ Cursor                |

🔍 Ví dụ: Kiểm tra số dòng đã fetch

```sql
FETCH emp_cursor INTO v_id, v_name, v_salary;
IF emp_cursor%FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Lấy được dòng: ' || emp_cursor%ROWCOUNT);
END IF;
```

### 🔹 Cursor FOR LOOP (Cách đơn giản để duyệt Cursor)

Thay vì phải OPEN, FETCH, CLOSE thủ công, PL/SQL cung cấp Cursor FOR LOOP, tự động mở, lấy dữ liệu và đóng Cursor.

🔍 Ví dụ: Duyệt dữ liệu bằng Cursor FOR LOOP

```sql
BEGIN
    FOR emp_rec IN (SELECT employee_id, last_name, salary FROM employees) LOOP
        DBMS_OUTPUT.PUT_LINE('ID: ' || emp_rec.employee_id || ', Name: ' || emp_rec.last_name || ', Salary: ' || emp_rec.salary);
    END LOOP;
END;
/
```

<a name="4"></a>

## 📌 4. Trigger trong PL/SQL

Trigger là một khối PL/SQL tự động thực thi khi một sự kiện INSERT, UPDATE, DELETE xảy ra trên một bảng hoặc một view.

- Không cần gọi thủ công, trigger sẽ kích hoạt tự động khi thỏa mãn điều kiện.
- Dùng để kiểm tra dữ liệu, ghi log, tự động cập nhật giá trị, v.v.

### 🔹 Tạo một Trigger

Cú pháp chung:

```sql
CREATE [ OR REPLACE ] TRIGGER trigger_name
{BEFORE | AFTER | INSTEAD OF}
{INSERT | UPDATE | DELETE}
ON table_name
[ FOR EACH ROW ]
BEGIN
    -- Khối lệnh thực thi
END;
/
```

🔥 Giải thích:

- BEFORE: Trigger chạy trước khi sự kiện xảy ra.
- AFTER: Trigger chạy sau khi sự kiện hoàn tất.
- INSTEAD OF: Dùng cho VIEW để thay thế hành động gốc.
- FOR EACH ROW: Trigger kích hoạt cho từng dòng bị ảnh hưởng.

### 🔹 Ví dụ cơ bản

#### 1️⃣ Kiểm tra dữ liệu trước khi INSERT:

```sql
CREATE OR REPLACE TRIGGER trg_check_salary
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF :NEW.salary < 3000000 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Lương phải từ 3 triệu trở lên!');
    END IF;
END;
/
```

✅ Kết quả: Nếu cố gắng thêm nhân viên có lương < 3 triệu, hệ thống sẽ báo lỗi.

#### 2️⃣ Lưu bản ghi đã xóa vào bảng backup:

```sql
CREATE OR REPLACE TRIGGER trg_backup_employee
AFTER DELETE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employees_backup (employee_id, name, salary, deleted_at)
    VALUES (:OLD.employee_id, :OLD.name, :OLD.salary, SYSDATE);
END;
/
```

✅ Kết quả: Khi xóa nhân viên, dữ liệu sẽ được lưu vào bảng backup.

### 🔹 Xóa một Trigger

Cú pháp xóa trigger:

```sql
DROP TRIGGER trigger_name;
```

💡 _Lưu ý:_

- Khi xóa trigger, nó sẽ biến mất hoàn toàn khỏi database.
- Nếu muốn chỉ vô hiệu hóa (disable) trigger tạm thời, có thể dùng:

  ```sql
  ALTER TRIGGER trigger_name DISABLE;
  ```

  Và kích hoạt lại khi cần:

  ```sql
  ALTER TRIGGER trigger_name ENABLE;
  ```

<a name="5"></a>

## 📌 5. Gói (Package) trong PL/SQL

Package trong PL/SQL là một tập hợp các Procedure, Function, Cursor, và biến được nhóm lại thành một module duy nhất.

- Tổ chức code gọn gàng, dễ quản lý.
- Cải thiện hiệu suất, vì các thành phần trong package được nạp vào bộ nhớ khi gọi lần đầu.
- Hỗ trợ tính kế thừa trong PL/SQL.

### 🔹 Cấu trúc của một Package

Một Package có 2 phần:

- Package Specification (Giao diện bên ngoài).
- Package Body (Cài đặt chi tiết bên trong).

### 🔹 Cú pháp Package

- Định nghĩa Package Specification (Phần khai báo):

  ```sql
  CREATE OR REPLACE PACKAGE package_name AS
      -- Khai báo hằng số, biến, cursor
      var1 NUMBER;

      -- Khai báo Procedure, Function
      PROCEDURE proc_example(p_id NUMBER);
      FUNCTION func_example(p_id NUMBER) RETURN VARCHAR2;
  END package_name;
  /
  ```

  💡 Package Specification giống như một API — chỉ khai báo cái cần công khai.

- Định nghĩa Package Body (Phần triển khai):

  ```sql
  CREATE OR REPLACE PACKAGE BODY package_name AS
      -- Cài đặt Procedure
      PROCEDURE proc_example(p_id NUMBER) IS
      BEGIN
          DBMS_OUTPUT.PUT_LINE('Proc called with ID: ' || p_id);
      END proc_example;

      -- Cài đặt Function
      FUNCTION func_example(p_id NUMBER) RETURN VARCHAR2 IS
      BEGIN
          RETURN 'Hello ' || p_id;
      END func_example;
  END package_name;
  /
  ```

  💡 Package Body chứa code xử lý thực tế của Procedure và Function.

### 🔹 Sử dụng Package

- Gọi Procedure trong Package:

  ```sql
  BEGIN
      package_name.proc_example(100);
  END;
  /
  ```

- Gọi Function trong Package:

  ```sql
  DECLARE
      result VARCHAR2(100);
  BEGIN
      result := package_name.func_example(200);
      DBMS_OUTPUT.PUT_LINE(result);
  END;
  /
  ```
