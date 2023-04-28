<!-- eslint-disable vue/valid-v-model -->
<template>
  <div class="filters-container px-3">
    <ais-clear-refinements>
      <span slot="resetLabel">Remove all filters</span>
    </ais-clear-refinements>

    <div class="filters">
      <AccordionWrap>
        <AccordionItem v-for="(filter, key) in filters" :key="key" :index="key" :title="filter">

          <template v-if="filter === 'price'">
            <ais-range-input :attribute="filter">
              <template
                v-slot="{
                  range,
                  canRefine,
                  refine,
                  currentRefinement
                }"
              >
                <RangeSlider :currentRefinement="currentRefinement" :range="range" :canRefine="canRefine" :refine="refine" />
              </template>
            </ais-range-input>
          </template>

          <ColorRefinementList
            :filter="filter"
            v-else-if="isColorFilter(filter)"
          />

          <ais-refinement-list
            v-else
            :attribute="filter"
            :show-more="true"
            :limit="5"
            :show-more-limit="100"
            :sort-by="sortBy"
          />
        </AccordionItem>
      </AccordionWrap>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AccordionWrap from "./AccordionWrap.vue";
import AccordionItem from "./AccordionItem.vue";
import SelectSets from './SelectSets.vue'
import RangeSlider from './RangeSlider.vue'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import ColorRefinementList from './ColorRefinementList.vue';

@Component({
  components: {
    AccordionWrap,
    AccordionItem,
    SelectSets,
    VueSlider,
    RangeSlider,
    ColorRefinementList
  }
})
export default class AccordionFilter extends Vue {
  filters = ['price', "category", "sizes", "sexe", "sexes", "colors"];

  sortBy = ['count']

  isColorFilter(filter: string) {
    return filter === 'colors'
  }
}
</script>

<style lang="scss">
.filters-container {
  width: 300px;
  @media screen and (max-width: 768px) {
    padding-top: 3rem !important;
  }
}

.ais-RefinementList-showMore,
.ais-ClearRefinements-button {
  padding: .5rem;
  border-radius: 5px;
  border: 0;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: var(--gray-bg-color);
  font-weight: 600;
  font-size: .85em;
}

.ais-RefinementList-showMore {
  margin-top: 1.5em;
  margin-bottom: 0;
}

.ais-RefinementList-showMore:disabled,
.ais-ClearRefinements-button:disabled {
  display: none;
}

ul,
.ais-RefinementList-list {
  list-style: none;
  padding-left: 0;
}


.ais-RefinementList-item {
  font-size: .85rem;
  color: var(--item-color);
  &:hover,
  &.ais-RefinementList-item--selected {
    color: #000;
  }
}

.ais-RefinementList-checkbox {
  height: 1.2em;
  width: 1.2em;
}

.ais-RefinementList-label {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  line-height: 1;
  margin-top: 0.5rem;

  .ais-RefinementList-count {
    margin-left: .5rem;

    &::before {
      content: '(';
    }

    &::after {
      content: ')';
    }
  }
}

.ais-CurrentRefinements-label {
  display: none;
}
.ais-CurrentRefinements-category {
  display: flex;
  justify-content: space-between;
  background-color: var(--element-bg-color);
  padding: .25em 1em;
  border-radius: 5px;
  box-shadow: var(--shadow);
  margin-bottom: .5em;
  color: var(--item-color);
  span::first-letter {
    text-transform: uppercase;
  }
  button {
    color: var(--item-color);
    background-color: transparent;
    border: unset;
  }
}
</style>