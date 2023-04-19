<template>
  <div class="variant-container align-items-center">
    <span class="subtitle">{{ title }}</span>
    <select name="variant" class="select">
      <option v-for="(option, key) in options" :key="key">{{ option }}</option>
    </select>
    <i class="fa fa-pencil"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ProductVariant extends Vue {
  @Prop() title!: string
  @Prop() options!: []
}
</script>

<style lang="scss">
.variant-container {
  background-color: var(--element-bg-color);
  border-radius: 5px;
  box-shadow: var(--shadow);
  padding: 1em 1.75em;
  position: relative;

  .select {
    border: none;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    background-color: transparent;
  }

  .subtitle {
    position: absolute;
    top: 10px;
  }

  i {
    position: absolute;
    right: 10px;
    width: auto;
    color: var(--item-color);
    pointer-events: none;
    background-color: #fff;
    padding: 10px;
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