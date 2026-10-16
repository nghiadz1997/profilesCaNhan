const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

let keyPath = path.resolve(__dirname, 'service_account.json');
if (!fs.existsSync(keyPath)) {
  keyPath = path.resolve(__dirname, 'gen-lang-client-0874202274-8f19de727392.json');
}

const keyData = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

async function indexUrls() {
  const targetUrls = [
    'https://www.trongnghia.pro.vn/',
    'https://trongnghia.pro.vn/'
  ];

  try {
    console.log(`🔑 Đang xác thực tài khoản: ${keyData.client_email}...`);
    
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/indexing']
    });

    const authClient = await auth.getClient();
    console.log('✅ Xác thực tài khoản thành công!');

    const indexing = google.indexing({ version: 'v3', auth: authClient });

    for (const url of targetUrls) {
      console.log(`\n🚀 Đang gửi yêu cầu lập chỉ mục nhanh cho: ${url}`);
      try {
        const response = await indexing.urlNotifications.publish({
          requestBody: {
            url: url,
            type: 'URL_UPDATED'
          }
        });
        console.log(`✅ Bắn API thành công cho: ${url}`);
        console.log('Phản hồi từ Google:', JSON.stringify(response.data, null, 2));
      } catch (err) {
        console.error(`❌ Lỗi gửi ${url}:`, err.message);
        if (err.code === 403 || (err.response && err.response.status === 403)) {
          console.log('\n💡 LƯU Ý BẮT BUỘC ĐỂ GOOGLE CHẤP NHẬN BẮN API:');
          console.log(`1. Mở Google Search Console: https://search.google.com/search-console`);
          console.log(`2. Chọn trang web của bạn -> Vào "Cài đặt" (Settings) -> "Người dùng và quyền" (Users and permissions).`);
          console.log(`3. Nhấn "Thêm người dùng" (Add user).`);
          console.log(`4. Nhập email: ${keyData.client_email}`);
          console.log(`5. Chọn Quyền: "Chủ sở hữu" (Owner).`);
          console.log(`Sau đó chạy lại "node instant_index.js" là Google nhận lệnh ngay!`);
        }
      }
    }
  } catch (error) {
    console.error('❌ Lỗi xác thực Google:', error.message);
  }
}

indexUrls();
