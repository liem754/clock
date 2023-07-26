function Footer() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-center bg-[#333333] w-full py-5 mb-6 border-b border-gray-400">
        <div className="w-[70%] text-[white] flex justify-between mt-11 mb-5 ">
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-2xl font-medium mb-2">THÔNG TIN LIÊN HỆ</h1>
            <span className="w-[70%]">
              319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
            </span>
            <span>076 922 0162</span>
            <span>demo@gmail.com</span>
            <span>demonhunterps</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-2xl font-medium mb-2">LIÊN KẾT</h1>
            <span>Giới thiệu</span>
            <span>Đồng hồ nam</span>
            <span>Đồng hồ nữ</span>
            <span>Blogs</span>
            <span>Liên hệ</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-2xl font-medium mb-2">HỖ TRỢ</h1>
            <span>Hướng dẫn mua hàng</span>
            <span>Hướng dẫn thanh toán</span>
            <span>Chính sách bảo hành</span>
            <span>Chính sách đổi trả</span>
            <span>Tư vấn khách hàng</span>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-2xl font-medium mb-2">TẢI ỨNG DỤNG TRÊN</h1>
            <span className="">
              Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải
              nó ngay.
            </span>
            <span>
              <img
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-appstore.jpg"
                alt=""
              />
            </span>
            <span>
              <img
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-googleplay.jpg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-[70%] text-white mb-5">
        <span>
          © Bản quyền thuộc về . Thiết kế website MonaMedia Mona Media
        </span>
      </div>
    </div>
  );
}

export default Footer;
