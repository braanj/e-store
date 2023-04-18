<template>
  <div class="container py-5">
    <ais-instant-search :search-client="searchClient" index-name="products">
      <ais-configure :hits-per-page.camel="12" />

      <div
        class="grid-header d-flex flex-wrap flex-md-nowrap flex-wrap-reverse align-items-center justify-content-between gap-3">
        <button class="toggle-filters" @click="showSidebar = true">
          <i class="fa fa-bars"></i>
          Filters
        </button>

        <ais-search-box placeholder="Search here…" class="searchbox"></ais-search-box>
      </div>

      <div class="row bg-light py-5 border-top justify-content-center">
        
        <AccordionFilter v-if="!config.isMobile" />
        <AccordionSidebar v-else-if="showSidebar" @close="showSidebar = false">
        </AccordionSidebar>


        <div class="col">
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
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding-left: 0;

  .ais-Pagination-item {
    .ais-Pagination-link {
      padding: 0.5rem 1rem 0.75rem;
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
    padding: 0.25rem 1rem;
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
      max-width: 0.5rem;
      max-height: 0.5rem;
    }
  }
}

.ais-ClearRefinements-button,
.ais-SortBy-select {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 0;
  display: flex;
  align-items: center;
}

.ais-ClearRefinements-button {
  background-color: #0d6efd;
  color: #ffffff;
  margin-bottom: 1rem;
}

.ais-ClearRefinements-button:disabled {
  display: none;
}

.ais-RefinementList-list {
  list-style: none;
  padding-left: 0;
}

.ais-RefinementList-label {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  line-height: 1;
  margin-top: 0.5rem;

  .ais-RefinementList-count {
    margin-left: auto;
    color: #6c757d;
  }
}
</style>
