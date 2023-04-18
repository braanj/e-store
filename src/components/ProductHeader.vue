<template>
  <div class="row">
    <div class="col">
      <span class="infos text-uppercase">Lorem ipsum dolor sit amet consectetur.</span>

      <div class="d-flex align-items-center gap-2 price">
        <span class="total">Total: 9.99 €</span>
        <span class="coupon">10% off</span>
      </div>

      <div class="infos d-flex flex-wrap gap-2">
        <div class="d-flex gap-2 quantity">
          <span>Qty 1-9: <strong>2.45 €</strong></span>
          <span>Qty 10+: <strong>1.95 €</strong></span>
        </div>
        <span>Shipping time</span>
      </div>
    </div>

    <div class="col-3 text-end">
      <!-- <button
        class="favorites"
        @click.prevent="setFavorites(product.id)"
      >
        <i
          v-if="!store.favorites.includes(product.id)"
          class="fa fa-heart-o"
        ></i>
        <i
          v-else
          class="fa fa-solid fa-heart"
        ></i>
      </button> -->
      <button class="favorites">
        <i class="fa fa-heart-o"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Product } from "@/models/Product";
import { Action, Getter } from "vuex-class";
import { IProduct } from "@/store/types/Product.js";

@Component
export default class ProductHeader extends Vue {
  @Prop() product!: Product;
  @Getter("get", { namespace: "product" }) store!: IProduct;
  @Action("setFavorites", { namespace: "product" }) setFavorites!: (
    param: string
  ) => void;

  // applyCoupon(price: number, coupon: number) {
  //   return (price - price * (coupon / 100)).toFixed(2);
  // }
}
</script>

<style lang="scss">
.infos {
  color: var(--item-color);
  font-size: 1rem;

  strong {
    color: #000;
    margin-left: 3px;
  }
}

.price {
  .total {
    font-size: 1.75rem;
    font-weight: 600;
    margin: .3em 0;
  }

  .coupon {
    background-color: var(--gray-bg-color);
    text-transform: uppercase;
    padding: .2em .5em;
    border-radius: .6em;
  }
}

.quantity {
  span {
    display: flex;
    align-items: center;
    line-height: 1;

    &::after {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50px;
      margin-left: 1em;
      margin-right: .5em;
      background-color: #b2b2b4;
      display: inline-block;
    }
  }
}
</style>