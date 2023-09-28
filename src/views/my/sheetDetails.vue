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
                        style="width: 200px; height: 200px; border-radius: 8px"
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
        <el-table :data="tableData" style="width: 100%; margin-top: 30px" stripe>
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column prop="date" label="歌曲" />
            <el-table-column prop="name" label="歌手" />
            <el-table-column prop="address" label="专辑" />
            <el-table-column prop="address" label="时长" />
        </el-table>
    </div>
</template>

<script setup>
import { Headset } from "@element-plus/icons-vue";
import { userPlaylistDetail } from "@a/user";
import { formatDate } from "@u/date";

const vm = inject("$vm");
const route = useRoute();
const params = reactive({
    id: route.query.id,
    name: route.query.name,
});

let sheet = $ref({}); //歌单信息
let creatorInfo = $ref({}); //个人信息
let loading = $ref(true); //

const tableData = [
    {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
    {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
    },
];

const getList = async () => {
    const res = await userPlaylistDetail({ id: params.id, cookie: encodeURIComponent(vm.useLoginInfoPinia.userCookie) });
    sheet = res.playlist;
    creatorInfo = res.playlist.creator;
    loading = false;
};

getList();
</script>
<style lang="scss" scoped>
.box-card {
    width: 70%;
    .header {
        height: 200px;
        &-img {
            width: 200px;
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
