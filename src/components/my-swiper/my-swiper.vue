<template>
    <div>
        <el-skeleton :loading="vloading" :animated="true">
            <template #default>
                <el-carousel :interval="3000" type="card" height="200px">
                    <el-carousel-item v-for="item in list" :key="item" @click="pushClick(item)">
                        <img class="swiper-img" :src="item.imageUrl" />
                    </el-carousel-item>
                </el-carousel>
            </template>
            <template #template>
                <el-skeleton-item variant="p" style="width: 27%; height: 200px" />
                <el-skeleton-item variant="p" style="width: 46%; height: 200px" />
                <el-skeleton-item variant="p" style="width: 27%; height: 200px" />
            </template>
        </el-skeleton>
    </div>
</template>

<script setup>
const props = defineProps({
    list: {
        type: Array,
        default: () => {},
    },
    vloading: {
        type: Boolean,
        default: true,
    },
});

const vm = inject("$vm");

const pushClick = (item) => {
    vm.MsgSuccess("待开发");
};
</script>
<style lang="scss" scoped>
.swiper-img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
</style>
