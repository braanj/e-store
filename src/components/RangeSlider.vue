<template>
  <div class="slider">
    <span>{{ range.min }}</span>
    <vue-slider
      v-if="canRefine"
      v-model="value"
      :min="range.min"
      :max="range.max"
      @change="refine({min: value[0], max: value[1]})"
      :enableCross="false"
    >
    </vue-slider>
    <span>{{ range.max }}</span>
  </div>
</template>

<script lang="ts">
import { Range } from '@/models/Range';
import { Vue, Component, Prop } from 'vue-property-decorator';

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

@Component({
  components: {
    VueSlider
  }
})
export default class RangeSlider extends Vue {
  @Prop() canRefine!: boolean
  @Prop() range!: Range
  @Prop({
    type: Function
  }) refine
  
  value = [0, 100]
  rangeConverted = false

  mounted() {
    this.value = Object.keys(this.range).map((key) => this.range[key])
  }
}
</script>

<style lang="scss">
.slider {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 15px;
  align-items: center;
  span {
    font-size: .75em;
    line-height: 1;
  }
}
</style>
