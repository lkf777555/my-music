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
    url: "../../../public/home.png",
  },
  {
    title: "排行榜",
    link: "/rank",
    url: "../../../public/rank.png",
  },
  {
    title: "歌单",
    link: "/playlist",
    url: "../../../public/playlist.png",
  },
  {
    title: "MV",
    link: "/mvlist",
    url: "../../../public/mvlist.png",
  },
  {
    title: "歌手",
    link: "/artist",
    url: "../../../public/artist.png",
  },
  {
    title: "我的",
    link: "/my",
    url: "../../../public/my.png",
  },
]);
</script>
<style lang="scss" scoped>
::v-deep.el-aside {
  width: 240px;
  height: 100vh;
}
::v-deep.el-main {
  width: 100%;
  height: 100%;
}
::v-deep.el-header {
  padding: 0px;
}
.el-container {
  /* 渐变色动画 */
  background: var(--main-color);
  background-size: 200% auto;
  animation: gradient 5s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  // background-color: var(--main-linear);
}
</style>
