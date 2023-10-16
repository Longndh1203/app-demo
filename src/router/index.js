import Vue from "vue";
import VueRouter from "vue-router";
import auth from "@/middleware/auth";
import log from "@/middleware/log";

Vue.use(VueRouter);

const routes = [
  {
    path: "/addNewUser",
    name: "addNewUser",
    meta: {
      middleware: [auth, log],
    },

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddUser.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      middleware: log,
    },

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/listUser",
    name: "listUser",
    meta: {
      middleware: [auth, log],
    },

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListUser.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) {
    return context.next;
  }

  return (...parametars) => {
    context.next(...parametars);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const context = { from, next, router, to };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});

export default router;
