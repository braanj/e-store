<template>
  <div class="container mb-5">
    <ProductDetails :product="product" />
  </div>
</template>

<script lang="ts">
import ProductDetails from '@/components/ProductDetails.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ProductDetails
  }
})

export default class ProductView extends Vue {
  product = {}
}
</script>