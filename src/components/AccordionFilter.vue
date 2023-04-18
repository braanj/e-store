<template>
  <div class="filters-container px-3">
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

@Component({ components: { AccordionWrap, AccordionItem } })
export default class AccordionFilter extends Vue {
  filters = ["category", "sizes", "sexe", "sexes", "colors"];


}
</script>

<style lang="scss">
.filters-container {
  width: 300px;
}

@media screen and (max-width: 768px) {
  .filters-container {
    padding-top: 3rem !important;
  }
}
</style>