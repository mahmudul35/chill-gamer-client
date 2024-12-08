import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import assaign from "../assets/assaign.jpg";
import hunter from "../assets/hunter.jpg";
import slide1 from "../assets/slide1.jpg";
const Banner = () => {
  return (
    <div className="mb-20">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt=""
            className="w-full h[300px] md:h-[550px] lg:h-[700px] rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={assaign}
            alt=""
            className="w-full h[300px] md:h-[550px] lg:h-[700px] rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hunter}
            alt=""
            className="w-full h[300px] md:h-[550px] lg:h-[700px] rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
