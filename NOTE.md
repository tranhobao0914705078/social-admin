- Components: các thành phần dùng chung
- Store: thao tác với redux
- service: thao tác với API
- Pages: các trang hiển thị trên màn hình
- Tạo nhánh git hub
    1. Tạo 1 respo trên git
    2. git remote add origin https://github.com/tranhobao0914705078/social-admin.git
    3. git branch -M main
    4. git push -u origin main
-push code branch
    1. git checkout main
    2. git add .
    3. git commit -m ""
    4. git push --set-upstream origin ...
- Tạo nhánh cho phần mới ấn vào phần góc dưới bên trái màn hình và chọn new branch
- Thư viện chứa middleware để làm việc với action async Redux Thunk, Redux Saga
- Reducer là phần tương tác với store nhận state cũ + action => state mới