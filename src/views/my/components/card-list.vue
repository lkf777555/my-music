<template>
    <div>
        <div class="list flex j-b">
            <el-card class="box-card" v-for="(item, index) in list" :key="index">
                <slot name="cont" :row="item"></slot>
            </el-card>
        </div>
    </div>
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
