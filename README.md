**Những vấn đề gặp phải khi làm ci/cd Docker**

1.map port nhưng port đó đã bị chiếm dụng

    cách sửa: phải đổi port khác 

2.Khi viết docker-compose.yml không chạy được các step

    lỗi 1: do chưa khai báo biến môi trường env:DOCKER_USERNAME và DOCKER_TOKEN . 
    Cách sửa : phải tạo secret trên github sau đó khai báo trong file docker-compose.yml

    lỗi 2: do chưa bật self-hosted-runner.
    cách sửa:cd đến thư mục actions-runner +chạy lệnh .\run.cmd (nếu dùng window)

    lỗi 3: chưa bật docker
    cách sửa: bật docker lên

    lỗi 4: Chưa push hết code lên
    cách sửa : đảm bảo đã push thư mục chứa dockerfile lên

    lỗi 5: Lệnh Run docker-compose down || true bị lỗi do dùng window
    cách sửa: sửa thành run: docker-compose down; exit 0

    lỗi 6: Chưa có mysql và redis khi build
    cách sửa : thêm redis và mysql vào docker-compose.yml