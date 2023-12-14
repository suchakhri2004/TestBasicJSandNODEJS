const express = require('express');
const app = express();
const port = 1402;

// การให้ Express ใช้งานไฟล์และโฟลเดอร์สำหรับ HTML, CSS, และอื่น ๆ
app.use(express.static('public'));

// สร้าง route สำหรับแสดงหน้า HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/homepage.html');
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
