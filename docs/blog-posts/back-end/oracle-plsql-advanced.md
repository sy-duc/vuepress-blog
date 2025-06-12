---
title: PL/SQL nâng cao
summary: "Tiếp cận và khai thác sức mạnh thực sự của PL/SQL trong các hệ thống cơ sở dữ liệu phức tạp và hiệu năng cao."
date: "2025-06-14"
image: "/vuepress-blog/images/posts/plsql.png"
category: "BACK-END"
---

# PL/SQL nâng cao

[1. Transactions](#1)

[2. Dynamic SQL](#2)

[3. Collection và Record](#3)

[4. Bulk Processing](#4)

<a name="1"></a>

## 📌 1. Transactions trong PL/SQL

Transaction là một tập hợp các câu lệnh SQL được thực thi như một đơn vị công việc.

Về tính chất của Transaction thì chắc sẽ không cần đề cập lại.

Trong PL/SQL, một transaction bắt đầu tự động khi thực hiện bất kỳ câu lệnh DML (INSERT, UPDATE, DELETE).

### 🔹 Các lệnh điều khiển Transaction trong PL/SQL

|   Lệnh    |                     Chức năng                      |
| :-------: | :------------------------------------------------: |
|  COMMIT   |     Xác nhận transaction, lưu thay đổi vào DB      |
| ROLLBACK  | Hủy bỏ transaction, khôi phục trạng thái trước đó  |
| SAVEPOINT | Đánh dấu một điểm để rollback một phần transaction |

### 🔹 COMMIT – Lưu thay đổi vĩnh viễn

Sau khi COMMIT, dữ liệu không thể rollback lại.

```sql
BEGIN
    UPDATE employees SET salary = salary * 1.1 WHERE department_id = 10;
    COMMIT;
END;
/
```

### 🔹 ROLLBACK – Hủy bỏ Transaction

Nếu có lỗi, ROLLBACK sẽ hoàn tác mọi thay đổi về trạng thái ban đầu.

```sql
BEGIN
    UPDATE employees SET salary = salary * 1.2 WHERE department_id = 20;

    -- Có lỗi xảy ra
    IF some_error THEN
        ROLLBACK; -- Hủy toàn bộ thay đổi
    END IF;
END;
/
```

### 🔹 SAVEPOINT – Rollback từng phần

SAVEPOINT giúp rollback một phần transaction thay vì rollback toàn bộ.

```sql
BEGIN
    -- Cập nhật lần 1
    UPDATE employees SET salary = salary * 1.1 WHERE department_id = 10;
    SAVEPOINT sp1; -- Lưu lại trạng thái

    -- Cập nhật lần 2
    UPDATE employees SET salary = salary * 1.2 WHERE department_id = 20;
    SAVEPOINT sp2; -- Lưu lại trạng thái

    -- Nếu có lỗi, rollback về điểm sp1 (giữ lại cập nhật lần 1)
    ROLLBACK TO sp1;

    -- Commit phần còn lại
    COMMIT;
END;
/
```

Sau khi rollback về sp1:

✅ Thay đổi của department_id = 10 vẫn giữ.

❌ Thay đổi của department_id = 20 bị hủy.

### 🔹 AUTOCOMMIT – Transaction tự động

- Kiểm tra trạng thái AUTOCOMMIT:

  ```sql
  SHOW AUTOCOMMIT;
  ```

- Tắt Autocommit để kiểm soát transaction thủ công:

  ```sql
  SET AUTOCOMMIT OFF;
  ```

<a name="2"></a>

## 📌 2. Dynamic SQL

Dynamic SQL (SQL động) là kỹ thuật cho phép xây dựng và thực thi câu lệnh SQL một cách linh hoạt tại thời điểm chạy (runtime) thay vì viết cố định trong mã nguồn.

Cần Dynamic SQL khi:

- Câu lệnh SQL thay đổi linh hoạt theo dữ liệu đầu vào.
- Tên bảng, cột, điều kiện WHERE không thể xác định trước.
- Cần thực thi DDL (CREATE, DROP, ALTER) trong PL/SQL.
- Cần gọi stored procedure với tham số động.

### 🔹 Cách thực hiện Dynamic SQL

PL/SQL cung cấp hai cách chính để thực thi Dynamic SQL:

|        Cách        |                   Khi nào dùng?                    |
| :----------------: | :------------------------------------------------: |
| EXECUTE IMMEDIATE  |           Khi câu lệnh chỉ chạy một lần            |
| OPEN FOR ... USING | Khi cần fetch nhiều dòng dữ liệu (dùng với CURSOR) |

### 🔹 EXECUTE IMMEDIATE – Cách đơn giản nhất

Dùng để thực thi các câu lệnh SELECT, INSERT, UPDATE, DELETE, DDL.

🔍 Ví dụ SELECT động:

```sql
DECLARE
    v_table_name VARCHAR2(50) := 'employees';
    v_count NUMBER;
BEGIN
    EXECUTE IMMEDIATE 'SELECT COUNT(*) FROM ' || v_table_name INTO v_count;
    DBMS_OUTPUT.PUT_LINE('Total rows: ' || v_count);
END;
/
```

🔍 Ví dụ dùng USING để truyền tham số:

```sql
DECLARE
    v_sql VARCHAR2(200);
    v_salary NUMBER := 5000;
BEGIN
    v_sql := 'UPDATE employees SET salary = salary + 100 WHERE salary > :min_salary';
    EXECUTE IMMEDIATE v_sql USING v_salary;

    COMMIT;
END;
/
```

### 🔹 OPEN FOR ... USING – Dynamic Cursor

🔍 Ví dụ Fetch dữ liệu động với CURSOR:

```sql
DECLARE
    v_cursor SYS_REFCURSOR;
    v_table_name VARCHAR2(50) := 'employees';
    v_emp_name employees.last_name%TYPE;
BEGIN
    -- Mở cursor với bảng động
    OPEN v_cursor FOR 'SELECT last_name FROM ' || v_table_name;

    LOOP
        FETCH v_cursor INTO v_emp_name;
        EXIT WHEN v_cursor%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE('Employee: ' || v_emp_name);
    END LOOP;

    CLOSE v_cursor;
END;
/
```

<a name="3"></a>

## 📌 3. Collection và Record trong PL/SQL

Collection trong PL/SQL là một cấu trúc dữ liệu chứa nhiều phần tử cùng kiểu dữ liệu, tương tự như mảng trong các ngôn ngữ lập trình khác.

PL/SQL hỗ trợ 3 loại Collection chính:
| Loại Collection | Khi nào dùng? | Đặc điểm |
| :------------:|:-------------:|:-----:|
| VARRAY | Khi số phần tử cố định | Chỉ định số lượng tối đa; Lưu trong một cột của bảng |
| Nested Table | Khi cần danh sách động | Không giới hạn phần tử; Có thể lưu vào bảng dưới dạng cột |
| Associative Array (Index-by Table) | Khi cần truy xuất theo key | Key có thể là số hoặc chuỗi; Không lưu trong DB |

### 🔹 VARRAY – Mảng cố định số phần tử

Khai báo và sử dụng:

```sql
DECLARE
    TYPE t_varray IS VARRAY(5) OF VARCHAR2(50);
    v_departments t_varray := t_varray('HR', 'IT', 'Finance');
BEGIN
    DBMS_OUTPUT.PUT_LINE('First department: ' || v_departments(1));
END;
/
```

### 🔹 Nested Table – Mảng động

Khai báo và sử dụng:

```sql
DECLARE
    TYPE t_table IS TABLE OF VARCHAR2(50);
    v_employees t_table := t_table('John', 'Alice', 'Bob');
BEGIN
    v_employees.EXTEND; -- Mở rộng số phần tử
    v_employees(4) := 'David';

    FOR i IN 1..v_employees.COUNT LOOP
        DBMS_OUTPUT.PUT_LINE('Employee: ' || v_employees(i));
    END LOOP;
END;
/
```

### 🔹 Associative Array – Truy xuất theo Key

Khai báo và sử dụng:

```sql
DECLARE
    TYPE t_assoc IS TABLE OF VARCHAR2(50) INDEX BY VARCHAR2(10);
    v_employees t_assoc;
BEGIN
    v_employees('E001') := 'John';
    v_employees('E002') := 'Alice';

    DBMS_OUTPUT.PUT_LINE('Employee E001: ' || v_employees('E001'));
END;
/
```

### 🔹 RECORD

Record giúp nhóm nhiều trường dữ liệu vào một biến duy nhất.

Khai báo và sử dụng:

```sql
DECLARE
    TYPE t_employee IS RECORD (
        emp_id NUMBER,
        emp_name VARCHAR2(50),
        salary NUMBER
    );
    v_emp t_employee;
BEGIN
    v_emp.emp_id := 1001;
    v_emp.emp_name := 'John Doe';
    v_emp.salary := 5000;

    DBMS_OUTPUT.PUT_LINE('Employee: ' || v_emp.emp_name || ' - Salary: ' || v_emp.salary);
END;
/
```

### 🔹 RECORD với CURSOR – Fetch nhiều dòng

Có thể dùng RECORD để chứa từng dòng dữ liệu:

```sql
DECLARE
    TYPE t_employee IS RECORD (
        emp_id employees.employee_id%TYPE,
        emp_name employees.last_name%TYPE
    );
    v_emp t_employee;
    CURSOR c_emp IS SELECT employee_id, last_name FROM employees WHERE ROWNUM <= 5;
BEGIN
    OPEN c_emp;
    LOOP
        FETCH c_emp INTO v_emp;
        EXIT WHEN c_emp%NOTFOUND;
        DBMS_OUTPUT.PUT_LINE(v_emp.emp_id || ' - ' || v_emp.emp_name);
    END LOOP;
    CLOSE c_emp;
END;
/
```

<a name="4"></a>

## 📌 4. Bulk Processing trong PL/SQL

Bulk Processing giúp xử lý nhiều dòng dữ liệu cùng lúc, giảm số lần tương tác với SQL Engine, giúp tăng hiệu suất đáng kể so với cách xử lý từng dòng riêng lẻ.

PL/SQL cung cấp 2 cơ chế chính:

- BULK COLLECT → Lấy nhiều dòng dữ liệu vào Collection cùng lúc
- FORALL → Chèn, cập nhật, xóa nhiều dòng dữ liệu cùng lúc

### 🔹 BULK COLLECT – Lấy nhiều dòng dữ liệu

💡 Thay vì dùng LOOP để FETCH từng dòng:

```sql
DECLARE
    TYPE t_emp_list IS TABLE OF employees%ROWTYPE;
    v_emp_list t_emp_list;
    CURSOR c_emp IS SELECT * FROM employees WHERE department_id = 10;
BEGIN
    OPEN c_emp;
    LOOP
        FETCH c_emp INTO v_emp_list;
        EXIT WHEN c_emp%NOTFOUND;
    END LOOP;
    CLOSE c_emp;
END;
/
```

💡 Có thể dùng BULK COLLECT để lấy toàn bộ dữ liệu một lần:

```sql
DECLARE
    TYPE t_emp_list IS TABLE OF employees%ROWTYPE;
    v_emp_list t_emp_list;
BEGIN
    SELECT * BULK COLLECT INTO v_emp_list FROM employees WHERE department_id = 10;
END;
/
```

✅ Lợi ích của BULK COLLECT:

- Giảm số lần gọi FETCH
- Nhanh hơn gấp nhiều lần khi xử lý số lượng lớn dữ liệu
- Có thể kết hợp với LIMIT để tránh quá tải bộ nhớ (xem ví dụ bên dưới)

### 🔹 FORALL – Chèn, cập nhật, xóa hàng loạt

💡 Thay vì dùng vòng FOR để INSERT/UPDATE/DELETE từng dòng:

```sql
DECLARE
    TYPE t_emp_id_list IS TABLE OF employees.employee_id%TYPE;
    v_emp_id_list t_emp_id_list := t_emp_id_list(101, 102, 103);
BEGIN
    FOR i IN 1..v_emp_id_list.COUNT LOOP
        UPDATE employees SET salary = salary * 1.1 WHERE employee_id = v_emp_id_list(i);
    END LOOP;
END;
/
```

💡 Có thể dùng FORALL để thực hiện nhiều dòng một lần:

```sql
DECLARE
    TYPE t_emp_id_list IS TABLE OF employees.employee_id%TYPE;
    v_emp_id_list t_emp_id_list := t_emp_id_list(101, 102, 103);
BEGIN
    FORALL i IN 1..v_emp_id_list.COUNT
        UPDATE employees SET salary = salary * 1.1 WHERE employee_id = v_emp_id_list(i);
END;
/
```

### 🔹 Kết hợp BULK COLLECT + FORALL

💡 Tích hợp BULK COLLECT để lấy dữ liệu và FORALL để xử lý hàng loạt:

```sql
DECLARE
    TYPE t_emp_id_list IS TABLE OF employees.employee_id%TYPE;
    v_emp_id_list t_emp_id_list;
BEGIN
    -- Lấy danh sách employee_id của phòng ban 10
    SELECT employee_id BULK COLLECT INTO v_emp_id_list FROM employees WHERE department_id = 10;

    -- Cập nhật lương hàng loạt
    FORALL i IN 1..v_emp_id_list.COUNT
        UPDATE employees SET salary = salary * 1.1 WHERE employee_id = v_emp_id_list(i);
END;
/
```

### 🔹 Dùng BULK COLLECT với LIMIT

Nếu dữ liệu quá lớn, có thể dùng LIMIT để chia nhỏ các lần lấy dữ liệu.

```sql
DECLARE
    TYPE t_emp_list IS TABLE OF employees%ROWTYPE;
    v_emp_list t_emp_list;
    CURSOR c_emp IS SELECT * FROM employees WHERE department_id = 10;
BEGIN
    OPEN c_emp;
    LOOP
        FETCH c_emp BULK COLLECT INTO v_emp_list LIMIT 100; -- Lấy 100 dòng mỗi lần
        EXIT WHEN v_emp_list.COUNT = 0;

        FORALL i IN 1..v_emp_list.COUNT
            UPDATE employees SET salary = salary * 1.1 WHERE employee_id = v_emp_list(i).employee_id;
    END LOOP;
    CLOSE c_emp;
END;
/
```
