<template>
  <div class="accordion" id="accordion-wrap">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class AccordionWrap extends Vue {}
</script>

<style lang="scss">
.accordion {
  box-shadow: var(--body-bg-color) 0px 4px 12px;
  border-radius: 5px;
  overflow: hidden;
}
</style>