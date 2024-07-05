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
        {/* <SwiperSlide>
          <img src={eventHeroImgOne} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={eventHeroImgTwo} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={eventHeroImgThree} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={eventHeroImgFour} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={eventHeroImgFive} alt="" />
        </SwiperSlide> */}
      </Swiper>
      <div className="flex absolute top-0 left-0 w-full h-full z-40 justify-center items-center bg-black/45">
        <div className="flex flex-col">
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500 font-serif italic text-5xl font-medium ">
            Manage Your Events
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EventMgtHero;
