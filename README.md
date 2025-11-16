# SAP-MRBS-Capstone-Fiori
SAP490-G14: SAP Meeting Room Booking System - Fiori

# Hướng dẫn sử dụng Launchpad Local

Dự án này sẽ chạy Fiori Launchpad trên máy local, sử dụng **Express** để proxy các request tới SAP server. File `index.js` sẽ chạy server.

## Cấu trúc dự án

- **/appconfig/fioriSandboxConfig.json**: Chứa cấu hình cho launchpad.
- **/apps-dev**: Chứa các project đang trong quá trình phát triển. Việc coding và development sẽ diễn ra ở đây. Khi hoàn thành, chạy `npm run build` để build project.
- **/apps-build**: Chứa các bản build của apps để chạy từ launchpad. Các bản build từ `/apps-dev` sẽ được chuyển vào đây. **Không chỉnh sửa thư mục này.**

## Chạy Launchpad local

1. Cài đặt dự án:  
```bash
npm install
```
2. Chạy launchpad:
```bash
npm start
```

## Phát triển ứng dụng 

Vào project muốn code trong **/apps-dev**.
Cài đặt dependencies:
```bash
npm install
```
Chạy project:
```bash
npm start
```

## Chi tiết cấu hình fioriSandboxConfig.json

Mục **LaunchPage**: Chứa cấu hình UI của Launchpad (groups và tiles). Mỗi tile đại diện cho một app, targetURL có dạng:

#**semanticObject**-**action**

Mục **ClientSideTargetResolution**: Chứa chi tiết của từng app.
**semanticObject** phải khớp với id của app (xem trong manifest.json của app).
**action** phải khớp với action được định nghĩa trong tile.
**url** trỏ tới thư mục của app trong /apps-build.

## Lưu ý khi tạo app mới:

Không thêm namespace vào id app, nếu không sẽ gặp lỗi khi cấu hình fioriSandboxConfig.json.