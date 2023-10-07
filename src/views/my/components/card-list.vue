<template>
    <div class="list flex j-b" v-if="list.length > 0">
        <el-card class="box-card" v-for="(item, index) in list" :key="index">
            <slot name="cont" :row="item" :index="index"></slot>
        </el-card>
    </div>
    <div v-else><el-empty description="暂无数据" /></div>
</template>

<script setup>
const props = defineProps({
    list: {
        type: Array,
        default: () => [],
    },
});
</script>
<style lang="scss" scoped>
.list {
    flex-wrap: wrap;
    .box-card {
        margin-bottom: 10px;
        width: 49%;
    }
}
</style>
