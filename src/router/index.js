import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/addNewUser",
    name: "addNewUser",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddUser.vue"),
  },
  {
    path: "/login",
    name: "login",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/listUser",
    name: "listUser",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListUser.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
