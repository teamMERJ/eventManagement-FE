import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import {
  eventHeroImgOne,
  eventHeroImgTwo,
  eventHeroImgThree,
  eventHeroImgFour,
  eventHeroImgFive,
} from "../../assets/eventHero";

const EventMgtHero = () => {
  return (
    <div className="relative overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={eventHeroImgOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventHeroImgTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventHeroImgThree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventHeroImgFour} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={eventHeroImgFive} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-3/4 left-0 w-full z-40 flex justify-center items-center bg-black/45">
        <div className="flex flex-col items-center">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500 font-serif italic text-5xl font-medium">
            Update
          </h3>
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-400 font-serif italic text-5xl font-medium">
            Below...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EventMgtHero;
