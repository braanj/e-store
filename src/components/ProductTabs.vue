<template>
  <div class="tabs">
    <nav class="tabs__navigation">
      <button
        class="tabs__navigation-item"
        :class="{ active: selectedTab === tab }"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectedTab = tab"
      >{{ tab }}</button>
    </nav>

    <div class="tabs__content">
      <div
        class="tabs__content-item"
        v-for="(info, index) in infos" :key="index"
        :class="{ active: info.title === selectedTab }"
      >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '@/models/Product';

@Component
export default class ProductDetails extends Vue {
  @Prop() product!: Product

  tabs = []
  selectedTab = 'Novazeo'

}
</script>