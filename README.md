# Hackintosh-OpenCore-Builder

# 👀 Gì đây???

**Tạo EFI** chạy hackintosh cho máy tính của bạn một cách tự động

# 🎉 Phiên bản 0.0.5 có gì mới?

- Kiểm tra thông tin dGPU, wifi card
- Gợi ý macOS phù hợp với cấu hình
- Hỗ trợ phần cứng nhiều hơn
[more](https://github.com/lzhoang2601/lzhoang2601.github.io/blob/main/CHANGELOG.md)...

# 🤖 Ưu điểm?

- Luôn luôn sử dụng OpenCore và kexts với commits mới nhất
- Tạo mới, cập nhật EFI dễ dàng, nhanh chóng

## 🤝 Hỗ trợ

- CPU:
  + CPU Intel Core I và M dòng Haswell hoặc mới hơn 
  + CPU AMD gồm Athlon, Ryzen, Threadripper
- GPU: 
  + NVIDIA trên PC ( Kepler với macOS Monterey Beta 7 cần cài thêm [cái này](), dòng khác Kepler chỉ hỗ trợ tới macOS High Sierra với [NVIDIA Web Driver]() )
  + AMD Polaris / Vega / Navi còn các dòng HD / R7 / R9 cần tự làm thêm bước [này](https://dortania.github.io/Getting-Started-With-ACPI/Universal/spoof.html)
  + Các iGPU Intel tương tự với CPU được hỗ trợ. Một số máy sẽ có patch HDMI/DP sẵn trong trường hợp chỉ có iGPU để xuất hình
- WiFi: chỉ hỗ trợ phần cứng của Intel và Broadcom, với card của Qualcomm vui lòng tự tìm kiếm kext phù hợp, sử dụng USB WiFi/Bluetooth cũng khá ổn (CF-811AC,.../BTA-508,...) 
  *Chỉ có xài card Broadcom mới có Airdrop và để Bluetooth hoạt động đôi khi cần patch USB Port
- Ethernet: việc phát triển kext ethernet dường như đã chấm dứt với một số phần cứng rất phổ biến của Realtek, Intel và Atheros 
  *Với những ai đang xài Intel i225-V tới thời điểm hiện tại với macOS Monterey là chưa sẵn sàng và Realtek L8200A chưa được hỗ trợ
- SSD: nếu phần cứng của bạn là eMMC, Samsung PM981 / PM991 (OEM), Micron 2200S, Intel 600p và tất cả SSD đi kèm Intel Optane không thể tắt thì đều không tương thích với macOS

# 🙋‍♀️ Đóng góp

Vui lòng nhắn tin [tại đây](https://www.facebook.com/hutieu2804)!

# 🆘 Giúp đỡ

Vui lòng nhắn tin vấn đề bạn gặp [tại đây](https://www.facebook.com/hutieu2804) để được giải quyết!

# Phát triển cùng

- Cộng đồng developers hackintosh ([acidanthera](https://github.com/acidanthera), [alexandred](https://github.com/acidanthera), [OpenIntelWireless](https://github.com/OpenIntelWireless),...) với bootloader và kexts
- [BootstrapMade](https://bootstrapmade.com/) với website
- [Đông Khang](https://www.facebook.com/namebii), [Võ Nguyễn Hoàng Long](https://www.facebook.com/100070274020733), [Nguyễn Văn Long](https://www.facebook.com/100009655189811), [Vũ D. Thảo](https://www.facebook.com/anhbeovuthao1605)

