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