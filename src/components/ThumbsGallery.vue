<template>
  <div class="gallery">
  <swiper
    :spaceBetween="10"
    :slidesPerView="1"
    :freeMode="false"
    :watchSlidesProgress="true"
    @slideChange="e => onSwiper(e, 1)"
    @swiper="e => onSwiper(e, 1)"
    class="main-swiper"
    :thumbs="{swiper: navigationSwiper}"
  >
    <swiper-slide v-for="i in 10" :key="i">
      <img src="../assets/products/product-gray.png" alt="">
    </swiper-slide>
  </swiper>

  <swiper
    @swiper="e => onSwiper(e, 2)"
    @slideChange="e => onSwiper(e, 2)"
    :spaceBetween="15"
    slidesPerView="auto"
    :freeMode="false"
    :watchSlidesProgress="true"
    class="navigation-swiper"
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
  mainSwiper: any = null
  navigationSwiper: any = null

  /**
   * Handles the `swiper` event and sets the `mainSwiper` or `navigationSwiper` value 
   * based on the `index` parameter.
   * 
   * @param {any} swiper - The Swiper instance that fired the event.
   * @param {number} index - The index of the Swiper component.
   */
  onSwiper(swiper: any, index: number) {
    if (index === 1) this.mainSwiper = swiper
    else this.navigationSwiper = swiper
  }

  /**
   * Slides the Swiper component to the specified slide.
   * 
   * @param {'next' | 'prev' | number} to - The destination slide or direction 
   * ('next' or 'prev').
   */
  slideTo(to: 'next' | 'prev' | number) {
    if (typeof to === 'number') this.mainSwiper.slideTo(to)
    else if (to === 'next') this.mainSwiper.slideNext()
    else this.mainSwiper.slidePrev()
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
    max-width: 600px;
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
.main-swiper {
  height: 390px;
}

.navigation-swiper {
  width: 70%;
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
