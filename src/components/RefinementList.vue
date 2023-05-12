<template>
  <div class="filters-container px-3">
    <ais-clear-refinements>
      <span slot="resetLabel" class="animate-wrap">
        <div class="resetLabel scale-up">
          Remove all filters
        </div>
      </span>
    </ais-clear-refinements>

    <div class="filters">
      <RefinementItem v-for="(filter, key) in filters" :key="key" :index="key" :title="filter">

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
              <InputSlider :currentRefinement="currentRefinement" :range="range" :canRefine="canRefine" :refine="refine" />
            </template>
          </ais-range-input>
        </template>

        <ais-refinement-list
          :attribute="filter"
          :sort-by="sortBy"
          show-more
          :show-more-limit="100"
          v-else-if="['colors', 'sizes', 'sexe', 'sexes'].includes(filter)"
        >
          <template
            v-slot="{
              items,
              isShowingMore,
              canToggleShowMore,
              refine,
              toggleShowMore
            }"
          >
            <ColorRefinement :items="items" :refine="refine" v-if="filter === 'colors'"/>
            <ButtonRefinement :items="items" :refine="refine" v-if="filter === 'sizes'"/>
            <ButtonRefinement :items="items" :refine="refine" v-if="['sexe', 'sexes'].includes(filter)"/>

            <div class="animate-wrap">
              <button
                class="ais-RefinementList-showMore scale-up"
                @click="toggleShowMore"
                :disabled="!canToggleShowMore"
              >
                {{ !isShowingMore ? 'Show more' : 'Show less'}}
              </button>
            </div>
          </template>
        </ais-refinement-list>

        <ais-refinement-list
          v-else
          :attribute="filter"
          :show-more="true"
          :limit="5"
          :show-more-limit="100"
          :sort-by="sortBy"
        />
      </RefinementItem>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import RefinementItem from "./RefinementItem.vue";
import InputRadio from './InputRadio.vue'
import InputSlider from './InputSlider.vue'

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'
import ColorRefinement from './ColorRefinement.vue';
import ButtonRefinement from './ButtonRefinement.vue';

@Component({
  components: {
    RefinementItem,
    InputRadio,
    VueSlider,
    InputSlider,
    ColorRefinement,
    ButtonRefinement
  }
})
export default class RefinementList extends Vue {
  filters = ['price', "category", "sizes", "sexe", "sexes", "colors"]
  sortBy = ['count']
}
</script>

<style lang="scss">
.filters-container {
  width: 300px;
  @media screen and (max-width: 768px) {
    padding-top: 3rem !important;
  }
}

.ais-ClearRefinements-button {
  width: 100%;
  background-color: transparent;
  border: unset;
}
.ais-RefinementList-showMore,
.resetLabel {
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
  color: var(--item-color);
  &:hover {
    transform: scale(1.05);
  }
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
  color: #000;
  &:hover,
  &.ais-RefinementList-item--selected {
    color: var(--item-color);
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