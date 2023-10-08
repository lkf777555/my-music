<template>
    <div>
        <el-card class="box-card">
            <div style="height: 32px">
                <el-breadcrumb separator="-">
                    <el-breadcrumb-item :to="{ path: '/my' }">返回</el-breadcrumb-item>
                    <el-breadcrumb-item>我的</el-breadcrumb-item>
                    <el-breadcrumb-item>歌单详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="header flex" v-loading="loading">
                <div class="header-img" v-if="loading == false">
                    <el-image
                        style="width: 180px; height: 180px; border-radius: 8px"
                        :src="sheet.coverImgUrl"
                        :zoom-rate="1.2"
                        :preview-src-list="[sheet.coverImgUrl]"
                        :initial-index="0"
                    />
                </div>
                <div class="header-info" v-if="loading == false">
                    <div class="title">{{ sheet.name }}</div>
                    <div class="user flex a-c">
                        <div class="img">
                            <el-image
                                style="width: 40px; height: 40px; border-radius: 50%"
                                :src="creatorInfo.avatarUrl"
                                :zoom-rate="1.2"
                                :preview-src-list="[creatorInfo.avatarUrl]"
                                :initial-index="0"
                            />
                        </div>
                        <div class="nickname">{{ creatorInfo.nickname }}</div>
                        <div class="time">创建时间：{{ formatDate(sheet.createTime) }}</div>
                        <div class="time">更新时间：{{ formatDate(sheet.updateTime) }}</div>
                        <div class="flex a-c" style="padding-left: 20px; color: #909090">
                            <el-icon size="16"><Headset /></el-icon>
                            <div style="margin-left: 4px">{{ sheet.playCount }}</div>
                        </div>
                    </div>
                    <div class="desc">
                        <span style="font-weight: bold"> 歌单简介：</span>
                        <span style="color: #909090"> {{ sheet.description == null ? "--" : sheet.description }}</span>
                    </div>
                </div>
            </div>
        </el-card>
        <el-table
            :data="tableData"
            style="width: 100%; margin-top: 20px; cursor: pointer"
            stripe
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
            <el-table-column label="名称">
                <template #default="{ row }">
                    <div class="flex a-c">
                        <el-image style="width: 38px; height: 38px; border-radius: 8px" :src="row.al.picUrl" />
                        <div style="margin-left: 8px">{{ row.name }}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="歌手" show-overflow-tooltip>
                <template #default="{ row }">
                    <div class="flex">
                        <el-tag v-for="(item, index) in row.ar" :key="index" style="margin: 0px 4px" round effect="dark" type="success"> {{ item.name }} </el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="专辑">
                <template #default="{ row }">
                    {{ row.al.name }}
                </template>
            </el-table-column>
            <el-table-column label="时长">
                <template #default="{ row }">
                    {{ formatMillisecond(row.dt) }}
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 10px">
            <el-config-provider :locale="zhCn">
                <el-pagination
                    v-model:current-page="currentPage"
                    v-model:page-size="pageSize"
                    background
                    :page-sizes="[20, 50, 100]"
                    layout="sizes, prev, pager, next"
                    :total="allData.length"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
            /></el-config-provider>
        </div>
    </div>
</template>

<script setup>
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { Headset, VideoPlay } from "@element-plus/icons-vue";
import { userPlaylistDetail, userSongUrl } from "@a/user";
import { formatDate, formatMillisecond } from "@u/date";

const vm = inject("$vm");
const route = useRoute();
const params = reactive({
    id: route.query.id,
    name: route.query.name,
});

let loading = $ref(true);
let sheet = $ref({}); //歌单信息
let creatorInfo = $ref({}); //个人信息
let tableData = $ref([]); //表格数据
let allData = $ref([]);
let currentName = $ref(""); //当前移入歌曲
let currentPage = $ref(1);
let pageSize = $ref(20);

const getTableData = () => {
    tableData = allData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
};

// 获取歌单信息
const getList = async () => {
    const res = await userPlaylistDetail({ id: params.id, cookie: encodeURIComponent(vm.useLoginInfoPinia.userCookie) });
    sheet = res.playlist;
    creatorInfo = res.playlist.creator;
    allData = res.playlist.tracks;
    getTableData();
    loading = false;
};

getList();

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
</script>
<style lang="scss" scoped>
.box-card {
    .header {
        height: 180px;
        &-img {
            width: 180px;
        }
        &-info {
            flex: 1;
            margin-left: 20px;
            .title {
                font-size: 24px;
                font-weight: bold;
            }
            .user {
                padding-top: 10px;
                .img {
                    width: 40px;
                    height: 40px;
                }
                .nickname {
                    padding-left: 10px;
                    font-weight: bold;
                }
                .time {
                    padding-left: 10px;
                    color: #909090;
                }
            }
            .desc {
                height: 120px;
                padding-top: 20px;
                overflow: hidden;
            }
        }
    }
}
</style>
