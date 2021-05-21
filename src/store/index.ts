import Vue from "vue";
import Vuex from "vuex";

// types
import { Store } from "../types/store";

Vue.use(Vuex);

export default new Vuex.Store<Store>({
  state: {
    isAuthorization: localStorage.getItem("isAuthorization") === "true",
  },
  mutations: {
    SET_IS_AUTHORIZATION(state, payload: boolean) {
      state.isAuthorization = payload;
      localStorage.setItem("isAuthorization", payload.toString());
    },
  },
  actions: {
    setIsAuthorization({ commit }, payload: boolean): void {
      commit("SET_IS_AUTHORIZATION", payload);
    },
  },
});
