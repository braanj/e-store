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
import { Action, Getter } from 'vuex-class';
import { IOrder } from '@/store/types/Order';
import router from '@/router';

@Component({
  components: {
    ProductVariant,
    ProductTypes,
    ProductQuantity
  }
})
export default class ProductForm extends Vue {
  @Prop() product!: Product

  @Getter("get", { namespace: "order" }) store!: IOrder;
  @Action("setOrder", { namespace: "order" }) setOrder!: (
    param: Product
  ) => void;

  handleSubmit() {
    this.setOrder(this.product);
    console.log(this.store.orders);
    router.push({ path: '/cart/' })
  }
}
</script>
