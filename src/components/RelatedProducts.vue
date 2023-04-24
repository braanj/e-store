<template>
  <div class="pt-5">
    <div class="mb-4">
      <h3>Related products</h3>
    </div>
    <InstantSearch :searchable="false" :productsPerPage="8"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '@/models/Product';
import InstantSearch from './InstantSearch.vue';

@Component({
  components: {
    InstantSearch,
  },
})

export default class RelatedProducts extends Vue {
  @Prop() product!: Product
}
</script>