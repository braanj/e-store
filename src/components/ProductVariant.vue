<template>
  <div class="variant-container align-items-center">
    <h1 class="p-title">{{ product.name }}</h1>
    <div class="categories">
      <div class="cat-item">- {{ product.category }}</div>
    </div>
    <p class="p-description">{{ product.description }}</p>
    <ProductColors title="color" :items="product.colors"/>
    <ProductColors title="size" type="square" :items="product.sizes"/>
  </div>
</template>

<script lang="ts">
import { Product } from '@/models/Product';
import { Vue, Component, Prop } from 'vue-property-decorator';
import ProductColors from './ProductColors.vue';

@Component({
  components: {
    ProductColors
  }
})
export default class ProductVariant extends Vue {
  @Prop() product!: Product
}
</script>

<style lang="scss">
.p-title {
  font-size: 2em;
}

.p-description {
  margin-top: 1em;
}

.variant-container {
  background-color: var(--element-bg-color);
  border-radius: 5px;
  box-shadow: var(--shadow);
  padding: 1em 1.75em;
  position: relative;
}
</style>