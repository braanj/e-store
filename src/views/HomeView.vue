<template>
  <div class="home">
    <StoreListing />
  </div>
</template>

<script lang="ts">
import StoreListing from '@/components/StoreListing.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    StoreListing
  },
})

export default class HomeView extends Vue { }
</script>
