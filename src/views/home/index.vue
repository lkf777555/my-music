<template>
    <div>
        <div>
            <my-swiper :list="swiperList" :vloading="loading" />
        </div>
        <div class="recommend">
            <div class="recom-list">
                <my-tab :list="tab" :skLoading="skLoading" :tdata="tdata" :Mtype="1" @myClick="getVal"></my-tab>
            </div>
        </div>
        <div class="recommend">
            <div class="recom-list">
                <my-tab :list="tab1" :skLoading="skLoading1" :tdata="tdata1" :Mtype="2" @myClick="getVal1"></my-tab>
            </div>
        </div>
        <div class="recommend">
            <div class="recom-list">
                <my-tab :list="tab2" :skLoading="skLoading2" :tdata="tdata2" :Mtype="3" @myClick="getVal2"></my-tab>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getBannerList, getopPlayList, getopAlbumList, getopMVList } from "@a/home";
import { useGetListApi } from "@h/index";
import { tab, tab1, tab2 } from "./data";

const getVal = (val, inx) => {
    editParams("cat", val);
};

const getVal1 = (val, inx) => {
    editParams1("area", val);
};

const getVal2 = (val, inx) => {
    editParams2("area", val);
};

//获取banner轮播图数据
let { list: swiperList, loading } = useGetListApi(getBannerList, {}, "banners");

// 获取热门推荐
let { list: tdata, loading: skLoading, editParams } = useGetListApi(getopPlayList, { limit: 6, order: "hot", cat: "", offset: 0 }, "playlists");

// 获取新碟上架
let {
    list: tdata1,
    loading: skLoading1,
    editParams: editParams1,
} = useGetListApi(getopAlbumList, { limit: 12, offset: 0, area: "", type: "new", year: "", month: "" }, "monthData");

//获取mv列表
let { list: tdata2, loading: skLoading2, editParams: editParams2 } = useGetListApi(getopMVList, { limit: 10, offset: 0, area: "", type: "", order: "" }, "data");
</script>
<style lang="scss" scoped>
.recommend {
    margin: 20px 0px 0px 0px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.13);
    .recom-list {
        padding: 0px 20px;
    }
}
</style>
