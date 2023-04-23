<template>
  <div class="product-details">
    <div class="row gap-3 justify-content-between">
      <div class="col-lg-7">
        <ProductHeader />
        <div class="d-flex justify-content-center">
          <ThumbsSwiper />
        </div>
      </div>
      <div class="col-lg-4 px-4">
        <ProductOptions />
      </div>
    </div>
    <div class="py-5">
      Product tabs
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductHeader from './ProductHeader.vue';
import ProductOptions from './ProductOptions.vue';
import { Product } from '@/models/Product';
import ThumbsSwiper from './ThumbsGallery.vue';

@Component({
  components: {
    ProductHeader,
    ProductOptions,
    ThumbsSwiper
  },
})

export default class ProductDetails extends Vue {
  @Prop() product!: Product
}
</script>