<template>
  <div class="home">
    <GridLayout />
  </div>
</template>

<script lang="ts">
import GridLayout from '@/components/GridLayout.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    GridLayout
  },
})

export default class HomeView extends Vue { }
</script>
