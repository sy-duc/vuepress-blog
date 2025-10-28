---
title: Cải thiện hiệu năng Tesseract-OCR bằng Cache
---

# Cải thiện hiệu năng Tesseract-OCR bằng Cache

Trong nhiều ứng dụng, dữ liệu OCR lặp lại thường xuyên, khiến việc gọi Tesseract nhiều lần trở nên lãng phí.

Bài viết này giới thiệu cách áp dụng cache để lưu kết quả OCR, tránh xử lý lại ảnh trùng, từ đó cải thiện tốc độ, giảm tải CPU, và tối ưu hệ thống nhận diện văn bản.

[1. Giới thiệu](#1)

[2. Best Practices khi dùng cache cho OCR](#2)

[3. Triển khai cache trong OCR với Tesseract](#3)

<a name="1"></a>

## 📌 1. Giới thiệu

- OCR (Optical Character Recognition) với Tesseract là giải pháp phổ biến để trích xuất văn bản từ hình ảnh.

- Tuy nhiên, trong thực tế triển khai, đặc biệt ở các hệ thống xử lý ảnh tự động, bạn sẽ nhận ra một vấn đề: ảnh hoặc dữ liệu lặp lại rất nhiều.

- Ví dụ:

  - ✦ Hệ thống giám sát máy test trong sản xuất, màn hình hiển thị kết quả lặp đi lặp lại.

  - ✦ Scan form, biên lai, chứng từ với cùng một mẫu.

  - ✦ Nhận diện số serial hoặc mã máy chỉ thay đổi một vài ký tự.

- ⚠️ Trong những tình huống như vậy, nếu mỗi lần đều gửi ảnh vào Tesseract để OCR, hệ thống sẽ phải xử lý khối lượng công việc nặng nề, tốn CPU, và thời gian phản hồi chậm.

### 1️⃣ Giải pháp cache (bộ nhớ đệm)

- Nếu ảnh đã từng được nhận diện, ta có thể lưu lại kết quả.

- Khi gặp lại ảnh giống hệt, chỉ cần lấy kết quả từ cache thay vì chạy OCR lại.

#### ✅ Ưu điểm:

- ➀ Giảm số lần gọi Tesseract.

- ➁ Tăng tốc độ xử lý.

- ➂ Giảm tải CPU, tiết kiệm tài nguyên.

### 2️⃣ Cơ chế cache

- ➀ Một ảnh → một kết quả OCR.

- ➁ Ảnh được nhận diện → lưu kết quả vào cache.

- ➂ Khi gặp lại ảnh giống hệt → lấy từ cache thay vì OCR lại.

#### 🔥 Cách nhận diện ảnh trùng:

- Hash (MD5, SHA256) trên dữ liệu ảnh.

### 3️⃣ Các loại cache

- Có thể cache theo nhiều mức:

  - ❶ In-memory cache: Lưu vào RAM

    - ✔️ Tốc độ truy cập cực nhanh.
    - ✔️ Phù hợp khi cần OCR realtime.
    - ✔️ Không để lại file rác trên ổ cứng.
    - ❌ Mất cache khi restart process
    - ❌ Bị giới hạn dung lượng theo RAM (ví dụ vài trăm MB hoặc vài GB tùy server).

  - ❷ Disk cache: Lưu ra ổ cứng

    - ✔️ Dung lượng lớn, có thể lưu cache hàng chục GB.
    - ✔️ Cache bền vững: restart process/máy vẫn giữ được.
    - ✔️ Phù hợp cho dữ liệu OCR lặp lại nhiều ngày.
    - ❌ Chậm hơn RAM một chút.
    - ❌ Có thể gây hao mòn SSD nếu ghi/xóa liên tục.
    - ❌ Cần cơ chế dọn dẹp (TTL, LRU).

  - ❸ Kết hợp (Hybrid): Dùng memory cho ảnh mới nhất, disk cho ảnh lâu hơn.

### 4️⃣ Giới hạn số lượng cache

- ● Cache không nên “vô hạn”. Việc giới hạn số lượng cache giúp tránh việc ngốn hết RAM/ổ cứng và giữ cho hệ thống ổn định.

- ● Việc giới hạn số lượng cache sẽ tránh tình trạng phình ra và gây tốn bộ nhớ hoặc dung lượng ổ đĩa, nhất là khi ảnh OCR nhiều và kích thước lớn.

- ● Một số cách giới hạn hợp lý:

#### ❶ Giới hạn theo số lượng mục (entries)

- ✦ Chỉ giữ N ảnh/vùng gần nhất (ví dụ 500 hoặc 1000 mục).

- ✦ Khi cache đầy → xóa entry cũ nhất (LRU - Least Recently Used).

  - ✧ Có thể chọn chỉ xóa 1 entry cũ nhất hoặc nhiều entries cũ cùng lúc (ví dụ 20% entries cũ nhất).

- ✦ Dùng collections.OrderedDict hoặc thư viện functools.lru_cache (cho RAM) để tự động cơ chế LRU hoặc tự viết logic thủ công.

#### ❷ Giới hạn theo dung lượng

- ✦ Ví dụ tổng kích thước file cache không vượt quá 100MB.

- ✦ Khi vượt ngưỡng → xóa các file cũ nhất.

#### ❸ Giới hạn theo thời gian tồn tại (TTL)

- ✦ Mỗi entry cache chỉ tồn tại trong X phút/giờ (ví dụ 10 phút).

#### ❹ Kết hợp nhiều tiêu chí

- ✦ Ví dụ: giới hạn tối đa 1000 entry và TTL = 10 phút → vừa tránh đầy bộ nhớ, vừa đảm bảo dữ liệu không quá cũ.

<a name="2"></a>

## 📌 2. Best Practices khi dùng cache cho OCR

- Các chiến lược sử dụng cache hiểu quả:

### 1️⃣ Hash trên ảnh gốc hay sau tiền xử lý?

- Việc hash trên ảnh gốc hay ảnh đã qua tiền xử lý sẽ ảnh hưởng trực tiếp đến hiệu quả cache.

#### ❶ Hash trên ảnh gốc

- ✔️ Ưu điểm:

  - ✧ Dễ làm, chỉ cần đọc ảnh và băm ngay.

  - ✧ Không cần qua bước tiền xử lý → tối ưu hiệu năng.

- ❌ Nhược điểm:
  - ✧ Hai ảnh trông “giống nhau” nhưng chỉ khác rất nhỏ (ví dụ khác DPI, khác một pixel do noise) → hash sẽ khác hoàn toàn → cache không hit.

#### ❷ Hash sau tiền xử lý

- ✔️ Ưu điểm:

  - ✧ Loại bỏ sự khác biệt không quan trọng (noise, độ sáng, DPI…) → cache hit cao hơn.

- ❌ Nhược điểm:

  - ✧ Tốn thêm thời gian tiền xử lý trước khi hash.

  - ✧ Nếu thay đổi thuật toán xử lý (ví dụ threshold khác) → hash khác → cache cũ không dùng lại được.

#### 💡 Kinh nghiệm:

- ✦ Nếu ảnh ổn định, ít nhiễu → hash trên ảnh gốc để tiết kiệm công sức.

- ✦ Nếu chỉ OCR text nhỏ, fixed-layout (như máy test, form scan) → nên hash trên ảnh đã tiền xử lý (grayscale + threshold).

### 2️⃣ Chọn RAM cache hay Disk cache?

#### ❶ RAM cache

- Dùng khi:

  - ✧ Ảnh OCR nhỏ/gọn.

  - ✧ Ứng dụng yêu cầu tốc độ cao.

  - ✧ Cache chỉ cần sống trong session (ví dụ một service OCR chạy vài giờ rồi reset).

#### ❷ Disk cache

- Dùng khi:

  - ✧ OCR ảnh lớn, nhiều file, dữ liệu lặp lại qua nhiều ngày.

  - ✧ Hệ thống chạy dài hạn, cần cache bền vững.

  - ✧ Ưu tiên tiết kiệm RAM.

#### ❸ Kết hợp Hybrid (RAM + Disk)

- ✧ Đây là lựa chọn cân bằng nhất cho hầu hết các hệ thống OCR production.

- ✧ Thư viện như diskcache hỗ trợ sẵn cơ chế này.

#### ⚠️ Lưu ý:

- Trường hợp OCR đang dùng multiprocessing, mỗi worker process sẽ có một instance ocr_cache riêng biệt.

  ```python
  ocr_cache = OCRCacheManager(max_size=1000)
  ```

  - Process 1 set cache → Process 2 không thấy cache của Process 1. Đó là lý do khi dùng RAM cache sẽ không chia sẻ dữ liệu đã lưu trước đó trong cache giữa các process được cho nhau.

- 👉 **Giải pháp:** Shared cache giữa processes

  - ➀ Option A - Redis Cache / Memcached:

    - ✦ Nếu hệ thống OCR phân tán hoặc nhiều máy chạy song song, dùng Redis hoặc Memcached để lưu cache.

    - ✔️ Ưu điểm: Rất nhanh, hỗ trợ multi-process và multi-machine.

    - ❌ Nhược điểm: Phải cài thêm dịch vụ.

  - ➁ Option B - File-based shared cache (disk cache):

    - ✦ Mỗi khi OCR xong, lưu kết quả vào file .json hoặc .pickle trên disk, đặt key theo hash ảnh.

    - ✦ Khi process khác OCR cùng ảnh, nó sẽ đọc file cache thay vì OCR lại.

  - 💡 **Kinh nghiệm**:

    - ✦ Nếu OCR chỉ chạy trên một máy, và file ảnh nhỏ → **diskcache** là lựa chọn ngon: dễ triển khai, tự động thread-safe, và không bị mất cache khi process chết.

      - ✔️ Là Hybrid cache (RAM + Disk), nhưng thiên về Disk cache có tăng tốc RAM.
      - ✔️ Chỉ cần cài Python package, không cần service bên ngoài.
      - ✔️ Dễ triển khai hơn, không phải lo cấu hình network, user, auth như Redis.
      - ✔️ Có thể tự động xóa entries cũ khi vượt quá size_limit.
      - ✔️ Có cơ chế mặc định là Least Recently Used (LRU), tức là key nào lâu không được truy cập sẽ bị xóa trước.

    - ✦ Nếu OCR chạy phân tán nhiều máy → dùng Redis.

### 3️⃣ Nên giới hạn số lượng cache theo cách nào?

- Cache không nên “vô hạn”. Việc giới hạn số lượng cache giúp tránh việc ngốn hết RAM/ổ cứng và giữ cho hệ thống ổn định.

- ✔️ Nếu dùng RAM cache → Giới hạn theo số lượng mục (entries)

- ✔️ Nếu dùng Disk cache → Giới hạn theo dung lượng bằng (size_limit) hoặc TTL (tự động xoá cache cũ sau X ngày).

- ✔️ Nếu dữ liệu OCR thay đổi theo ngày/phiên bản → Giới hạn theo TTL.

#### ⚠️ Kinh nghiệm:

- ✦ Nên log lại cache hit/miss để điều chỉnh.

- ✦ Ví dụ log thấy đa số truy vấn không hit cache → cache không còn “hiệu quả”. Lúc này nên điều chỉnh giới hạn cache để tránh lưu thừa.

### 4️⃣ Triển khai cache hiểu quả trong project?

- Nên tạo riêng `cache_manager.py` để quản lý cache vì những lý do sau:

  - ✔️ Single Responsibility: Phân tán, `cache_manager.py` sẽ chỉ tập trung vào cache. OCR sẽ tập trung file khác (ví dụ: `ocr_worker.py`).

  - ✔️ Reusable: Có thể dùng cache cho các module khác.

  - ✔️ Testable: Dễ unit test cache logic riêng biệt.

  - ✔️ Maintainable: Dễ modify cache strategy mà không ảnh hưởng OCR logic.

  - ✔️ Salable: Dễ mở rộng cache (Redis, file-based cache...).

<a name="3"></a>

## 📌 3. Triển khai cache trong OCR với Tesseract

### 1️⃣ Tạo class quản lý cache

#### ❶ Ram cache

- ```python
  # cache_manager.py
  from collections import OrderedDict

  class CacheManager:
      def __init__(self, max_size=500):
          self.cache = OrderedDict()
          self.max_size = max_size
  ```

#### ❷ Disk cache

- Thêm logic load cache từ file JSON và lưu cache vài file khi tắt tool.

  ```python
  # cache_manager.py
  import os
  import json
  from collections import OrderedDict

  class CacheManager:
      def __init__(self, cache_file="ocr_cache.json", max_items=500):
          self.cache_file = cache_file
          self.max_size = max_items
          self.cache = OrderedDict() # Lưu kết quả OCR

          self._load_cache()

      def _load_cache(self):
          """Load cache từ file JSON."""
          if os.path.exists(self.cache_file):
              try:
                  with open(self.cache_file, "r", encoding="utf-8") as f:
                      data = json.load(f)
                  # Load theo đúng thứ tự FIFO
                  self.cache = OrderedDict(data)
              except Exception as e:
                  print(f"[CacheManager] Lỗi khi load cache: {e}")
                  self.cache = OrderedDict()

      def save_cache(self):
          """Lưu cache ra file JSON."""
          try:
              with open(self.cache_file, "w", encoding="utf-8") as f:
                  json.dump(self.cache, f, ensure_ascii=False)
          except Exception as e:
              print(f"[CacheManager] Lỗi khi lưu cache: {e}")
  ```

### 2️⃣ Sinh key duy nhất cho ảnh

- Hash nội dung ảnh sau preprocess (MD5, SHA1).

  ```python
  import hashlib

  def _hash_image_bytes(self, img) -> str:
          return hashlib.md5(img.tobytes()).hexdigest()

  def _get_cache_key(self, img, extra_params: Tuple = None) -> str:
      img_hash = self._hash_image_bytes(img)
      # Nếu cần gắn thêm tham số vào key để phân biệt các nhóm
      if extra_params:
          params_str = "_".join(map(str, extra_params))
          return f"{img_hash}_{params_str}"
      return img_hash
  ```

### 3️⃣ Tạo các hàm get và set kết quả OCR theo key

- Cache được lưu dưới dạng dictionary (hash → text_result).

```python
def get(self, img):
    """Trả về kết quả OCR từ cache (nếu có)"""
    key = self._get_cache_key(img)
    # Nếu key đã tồn tại thì move lên đầu để đánh dấu "vừa dùng"
    if key in self.cache:
        self.cache.move_to_end(key, last=False)
        return self.cache[key]
    return None

def set(self, image, ocr_result: str):
    """Lưu kết quả OCR vào cache."""
    key = self._get_cache_key(img)

    # Nếu key đã tồn tại thì cập nhật & move lên đầu
    if key in self.cache:
        self.cache.move_to_end(key, last=False)
        self.cache[key] = ocr_result
        return

    # Nếu cache đầy → xóa phần tử cuối (ít dùng nhất)
    if len(self.cache) >= self.max_size:
        self.cache.popitem(last=True)

    # Thêm entry mới vào đầu nếu key chưa tồn tại
    self.cache[key] = ocr_result
    self.cache.move_to_end(key, last=False)
```

### 4️⃣ Dọn cache

- Dùng khi:

  - ➀ Khi muốn giải phóng RAM thủ công.

  - ➁ Khi thay đổi cấu hình OCR.

  - ➂ Khi nhận tín hiệu reset từ tool

  ```python
  def clear(self):
      """Xóa toàn bộ cache."""
      self.cache.clear()
  ```

### 5️⃣ Sử dụng trong OCR

- ```python
  # ocr_worker.py
  from cache_manager import OCRCacheManager

  # Khởi tạo cache (giới hạn 500 entry)
  ocr_cache = OCRCacheManager(max_size=500)

  def ocr_image(img):
      # Check cache
      result = ocr_cache.get(img)
      if result is not None:
          print("✅ OCR từ cache")
          return result

      # OCR với Tesseract
      result = run_tesseract(img)

      # Lưu vào cache
      ocr_cache.set(img, result)

      return result

  # Nếu dùng Disk cache, lưu cache vào file JSON khi tắt tool
  ocr_cache.save_cache()
  ```

### 🔥 Ví dụ kết hợp Hybrid (RAM + Disk) với thư viện diskcache

#### ❶ Cài diskcache

- ```sh
  pip install diskcache
  ```

#### ❷ Triển khai trong `cache_manager.py`

```python
import os
import hashlib
from typing import Optional
import diskcache as dc

from utils.common import get_base_dir
from utils.logger import setup_logger

logger = setup_logger()

class OCRCacheManager:
    def __init__(self, max_size: int = 10):
        base_dir = get_base_dir()
        cache_path = os.path.join(base_dir, "ocr_cache")
        os.makedirs(cache_path, exist_ok=True)
        self.cache = dc.Cache(
            directory=cache_path,
            size_limit=max_size * 1024 * 1024,
            timeout=1.0
        )


    def _get_image_hash(self, img) -> str:
        return hashlib.md5(img.tobytes()).hexdigest()


    def _get_cache_key(self, img, stage) -> str:
        img_hash = self._get_image_hash(img)
        return f"{stage}_{img_hash}"


    def get(self, img, stage) -> Optional[str]:
        key = self._get_cache_key(img, stage)

        try:
            result = self.cache.get(key)
            if result is not None:
                return result
            return None

        except Exception as e:
            logger.warning(f"Cache get error: {e}")
            return None


    def set(self, img, stage: str, ocr_result: str):
        key = self._get_cache_key(img, stage)

        try:
            self.cache.set(key, ocr_result, expire=None)

        except Exception as e:
            logger.warning(f"Cache set error: {e}")


    def clear(self):
        try:
            self.cache.clear()
        except Exception as e:
            logger.warning(f"Cache clear error: {e}")


    def close(self):
        try:
            self.cache.close()
        except Exception as e:
            logger.warning(f"Cache close error: {e}")


    def __del__(self):
        self.close()
```

#### ❸ Giải thích

- ✦ Triển khai diskcache bản chất cách dùng gần như không đổi.

- ✦ Khác biệt lớn nhất chúng ta thấy được nằm ở:

  - ✧ DiskCache tự quản lý eviction policy (xóa bớt entries cũ khi vượt quá size_limit hoặc cull_limit).

  - ✧ DiskCache lo giùm chuyện dọn rác, lock, share dữ liệu giữa processes.
