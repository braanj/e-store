<template>
  <button
    class="favorites"
    @click.prevent="setFavorites(id)"
  >
    <i
      v-if="!store.favorites.includes(id)"
      class="fa fa-heart-o"
    ></i>
    <i
      v-else
      class="fa fa-solid fa-heart"
    ></i>
  </button>
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