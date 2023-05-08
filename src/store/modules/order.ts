import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { IOrder, IOrderState } from "@/store/types/Order";
import { Product } from "@/models/Product";

const namespaced = true;

const state: IOrderState = {
  cart: {
    orders: [],
  },
};

const getters: GetterTree<IOrderState, RootState> = {
  get(st): IOrder | undefined {
    return st.cart;
  },
};

const mutations: MutationTree<IOrderState> = {
  SET_ORDER(st: IOrderState, payload: Product) {
    const is = st.cart.orders.findIndex((f) => f === payload);
    if (is === -1 && payload != undefined) st.cart.orders.push(payload);
  },
  REMOVE_ORDER(st: IOrderState, payload: Product) {
    const is = st.cart.orders.findIndex((f) => f === payload);
    if (is !== -1 && payload != undefined) st.cart.orders.splice(is, 1);
  },
};

const actions: ActionTree<IOrderState, RootState> = {
  setOrder({ commit }, data) {
    return new Promise((resolve) => {
      commit("SET_ORDER", data);
      resolve(data);
    });
  },
  removeOrder({ commit }, data) {
    return new Promise((resolve) => {
      commit("REMOVE_ORDER", data);
      resolve(data);
    });
  },
};

const IOrder: Module<IOrderState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default IOrder;
