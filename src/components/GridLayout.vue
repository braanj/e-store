<template>
  <div class="container py-5">

    <ais-instant-search :search-client="searchClient" index-name="products">
      <ais-configure :hits-per-page.camel="12" />

      <div class="grid-header d-flex justify-content-between align-items-center">

        <a class="filters-toggle" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
          aria-expanded="false" aria-controls="multiCollapseExample1" @click="toggleFilters">
          <i class="fa fa-bars" aria-hidden="true"></i>
          Filters
        </a>

        <ais-search-box placeholder="Search here…" class="searchbox"></ais-search-box>
      </div>

      <div class="row bg-light py-5 border-top justify-content-center">
        <div class="filters-container">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="d-flex justify-content-between">
              <ais-sort-by :items="[
                { value: 'products', label: 'Relevant' },
                // { value: 'products:price:asc', label: 'Low to high price' },
                // { value: 'products:price:desc', label: 'High to low price' },
              ]" />

              <ais-clear-refinements>
                <span slot="resetLabel">Clear all filters</span>
              </ais-clear-refinements>
            </div>
            
            <div class="filters">
              <div class="filter-item">
                <span class="title px-3 d-block py-2 border-bottom">Colors</span>
                <div class="px-3">
                  <!-- <ais-refinement-list attribute="colors" /> -->
                </div>
              </div>

              <div class="filter-item">
                <span class="title px-3 d-block py-2 border-bottom">Sizes</span>
                <div class="px-3">
                  <!-- <ais-refinement-list attribute="sizes" /> -->
                </div>
              </div>

              <div class="filter-item">
                <span class="title px-3 d-block py-2 border-bottom">Sizes</span>
                <div class="px-3">
                  <!-- <ais-refinement-list attribute="sizes" /> -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div :class="{ 'col-12': showFilters, 'col': !showFilters }">
          <ais-hits>
            <template slot="item" slot-scope="{ item }">
              <SingleProduct :product="item" />
            </template>
          </ais-hits>
        </div>

        <div class="col-12 mt-3">
          <ais-pagination />
        </div>
      </div>

    </ais-instant-search>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SingleProduct from "./SingleProduct.vue";
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
// import products from "@/data/products";

@Component({ components: { SingleProduct } })

export default class extends Vue {
  // products = products;
  searchClient = instantMeiliSearch(
    "https://ms-a09b1b93b440-2535.sfo.meilisearch.io/",
    "bf17d6272a7f1331324eb9dfb9b504505080a4d71723ad9c7336278c33f18f72"
  )
  showFilters = true

  toggleFilters() {
    this.showFilters = !this.showFilters
  }
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

  .filters-toggle {
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

.filters-container {
  width: 300px;
}

.ais-Hits-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 0;
  justify-content: center;
}

.ais-Hits-item {
  list-style-type: none;
  min-width: 300px;
  max-width: 300px;
}

.ais-Pagination-list {
  display: flex;
  list-style: none;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  .ais-Pagination-item {
    .ais-Pagination-link {
      padding: .5rem 1rem .75rem;
      background-color: #ffffff;
      border-radius: 5px;
      display: flex;
      align-items: center;
      line-height: 1;
      text-decoration: none;
    }

    &.ais-Pagination-item--disabled,
    &.ais-Pagination-item--selected {
      .ais-Pagination-link {
        background-color: transparent;
        color: inherit;
      }
    }
  }
}

.ais-SearchBox-form {
  display: flex;
  gap: 4px;

  .ais-SearchBox-input {
    padding: .25rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 5px;
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-submit {
    padding: 1rem;
    border-radius: 5px;
    border: 0;
    display: flex;
    align-items: center;

    svg {
      max-width: .5rem;
      max-height: .5rem;
    }
  }
}

.ais-ClearRefinements-button,
.ais-SortBy-select {
  padding: .5rem 1rem;
  border-radius: 5px;
  border: 0;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.ais-ClearRefinements-button:disabled {
  display: none;
}

.filters {
  .filter-item {
    .title {
      background-color: #ffffff;
    }
  }
}
</style>
