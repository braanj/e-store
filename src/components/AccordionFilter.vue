<template>
  <div class="filters-container px-3">
    <ais-current-refinements />
    <ais-clear-refinements>
      <span slot="resetLabel">Clear all filters</span>
    </ais-clear-refinements>

    <div class="filters">
      <AccordionWrap>
        <AccordionItem v-for="(filter, key) in filters" :key="key" :index="key" :title="filter">

          <template v-if="filter === 'sizes'">
            <ais-range-input attribute="price">
              <template
                v-slot="{
                  currentRefinement,
                  range,
                  canRefine,
                  refine
                }"
              >
                <input
                  type="number"
                  :min="range.min"
                  :max="range.max"
                  :placeholder="range.min"
                  :disabled="!canRefine"
                  :value="formatMinValue(currentRefinement.min, range.min)"
                  @input="refine({
                    min:$event.currentTarget.value,
                    max: formatMaxValue(currentRefinement.max, range.max),
                  })"
                >
                →
                <input
                  type="number"
                  :min="range.min"
                  :max="range.max"
                  :placeholder="range.max"
                  :disabled="!canRefine"
                  :value="formatMaxValue(currentRefinement.max,range.max)"
                  @input="refine({
                    min:formatMinValue(currentRefinement.min, range.min),
                    max: $event.currentTarget.value,
                  })"
                >
              </template>
            </ais-range-input>
          </template>


          <ais-refinement-list :attribute="filter" v-else-if="!isColorFilter(filter)" />

          <ais-refinement-list
            :attribute="filter"
            :sort-by="sortBy"
            show-more
            v-else
          >
            <template
              v-slot="{
                items,
                isShowingMore,
                isFromSearch,
                canToggleShowMore,
                refine,
                toggleShowMore
              }"
            >
              <div class="filters-grid">
                <span v-if="isFromSearch && !items.length">No results.</span>
                <span
                  v-for="item in items" :key="item.value"
                  @click.prevent="refine(item.value)"
                  class="color-item"
                >
                  <span class="color" :style="{ backgroundColor: item.value }">
                    <i :style="`color: ${['black'].includes(item.value) ? '#fff' : '#00000050'}`" class="fi fi-br-check"></i>
                  </span>
                  <label class="title" :for="item.label">
                    <ais-highlight attribute="item" :hit="item"/>
                    ({{ item.count.toLocaleString() }})
                  </label>
                </span>
              </div>
              <button
              class="ais-RefinementList-showMore"
                @click="toggleShowMore"
                :disabled="!canToggleShowMore"
              >
                {{ !isShowingMore ? 'Show more' : 'Show less'}}
              </button>
            </template>
          </ais-refinement-list>

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

@Component({
  components: {
    AccordionWrap,
    AccordionItem,
    SelectSets
  }
})
export default class AccordionFilter extends Vue {
  filters = ["category", "sizes", "sexe", "sexes", "colors"];

  sortBy = ['count']

  isColorFilter(filter: string) {
    return filter === 'colors'
  }

  formatMinValue(minValue, minRange) {
    return minValue !== null && minValue !== minRange ? minValue : '';
  }

  formatMaxValue(maxValue, maxRange) {
    return maxValue !== null && maxValue !== maxRange ? maxValue : '';
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
  color: var(--item-colors);
  font-size: 1.1rem;
  &:hover,
  &.ais-RefinementList-item--selected {
    color: #000;
  }
}

.ais-RefinementList-checkbox {
  height: 18px;
  width: 18px;
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

.filters-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .5em;

  .color-item {
    .color {
      width: 30px;
      height: 30px;
      border-radius: 50px;
      margin: auto;
      border: 1px solid #00000050;

      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: .75em;
        line-height: 1;
      }
    }
    .title {
      display: flex;
      gap: 5px;
      text-transform: capitalize;
      justify-content: center;
      font-size: .65em;
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