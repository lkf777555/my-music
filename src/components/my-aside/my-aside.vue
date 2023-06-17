<template>
  <div class="page">
    <div class="logo flex a-c j-c">
      <img src="/wymusic.png" alt="" />
      <div>网易云音乐</div>
    </div>
    <div class="list flex f-c a-c">
      <div
        v-for="(item, index) in asideList"
        :key="index"
        :class="
          activeIndex == index
            ? 'active list-header flex a-c'
            : 'list-header flex a-c'
        "
        @click="indexClick(item, index)"
      >
        <img :src="item.url" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  asideList: {
    type: Array,
    default: () => [],
  },
});
let vm = inject("$vm");
let activeIndex = $ref("0");

const indexClick = (item, index) => {
  activeIndex = index;
  vm.$router.push(item.link);
};
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 60px;

  img {
    width: 36px;
    height: 36px;
  }
  div {
    margin: 0px 20px;
  }
}
.list {
  width: 100%;
  height: 100%;

  .list-header {
    width: 70%;
    height: 50px;
    padding: 10px 12px;

    img {
      width: 24px;
      height: 24px;
    }
    .title {
      margin-left: 10px;
    }
  }
}
.active {
  background-color: #ffffff;
  border-radius: 6px;
  color: var(--main-text-color);
}
</style>
