<template>
  <div class="option-container">
    <div class="option-select d-flex justify-content-between align-items-center" @click="toggleContent">
      <span class="title">{{ title }}</span>
      <i class="fa fa-caret-down"></i>
    </div>

    <transition
      appear
      enter-active-class="animate__slideInDown"
      leave-active-class="animate__slideOutUp"
      >
      <div class="animate__animated" v-if="showContent">
        <div v-for="(option, index) in options" :key="index" class="options-content">
          <span class="subtitle">{{ option.title }}</span>
          <div class="d-flex gap-3 flex-wrap">
            <div v-for="(item, index) in option.items" :key="index" class="option">
              <div class="checkbox">
                <input type="radio" :name="option.title" :checked="index === 0">
                <div class="media">
                  <i class="fa fa-check"></i>
                </div>
              </div>
              <span class="title">{{ item.title }}</span>
              <small>{{ item.subtitle }}</small>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Option } from '@/models/Product';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class ProductTypes extends Vue {
  @Prop({
    default: 'Choose Option'
  }) title!: string

  @Prop() options!: Option[]

  @Prop({
    default: true
  }) toggle!: boolean

  showContent = true

  toggleContent() {
    this.showContent = !this.showContent
  }

  mounted() {
    this.showContent = this.toggle
  }
}
</script>

<style lang="scss">
.option-container {
  border-radius: 5px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.option-container {
  padding: 0;
  
  .options-content,
  .option-select {
    padding: 1em 1.75em;
    background-color: var(--element-bg-color);
    position: relative;
  }

  .option-select {
    z-index: 99;
    border-bottom: 2px solid var(--body-bg-color);

    i {
      color: var(--item-color);
    }
  }

  .options-content {
    .options-wrap {
      padding-bottom: 1.75em;
    }

    &:not(:last-of-type) {
      .options-wrap {
        padding-bottom: 1.75em;
        border-bottom: 2px solid var(--body-bg-color);
      }
    }
  }

  .option {
    margin-top: 1em;
    text-align: center;
    width: 80px;
    line-height: normal;

    .media {
      position: relative;
      width: 80px;
      height: 80px;
      background-color: var(--body-bg-color);
      border-radius: 5px;
      margin-bottom: .6em;
      pointer-events: none;

      i {
        position: absolute;
        right: -10px;
        top: -10px;
        color: #fff;
        background-color: #000;
        padding: 7px;
        border-radius: 50px;
        font-size: .4em;
        display: none;
      }
    }

    small {
      font-size: .75em;
      color: var(--item-color);
    }

    .checkbox {
      position: relative;
    }

    input[type=radio] {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 0;
      z-index: 9;
      opacity: 0;
    }

    input[type=radio]:checked~.media {
      border: 2px solid #000;

      i {
        display: block;
      }
    }
  }
}

span {
  display: block;
  font-weight: 600;
}

.subtitle {
  color: var(--item-color);
  text-transform: uppercase;
  font-size: .75em;
}
</style>