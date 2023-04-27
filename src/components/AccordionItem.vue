<template>
  <div class="accordion-item">
    <span class="accordion-header" :id="'header_' + title">
      <button class="accordion-button collapsed border-bottom" type="button" @click="toggled = !toggled">
        <span>{{ title }}</span>
      </button>
    </span>

    <transition apear enter-active-class="animate__slideInDown" leave-active-class="animate__slideOutUp">
    <div class="animate__animated" :id="'tab_' + title" v-if="toggled">
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class AccordionItem extends Vue {
  @Prop() title!: string
  @Prop() index!: number

  toggled = false
}
</script>

<style lang="scss">
.accordion-item {
  overflow: hidden;
  border: 0;
  border-bottom: 2px solid var(--body-bg-color);
  background-color: transparent;

  .accordion-header {
    .accordion-button {
      text-transform: uppercase;

      &:focus {
        border-color: unset;
        outline: 0;
        box-shadow: none;
      }

      &::after {
        display: none;
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

  .accordion-body {
    background-color: var(--element-bg-color);
  }
}

</style>
