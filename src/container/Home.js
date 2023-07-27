import { Slide } from "react-slideshow-image";
import {
  Sample,
  product,
  product1,
  product2,
  product3,
} from "../ultils/constant";
import anh4 from "../acset/image/anh4.png";
import anh6 from "../acset/image/anh6.png";
import "react-slideshow-image/dist/styles.css";
import Button from "../componets/Button";
import Item from "../componets/Item";
import { Link, NavLink } from "react-router-dom";
import Product from "../componets/Product";
import { Icons } from "../ultils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper";
import { useEffect, useRef, useState } from "react";
const {
  GrFormNext,
  GrFormPrevious,
  MdOutlineArrowUpward,
  AiOutlineRightCircle,
  AiOutlineLeftCircle,
} = Icons;
console.log(Sample);

function Home() {
  const red = useRef();
  const acTive = "text-[#c89979]";
  const [pho, setPho] = useState(true);
  const [khuyen, setKhuyen] = useState(false);
  const [moi, setMoi] = useState(false);
  const [show, setShow] = useState(false);
  const handle = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  };
  useEffect(() => {
    const handleTo = () => {
      if (window.scrollY >= 1200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleTo);
  }, []);
  const [hove, setHove] = useState(false);
  const buttonStyle = {
    width: "150px",
    background: "none",
  };

  const properties = {
    prevArrow: (
      <button
        className={hove ? "opacity-100 mt-4 " : "opacity-0 mt-4"}
        style={{ ...buttonStyle }}
      >
        <svg
          className="pl-7 pt-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <AiOutlineLeftCircle color="#fff" size={"190px"} />
        </svg>
      </button>
    ),
    nextArrow: (
      <button
        className={hove ? "opacity-100 ml-7" : "opacity-0 ml-7"}
        style={{ ...buttonStyle }}
      >
        <svg
          className="pl-20 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#fff"
        >
          <AiOutlineRightCircle color="#fff" size={"200px"} />
        </svg>
      </button>
    ),
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[white] w-full ">
      <div
        onMouseEnter={() => setHove(true)}
        onMouseLeave={() => setHove(false)}
        className="w-full h-[600px] px-7 items-center slide-container bg-[#222222]"
      >
        <Slide {...properties}>
          {Sample &&
            Sample?.map((item, index) => {
              return (
                <div className="flex flex-col h-[600px] justify-center  items-center ">
                  <div className="w-[72%]  items-center  flex justify-center">
                    <div className="flex flex-col items-start gap-5 w-[60%] animation ml-5 text-[white]">
                      <h2 className="text-3xl font-medium introduce7">
                        Mona Watch
                      </h2>
                      <h1 className="text-6xl font-medium introduce7">
                        Đồng hồ Classico
                      </h1>
                      <p className="block font-medium w-full text-justify mb-2">
                        Cùng với sự phát triển không ngừng của thời trang thế
                        giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ
                        nam chính hãng đa dạng về phong cách, kiểu dáng, màu
                        sắc, kích cỡ…s
                      </p>
                      <Button
                        text={"Xem sản phẩm"}
                        color={"text-[white]"}
                        bgColor={"bg-none"}
                        pd={"py-2 px-5"}
                        border={"border-2 border-white"}
                        radius={"rounded-md"}
                      />
                    </div>
                    <img
                      className="bg-cover -mr-5  h-[100%] w-[40%] introduce1"
                      key={index}
                      src={item}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
        </Slide>
      </div>
      <div className="flex mt-11 gap-4 w-[70%] items-center justify-between">
        <Link to={"dong-ho-nam"} className="flex-1 h-[300px] introduce7">
          <Item title={"Xu hướng 2019"} type body={"ĐỒNG HỒ NAM"} img={anh4} />
        </Link>
        <Link to={"dong-ho-nu"} className="flex-1 h-[300px] introduce7">
          <Item title={"Xu hướng 2019"} type body={"ĐỒNG HỒ NỮ"} img={anh6} />
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-[70%] relative mt-11">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">Sản phẩm bán chạy</h1>
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
      <div className="flex mt-11 gap-4 w-[70%] items-center justify-between">
        <div className="flex-1 h-[300px] introduce8">
          <Item
            title={"CỔ ĐIỂN"}
            text="Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…"
            img={anh4}
          />
        </div>
        <div className="flex-1 h-[300px] introduce7">
          <Item
            title={"SMART WATCH"}
            text="Đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…"
            img={anh6}
          />
        </div>
      </div>
      <div className="w-[70%] mt-11  border-b border-gray-400 pb-10 mb-6">
        <div className="flex gap-5 mb-2">
          <a
            onClick={() => {
              setPho(true);
              setKhuyen(false);
              setMoi(false);
            }}
            onBlur={(e) => {
              e.stopPropagation();
              setPho(false);
            }}
            className={
              pho
                ? "text-[#c89979] underline underline-offset-8 text-2xl font-medium mb-2 cursor-pointer"
                : "text-2xl font-medium mb-2 cursor-pointer"
            }
          >
            Sản phẩm phổ biến
          </a>
          <a
            onClick={() => {
              setPho(false);
              setMoi(false);
              setKhuyen(true);
            }}
            className={
              khuyen
                ? "text-[#c89979] text-2xl underline underline-offset-8 font-medium mb-2 cursor-pointer"
                : "text-2xl font-medium mb-2 cursor-pointer"
            }
          >
            Sản phẩm khuyến mãi
          </a>
          <a
            onClick={() => {
              red.current.backgroundColor = "black";
              setPho(false);
              setKhuyen(false);
              setMoi(true);
            }}
            className={
              moi
                ? "text-[#c89979] text-2xl underline underline-offset-8 font-medium mb-2 cursor-pointer"
                : "text-2xl font-medium mb-2 cursor-pointer"
            }
          >
            Sản phẩm mới
          </a>
        </div>
        <div ref={red} className="flex flex-wrap gap-3 introduce1">
          {pho &&
            product1 &&
            product1.map((item, index) => (
              <div className="w-[24%]">
                <Product img={item.img} name={item.name} price={item.price} />
              </div>
            ))}
          {khuyen &&
            product2 &&
            product2.map((item, index) => (
              <div className="w-[24%]">
                <Product img={item.img} name={item.name} price={item.price} />
              </div>
            ))}
          {moi &&
            product3 &&
            product3.map((item, index) => (
              <div className="w-[24%]">
                <Product img={item.img} name={item.name} price={item.price} />
              </div>
            ))}
        </div>
      </div>
      <div className="w-[70%] flex justify-between gap-6 my-10">
        <div className="flex flex-col flex-1 ">
          <Link>
            <img
              className="w-full h-[200px]"
              src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-4.jpg"
              alt=""
            />
          </Link>
          <Link
            to="blog/chiec-dong-ho-cua-nhung-ceo"
            className="font-medium hover:text-[#bc9073]"
          >
            Chiếc đồng hồ của những CEO quyền lực nhất thế giới
          </Link>
          <span className="text-sm mt-3">
            Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là
            ...{" "}
          </span>
        </div>
        <div className="flex flex-col flex-1">
          <Link>
            <img
              className="w-full h-[200px]"
              src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/trend-2.jpg"
              alt=""
            />
          </Link>
          <Link
            to={"blog/12-chiec-dong-ho-danh-cho-nu"}
            className="font-medium hover:text-[#bc9073]"
          >
            12 chiếc đồng hồ dành cho nữ đắc nhất mọi thời đại
          </Link>
          <span className="text-sm mt-3">
            Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong
            hai ...
          </span>
        </div>
        <div className="flex flex-col flex-1 ">
          <Link>
            <img
              className="w-full h-[200px]"
              src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/new-3.jpg"
              alt=""
            />
          </Link>
          <Link
            to={"blog/10-thuong-hieu-dong-ho-cao-cap"}
            className="font-medium hover:text-[#bc9073]"
          >
            10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm,
            Rolex xếp hạng số 3
          </Link>
          <span className="text-sm mt-3">
            1. Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis
            Audemars và Edward-Auguste Piguet, ...
          </span>
        </div>
      </div>
      {show && (
        <button
          onClick={handle}
          className="fixed bottom-3 right-3 bg-gray-700 px-3 py-2 rounded-[50%] "
        >
          <MdOutlineArrowUpward color="#fff" size={"26px"} />
        </button>
      )}
    </div>
  );
}

export default Home;
