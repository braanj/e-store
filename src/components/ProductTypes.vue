<template>
  <div class="option-container">
    <div class="option-select d-flex justify-content-between align-items-center">
      <span class="title">Choose Option</span>
      <i class="fa fa-caret-down"></i>
    </div>

    <div class="options-content">
      <span class="subtitle">Castor Type</span>
      <div class="options-wrap d-flex gap-3">
        <div class="option selected">
          <div class="checkbox">
            <input type="radio" name="type" checked>
            <div class="media">
              <i class="fa fa-check"></i>
            </div>
          </div>
          <span class="title">Hard</span>
          <small>(for Soft floors)</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class ProductTypes extends Vue {
  @Prop() options!: []
}
</script>

<style lang="scss">
.option-container {
  background-color: var(--element-bg-color);
  border-radius: 5px;
  box-shadow: var(--shadow);
}

.option-container {
  padding: 0;

  .options-content,
  .option-select {
    padding: 1em 1.75em;
  }

  .option-select {
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
    width: 100px;
    line-height: normal;

    .media {
      position: relative;
      width: 100px;
      height: 100px;
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