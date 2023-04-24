<template>
  <div class="home">
    <ProductsList />
  </div>
</template>

<script lang="ts">
import ProductsList from '@/components/ProductsList.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    ProductsList
  },
})

export default class HomeView extends Vue { }
</script>
