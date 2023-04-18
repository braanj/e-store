<template>
  <div class="container py-5">
    <ais-instant-search
      :search-client="searchClient"
      index-name="products"
    >
      <ais-configure :hits-per-page.camel="12" />

      <div class="row justify-content-center">
        <AccordionFilter v-if="!config.isTablette && !config.isMobile" />
        <AccordionSidebar
          v-else-if="showSidebar"
          @close="showSidebar = false"
        >
        </AccordionSidebar>

        <div class="col">
          <div
            class="grid-header d-flex align-items-center justify-content-center gap-3 pb-4 flex-wrap"
          >
            <button
              class="toggle-filters"
              v-if="config.isTablette || config.isMobile"
              @click="showSidebar = true"
            >
              <i class="fa fa-bars"></i>
              Filters
            </button>

            <ais-search-box
              placeholder="Search here…"
              class="searchbox"
            ></ais-search-box>
          </div>

          <ais-hits>
            <template
              slot="item"
              slot-scope="{ item }"
            >
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
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

import AccordionSidebar from "./AccordionSidebar.vue";
import { IConfig } from "@/store/types/Config";
import { Getter } from "vuex-class";
import AccordionFilter from "./AccordionFilter.vue";

@Component({
  components: { SingleProduct, AccordionSidebar, AccordionFilter },
})
export default class extends Vue {
  searchClient = instantMeiliSearch(
    "https://ms-a09b1b93b440-2535.sfo.meilisearch.io/",
    process.env.VUE_APP_DB_KEY_TOKEN
  );

  showSidebar = false;

  @Getter("get", { namespace: "config" }) config!: IConfig;
}
</script>

<style lang="scss">
.grid-header {
  padding-bottom: 1rem;

  .toggle-filters {
    background-color: transparent;
    border: unset;
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
  gap: 2rem;
  padding-left: 0;
  justify-content: start;
}

@media screen and (max-width: 992px) {
  .ais-Hits-list {
    justify-content: center;
  }
}

.ais-Hits-item {
  list-style-type: none;
  width: 300px;
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
  width: 60%;
  gap: 4px;
  border: 1px solid var(--border-color);
  border-radius: 0.6em;
  background-color: var(--element-bg-color);

  .ais-SearchBox-input {
    background-color: unset;
    border: none !important;
    width: 100%;
    height: 100%;
    outline: none;
    padding: 1rem 1.5rem;
  }

  .ais-SearchBox-reset,
  .ais-SearchBox-submit {
    display: none;
  }
}
</style>
