<template>
  <div class="product-details py-5">
    <div class="row">
      <div class="col">
        <!-- Product header -->
        <ProductHeader />
        <!-- product Images -->
        <div class="d-flex justify-content-center">
          <img src="../assets/products/product-gray.png" alt="">
        </div>
      </div>
      <div class="col-lg-3">
        <!-- Product cusomizations -->
        side bar
      </div>
    </div>
    <div>
      <!-- Product tabs -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductHeader from './ProductHeader.vue';

@Component({
  components: {
    ProductHeader
  },
})

export default class ProductDetails extends Vue { }
</script>