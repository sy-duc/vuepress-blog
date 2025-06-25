---
title: Vấn đề khi sử dụng PL/SQL thực tế
summary: "Tối ưu hiệu suất và vấn đề bảo mật trong PL/SQL luôn là các chủ đề quan trọng khi sử dụng PL/SQL trong thực tế."
date: "2025-06-15"
image: "/vuepress-blog/images/posts/plsql.png"
category: "BACK-END"
tags:
  - oracle
  - training-plsql
---

# Vấn đề khi sử dụng PL/SQL thực tế (Expert)

[1. PL/SQL Performance Tuning](#1)

[2. Bảo mật trong PL/SQL](#2)

<a name="1"></a>

## 📌 1. PL/SQL Performance Tuning

Tối ưu hiệu suất PL/SQL rất quan trọng để giảm thời gian chạy, giảm tải hệ thống và cải thiện trải nghiệm người dùng.

Dưới đây là các kỹ thuật tối ưu quan trọng:

### 🔹 Sử dụng BULK COLLECT & FORALL thay vì vòng lặp FOR/LOOP

❌ Khi chạy SELECT INTO hoặc INSERT/UPDATE/DELETE từng dòng trong vòng lặp, PL/SQL phải liên tục gọi SQL Engine, gây chậm.

✔️ Dùng BULK COLLECT (truy vấn nhanh hơn) và FORALL (ghi dữ liệu hàng loạt) sẽ chỉ gọi SQL Engine 1 lần.

### 🔹 Dùng Index hiệu quả

❌ Truy vấn WHERE mà không có Index sẽ quét toàn bộ bảng (Full Table Scan), làm giảm hiệu suất.

✔️ Thêm Index vào cột thường xuyên tìm kiếm, JOIN hoặc ORDER BY.

### 🔹 Tránh sử dụng EXCEPTION không cần thiết

❌ EXCEPTION làm chậm chương trình nếu không xử lý hợp lý.

✔️ Kiểm tra điều kiện trước khi thực hiện thao tác có khả năng lỗi. Mục đích không để chương trình phải bắt lỗi không cần thiết.

Ví dụ:

```sql
DECLARE
    v_count NUMBER;
BEGIN
    SELECT COUNT(*) INTO v_count FROM employees WHERE employee_id = 101;

    IF v_count = 0 THEN
        INSERT INTO employees (employee_id, first_name) VALUES (101, 'John');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Employee ID đã tồn tại!');
    END IF;
END;
/
```

### 🔹 Hạn chế sử dụng Triggers khi không cần thiết

❌ Triggers chạy ngầm mỗi khi có thao tác INSERT/UPDATE/DELETE, có thể gây chậm.

✔️ Nếu logic trigger có thể được thực hiện trong Stored Procedure, hãy dùng Stored Procedure thay vì Trigger.

<a name="2"></a>

## 📌 2. Bảo mật trong PL/SQL

Bảo mật trong PL/SQL rất quan trọng để bảo vệ dữ liệu, kiểm soát quyền truy cập và ngăn chặn các cuộc tấn công như SQL Injection.

Dưới đây là các khía cạnh quan trọng về bảo mật trong PL/SQL:

### 🔹 Kiểm soát quyền truy cập với GRANT và REVOKE

- Không phải người dùng nào cũng nên có toàn quyền trên database.

- Nếu ai cũng có quyền SELECT, INSERT, UPDATE, DELETE, dữ liệu có thể bị lộ hoặc chỉnh sửa ngoài ý muốn.

💡 Sử dụng GRANT (cấp quyền) và REVOKE (thu hồi quyền) giúp kiểm soát quyền truy cập của người dùng.

#### 1️⃣ Cấp quyền (GRANT)

```sql
GRANT SELECT, INSERT ON employees TO hr_user;
GRANT EXECUTE ON update_salary TO hr_user;
```

✅ hr_user có thể SELECT, INSERT vào bảng employees và gọi procedure update_salary

#### 2️⃣ Thu hồi quyền (REVOKE)

```sql
REVOKE INSERT ON employees FROM hr_user;
```

✅ hr_user bị mất quyền INSERT trên bảng employees.

### 🔹 DEFINER vs INVOKER RIGHTS

Mặc định, khi một user gọi Procedure hoặc Function, nó sẽ chạy với quyền của người tạo ra nó (DEFINER).

➡️ Nếu admin_user tạo một PROCEDURE get_salary, thì bất kỳ ai gọi nó cũng có thể xem lương của nhân viên, ngay cả khi họ không có quyền xem bảng employees.

💡 Sử dụng AUTHID CURRENT_USER nếu muốn Procedure chạy theo quyền của người gọi (INVOKER).

```sql
CREATE OR REPLACE PROCEDURE get_salary AUTHID CURRENT_USER IS
    v_salary NUMBER;
BEGIN
    SELECT salary INTO v_salary FROM employees WHERE employee_id = 101;
    DBMS_OUTPUT.PUT_LINE('Salary: ' || v_salary);
END;
/
```

### 🔹 Kiểm soát truy cập bằng Virtual Private Database (VPD)

Một số người dùng chỉ nên thấy một phần dữ liệu chứ không phải toàn bộ bảng.

➡️ Dùng VPD (Virtual Private Database) sẽ giúp lọc dữ liệu tự động.

🔍 Ví dụ: Chỉ cho phép nhân viên thấy dữ liệu của chính họ

```sql
BEGIN
    DBMS_RLS.ADD_POLICY (
        object_schema   => 'HR',
        object_name     => 'EMPLOYEES',
        policy_name     => 'EMPLOYEE_FILTER',
        function_schema => 'HR',
        policy_function => 'emp_filter',
        statement_types => 'SELECT'
    );
END;
/
```
