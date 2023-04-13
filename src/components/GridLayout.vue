<template>
  <div class="container pt-5">
    <div class="grid-header d-flex justify-content-between align-items-center">
      <nav class="nav">
        <a
          class="nav-link active"
          href="#"
          >All</a
        >
        <a
          class="nav-link"
          href="#"
          >Glasses</a
        >
        <a
          class="nav-link"
          href="#"
          >Chairs</a
        >
        <a
          class="nav-link"
          href="#"
          >Active</a
        >
      </nav>

      <div class="dropdown nav">
        <a
          class="dropdown-toggle nav-link pe-0"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
        </a>

        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
        >
          <li>
            <a
              class="dropdown-item"
              href="#"
              >Action</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              >Another action</a
            >
          </li>
          <li>
            <a
              class="dropdown-item"
              href="#"
              >Something else here</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      <SingleProduct
        v-for="(product, key) in products"
        :key="key"
        :product="product"
      />
    </div>

    <div class="grid-footer d-flex justify-content-center py-5">
      <button class="btn px-5">Load More</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SingleProduct from "./SingleProduct.vue";
import products from "@/data/products";

@Component({ components: { SingleProduct } })
export default class extends Vue {
  products = products;
}
</script>

<style lang="scss">
.grid-header {
  padding-bottom: 1rem;
  .nav {
    .nav-link {
      color: inherit;
      opacity: 0.5;
      font-weight: 600;

      &:hover,
      &.active {
        opacity: 1;
      }

      &:first-of-type,
      &:last-of-type {
        padding-left: 0;
      }
    }
  }

  .dropdown-toggle {
    text-decoration: unset;
    color: inherit;

    &::after {
      content: unset;
    }
  }
}

.grid-footer {
  .btn {
    border: 1px solid var(--border-color);
  }
}
</style>
