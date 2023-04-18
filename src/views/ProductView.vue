<template>
  <div class="container">
    <ProductDetails />
    <RelatedProducts />
  </div>
</template>

<script lang="ts">
import ProductDetails from '@/components/ProductDetails.vue';
import RelatedProducts from '@/components/RelatedProducts.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ProductDetails,
    RelatedProducts
  }
})

export default class ProductView extends Vue { }
</script>