<template>
  <div class="container mb-5">
    <StoreListing :single="true"/>
  </div>
</template>

<script lang="ts">
import StoreListing from '@/components/StoreListing.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    StoreListing
  }
})

export default class ProductView extends Vue {}
</script>