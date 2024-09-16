## Tạo repository (repo)

git init

⇒ Nhánh chính:master

### git init -b main

⇒ Tạo repo local vs nhánh chính có tên main

## git remote add origin + <url repo>

⇒Liên kết repo local vs repo remote

## Ko đưa thư mực node_modules lên repo remote

=> Node_modueles chiếm dung lượng rất lớn
=> Node_modules có thể cài lại thông qua câu lệnh : npm i

### file .gitignore quy định những thư mục hay file ko đc phép đẩy lên repo remote

=> .gitignore nằm ở thư mục root

=> .gitignore nằm ở thư mục root

=> Kiểm tra sự thay đổi của các file trong dự án

### git add . => dùng để thêm tất cả các file ở trong thư mực hiện tại vào trong staging

### git add -A => dùng để thêm tất cả các file ở trong dự án vào trong staging

### git add <đường dẫn file> => Chỉ thêm file cụ thể vào trong staging

### working directory (file màu đỏ)

### staging (file màu xanh)

=> lúc này file sẵn sàng để đưa lên repo remote

### config git ()

### git config --global user.name "name"

### git config --global user.email "abc@gmail.com"

### git commit -m “message”

⇒ dùng để gắn message vào trong những file đang ở staging đc phép đưa lên repo remote
⇒ mỗi commit có một mã sha (id)

### git log

⇒ kiểm tra lịch sử commit
