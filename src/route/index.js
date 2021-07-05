import { createRouter, createWebHashHistory } from "vue-router";

const home = () => import("../pages/home.vue");
const more = () => import("../pages/more.vue");

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: home,
    children: [
      { path: "/1", component: 1 },
      { path: "/2", component: 2 },
      { path: "/3", component: 3 },
      { path: "/4", component: 4 },
    ],
  },
  { path: "/more", component: more },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
