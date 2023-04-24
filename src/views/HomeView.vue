<template>
  <div class="home">
    <InstantSearch />
  </div>
</template>

<script lang="ts">
import InstantSearch from '@/components/InstantSearch.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    InstantSearch
  },
})

export default class HomeView extends Vue { }
</script>
