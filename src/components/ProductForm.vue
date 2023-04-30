<template>
  <form class="pt-5 pb-3 row gap-3" @submit.prevent="handleSubmit">
    <ProductVariant :product="product" />
    <!-- <ProductTypes title="Choose options 1" :options="[{ title: 'Test 1', items: itemsTest}]"/> -->
    <ProductQuantity />
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ProductVariant from './ProductVariant.vue';
import ProductTypes from './ProductTypes.vue';
import ProductQuantity from './ProductQuantity.vue';
import { Product } from '@/models/Product';

@Component({
  components: {
    ProductVariant,
    ProductTypes,
    ProductQuantity
  }
})
export default class ProductForm extends Vue {
  @Prop() product!: Product

  handleSubmit() {
    console.log('Form is submitted!');
  }
}
</script>
