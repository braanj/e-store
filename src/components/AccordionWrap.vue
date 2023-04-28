<template>
  <div class="filters">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class AccordionWrap extends Vue {}
</script>

<style lang="scss">
.filters {
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: .25em;
}
</style>