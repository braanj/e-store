<template>
  <ais-refinement-list
    :attribute="filter"
    :sort-by="sortBy"
    show-more
    :show-more-limit="100"
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
          :title="item.label"
        >
          <transition-group apear enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
            <span class="color animate__animated" :key="item.value" :style="{ backgroundColor: item.value }">
              <i :style="`color: ${['black'].includes(item.value) ? '#fff' : '#00000050'}`" v-if="selected" class="fi fi-br-check"></i>
            </span>
            <label class="title animate__animated" :key="item.value" :for="item.label">
              <ais-highlight attribute="item" :hit="item"/>
              ({{ item.count.toLocaleString() }})
            </label>
          </transition-group>
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
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ColorRefinementList extends Vue {
  @Prop() filter!: string
  sortBy = ['count']

  selected = false
}
</script>

<style lang="scss">
.filters-grid {
  display: grid;
  grid-template-columns: repeat(3, .5fr);
  gap: .5em;

  .color-item {
    .color {
      width: 35px;
      height: 35px;
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
      flex-wrap: wrap;
      text-transform: capitalize;
      justify-content: center;
      font-size: .65em;

      span {
        max-width: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>