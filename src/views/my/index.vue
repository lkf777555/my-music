<template>
    <div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="我的歌单" name="sheet">
                <cardlist :list="list">
                    <template #cont="{ row, index }">
                        <div class="flex" style="cursor: pointer" @click="pushClick(row)">
                            <div style="width: 100px" class="flex a-c">
                                <el-image style="width: 100px; height: 100px; border-radius: 8px" :src="row.coverImgUrl" />
                            </div>
                            <div class="flex f-c j-b" style="margin-left: 10px; flex: 1">
                                <div class="text-1 font-100" style="padding-top: 4px">
                                    {{ row.name }}
                                </div>
                                <div class="font-100 flex a-c j-b" style="padding-bottom: 4px">
                                    <div>{{ row.trackCount }}首</div>
                                    <el-icon v-if="index > 1" @click.stop="editSheet(row)" size="18"><More /></el-icon>
                                </div>
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
                            <div class="flex f-c j-a" style="padding-left: 10px; flex: 1" v-if="row.signature !== ''">
                                <div>{{ row.nickname }}</div>
                                <div class="font-100 text-1">{{ row.signature }}</div>
                            </div>
                            <div v-else class="flex a-c" style="padding-left: 10px; flex: 1">{{ row.nickname }}</div>
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
                            <div class="flex f-c j-a" style="padding-left: 10px; flex: 1" v-if="row.signature !== ''">
                                <div>{{ row.nickname }}</div>
                                <div class="font-100 text-1">{{ row.signature }}</div>
                            </div>
                            <div v-else class="flex a-c" style="padding-left: 10px; flex: 1">{{ row.nickname }}</div>
                        </div>
                    </template>
                </cardlist>
            </el-tab-pane>
        </el-tabs>
        <el-drawer v-model="drawer" direction="rtl">
            <template #header>
                <h4>{{ form.name == "" ? "--" : form.name }}</h4>
            </template>
            <template #default>
                <el-form :model="form" label-width="120px" ref="ruleFormRef">
                    <el-form-item label="歌单名称" prop="name">
                        <el-input v-model="form.name" clearable />
                    </el-form-item>
                    <el-form-item label="歌单描述" prop="desc">
                        <el-input v-model="form.desc" clearable />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                        <el-button @click="resetForm(ruleFormRef)" :disabled="form.desc == '' && form.name == ''">重置</el-button>
                    </el-form-item>
                </el-form>
            </template>
            <template #footer>
                <div style="flex: auto">
                    <el-button type="primary" @click="drawer = false">关闭</el-button>
                </div>
            </template>
        </el-drawer>
    </div>
</template>

<script setup>
import { userPlaylist, userFollows, userFolloweds, userPlaylistDesc, userPlaylistName } from "@a/user";
import cardlist from "./components/card-list";
import { More } from "@element-plus/icons-vue";

const vm = inject("$vm");
const activeName = $ref("sheet");
const ruleFormRef = $ref(null);
let drawer = $ref(false);
const form = reactive({
    name: "",
    desc: "",
    id: "",
});
let list = $ref([]);
let list1 = $ref([]);
let list2 = $ref([]);

const getList = async () => {
    if (vm.useLoginInfoPinia.isLoginState) {
        const { playlist } = await userPlaylist({ limit: 100, uid: vm.useLoginInfoPinia.userInfo.userId });
        list = playlist;
        const { follow } = await userFollows({ limit: 100, uid: vm.useLoginInfoPinia.userInfo.userId });
        list1 = follow;
        const { followeds } = await userFolloweds({ limit: 100, uid: vm.useLoginInfoPinia.userInfo.userId });
        list2 = followeds;
    }
};

getList();

const pushClick = (item) => {
    vm.$router.push({ path: "sheetDetails", query: { id: item.id, name: item.name } });
};

const editSheet = (row) => {
    drawer = true;
    nextTick(() => {
        form.id = row.id;
        form.name = row.name;
        form.desc = row.description;
    });
};

const onSubmit = async () => {
    const { code } = await userPlaylistDesc({ id: form.id, desc: form.desc, cookie: encodeURIComponent(vm.useLoginInfoPinia.userCookie) });
    const { code: code1, message: message1 } = await userPlaylistName({ id: form.id, name: form.name, cookie: encodeURIComponent(vm.useLoginInfoPinia.userCookie) });
    if (code == 200 && code1 == 200) {
        drawer = false;
        vm.MsgSuccess("保存成功");
    } else if (code1 == 401) {
        vm.MsgError(message1);
    }
};

const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
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
