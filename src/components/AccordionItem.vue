<template>
  <div class="accordion-item">
    <span class="accordion-header" :id="'header_' + title">
      <button class="accordion-button" :class="{ 'collapsed': index !== 0 }" type="button">
        <span>{{ title }}</span>
      </button>
    </span>

    <div :id="'tab_' + title" class="accordion-collapse collapse" :class="{ 'show': index === 0 }">
      <div class="accordion-body border-top">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class AccordionItem extends Vue {
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