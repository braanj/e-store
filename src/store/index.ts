import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
// import createPersistedState from "vuex-persistedstate";

import { RootState } from "./types";
import modules from "./modules";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  // plugins: [createPersistedState({ key: "lite" })],
  strict: process.env.NODE_ENV !== "production",
  modules,
};

export default new Vuex.Store(store);