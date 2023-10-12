<template>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%; margin-top: 20px; cursor: pointer"
            v-bind="$attrs"
            @cell-mouse-enter="onMouseEnter"
            @cell-mouse-leave="currentName = ''"
            @cell-click="cellClick"
        >
            <el-table-column type="index" label="序号" width="60" align="center">
                <template #default="{ row, column, $index }">
                    <div v-if="currentName == row.name" class="flex a-c j-c">
                        <el-icon size="28"><VideoPlay /></el-icon>
                    </div>
                    <div v-else>{{ $index + 1 }}</div>
                </template>
            </el-table-column>
            <el-table-column label="名称" width="600">
                <template #default="{ row }">
                    <div class="flex a-c">
                        <el-image style="width: 38px; height: 38px; border-radius: 8px" :src="row.album.picUrl" />
                        <div style="margin-left: 8px">{{ row.name }}</div>
                        <div v-if="row.vip">
                            <el-tag style="margin-left: 8px" round effect="dark" type="danger"> {{ row.vip ? "VIP" : "" }}</el-tag>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="歌手" show-overflow-tooltip>
                <template #default="{ row }">
                    <el-tag v-for="(item, index) in row.singer" :key="index" style="margin: 0px 4px" round effect="light" type="success"> {{ item.name }} </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="专辑" prop="album.name"> </el-table-column>
            <el-table-column label="时长" prop="duration"> </el-table-column>
        </el-table>
        <div style="margin-top: 10px">
            <el-config-provider :locale="zhCn">
                <el-pagination
                    v-model:current-page="currentPage"
                    v-model:page-size="pageSize"
                    background
                    :page-sizes="[20, 50, 100]"
                    layout="sizes, prev, pager, next"
                    :total="tableList.length"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
            /></el-config-provider>
        </div>
    </div>
</template>

<script setup>
import { VideoPlay } from "@element-plus/icons-vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { userSongUrl } from "@a/user";

const props = defineProps({
    tableList: {
        type: Array,
        default: () => [],
    },
});

let tableData = $ref([]); //表格数据
let currentName = $ref(""); //当前移入歌曲
let currentPage = $ref(1);
let pageSize = $ref(20);

const getTableData = () => {
    tableData = props.tableList.slice((currentPage - 1) * pageSize, currentPage * pageSize);
};

// 当单元格 hover 进入时会触发该事件
const onMouseEnter = (row) => {
    currentName = row.name;
};

// 当某个单元格被点击时会触发该事件
const cellClick = async (row) => {
    const { code, data } = await userSongUrl({ id: row.id });
    if (code == 200) {
        if (data[0].url !== null) {
            const link = document.createElement("a");
            link.href = data[0].url;
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            vm.MsgError("暂无资源");
        }
    }
};

const handleSizeChange = (val) => {
    pageSize = val;
    getTableData();
};

const handleCurrentChange = (val) => {
    currentPage = val;
    getTableData();
};

watch(
    () => props.tableList,
    (value) => {
        getTableData();
    },
    { immediate: true }
);
</script>
<style lang="scss" scoped></style>
