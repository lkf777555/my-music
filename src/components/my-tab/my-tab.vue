<template>
    <div>
        <div class="tab-list flex a-c">
            <div class="list-title">{{ list.title }}</div>
            <div :class="activeIndex == index ? 'list-label active' : 'list-label'" v-for="(item, index) in list.children" @click="indexClick(item, index)">
                {{ item.label }}
            </div>
        </div>
        <!-- 热门推荐组件 -->
        <el-skeleton :loading="skLoading" :animated="true" v-if="Mtype == 1">
            <template #default>
                <div class="flex j-b">
                    <div v-for="(item, index) in tdata" :key="index" class="music-box" @click="pushClick1(item)">
                        <img class="music-img border-r-8" :src="item.coverImgUrl" />
                        <div class="music-title text-2 font-100">{{ item.name }}</div>
                        <div v-if="item.tags" style="padding: 2px 0px 10px 0px">
                            <span class="music-tag font-100" v-for="(inm, inx) in item.tags" :key="inx">#{{ inm }}</span>
                        </div>
                        <div class="music-position flex a-c">
                            <div class="flex a-c">
                                <el-icon size="16"><Headset /></el-icon>
                            </div>
                            <div>
                                {{ formartNum(item.playCount) }}
                            </div>
                            <div>/</div>
                            <div>{{ item.trackCount }}首</div>
                        </div>
                    </div>
                </div>
            </template>
            <template #template>
                <div class="flex j-b" style="padding-bottom: 10px">
                    <div v-for="i in 6">
                        <div>
                            <el-skeleton-item variant="p" style="width: 220px; height: 220px" />
                        </div>
                        <div style="margin-top: 10px">
                            <el-skeleton-item variant="p" style="width: 220px; height: 16px" />
                        </div>
                        <div style="margin-top: 10px">
                            <el-skeleton-item variant="p" style="width: 60px; height: 16px" />
                        </div>
                    </div>
                </div>
            </template>
        </el-skeleton>
        <!-- 新碟上架 -->
        <el-skeleton :loading="skLoading" :animated="true" v-if="Mtype == 2">
            <template #default>
                <div class="flex j-b" style="flex-wrap: wrap">
                    <div v-for="(item, index) in tdata.slice(0, 12)" :key="index" class="dish-box flex j-b border-r-8" @click="pushClick2(item)">
                        <div class="dish-img">
                            <img :src="item.blurPicUrl" />
                        </div>
                        <div class="dish-right">
                            <div class="dish-title text-2 font-100">{{ item.name }}</div>
                            <div class="dish-info font-100">{{ item.artist.name }}</div>
                        </div>
                    </div>
                </div>
            </template>
            <template #template>
                <div class="flex j-b" style="flex-wrap: wrap">
                    <div v-for="i in 12" style="width: 25%; padding: 0px 10px 10px 0px">
                        <div>
                            <el-skeleton-item variant="p" style="width: 100%; height: 120px" />
                        </div>
                    </div>
                </div>
            </template>
        </el-skeleton>
        <!-- 最新MV -->
        <el-skeleton :loading="skLoading" :animated="true" v-if="Mtype == 3">
            <template #default>
                <div class="flex j-b" style="flex-wrap: wrap">
                    <div v-for="(item, index) in tdata" :key="index" class="mv-box" @click="pushClick3(item)">
                        <div class="mv-video">
                            <div class="v-icon">
                                <el-icon size="48"><VideoPlay /></el-icon>
                            </div>
                            <el-image style="width: 92%; height: 92%" :src="item.cover" />
                        </div>
                        <div class="text-1 font-100 f-14">{{ item.name }}</div>
                        <div class="font-100 f-14 f-c">{{ item.artistName }}</div>
                        <div class="font-100 f-14 f-c">{{ formartNum(item.playCount) }}</div>
                    </div>
                </div>
            </template>
            <template #template>
                <div class="flex j-b" style="flex-wrap: wrap">
                    <div v-for="i in 10" style="width: 20%; padding: 0px 10px 10px 0px">
                        <div>
                            <el-skeleton-item variant="p" style="width: 100%; height: 120px" />
                        </div>
                        <div style="margin-top: 4px">
                            <el-skeleton-item variant="p" style="width: 100%; height: 16px" />
                        </div>
                        <div style="margin-top: 4px">
                            <el-skeleton-item variant="p" style="width: 50%; height: 16px" />
                        </div>
                        <div style="margin-top: 4px">
                            <el-skeleton-item variant="p" style="width: 10%; height: 16px" />
                        </div>
                    </div>
                </div>
            </template>
        </el-skeleton>
    </div>
