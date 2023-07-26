import { useState } from "react";
import { Icons } from "../ultils/icons";
import { Slide } from "react-slideshow-image";
import { menProduct, product } from "../ultils/constant";
import ItemProduct from "../componets/ItemProduct";
import { NavLink, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper";
import Product from "../componets/Product";

const {
  AiOutlineLeftCircle,
  AiOutlineRightCircle,
  GrFormNext,
  GrFormPrevious,
} = Icons;
function ProductReview() {
  const location = useLocation();
  console.log(location);
  const [hove, setHove] = useState(false);
  const buttonStyle = {
    width: "150px",
    background: "none",
  };
  const properties = {
    prevArrow: (
      <button
        className={hove ? "opacity-100 mt-1" : "opacity-0 mt-1"}
        style={{ ...buttonStyle }}
      >
        <svg
          className="pl-6 pt-[78px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <AiOutlineLeftCircle color="#000" size={"145px"} />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        className={hove ? "opacity-100 ml-[80px]" : "opacity-0 ml-18"}
        style={{ ...buttonStyle }}
      >
        <svg
          className="pl-24 pt-2 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <AiOutlineRightCircle color="#000" size={"350px"} />
        </svg>
      </button>
    ),
  };
  const [mo, setMo] = useState(true);
  const [danh, setDanh] = useState(false);
  return (
    <div className="flex flex-col bg-white items-center">
      <div className="w-[70%] my-11 flex justify-between gap-2">
        <div
          onMouseEnter={() => setHove(true)}
          onMouseLeave={() => setHove(false)}
          className="w-[40%] border "
        >
          <Slide {...properties}>
            {menProduct?.map((item, index) => (
              <div key={index} className="">
                <img src={item.img} alt="" />
              </div>
            ))}
          </Slide>
        </div>
        <div className="w-[60%]">
          {location?.pathname.includes("simple-3") ? (
            <ItemProduct title={"Simple 3"} />
          ) : location?.pathname.includes("simple-7") ? (
            <ItemProduct title={"Simple 7"} />
          ) : location?.pathname.includes("classico-1") ? (
            <ItemProduct title={"Classico 1"} />
          ) : (
            <ItemProduct title={"Classico 3"} />
          )}
        </div>
      </div>
      <div className="w-[70%] mb-11">
        <div className={`flex  `}>
          <div
            className={` w-[10%] cursor-pointer text-center py-2 px-5 z-10 ${
              mo
                ? "border-x border-black border-t-4"
                : " bg-gray-200 border-b border-black"
            }`}
            onClick={() => {
              setTimeout(() => {
                setMo(true);
              }, 300);
            }}
          >
            Mô tả
          </div>

          <div
            className={` w-[10%] cursor-pointer text-center py-2 px-5 z-10 ${
              !mo
                ? "border-x border-black border-t-4"
                : "border-b border-black bg-gray-200"
            }`}
            onClick={() => {
              setTimeout(() => {
                setMo(false);
              }, 300);
            }}
          >
            Đánh giá
          </div>
          <div className="w-[80%] border-b border-black"></div>
        </div>
        <div className="w-full border-x border-b border-black p-6">
          {mo ? (
            <div className="flex flex-col gap-5">
              <span className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis justo gravida
                semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                suscipit id nulla.
              </span>
              <span className="text-lg pb-4">
                Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
                feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
                eget sagittis vulputate, sapien libero hendrerit est, sed
                commodo augue nisi non neque. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed tempor, lorem et placerat
                vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
                mi. Cras neque metus, consequat et blandit et, luctus a nunc.
                Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
              </span>
            </div>
          ) : (
            <div className="border-4 p-5">
              <div className="">
                <h2>Nhận xét của bạn</h2>
                <textarea
                  cols="89"
                  rows="5"
                  className="border-2 w-full px-3 py-2"
                ></textarea>
              </div>
              <div className="flex w-full gap-3">
                <div className="flex flex-col flex-1">
                  <h2>Tên</h2>
                  <input type="text" className="p-2 border-2" />
                </div>
                <div className="flex flex-col flex-1">
                  <h2>Email</h2>
                  <input type="text" className="p-2 border-2" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-[70%] relative mt-11 mb-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Sản phẩm tương tự</h1>
          <div className="flex">
            <a className="pre cursor-pointer">
              <GrFormPrevious size={"30px"} />
            </a>
            <a className="next cursor-pointer">
              <GrFormNext size={"30px"} />
            </a>
          </div>
        </div>
        <div className="flex w-full overflow-hidden introduce1">
          <Swiper
            // effect="coverflow"
            grabCursor={true}
            // centeredSlides={true}
            // loop={true}

            effect="slide"
            spaceBetween={30}
            slidesPerView={4}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              type: "fraction",
            }}
            navigation={{
              nextEl: ".next",
              prevEl: ".pre",
              clickable: true,
            }}
            loop={true}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={800}
            // onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            // onSlideChange={() => console.log("slide change")}
          >
            {product &&
              product.map((item, index) => (
                <div className="w-full shadow-md">
                  <SwiperSlide>
                    <Product
                      img={item.img}
                      name={item.name}
                      price={item.price}
                    />
                  </SwiperSlide>
                </div>
              ))}
            <div className="swiper-scrollbar"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
