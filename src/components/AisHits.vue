<template>
  <div v-if="loading">
    <LoaderSpinner />
  </div>
  <!-- <ais-hits v-else :transform-items="items => filterProductsWithCategory(items)">
    <template slot="item" slot-scope="{ item }">
      <ProductCard v-if="!single" :product="item" />
       <ProductPage v-else :product="item" />
    </template>
  </ais-hits> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ProductPage from './ProductPage.vue';
import ProductCard from './ProductCard.vue';
import LoaderSpinner from './LoaderSpinner.vue';

@Component({
  components: {
    ProductPage,
    ProductCard,
    LoaderSpinner
  },
})

export default class AisHits extends Vue {
  @Prop() single!: boolean

  loading = false

  created() {
    // simulate a delay in fetching products
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  filterProductsWithId(items) {
    return items.filter(item => item.id === this.$route.params.id)
  }
  
  // filterProductsWithCategory(items) {
  //   if (!this.searchable) items = items.filter(item => item.category === this.filter && item.id !== this.$route.params.id)
  //   return items
  // }
}
</script>