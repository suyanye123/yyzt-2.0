import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/Home0", //重定向
  },
  {
    path: "/Home0",
    name: "Home0",
    component: () => import("../views/Home0.vue"),
  },
  {
    path: "/Home1",
    name: "Home1",
    component: () => import("../views/Home1.vue"),
  },
  {
    path: "/Home2",
    name: "Home2",
    component: () => import("../views/Home2.vue"),
  },
  {
    path: "/Pic",
    name: "Pic",
    component: () => import("../pic/Pic.vue"),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
