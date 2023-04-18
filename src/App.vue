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
:root {
  --border-color: rgba(0, 0, 0, .125);
  --body-bg-color: #f3f3f6;
  --element-bg-color: #fcfcfc;
  --item-color: #82858d;
  --gray-bg-color: #e7e7eb;
}

html,
body {
  font-size: 16px;
  background-color: var(--body-bg-color);
}

#app {
  position: relative;
}
</style>
