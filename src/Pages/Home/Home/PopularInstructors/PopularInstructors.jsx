import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import swipe from "../../../../assets/images/swipe.jpg"
import swipe1 from "../../../../assets/images/swipe1.jpg"
import swipe2 from "../../../../assets/images/swipe2.jpg"
import swipe3 from "../../../../assets/images/swipe3.png"
import swipe4 from "../../../../assets/images/swipe4.jpg"
import swipe5 from "../../../../assets/images/swipe5.png"

import { EffectCoverflow, Pagination } from "swiper";


const PopularInstructors = () => {
    return (
      <div>
        <div>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={swipe} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swipe5} />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    );
};

export default PopularInstructors;