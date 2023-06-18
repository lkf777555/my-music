<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside><my-aside :asideList="asideList"></my-aside></el-aside>
        <el-container>
          <el-header><my-header></my-header></el-header>
          <el-main><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
let asideList = $ref([
  {
    title: "首页",
    link: "/",
    url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/home.png",
  },
  {
    title: "排行榜",
    link: "/rank",
    url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/rank.png",
  },
  {
    title: "歌单",
    link: "/playlist",
    url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/playlist.png",
  },
  {
    title: "MV",
    link: "/mvlist",
    url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/mvlist.png",
  },
  {
    title: "歌手",
    link: "/artist",
    url: "https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/artist.png",
  },
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
  height: 100vh;
}
:deep(.el-main) {
  width: 100%;
  height: 92vh;
  overflow: auto;
}
:deep(.el-header) {
  padding: 0px;
}
.el-container {
  background-color: var(--main-color);
}
::-webkit-scrollbar {
  display: none;
}
</style>
