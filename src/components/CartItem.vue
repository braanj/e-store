<template>
  <div class="item">
    <button @click="removeOrder(product)">Remove</button>
    <div class="row align-items-center justify-content-between">
      <ProductHeader :product="product" :favorite="false" />
      <InputNumber />
    </div>
    <div class="d-flex gap-2 mt-3">
      <button class="btn-gray w-100">
        <i class="fi fi-br-shopping-cart"></i>
        Make an Order
      </button>
      <button class="btn-black w-100">
        Make a Quotation
      </button>
    </div>
    <div class="d-flex gap-2 mt-3">
      <FavoriteButton :id="product.id" :hasIcon="false">Add to wishlist</FavoriteButton>
    </div>
  </div>
</template>

<script lang="ts">
import InputNumber from '@/components/InputNumber.vue';
import ProductHeader from '@/components/ProductHeader.vue';
import { Product } from '@/models/Product';
import { Component, Prop, Vue } from 'vue-property-decorator';
import FavoriteButton from './FavoriteButton.vue';
import { Action } from 'vuex-class';

@Component({
  components: {
    ProductHeader,
    InputNumber,
    FavoriteButton
  },
})

export default class CartItem extends Vue {
  @Prop() product!: Product

  @Action("removeOrder", { namespace: "order" }) removeOrder!: (
    param: Product
  ) => void;
}
</script>

<style lang="scss" scoped>
.item {
  padding: 1em;
  margin-left: .75em;
  margin-right: .75em;
  max-width: 900px;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--body-bg-color);
  }
  button {
    padding: .75em;
    border: 0;
    border-radius: 5px;
    &.btn-black {
      background-color: #000;
      color: #fff;
      &:active {
        opacity: .8;
      }
    }
  }

  .favorites {
    background-color: unset;
  }
}
</style>
