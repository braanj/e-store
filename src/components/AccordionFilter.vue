<template>
  <div class="filters-container p-3">
    <div class="d-flex align-items-center gap-3 mb-3">
      <span>Sort by: </span>
      <ais-sort-by :items="[
        { value: 'products', label: 'Relevant' },
        { value: 'price:asc', label: 'Low to high price' },
        { value: 'products:price:desc', label: 'High to low price' },
      ]" />
    </div>

    <ais-clear-refinements>
      <span slot="resetLabel">Clear all filters</span>
    </ais-clear-refinements>

    <div class="filters">
      <AccordionWrap>
        <AccordionItem v-for="(filter, key) in filters" :key="key" :index="key" :title="filter">
          <ais-refinement-list :attribute="filter" />
        </AccordionItem>
      </AccordionWrap>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AccordionWrap from "./AccordionWrap.vue";
import AccordionItem from "./AccordionItem.vue";

@Component({components: { AccordionWrap, AccordionItem }})
export default class AccordionFilter extends Vue {
  filters = ["category", "sizes", "sexe", "sexes", "colors"];

  
}
</script>

<style lang="scss">
.filters-container {
  width: 300px;
}
</style>