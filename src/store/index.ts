import Vue from "vue";
import Vuex from "vuex";

// modules
import auth from "./modules/auth";

// types
import { Auth } from "./../types/store/auth";

Vue.use(Vuex);

export default new Vuex.Store<{
  auth: Auth;
}>({
  modules: {
    auth,
  },
});
