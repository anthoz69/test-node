# โครงสร้าง project

โครงสร้างโปรเจคล่าสุดจะใช้ express ในการทำโดยมีรูปแบบและรายละเอียดดังนี้

##### Project convention

***การตั้งชื่อไฟล์:***

1. `camelCase` สำหรับชื่อไฟล์, ชื่อ function, method เช่น `userController`, `getUserData`
2. `kebab-case` สำหรับ Folder name เช่น `user-login`, `admin-login`

***รูปแบบข้อความ Commit***

`<type>: คำอธิบาย`

เช่น

`feat: add new user profile`, `fix: user bug when change password`

`<type>`
1. feat: เพิ่มฟีเจอร์ใหม่
2. fix: แก้ไขข้อผิดพลาด
3. docs: การเปลี่ยนแปลงที่เกี่ยวข้องกับเอกสาร
4. style: การเปลี่ยนแปลงที่ไม่กระทบต่อโค้ด (เช่น การจัดรูปแบบโค้ด)
5. refactor: ปรับปรุงโครงสร้างโค้ดโดยไม่กระทบการทำงานของโปรแกรม
6. test: เพิ่มหรือแก้ไขเทส

##### project structure

รายละเอียดโครงสร้าง ภายใต้ src folder

`controllers/`

สำหรับเก็บ Code Controller ควบคุม request, response ก่อนส่งไปหา service เพื่อเขียน business logic ต่างๆ

`services/`

สำหรับเก็บ Code ที่ใช้ทำการคำนวณหรือบันทึกข้อมูลลงฐานข้อมูล โดย services นี้จะรวมไปถึงการบันทึกข้อมูลลงฐานข้อมูล ไม่ได้แยกออกเป็น model เนื่องจากโปรเจคไม่ใหญ่มากและใช้ ORM ช่วยจัดการฐานข้อมูล

`routes/`

จัดการเก็บข้อมูล route เช่น `userRoute.js` เพื่อใช้เพิ่ม route และเชื่อมกับ `controller`

`config/`

เก็บ code ที่เกี่ยวกับ config เช่น config app, config จาก env

`middleware/`

เก็บ code จัดการ middleware ต่างๆ

