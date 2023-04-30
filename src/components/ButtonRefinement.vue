<template>
  <div class="filters-grid">
    <span
      v-for="(item) in items" :key="item.value"
      @click.prevent="refine(item.value)"
      class="size-item animate-wrap"
      :class="{selected: item.isRefined}"
      :title="item.label"
    >
      <transition apear enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
        <label
          class="title scale-up animate__animated"
          :class="{selected: item.isRefined}"
          :key="`title_${item.value}`"
          :for="item.label"
        >
          <ais-highlight attribute="item" :hit="item"/>
          <span class="count">({{ item.count.toLocaleString() }})</span>
        </label>
      </transition>
    </span>
  </div>
</template>

<script lang="ts">
import { Filter } from '@/models/Filter';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ButtonRefinement extends Vue {
  @Prop() items!: Filter[]
  @Prop({
    type: Function
  }) refine
}
</script>

<style lang="scss">
.size-item {
  display: flex;
  justify-content: center;
  align-items: center;
  
  .title {
    padding: 5px;
    border: 1px solid #00000020;
    width: 100%;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    font-size: .8em;
    transition: all .2s;
    .count {
      font-size: .75em;
    }

    &.selected {
      background-color: var(--gray-bg-color);
      color: #00000080;
    }
  }

  &:hover {
    .title {
      transform: scale(1.05);
    }
  }
}
</style>