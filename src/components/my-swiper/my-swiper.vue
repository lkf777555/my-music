<template>
  <div class="page">
    <el-carousel :interval="3000" type="card" height="200px">
      <el-carousel-item v-for="item in list" :key="item">
        <img class="swiper-img" :src="item.imageUrl" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
let props = defineProps({
  list: {
    type: Array,
    default: () => {},
  },
});
let vm = inject("$vm");
</script>
<style lang="scss" scoped>
.swiper-img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
