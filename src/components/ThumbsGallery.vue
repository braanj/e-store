<template>
  <div class="gallery">
  <swiper
    :spaceBetween="10"
    :slidesPerView="1"
    :freeMode="false"
    :watchSlidesProgress="true"
    ref="slide1"
    @slideChange="e => onSwiper(e, 1)"
    @swiper="e => onSwiper(e, 1)"
    class="slide1"
    :thumbs="{swiper: swiper2}"
  >
    <swiper-slide v-for="i in 10" :key="i"><img src="../assets/products/product-gray.png" alt=""></swiper-slide>
  </swiper>
  <!-- Thumbs du navigation -->
  <swiper
    ref="slide2"
    @swiper="e => onSwiper(e, 2)"
    @slideChange="e => onSwiper(e, 2)"
    :spaceBetween="15"
    :slidesPerView="5"
    :freeMode="false"
    :watchSlidesProgress="true"
    class="slide2"
  >
    <swiper-slide v-for="i in 10" :key="i">
      <img src="../assets/products/product-gray.png" alt="" @click="slideTo(i - 1)">
    </swiper-slide>
  </swiper>
  <div class="cs-navigation">
    <button class="next" @click="slideTo('prev')">
      <i class="fi fi-br-caret-left"></i>
    </button>
    <button class="prev" @click="slideTo('next')">
      <i class="fi fi-br-caret-right"></i>
    </button>
  </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { SwiperCore, Swiper, SwiperSlide,  } from 'swiper-vue2';
import { Navigation, Thumbs, Pagination} from 'swiper';

import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Thumbs])

@Component({
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class ThumbsGallery extends Vue {
  swiper1: any = null
  swiper2: any = null

  onSwiper(swiper: any, index: number) {
    if (index === 1) this.swiper1 = swiper
    else this.swiper2 = swiper
  }

  slideTo(to: 'next' | 'prev' | number) {
    if (typeof to === 'number') this.swiper1.slideTo(to)
    else if (to === 'next') this.swiper1.slideNext()
    else this.swiper1.slidePrev()
  }
}
</script>

<style lang="scss">
.gallery {
  width: 100%;
  position: relative;

  .cs-navigation {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
    max-width: 550px;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .prev, .next {
    background-color: transparent;
    border: none;
    font-size: 1.5em;
  }
}
.swiper {
  width: 100%;
  height: 100%;

}
.slide1 {
  height: 390px;
}

.slide2 {
  width: 60%;
  margin-top: 50px;
  
  .swiper-slide {
    width: auto !important;
    cursor: pointer;
    img {
      height: 60px;
      background-color: var(--gray-bg-color);
      border-radius: 5px;
      padding: 5px;
    }

    &.swiper-slide-thumb-active {
      img {
        border: 1px solid;
      }
    }
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-family: uicons-bold-rounded !important;
    font-size: 1.6em;
    color: #000;
  }
  .swiper-button-next::after {
    content: "\f28a";
  }
  .swiper-button-prev::after {
    content: "\f288";
  }
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  max-height: 500px;
  object-fit: contain !important;
}
</style>
