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

###git push -u origin <tên nhánh>

⇒ đưa code lên repo remote

⇒ từ lần push code thứ 2 : git push

### Đưa file từ staging về lại working

git reset

git restore -S . (Đưa tất cả các file đang ở staging về working)

git restore -S <url file> (Chỉ đưa duy nhất file về working)

### git checkout <url file>

=> 1. Đưa 1 file đang đc chỉnh sửa về trạng thái trc đó

### branch

// dev => Kiểm thử QA và Dev (dev)
//staging ⇒ QA kiểm thử 1 lần (staging)
//production ⇒ end user (main/release)

git branch <tên nhánh>

⇒ tạo ra 1 nhánh mới
⇒ nhánh mới sẽ chứa toàn bộ code của nhánh đang đứng

git branch -a or git branch

⇒ liệt kê tất cả các branch đang có trong repo

git switch <tên nhánh>

⇒ chuyển qua nhánh <tên nhánh>

###git checkout <tên nhánh>

⇒ tương đương lệnh git switch

⇒ dùng để chuyển qua <tên nhánh>
