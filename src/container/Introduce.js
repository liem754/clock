import { useEffect, useState } from "react";
import ItemIntroduce from "../componets/ItemIntroduce";
import { Icons } from "../ultils/icons";
import { specialCharMap } from "@testing-library/user-event/dist/keyboard";
const {
  GiSevenPointedStar,
  GiAutoRepair,
  AiOutlineReload,
  MdLocalShipping,
  MdPriceChange,
  PiWatchFill,
} = Icons;
function Introduce() {
  const [curent, setCurrent] = useState();
  const [curent1, setCurrent1] = useState();
  const [curent2, setCurrent2] = useState();
  const [curent3, setCurrent3] = useState();
  function animateNumber(finalNumber, delay, startNumber = 0, type) {
    let currentNumber = startNumber;
    const interval = setInterval(updateNumber, delay);
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval);
      } else {
        currentNumber++;
      }
      if (type === "1") {
        setCurrent(currentNumber);
      } else if (type === "2") {
        setCurrent1(currentNumber);
      } else if (type === "3") {
        setCurrent2(currentNumber);
      } else {
        setCurrent3(currentNumber);
      }
    }
  }
  // function animateNumber1(finalNumber, delay, startNumber = 0) {
  //   let currentNumber = startNumber;
  //   const interval = setInterval(updateNumber, delay);
  //   function updateNumber() {
  //     if (currentNumber >= finalNumber) {
  //       clearInterval(interval);
  //     } else {
  //       currentNumber++;
  //     }
  //     setCurrent1(currentNumber);
  //   }
  // }
  // function animateNumber2(finalNumber, delay, startNumber = 0) {
  //   let currentNumber = startNumber;
  //   const interval = setInterval(updateNumber, delay);
  //   function updateNumber() {
  //     if (currentNumber >= finalNumber) {
  //       clearInterval(interval);
  //     } else {
  //       currentNumber++;
  //     }
  //     setCurrent2(currentNumber);
  //   }
  // }
  // function animateNumber3(finalNumber, delay, startNumber = 0) {
  //   let currentNumber = startNumber;
  //   const interval = setInterval(updateNumber, delay);
  //   function updateNumber() {
  //     if (currentNumber >= finalNumber) {
  //       clearInterval(interval);
  //     } else {
  //       currentNumber++;
  //     }
  //     setCurrent3(currentNumber);
  //   }
  // }

  useEffect(() => {
    animateNumber(1280, 2, 0, "1");
    animateNumber(8, 70, 0, "2");
    animateNumber(3898, 1, 0, "3");
    animateNumber(25, 70, 0, "4");
  }, []);
  return (
    <div className="flex flex-col items-center bg-gray-200">
      <div className="w-[70%] my-11">
        <div className="flex items-center">
          <div className="flex-1 introduce">
            <img
              src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/about-us_bg.jpg"
              alt=""
            />
          </div>
          <div className=" flex-1 pl-8 introduce1">
            <h1 className="text-3xl font-medium mb-5">
              Giới thiệu về Watch Mona
            </h1>
            <h3 className="w-full text-justify">
              “Cùng với sự phát triển không ngừng của thời trang thế giới, rất
              nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa
              dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ
              nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến
              phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện
              thời trang thiết yếu đối với những người đàn ông hiện đại ngày
              nay. Trên cổ tay của những người đàn ông thành đạt luôn dành vị
              trí cho một chiếc đồng hồ nam cao cấp.”
            </h3>
          </div>
        </div>
      </div>
      <div className="w-[70%] flex flex-wrap gap-3 my-11">
        <div className="w-[32%] mb-2 introduce1">
          <ItemIntroduce
            Icon={PiWatchFill}
            title={"Hàng chính hãng"}
            body={
              "Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay"
            }
          />
        </div>
        <div className="w-[32%] mb-2 introduce2">
          <ItemIntroduce
            Icon={GiSevenPointedStar}
            title={"Sản phẩm mới 100%"}
            body={
              "Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay"
            }
          />
        </div>
        <div className="w-[32%] mb-2 introduce3">
          <ItemIntroduce
            Icon={GiAutoRepair}
            title={"Bảo hành 12 tháng"}
            body={
              "Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay"
            }
          />
        </div>
        <div className="w-[32%] mb-2 introduce4">
          <ItemIntroduce
            Icon={MdLocalShipping}
            title={"Đổi trả trong vòng 7 ngày"}
            body={
              "Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay"
            }
          />
        </div>
        <div className="w-[32%] mb-2 introduce5">
          <ItemIntroduce
            Icon={AiOutlineReload}
            title={"Miễn phí giao hàng"}
            body={
              "Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay"
            }
          />
        </div>
        <div className="w-[32%] mb-2 introduce6">
          <ItemIntroduce
            Icon={MdPriceChange}
            title={"Giá cả hợp lý"}
            body={
              "Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay"
            }
          />
        </div>
      </div>
      <div className="w-full flex justify-center  py-5  img ">
        <div className="w-[70%] text-white    ">
          <div className="flex items-center justify-between w-[100%] relative z-10">
            <div className="flex flex-col items-center justify-center">
              {curent && (
                <span className="font-medium text-4xl opacity-100">
                  {curent}
                </span>
              )}
              <span>SẢN PHẨM</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              {curent1 && (
                <span className="font-medium text-4xl">{curent1}</span>
              )}
              <span>GIẢI THƯỞNG</span>
            </div>
            <div className="flex flex-col items-center  justify-center">
              {curent2 && (
                <span className="font-medium text-4xl">{curent2}</span>
              )}
              <span>KHÁCH HÀNG HÀI LÒNG</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              {curent3 && (
                <span className="font-medium text-4xl">{curent3}</span>
              )}
              <span>CHI NHÁNH CỬA HÀNG</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[70%] gap-4 my-11">
        <div className="flex flex-col items-center gap-2 introduce9">
          <img
            className="w-[70px] rounded-[50%]"
            src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2023/02/Hinh-anh-avatar-Facebook.jpg?resize=800%2C800&ssl=1"
            alt=""
          />
          <span className="text-center italic">
            Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
            người đàn ông hiện đại ngày nay
          </span>
          <h2 className="text-xl font-medium">Phạm Văn Liêm</h2>
        </div>
        <div className="flex flex-col items-center gap-2 introduce9">
          <img
            className="w-[70px] rounded-[50%]"
            src="https://haycafe.vn/wp-content/uploads/2022/03/avatar-facebook-doc.jpg"
            alt=""
          />
          <span className="text-center italic">
            Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
            người đàn ông hiện đại ngày nay
          </span>
          <h2 className="text-xl font-medium">Đặng Linh</h2>
        </div>
        <div className="flex flex-col items-center gap-2 introduce9">
          <img
            className="w-[70px] rounded-[50%]"
            src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/04/Anh-avatar-dep-anh-dai-dien-FB-Tiktok-Zalo.jpg?ssl=1"
            alt=""
          />
          <span className="text-center italic ">
            Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những
            người đàn ông hiện đại ngày nay
          </span>
          <h2 className="text-xl font-medium">Dương Đại Phát</h2>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
