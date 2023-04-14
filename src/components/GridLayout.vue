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
        <a class="dropdown-toggle nav-link pe-0" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
          aria-expanded="false">
          Filter
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item" href="#">Action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
    </div>

    <ais-instant-search :search-client="searchClient" index-name="products">
      <ais-configure :hits-per-page.camel="10" />
      <ais-search-box placeholder="Search here…" class="searchbox"></ais-search-box>

      <ais-hits>
        <template slot="item" slot-scope="{ item }">
          <SingleProduct :product="item" />
        </template>
      </ais-hits>

    </ais-instant-search>


    <div class="grid-footer d-flex justify-content-center py-5">
      <button class="btn btn-outline-secondary px-5">Load More</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SingleProduct from "./SingleProduct.vue";
import products from "@/data/products";
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

@Component({ components: { SingleProduct } })
export default class extends Vue {
  products = products;
  searchClient = instantMeiliSearch(
    "https://ms-a09b1b93b440-2535.sfo.meilisearch.io/",
    "bf17d6272a7f1331324eb9dfb9b504505080a4d71723ad9c7336278c33f18f72"
  )
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

.ais-Hits-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 0;
}

.ais-Hits-item {
  width: 300px;
  list-style-type: none;
}
</style>
