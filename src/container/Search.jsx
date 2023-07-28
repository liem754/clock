import ListSearch from "../componets/List";
import { useState } from "react";
import SearchInput from "../componets/SearchInput";
import useDebounce from "../hooks/useDoube";

import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { product } from "../ultils/constant";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  return (
    <div className="bg-white">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="absolute"></div>
      <ListSearch searchTerm={debouncedSearchValue} />
      <Swiper
        className="swiper"
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        // effect='fade'
        // fadeEffect={{ crossFade: true }}
        loop={true}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={800}
      >
        <div className="">
          {product?.map((item) => (
            <SwiperSlide>
              <img src={item.img} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Search;