</template>

<script setup>
import { VideoPlay, Headset } from "@element-plus/icons-vue";

const props = defineProps({
    list: {
        type: Object,
        default: () => {}, //tab数据
    },
    skLoading: {
        type: Boolean,
        default: true, //是否开启骨架屏
    },
    tdata: {
        type: Array,
        default: () => [], //列表数据
    },
    Mtype: {
        type: Number,
        default: 1, //组件类型
    },
});

const emit = defineEmits(["myClick"]);

let activeIndex = $ref("0");
const vm = inject("$vm");

// 点击tab触发
const indexClick = (item, index) => {
    emit("myClick", item.value, index);
    activeIndex = index;
};

const pushClick1 = (item) => {
    vm.MsgSuccess("待开发");
};

const pushClick2 = (item) => {
    vm.MsgSuccess("待开发");
};

const pushClick3 = (item) => {
    vm.MsgSuccess("待开发");
};
</script>
<style lang="scss" scoped>
.tab-list {
    width: 100%;
    height: 60px;

    .list-title {
        width: 100px;
        font-weight: bold;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        font-size: 18px;
    }

    .list-label {
        width: 100px;
        font-weight: 100;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
    }
}

.active {
    transition: all 0.3s linear;
    color: #00aeec;
}

// 热门推荐
.music-box {
    width: 220px;
    position: relative;
    cursor: pointer;

    .music-img {
        width: 220px;
        height: 220px;
    }

    .music-title {
        height: 42px;
        padding-top: 4px;
        font-size: 15px;
    }

    .music-tag {
        padding-right: 4px;
        font-size: 12px;
        color: #ea3e3c;
    }

    .music-position {
        height: 30px;
        color: white;
        font-size: 12px;
        position: absolute;
        right: 0;
        top: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 97%, rgba(0, 0, 0, 0.5) 100%);
        border-radius: 8px 8px 0px 8px;

        img {
            width: 18px;
            height: 18px;
            margin-right: 4px;
        }

        > div {
            margin-right: 4px;
        }
    }
}

// 新碟上架
.dish-box {
    width: 24%;
    margin: 0px 10px 10px 0px;
    background-color: #f0f0f0;
    cursor: pointer;

    .dish-img {
        width: 116px;
        height: 116px;

        > img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    }

    .dish-right {
        width: 70%;

        .dish-title {
            padding: 20px 4px 0px 20px;
        }

        .dish-info {
            padding: 10px 0px 0px 20px;
            color: #909090;
            font-size: 14px;
        }
    }
}

// 最新MV
.mv-box {
    width: 20%;
    padding: 0px 10px 10px 0px;
    cursor: pointer;
    .mv-video {
        position: relative;
        .v-icon {
            z-index: 99;
            position: absolute;
            top: 50%;
            margin-top: -16px;
            margin-left: -10px;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            text-align: center;
            color: #fff;
            transition: all 0.3s linear;
        }
    }
    .el-image {
        border-radius: 8px;
        transition: all 0.3s linear;
    }
    .f-14 {
        padding-top: 2px;
        width: 92%;
        font-size: 14px;
    }
    .f-c {
        color: #909090;
    }
}
.mv-box:hover {
    .el-image {
        transform: scale(1.05);
    }
    .v-icon {
        opacity: 1;
        transform: scale(1.3);
    }
}
</style>
