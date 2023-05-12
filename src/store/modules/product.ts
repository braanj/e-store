import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { IProduct, IProductState } from "@/store/types/Product";

const namespaced = true;

const state: IProductState = {
  product: {
    favorites: [],
  },
};

const getters: GetterTree<IProductState, RootState> = {
  get(st): IProduct | undefined {
    return st.product;
  },
};

const mutations: MutationTree<IProductState> = {
  SET_FAVORITES(st: IProductState, payload: string) {
    const is = st.product.favorites.findIndex((f) => f === payload);
    if (is !== -1) st.product.favorites.splice(is, 1);
    else if (payload != undefined) st.product.favorites.push(payload);
  },
};

const actions: ActionTree<IProductState, RootState> = {
  setFavorites({ commit }, data) {
    return new Promise((resolve) => {
      commit("SET_FAVORITES", data);
      resolve(data);
    });
  },
};

const IProduct: Module<IProductState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default IProduct;
