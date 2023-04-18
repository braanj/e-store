import { Module, ActionTree, MutationTree, GetterTree } from "vuex";
import { RootState } from "@/store/types";
import { IConfig, IConfigState } from "@/store/types/Config";

const namespaced = true;

const state: IConfigState = {
  config: {
    isMobile: false
  },
};

const getters: GetterTree<IConfigState, RootState> = {
  get(st): IConfig | undefined {
    return st.config;
  },
};

const mutations: MutationTree<IConfigState> = {
  SET_MOBILE(st: IConfigState, payload): void {
    st.config.isMobile = payload
  },
};

const actions: ActionTree<IConfigState, RootState> = {
  setMobile({ commit }, data) {
    return new Promise((resolve) => {
      commit("SET_MOBILE", data);
      resolve(data);
    });
  },
};

const IConfig: Module<IConfigState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default IConfig;