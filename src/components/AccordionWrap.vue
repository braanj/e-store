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
  box-shadow: var(--shadow);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: .25em;
}
</style>