import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Carousel = () => {
  return (
    <Swiper
    spaceBetween={30}
    effect={'fade'}
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[EffectFade, Navigation, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src="https://icms-image.slatic.net/images/ims-web/67aa14d3-7858-4dfe-8f77-3711fa172a11.jpg_1200x1200.jpg" height={"500px"} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://icms-image.slatic.net/images/ims-web/3430074f-0953-4005-9b6f-0751e1868252.jpg" height={"500px"} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://icms-image.slatic.net/images/ims-web/0a39bf93-1197-42ef-b4b3-6d5ddcb54ef2.png" height={"500px"} />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://icms-image.slatic.net/images/ims-web/2d351faa-b64a-4b71-ac9e-bf5e6d886f1a.jpg" height={"500px"} />
    </SwiperSlide>
  </Swiper>
  )
}

export default Carousel
