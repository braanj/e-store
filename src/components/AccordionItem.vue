<template>
  <div class="filter-set">
    <span class="filter-header" :id="'header_' + title">
      <span>{{ title }}</span>
    </span>

    <transition apear enter-active-class="animate__slideInDown" leave-active-class="animate__slideOutUp">
      <div class="animate__animated" :id="'tab_' + title">
        <div class="filter-items">
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

  toggled = true
}
</script>

<style lang="scss">
.filter-set {
  overflow: hidden;
  border: 0;
  width: 100%;
  

  .filter-header {
    text-transform: uppercase;
    padding: .75em 1em;
    font-size: .85em;
    opacity: .8;
    background-color: var(--element-bg-color);
  }

  .filter-items {
    padding: .75em 1em;
    background-color: var(--element-bg-color);
  }
}

</style>
