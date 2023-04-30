<template>
  <div id="app">
    <StoreNavigation />
    <router-view :key="$route.fullPath" />
    <StoreFooter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import StoreNavigation from './components/StoreNavigation.vue';
import StoreFooter from './components/StoreFooter.vue';
import { Getter, Action } from 'vuex-class';
import { IConfig } from '@/store/types/Config'

@Component({ components: { StoreNavigation, StoreFooter } })

export default class App extends Vue {

  @Getter('get', { namespace: 'config' }) config!: IConfig
  @Action("setMobile", { namespace: "config" }) setMobile!: (param: number) => void;

  onResize() {
    this.setMobile(window.innerWidth)
  }

  mounted(): void {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>
