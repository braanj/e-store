<template>
  <div class="product-details">
    <div class="row gap-5">
      <div class="col">
        <ProductHeader />
        <div class="d-flex justify-content-center">
          <!-- todo: integrer le carousel images -->
          <img src="../assets/products/product-gray.png" alt="">
          
        </div>
      </div>
      <div class="col-lg-4">
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

@Component({
  components: {
    ProductHeader,
    ProductOptions
  },
})

export default class ProductDetails extends Vue {
  @Prop() product!: Product
}
</script>