<template>
  <form class="pt-5 pb-3 row gap-3">
    <!-- <ProductVariant title="Choose Variant" :options="['Active Swivel High Backrest Chair']" /> -->
    <!-- <ProductTypes v-for="(option, index) in options" :key="index" :title="option.title" :options="option.items"/>
    <ProductTypes title="Choose options 1" :options="[{ title: 'Test 1', items: itemsTest}]"/>
    <ProductTypes :toggle="false" :options="[{ title: 'Test 2', items: itemsTest}]"/> -->
    <ProductQuantity />
  </form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import ProductVariant from './ProductVariant.vue';
import ProductTypes from './ProductTypes.vue';
import ProductQuantity from './ProductQuantity.vue';
import { Option } from '@/models/Product';

@Component({
  components: {
    ProductVariant,
    ProductTypes,
    ProductQuantity
  }
})
export default class ProductOptions extends Vue {
  @Prop() options!: Option[]
  itemsTest = [
    {
      title: 'Hard',
      subtitle: '(for Soft floors)'
    },
    {
      title: 'Hard',
      subtitle: '(for Soft floors)'
    },
    {
      title: 'Hard',
      subtitle: '(for Soft floors)'
    }
  ]
}
</script>
