<template>
  <div class="d-flex px-0 gap-3">
    <InputNumber />
    <div class="col">
      <button type="submit" class="d-flex align-items-center justify-content-between">
        <span>Finish Configuration</span>
        <i class="fa fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import InputNumber from './InputNumber.vue';

@Component({components: {
  InputNumber
}})
export default class ProductQuantity extends Vue {}
</script>

<style lang="scss" scoped>
button[type=submit] {
  background-color: #000;
  border: none;
  color: #fff;
  padding: 1em 1.75em;
  width: 100%;
  border-radius: 5px;

  i {
    font-size: .75em;
  }
}
</style>