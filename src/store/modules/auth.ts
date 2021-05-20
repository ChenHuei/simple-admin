import Vue from "vue";
import Vuex from "vuex";

// types
import { Auth } from "@/types/store/auth";

Vue.use(Vuex);

export default new Vuex.Store<Auth>({
  state: {
    isAuthorization: false,
  },
  mutations: {
    SET_IS_AUTHORIZATION(state, payload: boolean) {
      state.isAuthorization = payload;
    },
  },
  actions: {
    setIsAuthorization({ commit }, payload: boolean): void {
      commit("SET_IS_AUTHORIZATION", payload);
    },
  },
});
