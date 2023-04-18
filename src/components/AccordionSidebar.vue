<template>
  <div
    class="accordion-sidebar p-0"
    :class="{ mobile: config.isMobile }"
  >
    <div
      class="back"
      @click="close"
    ></div>
    <transition
      appear
      enter-active-class="animate__fadeInLeft"
      leave-active-class="animate__fadeOutLeft"
      ><div
        v-if="showContent"
        class="content animate__animated"
      >
        <button
          class="close"
          @click="close"
        >
          <i class="fa fa-times"></i>
        </button>
        <AccordionFilter />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { IConfig } from "@/store/types/Config";
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";
import "animate.css";
import AccordionFilter from "./AccordionFilter.vue";

@Component({ components: { AccordionFilter } })
export default class AccordionSidebar extends Vue {
  @Getter("get", { namespace: "config" }) config!: IConfig;

  showContent = true;
  close() {
    this.showContent = false;
    setTimeout(() => this.$emit("close"), 500);
  }
}
</script>

<style lang="scss">
.accordion-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: #21252960;
  }

  .back {
    background-color: #7b7b7b50;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    position: relative;
    height: 100%;
    overflow: auto;
    width: 300px;
    max-width: 90%;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    animation-duration: 0.5s;
  }
}
</style>
