<template>
  <div class="item">
    <div class="row align-items-center">
      <div class="col-lg-4 text-center">
        <img class="img-fluid" src="../assets/products/product-gray.png" alt="">
      </div>
      <div class="col-lg-8">
        <button class="remove" @click="removeOrder(product)">
          <i class="fa fa-times"></i>
        </button>
        <div class="d-flex flx-wrap align-items-center justify-content-between">
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
    </div>
  </div>
</template>

<script lang="ts">
import InputNumber from '@/components/InputNumber.vue';
import ProductHeader from '@/components/product/ProductHeader.vue';
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
  position: relative;
  border: 1px solid var(--body-bg-color);
  border-radius: 5px;
  padding: 1em;

  &:not(:last-of-type) {
    margin-bottom: .75em;
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

    &.remove {
      position: absolute;
      top: 3px;
      right: 10px;
      background-color: transparent;
      color: var(--item-color);
      padding: 0;
      opacity: .8;
    }
  }

  .favorites {
    background-color: unset;
  }
}
</style>
