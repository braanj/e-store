<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './components/NavBar.vue';


export default Vue.extend({
  name: "App",
  components: { NavBar }
})
</script>

<style lang="scss">
:root {
  --border-color: rgba(0, 0, 0, .125);
}

html,
body {
  font-size: 16px;
}
</style>
