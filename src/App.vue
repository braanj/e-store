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
  @Action("setMobile", { namespace: "config" }) setMobile!: (param: boolean) => void;

  onResize() {
    this.setMobile(window.innerWidth <= 768)
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
}

html,
body {
  font-size: 16px;
}

#app {
  position: relative;
}

.backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #efefef;
  z-index: 9;
  top: 0;
}
</style>
