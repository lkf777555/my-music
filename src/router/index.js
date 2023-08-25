import { createRouter, createWebHashHistory } from "vue-router";

// 路由列表
const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/home",
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home/index.vue"),
      },
      {
        path: "/rank",
        name: "rank",
        component: () => import("../views/rank/index.vue"),
      },
      {
        path: "/playlist",
        name: "playlist",
        component: () => import("../views/playlist/index.vue"),
      },
      {
        path: "/mvlist",
        name: "mvlist",
        component: () => import("../views/mvlist/index.vue"),
      },
      {
        path: "/artist",
        name: "artist",
        component: () => import("../views/artist/index.vue"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/my/index.vue"),
      },
    ],
  },
];

// 导出路由
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
