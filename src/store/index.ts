import Vue from "vue";
import Vuex from "vuex";

// types
import { ListItem } from "@/types/pages";

Vue.use(Vuex);

export default new Vuex.Store<{
  orders: ListItem[];
}>({
  state: {
    orders: [
      {
        name: "Livi優活 抽取式衛生紙(100抽x10包x10串/箱)",
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        status: {
          code: 3,
          type: "已取消",
        },
        date: "2018/6/12",
      },
      {
        name: "BALMUDA The Toaster 百慕達烤麵包機-黑色",
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        status: {
          code: 2,
          type: "已成立",
        },
        date: "2019/7/21",
      },
      {
        name: "贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...",
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        status: {
          code: 1,
          type: "處理中",
        },
        date: "2019/6/2",
      },
      {
        name: "Apple AirPds 2",
        logo: "https://static.oopocket.com/store/iconTreemall@3x.png",
        status: {
          code: 4,
          type: "已送達",
        },
        date: "2019/3/02",
      },
    ],
  },
  mutations: {
    ADD_ORDER(state, payload: ListItem[]): void {
      state.orders = [...state.orders, ...payload];
    },
  },
  actions: {
    addOrder({ commit }, payload: ListItem[]): void {
      commit("ADD_ORDER", payload);
    },
  },
  getters: {
    orders(state): ListItem[] {
      return state.orders.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    },
  },
});
