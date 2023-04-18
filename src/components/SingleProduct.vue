<template>
  <div class="single-product col">
    <router-link
      :to="'/product?id=' + product.id"
      class="card h-100"
    >
      <img
        src="../assets/products/product-gray.png"
        class="card-img"
        :alt="product.name"
      />

      <div class="card-body pt-4 px-4 pb-0">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h5 class="card-title">{{ product.name }}</h5>
            <div
              class="price"
              :class="{ 'has-solde': product.coupon }"
            >
              <small class="original">{{ product.price }} €</small>
              <small
                v-if="product.coupon"
                class="solde"
                >{{ applyCoupon(product.price, product.coupon) }} €</small
              >
            </div>
          </div>
          <button
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
          </button>
        </div>
      </div>

      <div class="card-footer px-4">
        <p class="card-text">{{ product.description }}</p>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Product } from "@/models/Product";
import { Action, Getter } from "vuex-class";
import { IProduct } from "@/store/types/Product.js";

@Component
export default class SingleProduct extends Vue {
  @Prop() product!: Product;
  @Getter("get", { namespace: "product" }) store!: IProduct;
  @Action("setFavorites", { namespace: "product" }) setFavorites!: (
    param: string
  ) => void;

  applyCoupon(price: number, coupon: number) {
    return (price - price * (coupon / 100)).toFixed(2);
  }
}
</script>

<style lang="scss">
.single-product {
  height: 100%;
  position: relative;

  .card {
    text-decoration: unset;
    border-radius: 5px;
    border: unset;
    width: 300px;
    background-color: var(--element-bg-color);
    color: inherit;
    box-shadow: var(--body-bg-color) 0px 4px 12px;
    padding-bottom: 1.5rem;

    .card-img {
      border-radius: unset;
      max-width: 250px;
      margin: auto;
    }

    .card-body {
      border-top: 2px solid var(--body-bg-color);
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .card-footer {
      background-color: transparent;
      border-top: unset;
      display: none;
    }

    .price {
      font-weight: 600;
      font-size: 1.25rem;
      color: #94979f;
      gap: 0.5rem;
      display: flex;
      align-items: end;

      &.has-solde {
        .original {
          text-decoration: line-through;
          font-size: 1rem;
        }
      }
    }

    .stars {
      i {
        color: #e9ecef;

        &.active {
          color: #ffc107;
        }
      }
    }

    &:hover {
      color: inherit;
      border-radius: 5px;
      overflow: hidden;

      // .card-footer {
      //   display: block;
      // }
    }
  }
}

.favorites {
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  background-color: var(--body-bg-color);
  border: unset;
}
</style>
