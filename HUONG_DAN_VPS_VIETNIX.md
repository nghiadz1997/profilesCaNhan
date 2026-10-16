# HƯỚNG DẪN ĐẨY TRANG PROFILE LÊN TÊN MIỀN & VPS VIETNIX

Để trang cá nhân của bạn chạy chính thức trên tên miền riêng với VPS của Vietnix, bạn chỉ cần thực hiện 2 bước chính dưới đây:

---

## 📦 THÔNG TIN BỘ NGUỒN ĐÃ ĐƯỢC ĐÓNG GÓI SẴN

Tôi đã tạo sẵn file nén toàn bộ mã nguồn tại:
👉 **`D:\TrangProfiles\TrangProfiles.zip`** (Dung lượng ~16 MB)

Bên trong gồm đầy đủ:
- `index.html` (Mã nguồn trang chính)
- `avatar.jpg` (Ảnh chân dung cá nhân)
- `music.mp3` (Nhạc nền Lofi)
- Thư mục `images/` (12 hình ảnh hoạt động thực tế)

---

## BƯỚC 1: TRỎ TÊN MIỀN VỀ ĐỊA CHỈ IP VPS CỦA VIETNIX

1. Đăng nhập vào trang quản lý nơi bạn đã mua tên miền (Ví dụ: Trang khách hàng Vietnix, iNET, PA Việt Nam, Mắt Bão, Cloudflare...).
2. Tìm đến mục **Quản lý DNS (DNS Management)** của tên miền bạn muốn dùng (ví dụ: `nguyentrongnghia.vn` hoặc `trongnghia.com`).
3. Thêm **2 bản ghi (Records)** sau:

| Loại bản ghi (Type) | Tên bản ghi (Host / Name) | Giá trị (Value / IP Address) | TTL |
| :---: | :---: | :---: | :---: |
| **A** | `@` | **IP VPS của bạn** *(ví dụ: `103.xxx.xxx.xxx` do Vietnix cấp)* | Tự động / 300 |
| **A** | `www` | **IP VPS của bạn** *(ví dụ: `103.xxx.xxx.xxx`)* | Tự động / 300 |

*(Sau khi lưu, chờ khoảng 5 - 15 phút để tên miền cập nhật IP mới).*

---

## BƯỚC 2: TẢI BỘ CODE LÊN VPS VIETNIX

Chọn 1 trong các cách dưới đây tùy theo loại VPS Vietnix bạn đang dùng:

---

### CÁCH 1: NẾU VPS CÓ CÀI PANEL (aaPanel / CyberPanel / cPanel) - [KHUYÊN DÙNG, DỄ NHẤT]

Đa phần VPS Vietnix khách hàng thường chọn cài sẵn **aaPanel** hoặc **CyberPanel** miễn phí:

1. **Đăng nhập vào trang quản trị Panel** của bạn (đường dẫn dạng: `http://IP_VPS:8888` đối với aaPanel, hoặc `http://IP_VPS:8090` đối với CyberPanel).
2. Vào mục **Website** -> Bấm **Add Site** (Thêm trang web):
   - Nhập tên miền của bạn (ví dụ: `nguyentrongnghia.vn` và `www.nguyentrongnghia.vn`).
   - Chọn loại PHP: Static / HTML hoặc PHP bất kỳ.
   - Bấm **Submit** để tạo.
3. Vào mục **Files (Quản lý tệp)**:
   - Mở thư mục gốc của website vừa tạo (đường dẫn thường là: `/www/wwwroot/nguyentrongnghia.vn`).
   - Xóa các file mặc định (như `404.html`, `index.html` mẫu của panel).
   - Bấm nút **Upload** -> Chọn file **`D:\TrangProfiles\TrangProfiles.zip`** từ máy tính của bạn tải lên.
   - Nhấp chuột phải vào file `TrangProfiles.zip` trên giao diện Panel -> Chọn **Unzip (Giải nén)**.
4. **Bật HTTPS / SSL miễn phí**:
   - Quay lại mục **Website** -> Bấm vào tên miền của bạn -> Chọn tab **SSL** -> Chọn **Let's Encrypt** -> Tích chọn tên miền và bấm **Apply**.
   - Gạt nút **Force HTTPS** (Bắt buộc dùng HTTPS) sang Bật.

---

### CÁCH 2: DÙNG PHẦN MỀM WINSCP HOẶC FILEZILLA (TRỰC QUAN BẰNG KÉO THẢ)

Nếu VPS của bạn chạy Linux bình thường (Ubuntu/Debian/CentOS) đã cài sẵn Web Server (Nginx hoặc Apache):

1. Tải và cài đặt phần mềm miễn phí [WinSCP](https://winscp.net/) hoặc [FileZilla](https://filezilla-project.org/).
2. Mở WinSCP / FileZilla và kết nối qua giao thức **SFTP**:
   - **Host Name / Máy chủ**: Điền `Địa chỉ IP VPS`
   - **Port / Cổng**: `22`
   - **User Name**: `root`
   - **Password**: *Mật khẩu VPS được Vietnix gửi trong Email khi đăng ký*
3. Bấm **Login / Kết nối**.
4. Ở cột bên phải (VPS):
   - Mở thư mục chứa web (thông thường là: `/var/www/html`).
   - Xóa file `index.nginx-debian.html` hoặc `index.html` mặc định cũ đi.
5. Ở cột bên trái (Máy tính của bạn):
   - Tìm đến thư mục `D:\TrangProfiles\`.
   - Chọn toàn bộ các file: `index.html`, `avatar.jpg`, `music.mp3`, thư mục `images/`.
   - Kéo và thả sang cột bên phải (`/var/www/html`).

---

### CÁCH 3: CẤU HÌNH VPS UBUNTU MỚI TINH BẰNG DÒNG LỆNH (TERMINAL)

Nếu VPS Vietnix của bạn là Linux Ubuntu mới tinh chưa cài Web server:

1. Mở cửa sổ **PowerShell** hoặc **Terminal** trên máy tính của bạn và gõ:
   ```bash
   ssh root@IP_VPS_CỦA_BẠN
   ```
   *(Nhập mật khẩu VPS khi được hỏi).*

2. Cài đặt Web Server Nginx & Unzip siêu nhẹ:
   ```bash
   apt update && apt install -y nginx unzip certbot python3-certbot-nginx
   ```

3. Tải file `TrangProfiles.zip` từ máy lên VPS (chạy lệnh này trên PowerShell máy tính):
   ```powershell
   scp D:\TrangProfiles\TrangProfiles.zip root@IP_VPS_CỦA_BẠN:/var/www/html/
   ```

4. Trên màn hình SSH của VPS, giải nén:
   ```bash
   cd /var/www/html
   rm -f index.nginx-debian.html
   unzip -o TrangProfiles.zip
   chown -R www-data:www-data /var/www/html
   chmod -R 755 /var/www/html
   ```

5. Cấp chứng chỉ SSL bảo mật HTTPS cho tên miền:
   ```bash
   certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```
   *(Thay `yourdomain.com` bằng tên miền thật của bạn, làm theo hướng dẫn trên màn hình và chọn tự động Redirect sang HTTPS).*

---

🎉 **XONG!** Bây giờ bạn chỉ cần mở trình duyệt và gõ tên miền của mình để tận hưởng trang profile cá nhân đẳng cấp!
