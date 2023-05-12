<template>
  <div class="row pt-5 pb-3">
    <div class="col-10">
      <span class="infos text-uppercase">SKU: {{ product.sku }}</span>
      <div class="d-flex align-items-center gap-3 price">
        <span v-if="!product.coupon" class="total">Total: {{ product.price }} €</span>
        <div v-else class="d-flex align-items-center gap-3 flex-rap">
          <span class="total">Total: {{ applyCoupon(product.price, product.coupon) }} €</span>
          <span class="coupon">{{ product.coupon }}% off</span>
        </div>
      </div>

      <div class="infos d-flex flex-wrap gap-2">
        <div class="d-flex gap-2 quantity flex-wrap">
          <span>Qty 1-9: <strong>2.45 €</strong></span>
          <span>Qty 10+: <strong>1.95 €</strong></span>
        </div>
        <span>5 weeks lead time</span>
      </div>
    </div>

    <div class="col text-end">
      <FavoriteButton :id="product.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Product } from "@/models/Product";
import FavoriteButton from "./FavoriteButton.vue";

@Component({ components: {
  FavoriteButton
}})
export default class ProductHeader extends Vue {
  @Prop() product!: Product;

  applyCoupon(price: number, coupon: number) {
    return (price - price * (coupon / 100)).toFixed(2);
  }
}
</script>

<style lang="scss" scoped>
.infos {
  color: var(--item-color);
  font-size: .9em;
  font-weight: 500;

  strong {
    color: #000;
    margin-left: 3px;
  }
}

.price {
  .total {
    font-size: 2rem;
    font-weight: 600;
  }

  .coupon {
    background-color: var(--gray-bg-color);
    text-transform: uppercase;
    padding: .2em .5em;
    border-radius: .6em;
    font-size: .75em;
    opacity: .8;
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
      margin-right: .25em;
      background-color: #b2b2b4;
      display: inline-block;
    }
  }
}

.favorites {
  padding: 0;
}
</style>