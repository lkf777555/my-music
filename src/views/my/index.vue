<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="我的歌单" name="sheet">
                <cardlist :list="list">
                    <template #cont="{ row }">
                        <div class="flex" style="cursor: pointer" @click="pushClick(row)">
                            <div style="width: 100px" class="flex a-c">
                                <el-image style="width: 100px; height: 100px; border-radius: 8px" :src="row.coverImgUrl" />
                            </div>
                            <div class="flex f-c j-b" style="padding-left: 10px">
                                <div class="text-1 font-100" style="padding-top: 4px">
                                    {{ row.name }}
                                </div>
                                <div class="font-100" style="padding-bottom: 4px">{{ row.trackCount }}首</div>
                            </div>
                        </div>
                    </template>
                </cardlist>
            </el-tab-pane>
            <el-tab-pane label="我的关注" name="follow">
                <cardlist :list="list1">
                    <template #cont="{ row }">
                        <div class="flex a-c">
                            <div style="width: 50px" class="flex a-c">
                                <el-image
                                    style="width: 50px; height: 50px; border-radius: 50%"
                                    :src="row.avatarUrl"
                                    :zoom-rate="1.2"
                                    :preview-src-list="[row.avatarUrl]"
                                    :initial-index="0"
                                />
                            </div>
                            <div class="flex f-c j-a" style="padding-left: 10px" v-if="row.signature !== ''">
                                <div>{{ row.nickname }}</div>
                                <div class="font-100 text-1">{{ row.signature }}</div>
                            </div>
                            <div v-else class="flex a-c" style="padding-left: 10px">{{ row.nickname }}</div>
                        </div>
                    </template>
                </cardlist>
            </el-tab-pane>
            <el-tab-pane label="我的粉丝" name="fans">
                <cardlist :list="list2">
                    <template #cont="{ row }">
                        <div class="flex a-c">
                            <div style="width: 50px" class="flex a-c">
                                <el-image
                                    style="width: 50px; height: 50px; border-radius: 50%"
                                    :src="row.avatarUrl"
                                    :zoom-rate="1.2"
                                    :preview-src-list="[row.avatarUrl]"
                                    :initial-index="0"
                                />
                            </div>
                            <div class="flex f-c j-a" style="padding-left: 10px" v-if="row.signature !== ''">
                                <div>{{ row.nickname }}</div>
                                <div class="font-100 text-1">{{ row.signature }}</div>
                            </div>
                            <div v-else class="flex a-c" style="padding-left: 10px">{{ row.nickname }}</div>
                        </div>
                    </template>
                </cardlist>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { userPlaylist, userFollows, userFolloweds } from "@a/user";
import { useGetListApi } from "@h/index";
import cardlist from "./components/card-list";

let vm = inject("$vm");
const activeName = $ref("sheet");

let { list } = useGetListApi(userPlaylist, { limit: 100, uid: vm.useLoginInfoPinia.userInfo.userId }, "playlist"); //获取我的歌单
let { list: list1 } = useGetListApi(userFollows, { limit: 100, uid: vm.useLoginInfoPinia.userInfo.userId }, "follow"); //获取用户关注列表
let { list: list2 } = useGetListApi(userFolloweds, { limit: 100, uid: vm.useLoginInfoPinia.userInfo.userId }, "followeds"); //获取用户粉丝列表

const pushClick = (item) => {
    vm.$router.push({ path: "sheetDetails", query: { id: item.id, name: item.name } });
};

watch(
    () => vm.useLoginInfoPinia.isLoginState,
    (value) => {
        if (value == false) {
            vm.useLoginInfoPinia.isDialogState = true;
        }
    },
    { immediate: true }
);
</script>
<style lang="scss" scoped></style>
