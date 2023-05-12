<template>
  <div class="input-slider">
    <span>{{ value[0] }} {{ currency }}</span>
    <vue-slider
      v-if="canRefine"
      v-model="value"
      :min="min"
      :max="max"
      @change="refine({min: value[0], max: value[1]})"
      :enableCross="false"
    >
    </vue-slider>
    <span>{{ value[1] }} {{ currency }}</span>
  </div>
</template>

<script lang="ts">
import { Range } from '@/models/Range';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

@Component({
  components: {
    VueSlider
  }
})
export default class InputSlider extends Vue {
  @Prop() canRefine!: boolean
  @Prop() range!: Range
  @Prop({
    type: Function
  }) refine
  @Prop() currentRefinement!: object

  currency = '€'
  
  // Initialize the vue slider value
  value = [0, 0]

  // Initialize vue slider min and max
  min = 0
  max = 0

  /**
   * Runs when the component is created.
   * Sets the `value` property to an array of values extracted from `range` object.
   * Sets the `min` property to the `min` value of `range` object.
   * Sets the `max` property to the `max` value of `range` object.
   */
  created() {
    this.value = Object.keys(this.range).map((key) => this.range[key])
    this.min = this.range.min
    this.max = this.range.max
  }
  
  /**
   * Watcher for changes to the `currentRefinement` property.
   * @param {Object} newVal - The new value of the `currentRefinement` property.
   */
  @Watch('currentRefinement')
  onCurrentRefinementChanged(newVal: object) {

    // Extracts an array of booleans indicating whether each value in `newVal` is defined.
    const hasCurrentValues = Object.values(newVal).map(val => val !== undefined)

    // If neither value in `currentRefinement` is defined, set `value` to `[min, max]`.
    if (!hasCurrentValues[0] && !hasCurrentValues[1]) {
      this.value = [this.min, this.max]
    }
  }
}
</script>

<style lang="scss">
.input-slider {
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
