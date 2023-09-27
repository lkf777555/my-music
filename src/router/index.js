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
                meta: {
                    title: "首页",
                },
            },
            {
                path: "/rank",
                name: "rank",
                component: () => import("../views/rank/index.vue"),
                meta: {
                    title: "排行榜",
                },
            },
            {
                path: "/playlist",
                name: "playlist",
                component: () => import("../views/playlist/index.vue"),
                meta: {
                    title: "歌单",
                },
            },
            {
                path: "/mvlist",
                name: "mvlist",
                component: () => import("../views/mvlist/index.vue"),
                meta: {
                    title: "MV",
                },
            },
            {
                path: "/artist",
                name: "artist",
                component: () => import("../views/artist/index.vue"),
                meta: {
                    title: "歌手",
                },
            },
            {
                path: "/my",
                name: "my",
                component: () => import("../views/my/index.vue"),
                meta: {
                    title: "我的",
                },
            },
            {
                path: "/sheetDetails",
                name: "sheetDetails",
                component: () => import("../views/my/sheetDetails.vue"),
                meta: {
                    title: "歌单详情",
                },
            },
            {
                path: "/person",
                name: "person",
                component: () => import("../views/person/index.vue"),
                meta: {
                    title: "个人信息",
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "我的音乐";
    next();
});

// 导出路由
export default router;
