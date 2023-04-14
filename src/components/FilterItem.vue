<template>
  <div class="filter-item">
    <a class="title px-3 py-2 border-bottom" data-bs-toggle="collapse" :href="'#tab_' + title" role="button"
      aria-expanded="false" :aria-controls="'tab_' + title">
      <span>
        {{ title }}
      </span>
      <i class="fa fa-chevron-down" aria-hidden="true"></i>
    </a>

    <div class="row">
      <div class="col">
        <div class="border-bottom filters-list p-3 collapse multi-collapse" :id="'tab_' + title">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class FilterItem extends Vue {
  @Prop() title!: string
}
</script>

<style lang="scss">
.filter-item {
  .title {
    background-color: #ffffff;
    color: inherit;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    
    span::first-letter {
      text-transform: uppercase;
    }

    i {
      font-size: .75rem;
    }
  }

  .filters-list {
    background-color: #ffffff;
  }
}
</style>