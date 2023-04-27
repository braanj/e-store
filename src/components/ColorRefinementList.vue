<template>
  <div class="filters-wrap" v-if="filter === 'colors'">
    <span v-for="item in items" :key="item.value" :href="createURL(item)" :style="{ backgroundColor: item.value }"
      @click.prevent="refine(item.value)" class="filter-item">
      <ais-highlight attribute="item" :hit="item" />
      <span>({{ item.count.toLocaleString() }})</span>
    </span>
  </div>
</template>