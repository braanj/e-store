<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterNav />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavBar from './components/NavBar.vue';
import FooterNav from './components/FooterNav.vue';
import { Getter, Action } from 'vuex-class';
import { IConfig } from '@/store/types/Config'

@Component({ components: { NavBar, FooterNav } })

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
