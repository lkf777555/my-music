<template>
    <div>
        <el-container>
            <el-aside><my-aside :asideList="asideList"></my-aside></el-aside>
            <el-container>
                <el-main>
                    <el-card><router-view></router-view></el-card>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
const asideList = $ref([
    {
        title: "首页",
        link: "/home",
        url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/home.png",
    },
    // {
    //     title: "排行榜",
    //     link: "/rank",
    //     url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/rank.png",
    // },
    // {
    //     title: "歌单",
    //     link: "/playlist",
    //     url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/playlist.png",
    // },
    // {
    //     title: "MV",
    //     link: "/mvlist",
    //     url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/mvlist.png",
    // },
    // {
    //     title: "歌手",
    //     link: "/artist",
    //     url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/artist.png",
    // },
    {
        title: "我的",
        link: "/my",
        url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/my.png",
    },
]);
</script>
<style lang="scss" scoped>
:deep(.el-aside) {
    width: 240px;
}
:deep(.el-main) {
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding: 0px;
}
.el-container {
    background-color: #f0f2f5;
}
::-webkit-scrollbar {
    display: none;
}
</style>
