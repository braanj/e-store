<template>
  <div class="accordion-item filter-item">
    <span class="accordion-header" :id="'header_' + title">
      <button class="accordion-button" :class="{ 'collapsed': index !== 0 }" type="button" data-bs-toggle="collapse"
        :data-bs-target="'#tab_' + title" :aria-expanded="!index ? 'true' : 'false'" :aria-controls="'tab_' + title">
        <span>{{ title }}</span>
      </button>
    </span>

    <div :id="'tab_' + title" class="accordion-collapse collapse" :class="{ 'show': index === 0 }"
      :aria-labelledby="'header_' + title" data-bs-parent="#filters-accordion">
      <div class="accordion-body border-top">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class FilterItem extends Vue {
  @Prop() title!: string
  @Prop() index!: number


}
</script>

<style lang="scss">
.accordion-item {
  .accordion-header {
    .accordion-button {
      &:focus {
        border-color: unset;
        outline: 0;
        box-shadow: none;
      }

      &:not(.collapsed) {
        background-color: transparent;
        color: inherit;
      }

      span::first-letter {
        text-transform: uppercase;
      }
    }
  }
}
</style>