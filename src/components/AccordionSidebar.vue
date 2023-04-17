<template>
  <transition appear enter-active-class="animate__fadeInLeft" leave-active-class="animate__fadeOutRight">
    <div class="animate__animated filters-container" id="filters-toggle"
      :class="{ mobile: config.isMobile }">
      <div class="content">
        <button class="close">
          <i class="fa fa-times"></i>
        </button>
        <!-- <slot></slot> -->
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { IConfig } from '@/store/types/Config';
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import 'animate.css';

@Component
export default class AccordionSidebar extends Vue {
  @Getter('get', { namespace: 'config' }) config!: IConfig

  close() {
    console.log('Test');
    this.$emit('close')
  }
}
</script>

<style lang="scss">
.filters-container {
  width: 300px;

  .close {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
  }

  &.mobile {
    position: absolute;
    top: 0;
    z-index: 99;
    background-color: #7b7b7b50;
    display: flex;
    padding: 0;
    width: 100%;
    display: none;

    &.show {
      display: block;
    }

    .content {
      position: relative;
      height: 100vh;
      overflow: auto;
      width: 300px;
      padding: 1rem;
      padding-top: 4rem;
      background-color: #ffffff;
    }

    .close {
      display: block;
    }
  }
}
</style>