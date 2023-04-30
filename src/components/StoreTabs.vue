<template>
  <div class="tabs mt-5" :class="{ 'd-flex': variant === 'horizontal' }" v-if="tabList.length > 0">
    <ul class="tab-nav" :class="{ 'd-flex': variant === 'vertical' }">
      <li class="tab-item" v-for="(tab, index) in tabList" :key="index" :class="{ active: isTabActive(index) }" @click="changeTab(index)">
        {{ tab }}
      </li>
    </ul>

    <transition enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
      <template v-for="(tab, index) in tabList">
        <div class="tab-content animate__animated" :key="index" v-if="isTabActive(index)">
          <slot :name="`tabPanel-${index + 1}`"></slot>
        </div>
      </template>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import "animate.css";

@Component
export default class StoreTabs extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: []
  }) tabList!: []

  @Prop({
    type: String,
    required: false,
    default: () => "vertical",
    validator: (value: string) => ["horizontal", "vertical"].includes(value)
  }) variant!: string

  activeTab = 0
  tabId = 0

  changeTab(index: number) {
    this.activeTab = index
  }

  isTabActive(index: number) {
    return this.activeTab === index
  }
}
</script>

<style lang="scss">
$border: 2px solid var(--body-bg-color);

.tabs {
  overflow: hidden;
}

.tab-nav {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
  &:not(:last-child) {
    label {
      border-right: $border;
    }
  }
  .tab-item {
    color: var(--item-color);
    padding: 1em 1.5em;
    background-color: var(--gray-bg-color);
    border-bottom: $border;
    
    &.active {
      color: #000;
      background-color: var(--element-bg-color);
    }

    input[type=radio] {
      display: none;
    }
  }
}

.tab-content {
  padding: 1.5em;
  background-color: var(--element-bg-color);
  border-radius: 5px;
  box-shadow: var(--shadow);
  ul {
    padding-left: 1em;
    margin-top: 1em;

    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    li {
      width: 45%;
    }
  }

  br {
    display: block;
    margin-top: .75em;
  }
}

.animate__fadeOut {
  display: none;
}

@media screen and (max-width: 992px) {
  .tab-content {
    ul {
      li {
        width: 100%;
      }
    }
  }
}

</style>
