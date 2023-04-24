<template>
  <div class="container mb-5">
    <ProductsList :single="true"/>
  </div>
</template>

<script lang="ts">
import ProductsList from '@/components/ProductsList.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ProductDetails,
    ProductsList
  }
})

export default class ProductView extends Vue {}
</script>