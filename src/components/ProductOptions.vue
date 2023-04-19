<template>
  <form class="pt-5 pb-3 row gap-3">
    <ProductVariant title="Choose Variant" :options="['Active Swivel High Backrest Chair']" />
    <ProductTypes />
    <ProductQuantity />
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ProductVariant from './ProductVariant.vue';
import ProductTypes from './ProductTypes.vue';
import ProductQuantity from './ProductQuantity.vue';

@Component({
  components: {
    ProductVariant,
    ProductTypes,
    ProductQuantity
  }
})
export default class ProductOptions extends Vue {
  @Prop() title!: string
  @Prop() index!: number
}
</script>
