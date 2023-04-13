<template>
  <div class="single-product col">
    <router-link :to="product.link" class="card h-100">
      <img src="../assets/products/product.jpg" class="card-img" :alt="product.name">

      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description }}</p>
      </div>

      <div class="card-footer d-flex justify-content-between">
        <div class="price" :class="{ 'has-solde': product.solde }">
          <small class="original" :class="{'text-muted': product.solde }">{{ product.price }}€</small>
          <small v-if="product.solde" class="solde">{{ product.solde }}€</small>
        </div>
        <div class="stars d-flex flex-row-reverse align-items-center">
          <i v-for="item, key in 5" :key="key" :class="{ active: item <= product.stars }" class="fa fa-star"
            aria-hidden="true"></i>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class SingleProduct extends Vue {
  @Prop() product!: {
    name: string,
    description: string,
    link: string,
    price: number,
    stars: number,
    copon: string,
    solde: number
  }
}
</script>

<style lang="scss">
.single-product {
  
  
  .card {
    text-decoration: unset;
    color: inherit;
    border-radius: unset;
    transition: all 225ms;
    &:hover {
      color: inherit;
      border-radius: 5px;
      overflow: hidden;
    }

    .card-img {
      border-radius: unset;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .card-footer {
      background-color: transparent;
      border-top: unset;
      padding-bottom: 1.5rem;

      .price {
        font-weight: 600;
        font-size: 1.25rem;
        color: inherit;
        gap: .5rem;
        display: flex;
        align-items: center;

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
    }
  }
}
</style>