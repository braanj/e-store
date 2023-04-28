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
          v-for="(item) in items" :key="item.value"
          @click.prevent="refine(item.value)"
          class="color-item animate-wrap"
          :class="{selected: item.isRefined}"
          :title="item.label"
        >
          <transition-group apear enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
            <span class="color-wrap animate__animated" :key="`color_${item.value}`">
              <div class="color scale-up" :style="{ backgroundColor: item.value }">
                <transition apear enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
                  <i
                    :style="`color: ${getContrastColor(item.value)}`"
                    v-if="item.isRefined"
                    class="animate__animated fi fi-br-check"
                  ></i>
                </transition>
            </div>
            </span>
            <label class="title animate__animated" :key="`title_${item.value}`" :for="item.label">
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
import { Vue, Component, Prop } from 'vue-property-decorator'
import chroma from 'chroma-js'

@Component
export default class ColorRefinementList extends Vue {
  @Prop() filter!: string
  sortBy = ['count']

  getContrastColor = (
    bgColor,
    lightColor = '#ffffff',
    darkColor = '#000000'
  ) => {
    if (this.isValidColor(bgColor)) {
      bgColor = chroma(bgColor).rgb()
    }
    return bgColor[0] * 0.299 + bgColor[1] * 0.587 + bgColor[2] * 0.114 > 186 || !this.isValidColor(bgColor)
      ? darkColor
      : lightColor;
  };

  isValidColor(color) {
    return chroma.valid(color)
  }
}
</script>

<style lang="scss">
.filters-grid {
  display: grid;
  grid-template-columns: repeat(3, .5fr);
  gap: .5em;

  .color-item {
    .color-wrap {
      position: relative;
      width: 35px;
      height: 35px;
      margin: auto;
      
      .color {
        position: absolute;
        min-width: 100%;
        min-height: 100%;
        border-radius: 50px;
        border: 1px solid #00000020;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .1s ease-in-out;
      }
      
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
      margin-top: 5px;
      transition: all .2s ease-in-out;

      span {
        max-width: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &:hover {
      .color {
        transform: scale(1.1);
      }
      .title {
        opacity: .5;
      }
    }
  }
}

</style>