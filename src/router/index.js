import { createRouter, createWebHashHistory } from "vue-router";

// 路由列表
const routes = [
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/home.vue"),
      },
      {
        path: "/rank",
        name: "rank",
        component: () => import("../views/rank.vue"),
      },
      {
        path: "/playlist",
        name: "playlist",
        component: () => import("../views/playlist.vue"),
      },
      {
        path: "/mvlist",
        name: "mvlist",
        component: () => import("../views/mvlist.vue"),
      },
      {
        path: "/artist",
        name: "artist",
        component: () => import("../views/artist.vue"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/my.vue"),
      },
    ],
  },
];

// 导出路由
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
