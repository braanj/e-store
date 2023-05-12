<template>
  <div :class="{ 'container py-5': searchable }">
    <ais-instant-search
      :search-client="searchClient"
      index-name="products"
    >
      <!-- <ais-state-results>
        <template v-slot="{ status }">
          {{ status }}
          <div v-show="status === 'loading' || status === 'stalled'">
            <LoaderSpinner />
          </div>
        </template>
      </ais-state-results> -->
      <ais-configure :hits-per-page.camel="productsPerPage" />
      <!-- On Homepage -->
      <div v-if="!single" class="row justify-content-center">
        <RefinementList v-if="!config.isTablette && !config.isMobile && searchable" />
        <StoreSidebar
          v-else-if="showSidebar && searchable"
          @close="showSidebar = false"
        >
          <RefinementList />
        </StoreSidebar>

        <div class="col">
          <div class="grid-header" v-if="searchable">
            <button
              class="toggle-filters"
              v-if="config.isTablette || config.isMobile"
              @click="showSidebar = true"
            >
              <i
                class="fi fi-br-settings-sliders"
                style="line-height: 1"
              ></i>
              filter
            </button>

            <ais-search-box
              placeholder="Search here…"
              class="searchbox"
            />
          </div>
          <small class="stats" v-if="searchable">
            <ais-stats />
            <!-- <ais-current-refinements /> -->
          </small>

          <div v-if="loading">
            <LoaderSpinner />
          </div>
          <ais-hits v-else :transform-items="items => filterProductsWithCategory(items)">
            <template
              slot="item"
              slot-scope="{ item }"
            >
              <ProductCard :product="item" />
            </template>
          </ais-hits>
        </div>

        <div class="col-12 mt-3" v-if="searchable">
          <ais-pagination />
        </div>
      </div>

      <!-- On product page -->
      <div class="p-page" v-else>
        <div v-if="loading">
          <LoaderSpinner />
        </div>
        <ais-hits v-else :transform-items="items => filterProductsWithId(items)">
          <template
            slot="item"
            slot-scope="{ item }"
          >
            <ProductPage :product="item" />
          </template>
        </ais-hits>
      </div>
    </ais-instant-search>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductCard from "./product/ProductCard.vue";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

import StoreSidebar from "./StoreSidebar.vue";
import { IConfig } from "@/store/types/Config";
import { Getter } from "vuex-class";
import RefinementList from "./RefinementList.vue";
import ProductPage from "./product/ProductPage.vue";
import LoaderSpinner from "./LoaderSpinner.vue";

@Component({
  components: { ProductCard, StoreSidebar, RefinementList, ProductPage, LoaderSpinner },
})
export default class StoreListing extends Vue {
  @Getter("get", { namespace: "config" }) config!: IConfig;

  @Prop({
    default: false
  }) single!: boolean

  @Prop({
    default: true,
  }) searchable!: boolean

  @Prop({
    default: 12,
  }) productsPerPage!: number

  @Prop({
    required: false,
    default: ''
  }) filter!: string

  loading = true

  searchClient = instantMeiliSearch(
    "https://ms-a09b1b93b440-2535.sfo.meilisearch.io/",
    process.env.VUE_APP_DB_KEY_TOKEN
  );

  showSidebar = false;
  filterProductsWithId(items) {
    return items.filter(item => item.id === this.$route.params.id)
  }
  
  filterProductsWithCategory(items) {
    if (!this.searchable) items = items.filter(item => item.category === this.filter && item.id !== this.$route.params.id)
    return items
  }

  created() {
    // simulate a delay in fetching products
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
</script>

<style lang="scss">
.grid-header {
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 552px;
  max-width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 0.6em;
  background-color: var(--element-bg-color);
  padding-left: 15px;
  padding-right: 15px;

  .toggle-filters {
    background-color: transparent;
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #ebebeb;
    border-radius: 16em;
    padding: 8px 15px;
  }

  @media screen and (max-width: 882px) {
    margin-left: auto;
    margin-right: auto;
  }
}

.stats {
  display: block;
  margin-bottom: .75em;
  opacity: .5;
  margin-left: 10px;
}

.grid-footer {
  .btn {
    border: 1px solid var(--border-color);
  }
}

.ais-Hits-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-left: 0;
  justify-content: flex-start !important;

  @media screen and (max-width: 882px) {
    justify-content: center !important;
  }
}

.ais-Hits-item {
  list-style-type: none;
  width: 300px;
}

.p-page {
  .ais-Hits-list {
    gap: 1.5em;
  }
  .ais-Hits-item {
    width: 100%;
  }
}

.related-products {
  .ais-Hits-item {
    width: 300px;
  }
}

.ais-Pagination-list {
  display: flex;
  list-style: none;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding-left: 0;

  .ais-Pagination-item {
    .ais-Pagination-link {
      padding: 0.5rem 1rem 0.75rem;
      background-color: #ffffff;
      color: #82858d;
      border-radius: 5px;
      display: flex;
      align-items: center;
      line-height: 1;
      text-decoration: none;
      &:hover {
        color: #000;
      }
    }

    &.ais-Pagination-item--disabled,
    &.ais-Pagination-item--selected {
      .ais-Pagination-link {
        background-color: transparent;
        color: #82858d;
        cursor: initial;
      }
    }
  }
}

.ais-SearchBox {
  width: 100%;
  display: flex;
}

.ais-SearchBox-form {
  display: flex;
  width: 100%;
  gap: 4px;
  border-radius: 0.6em;

  .ais-SearchBox-input {
    background-color: unset;
    border: none !important;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 1rem 0.5rem;
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-submit {
    display: none;
  }
}
</style>
