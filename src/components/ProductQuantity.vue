<template>
  <div class="d-flex px-0 gap-3">
    <div class="col-3 quantity">
      <div class="quantity-nav">
        <div class="quantity-button quantity-up" @click="count++">
          <i class="fi fi-br-caret-up"></i>
        </div>
        <div class="quantity-button quantity-down" @click="count--">
          <i class="fi fi-br-caret-down"></i>
        </div>
      </div>
      <input type="number" name="quantity" min="1" :value="getValue()">
    </div>
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

@Component
export default class ProductQuantity extends Vue {
  count = 1

  getValue() {
    if (this.count <= 0) {
      this.count = 1;
    }
    return this.count;
  }
}
</script>

<style lang="scss" scoped>
$border: 2px solid #eee;

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

.quantity {
  position: relative;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
{
  -webkit-appearance: none;
  margin: 0;
}

input[type=number]
{
  -moz-appearance: textfield;
}

.quantity input {
  width: 100%;
  height: 100%;
  line-height: 1.65;
  float: left;
  display: block;
  padding: 0;
  margin: 0;
  padding-right: 30px;
  border: $border;
  text-align: center;
  border-radius: 5px;
}

.quantity input:focus {
  outline: 0;
}
.quantity-nav {
  float: right;
  position: relative;
  height: 100%;
}

.quantity-button {
  position: relative;
  cursor: pointer;
  border-left: $border;
  width: 30px;
  text-align: center;
  color: var(--item-color);
  font-size: 13px;
  line-height: 1.7;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-button.quantity-up {
  position: absolute;
  height: 50%;
  top: 0;
  border-bottom: $border;
}

.quantity-button.quantity-down {
  position: absolute;
  bottom: -1px;
  height: 50%;
}
</style>