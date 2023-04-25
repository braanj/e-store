<template>
  <div class="colors-wrap">
    <small v-if="getColorName" class="text-capitalize">
      <span class="d-inline-block fw-bold">{{ title }}:</span> {{ getColorName() }}
    </small>

    <div class="colors">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="color-item"
        :class="{ selected: index === selectedColor, rounded: type === 'circle' }"
        @click="setColor(index)"
      >
        <transition appear enter-active-class="animate__fadeIn">
          <div class="color-set">
            <input :ref="title" type="radio" :name="title" :checked="index === 0" />
            <span class="animate__animated" :style="{ backgroundColor: item }">
              {{ displayItemText(item) }}
            </span>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ProductColors extends Vue {
  @Prop({
    required: true
  }) items!: []

  @Prop({
    type: String,
    default: 'circle'
  }) type!: 'square' | 'circle'

  @Prop({
    required: true,
  }) title!: string

  selectedColor = 0

  setColor(index: number) {
    this.selectedColor = index
  }

  getColorName() {
    return this.items ? this.items[this.selectedColor] : ''
  }

  displayItemText(name: string) {
    if (this.type === 'square') {
      return name
    }
  }
}
</script>

<style lang="scss">
.colors {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;

  .color-item {
    position: relative;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 999;
      top: 0;
      left: 0;
    }

    span {
      position: absolute;
      border: .5px solid #00000080;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      font-size: .75em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input[type=radio]:checked~span {
      &::before {
        content: '';
        position: absolute;
        width: 25.5px;
        height: 25.5px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border: 1px solid #000000;
      }
    }

    &.rounded {
      span,
      span::before {
        border-radius: 50px;
      }
    }
  }
}
</style>