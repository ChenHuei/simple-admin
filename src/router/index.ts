import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/",
    name: "Default",
    component: () =>
      import(/* webpackChunkName: "Default" */ "../layout/Default.vue"),
    beforeEnter: (to, form, next) => {
      store.state.isAuthorization ? next() : next("login");
    },
    children: [
      {
        path: "",
        name: "List",
        component: () =>
          import(/* webpackChunkName: "List" */ "../views/List.vue"),
      },
      {
        path: "/add",
        name: "Add",
        component: () =>
          import(/* webpackChunkName: "Add" */ "../views/Add.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
