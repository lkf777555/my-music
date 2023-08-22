<template>
  <div class="page">
    <div
      class="logo flex a-c j-c"
      @click="vm.$router.push('/'), (activeRoute = '/home')"
    >
      <img
        src="https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/wymusic.png"
      />
      <div>网易云音乐</div>
    </div>
    <div class="list flex f-c a-c">
      <div
        v-for="(item, index) in asideList"
        :key="index"
        :class="
          activeRoute == item.link
            ? 'active list-header flex a-c'
            : 'list-header flex a-c'
        "
        @click="indexClick(item)"
      >
        <img :src="item.url" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
let route = useRoute();
const props = defineProps({
  asideList: {
    type: Array,
    default: () => [],
  },
});
let vm = inject("$vm");

let activeRoute = $computed(() => route.path);

const indexClick = (item) => {
  vm.$router.push({ path: item.link });
};
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 80px;
  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
  }

  div {
    font-weight: 100;
    margin: 0px 20px;
  }
}
.list {
  width: 100%;
  height: 100%;

  .list-header {
    width: 80%;
    height: 50px;
    padding: 10px 12px;
    cursor: pointer;

    img {
      width: 24px;
      height: 24px;
    }
    .title {
      margin-left: 10px;
      font-weight: 100;
    }
  }
}
.active {
  transition: all 0.3s linear;
  background-color: #ffffff;
  border-radius: 6px;
  color: #00aeec;
}
</style>
