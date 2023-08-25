<template>
  <div class="page">
    <div>
      <el-skeleton :loading="loading" :animated="true">
        <template #default><my-swiper :list="swiperList"></my-swiper></template>
        <template #template>
          <el-skeleton-item variant="p" style="width: 27%; height: 200px" />
          <el-skeleton-item variant="p" style="width: 46%; height: 200px" />
          <el-skeleton-item variant="p" style="width: 27%; height: 200px" />
        </template>
      </el-skeleton>
    </div>
    <div class="recommend">
      <div class="recom-list">
        <my-tab
          :list="tabList"
          :skLoading="skLoading"
          @myClick="getVal"
        ></my-tab>
      </div>
    </div>
    <div class="recommend">
      <div class="recom-list">
        <my-tab
          :list="tabList1"
          :skLoading="skLoading1"
          @myClick="getVal1"
        ></my-tab>
      </div>
    </div>
    <div class="recommend">
      <div class="recom-list">
        <my-tab
          :list="tabList2"
          :skLoading="skLoading2"
          @myClick="getVal2"
        ></my-tab>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getBannerList, getopPlayList } from "@a/home";

let swiperList = $ref([]);
let loading = $ref(true);
let skLoading = $ref(true);
let skLoading1 = $ref(true);
let skLoading2 = $ref(true);
let tabList = $ref({
  title: "热门推荐",
  children: [
    {
      label: "推荐",
      value: "",
    },
    {
      label: "华语",
      value: "华语",
    },
    {
      label: "流行",
      value: "流行",
    },
    {
      label: "摇滚",
      value: "摇滚",
    },
    {
      label: "民谣",
      value: "民谣",
    },
    {
      label: "电子",
      value: "电子",
    },
  ],
});
let tabList1 = $ref({
  title: "新碟上架",
  children: [
    {
      label: "全部",
      value: "",
    },
    {
      label: "华语",
      value: "zh",
    },
    {
      label: "欧美",
      value: "ea",
    },
    {
      label: "韩国",
      value: "kr",
    },
    {
      label: "日本",
      value: "jp",
    },
  ],
});
let tabList2 = $ref({
  title: "最新MV",
  children: [
    {
      label: "全部",
      value: "",
    },
    {
      label: "内地",
      value: "内地",
    },
    {
      label: "港台",
      value: "港台",
    },
    {
      label: "欧美",
      value: "欧美",
    },
    {
      label: "日本",
      value: "日本",
    },
    {
      label: "韩国",
      value: "韩国",
    },
  ],
});

const getVal = (val, inx) => {
  getList(val);
};

const getVal1 = (val, inx) => {
  console.log(val, inx);
};

const getVal2 = (val, inx) => {
  console.log(val, inx);
};

//获取banner轮播图数据
getBannerList().then((res) => {
  swiperList = res.banners;
  loading = false;
});

const getList = (value = "") => {
  let data = { limit: 6, order: "hot", cat: value, offset: 0 };
  getopPlayList(data).then((res) => {
    skLoading = false;
  });
};
getList();
</script>
<style lang="scss" scoped>
.recommend {
  width: 100%;
  height: 320px;
  margin: 10px 0px;
  border-radius: 12px;

  .recom-list {
    width: 100%;
    height: 100%;
    padding: 0px 20px;
  }
}
</style>
