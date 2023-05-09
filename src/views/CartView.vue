<template>
  <div v-if="store.orders.length !== 0" class="container cart bg-white my-3 p-0">
    <span class="title">Summary: <small class="text-muted fw-normal">You have {{ store.orders.length }} items in your cart.</small></span>

    <div class="cart-items">
      <CartItem v-for="(product, index) in store.orders" :key="index" :product="product" />
    </div>

  </div>
  <div class="container py-5" v-else>
    <p>Cart is empty! <br> Coninue shoping! <router-link :to="{ name: 'home' }">Back</router-link></p>
  </div>
</template>

<script lang="ts">
import CartItem from '@/components/CartItem.vue';
import InputNumber from '@/components/InputNumber.vue';
import ProductHeader from '@/components/ProductHeader.vue';
import { IOrder } from '@/store/types/Order';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component({
  components: {
    ProductHeader,
    InputNumber,
    CartItem
  },
})

export default class HomeView extends Vue {
  @Getter("get", { namespace: "order" }) store!: IOrder;
}
</script>

<style lang="scss">
.cart {
  border-radius: 5px;
  box-shadow: var(--shadow);

  .title {
    padding: 1.5em 1em;
    font-size: 1.25em;
    line-height: 1;
    border-bottom: 1px solid var(--body-bg-color);
  }

  .cart-items {
    padding: 1em;
  }
}
</style>
