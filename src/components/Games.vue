<template>
   <div
    data-aos="flip-left"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-out-back"
    data-aos-mirror="false"
    data-aos-once="true"
    data-aos-offset="500"
  >
  <p class="gamestext">GAMES</p>
  <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide> <img src="../../images/slide1.jpg" /> </swiper-slide>
    <swiper-slide> <img src="../../images/slide2.jpg" /> </swiper-slide>
    <swiper-slide> <img src="../../images/slide3.jpg" /> </swiper-slide>
    <swiper-slide> <img src="../../images/slide1.jpg" /> </swiper-slide>
  </swiper>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../public/style.css";

import { EffectFade, Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination],
    };
  },
};
</script>

<style>
.gamestext{
    color:white;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
}
</style>