<template>
  <div class="container">
    <ProductDetails :product="product" />
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

export default class ProductView extends Vue {
  product = {
    name: "T-shirt en coton",
    price: 19.99,
    description:
      "T-shirt en coton doux et confortable, disponible en plusieurs tailles et couleurs.",
    coupon: 10,
    stars: 4.5,
    id: "64381facfc13ae085c840888",
  }
}
</script>