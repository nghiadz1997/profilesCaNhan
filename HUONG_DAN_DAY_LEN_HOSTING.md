# 🌊 HƯỚNG DẪN ĐẨY TRANG PROFILE LÊN HOSTING & GẮN TÊN MIỀN RIÊNG

Trang Profile cá nhân của bạn đã được thiết kế hoàn thiện theo tông màu **Luxury Ocean Blue (Xanh đại dương sang trọng)**, tích hợp:
- **Ảnh đại diện Avatar** với khung viền LED xoay phát sáng + tích xanh VIP.
- **Trình phát nhạc Lofi thư giãn** (Vinyl đĩa than xoay tròn, sóng âm equalizer, đổi bài tự động).
- **Hiệu ứng hạt đại dương tương tác (Canvas Particles)** chuyển động mượt mà.
- **Đầy đủ nội dung**: Giới thiệu, Kinh nghiệm, Học vấn, Kỹ năng, Dự án, Nút Zalo, Số điện thoại, Email.

Dưới đây là 3 cách dễ nhất và hoàn toàn **MIỄN PHÍ** để đưa website lên mạng và gắn tên miền riêng của bạn.

---

## 🚀 CÁCH 1: DÙNG VERCEL (Khuyên dùng - Nhanh nhất, 2 phút là xong)
*Vercel là nền tảng máy chủ đám mây siêu tốc độ, miễn phí trọn đời, tự động cấp chứng chỉ bảo mật HTTPS/SSL xanh mướt và gắn tên miền cực kỳ đơn giản.*

### Bước 1: Đăng nhập Vercel
1. Truy cập [https://vercel.com](https://vercel.com).
2. Chọn **Sign Up** (hoặc **Log In**) bằng tài khoản **GitHub** hoặc **Email**.

### Bước 2: Tải thư mục web lên
- **Cách kéo thả (Không cần gõ lệnh)**:
  1. Trên bảng điều khiển Vercel, chọn **Add New...** -> **Project**.
  2. Kéo thả nguyên cả thư mục `D:\TrangProfiles` vào ô tải lên.
  3. Đặt tên Project (ví dụ: `nguyen-trong-nghia`) rồi nhấn nút **Deploy**.
  4. Sau 15 giây, website của bạn đã online với đường link miễn phí dạng `nguyen-trong-nghia.vercel.app`!

### Bước 3: Gắn tên miền riêng của bạn vào Vercel
1. Trong màn hình Project của Vercel, chọn tab **Settings** -> **Domains**.
2. Nhập tên miền bạn đã mua (Ví dụ: `trongnghia.vn` hoặc `nguyentrongnghia.com`) rồi bấm **Add**.
3. Vercel sẽ hiển thị 2 bản ghi DNS cần trỏ:
   - **Bản ghi A (Apex domain)**:
     - Tên (Host / Name): `@`
     - Giá trị (Value / Points to): `76.76.21.21`
   - **Bản ghi CNAME (Subdomain www)**:
     - Tên (Host / Name): `www`
     - Giá trị (Value / Points to): `cname.vercel-dns.com`
4. Bạn đăng nhập vào nơi bạn mua tên miền (Mắt Bão, PA Việt Nam, Tenten, iNET, Cloudflare, Namecheap,...), vào mục **Quản lý DNS** và thêm đúng 2 dòng trên.
5. Quay lại Vercel chờ 1 - 5 phút để hệ thống xác thực. Khi hiện dấu tích xanh là tên miền của bạn đã chạy chính thức!

---

## 🌐 CÁCH 2: DÙNG GITHUB PAGES (Dành cho Dân IT)
*Máy tính của bạn đã cấu hình sẵn Git (`TrongNghia`). Bạn có thể đẩy trực tiếp lên GitHub.*

### Bước 1: Tạo Repository mới trên GitHub
1. Vào [https://github.com/new](https://github.com/new).
2. Tạo một repository mới tên là `trang-profile` (chọn Public).

### Bước 2: Chạy lệnh đẩy code từ Terminal
Mở PowerShell trong thư mục `D:\TrangProfiles` và chạy 2 dòng lệnh sau (thay `TrongNghia` bằng username GitHub thực tế của bạn nếu khác):
```powershell
git remote add origin https://github.com/TrongNghia/trang-profile.git
git push -u origin main
```

### Bước 3: Bật GitHub Pages & Gắn tên miền
1. Trên GitHub repo, vào **Settings** -> **Pages**.
2. Tại mục **Build and deployment** -> **Branch**, chọn nhánh `main` và thư mục `/ (root)` rồi bấm **Save**.
3. Tại ô **Custom domain**, nhập tên miền riêng của bạn và bấm **Save**.
4. Trỏ DNS của tên miền về GitHub Pages:
   - Record A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Record CNAME: `www` trỏ về `trongnghia.github.io`

---

## ⚡ CÁCH 3: DÙNG CLOUDFLARE PAGES / NETLIFY (Kéo thả siêu tốc)
1. Đăng ký tài khoản miễn phí tại [netlify.com](https://www.netlify.com) hoặc [pages.cloudflare.com](https://pages.cloudflare.com).
2. Kéo thả thư mục `D:\TrangProfiles` vào mục **Deploy manually**.
3. Sau 10 giây website online ngay lập tức.
4. Vào mục **Domain Management** -> Nhập tên miền riêng và làm theo hướng dẫn trỏ DNS.

---

## 💡 MẸO TÙY BIẾN NHANH DÀNH CHO BẠN:
1. **Thay đổi ảnh đại diện cá nhân của bạn:**
   - Chỉ cần copy ảnh chân dung đẹp nhất của bạn, đổi tên thành `avatar.jpg` và chép đè vào thư mục `D:\TrangProfiles\avatar.jpg`. Website sẽ tự động cập nhật ngay lập tức!
2. **Thay đổi bài hát nền yêu thích:**
   - Tải file bài hát MP3 bất kỳ bạn thích, đổi tên thành `music.mp3` và dán đè vào `D:\TrangProfiles\music.mp3`.
