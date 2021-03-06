import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

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
    component: () =>
      import(/* webpackChunkName: "Default" */ "../layout/Default.vue"),
    beforeEnter: (to, form, next) => {
      localStorage.getItem("isAuthorization") === "true"
        ? next()
        : next("login");
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
