<template>
  <div class="mt-5" :class="{ flex: variant === 'horizontal' }" v-if="tabList.length > 0">
    <ul class="tab-nav" :class="{ flex: variant === 'vertical' }">
      <li class="tab-item" v-for="(tab, index) in tabList" :key="index" :class="{ active: index + 1 === activeTab }">
        <label :for="`${tabId}${index}`" v-text="tab" />
        <input :id="`${tabId}${index}`" type="radio" :name="`${tabId}-tab`" :value="index + 1" v-model="activeTab" />
      </li>
    </ul>

    <transition enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut">
      <template v-for="(tab, index) in tabList">
        <div class="tab-content animate__animated" :key="index" v-if="index + 1 === activeTab">
          <slot :name="`tabPanel-${index + 1}`" />
        </div>
      </template>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import "animate.css";

@Component
export default class AppTabs extends Vue {
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

  activeTab = 1
  tabId = 0

  mounted() {
    this.tabId++
  }
}
</script>

<style lang="scss">
$border: 2px solid var(--body-bg-color);

.flex {
  display: flex;
}

.animate__animated {
  animation-duration: 0.5s;
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
    label {
      padding: 1em 1.5em;
      background-color: var(--gray-bg-color);
      border-bottom: $border;

    }
    
    &.active {
      color: #000;
      label {
        background-color: var(--element-bg-color);
      }
    }

    input[type=radio] {
      display: none;
    }
  }
}

.tab-content {
  padding: 1.5em;
  background-color: var(--element-bg-color);
  ul {
    list-style-position: inside;
    padding-left: 0;
    margin-top: 1em;

    display: flex;
    flex-wrap: wrap;
    gap: 1em;

    li {
      width: 45%;
      min-width: 300px;
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
