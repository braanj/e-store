<template>
  <transition appear enter-active-class="animate__fadeIn" leave-active-class="animate__slideOutUp">
    <button class="favorites animate-wrap animate__animated" @click.prevent="setFavorites(id)">
      <i v-if="!store.favorites.includes(id)" class="fa fa-heart-o scale-up"></i>
      <i v-else class="fa fa-solid fa-heart scale-up"></i>
    </button>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { IProduct } from "@/store/types/Product.js";

@Component
export default class FavoriteButton extends Vue {
  @Prop() id!: string

  @Getter("get", { namespace: "product" }) store!: IProduct;
  @Action("setFavorites", { namespace: "product" }) setFavorites!: (
    param: string
  ) => void;
}
</script>

<style lang="scss">
.favorites {
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  background-color: var(--body-bg-color);
  border: unset;
  &:hover {
    i {
      transform: scale(1.1);
    }
  }
}
</style>
