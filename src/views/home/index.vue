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
          :list="tab"
          :skLoading="skLoading"
          :tdata="tdata"
          :Mtype="1"
          @myClick="getVal"
        ></my-tab>
      </div>
    </div>
    <div class="recommend">
      <div class="recom-list">
        <my-tab
          :list="tab1"
          :skLoading="skLoading1"
          :tdata="tdata1"
          :Mtype="2"
          @myClick="getVal1"
        ></my-tab>
      </div>
    </div>
    <div class="recommend">
      <div class="recom-list">
        <my-tab
          :list="tab2"
          :skLoading="skLoading2"
          :tdata="tdata2"
          :Mtype="3"
          @myClick="getVal2"
        ></my-tab>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getBannerList, getopPlayList, getopAlbumList } from "@a/home";

let swiperList = $ref([]),
  loading = $ref(true),
  skLoading = $ref(true),
  skLoading1 = $ref(true),
  skLoading2 = $ref(true);

let tab = $ref({
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
  }),
  tab1 = $ref({
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
  }),
  tab2 = $ref({
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

let tdata = $ref([]),
  tdata1 = $ref([]),
  tdata2 = $ref([]);

const getVal = (val, inx) => {
  getList(val);
};

const getVal1 = (val, inx) => {
  getList1(val);
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
    tdata = res.playlists;
  });
};
getList();

const getList1 = (value = "") => {
  let data = {
    limit: 12,
    offset: 0,
    area: value,
    type: "new",
    year: "",
    month: "",
  };
  getopAlbumList(data).then((res) => {
    skLoading1 = false;
    tdata1 = res.monthData;
  });
};
getList1();
</script>
<style lang="scss" scoped>
.recommend {
  width: 100%;
  height: 100%;
  margin: 20px 0px;
  border-radius: 12px;
  background-color: white;

  .recom-list {
    width: 100%;
    height: 100%;
    padding: 0px 20px;
  }
}
</style>
