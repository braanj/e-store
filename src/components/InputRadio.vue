<template>
  <div class="sets-wrap">
    <small v-if="getSetTitle" class="text-capitalize">
      <span class="d-inline-block fw-bold" v-if="title">{{ title }}:</span> {{ getSetTitle() }}
    </small>
    <div class="sets">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="set-item"
        :class="{ selected: index === selectedSet, 'is-rounded': type === 'circle' }"
        @click="selectSet(index)"
      >
        <transition appear enter-active-class="animate__fadeIn">
          <div class="item animate-wrap" >
            <input :ref="title" type="radio" :name="title" :checked="index === 0" />
            <span class="animate__animated scale-up" :style="{ backgroundColor: getColorHexCode(item) }">
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
import chroma from 'chroma-js'

@Component
export default class InputRadio extends Vue {
  @Prop({
    required: true
  }) items!: []

  @Prop({
    type: String,
    default: 'circle'
  }) type!: 'square' | 'circle'

  @Prop({
    required: false,
  }) title!: string

  selectedSet = 0

  selectSet(index: number) {
    this.selectedSet = index
  }

  getSetTitle() {
    return this.items ? this.items[this.selectedSet] : ''
  }

  displayItemText(name: string) {
    if (this.type === 'square') {
      return name
    }
  }

  getColorHexCode(color: string) {
    const code = this.type === 'circle' ? chroma(color).hex() : ''
    return code
  }
}
</script>

<style lang="scss">
.sets {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;

  .set-item {
    .item {
      position: relative;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 9;
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

    &.is-rounded {
      border-radius: 50px;
      span,
      span::before {
        border-radius: 50px;
      }
    }
  }
}
</style>