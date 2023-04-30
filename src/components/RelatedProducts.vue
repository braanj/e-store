<template>
  <div class="related-products pt-5">
    <div class="mb-4">
      <h3>Related products</h3>
    </div>
    <StoreListing :searchable="false" :productsPerPage="8" :filter="product.category"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '@/models/Product';

@Component({
  components: {
    StoreListing: () => import('./StoreListing.vue'),
  },
})

export default class RelatedProducts extends Vue {
  @Prop() product!: Product
}
</script>