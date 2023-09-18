<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="7">
                <el-card v-loading="loading" element-loading-text="正在努力加载中...">
                    <template #header>个人信息</template>
                    <template #default>
                        <div class="info-img flex a-c">
                            <el-image :src="getUser.avatarUrl" :zoom-rate="1.2" :preview-src-list="[getUser.avatarUrl]" :initial-index="0" />
                            <div class="current-level">
                                <span>当前等级</span>
                                <el-tag style="margin-left: 10px; font-size: 12px" class="ml-2" type="success" size="small">LV {{ levelNum }}</el-tag>
                            </div>
                            <div class="current-progress">
                                <el-progress :percentage="levelProgress" status="success" :show-text="false" striped striped-flow />
                            </div>
                        </div>
                        <div class="info-text flex a-c j-b">
                            <div>
                                <span>距离下一个等级</span>
                                <el-tag style="margin-left: 10px" class="ml-2" type="success" size="small">LV {{ levelNum + 1 }}</el-tag>
                            </div>
                            <div>还差{{ levelNextPlayCount }}首</div>
                        </div>
                        <div class="info-text flex a-c j-b">
                            <div>昵称</div>
                            <div>{{ getUser.nickname }}</div>
                        </div>
                        <div class="info-text flex a-c j-b">
                            <div>ID</div>
                            <div>{{ getUser.userId }}</div>
                        </div>
                        <div class="info-text flex a-c j-b">
                            <div>性别</div>
                            <div>{{ getUser.gender == 1 ? "男" : "女" }}</div>
                        </div>
                        <div class="info-text flex a-c j-b">
                            <div>所在地</div>
                            <div>
                                <span>{{ economize[0].name }}</span>
                                <span> {{ market[0].name }}</span>
                            </div>
                        </div>
                        <div class="info-text flex a-c j-b">
                            <div>创建账号时间</div>
                            <div>{{ formatDate(getUser.createTime) }}</div>
                        </div>
                        <div class="info-text flex a-c j-b">
                            <div>上次登录时间</div>
                            <div>{{ formatDate(getUser.lastLoginTime) }}</div>
                        </div>
                        <div class="info-text flex a-c j-b">
                            <div>上次登录IP</div>
                            <div>{{ getUser.lastLoginIP }}</div>
                        </div>
                    </template>
                </el-card>
            </el-col>
            <el-col :span="17">
                <el-card>
                    <template #header>基本资料</template>
                    <template #default>
                        <el-form :model="form" label-width="120px">
                            <el-form-item label="昵称">
                                <el-input v-model="form.nickname" />
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-radio-group v-model="form.gender">
                                    <el-radio :label="0">保密</el-radio>
                                    <el-radio :label="1">男</el-radio>
                                    <el-radio :label="2">女</el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="出生日期">
                                <el-date-picker v-model="form.birthday" type="date" value-format="x" placeholder="请选择出生日期" />
                            </el-form-item>
                            <el-form-item label="签名">
                                <el-input v-model="form.signature" type="textarea" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">保存</el-button>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { userLevel, userUpdate, userAccount } from "@a/user";
import { formatDate } from "@u/date";
import { cityList } from "./city";

let vm = inject("$vm"),
    levelNum = $ref(0),
    levelProgress = $ref(0),
    levelNextPlayCount = $ref(0),
    loading = $ref(true),
    getUser = vm.useLoginInfoPinia.userInfo, //全局信息
    getCookie = vm.useLoginInfoPinia.userCookie; //全局cookie

const form = reactive({
    nickname: getUser.nickname || "",
    gender: getUser.gender || "",
    birthday: getUser.birthday || "",
    signature: getUser.signature || "",
    cookie: encodeURIComponent(getCookie),
    timestamp: new Date().getTime(),
});

const market = cityList.filter((item) => item.code == getUser.city); //市
const economize = cityList.filter((item) => item.code == getUser.province); //省

// 获取等级信息
const getLevel = async () => {
    let { data } = await userLevel({ cookie: encodeURIComponent(getCookie), timestamp: new Date().getTime() });
    loading = false;
    levelNum = data.level;
    levelProgress = Math.trunc(data.progress * 100);
    levelNextPlayCount = data.nextPlayCount - data.nowPlayCount;
};

getLevel();

// 获取账号信息
const getAccountInfo = async () => {
    let { profile } = await userAccount({ cookie: encodeURIComponent(getCookie), timestamp: new Date().getTime() });
    vm.useLoginInfoPinia.userInfo = profile;
};

// 资料提交
const onSubmit = async () => {
    try {
        let { code, message } = await userUpdate(form);
        if (code == 200) {
            vm.MsgSuccess("保存成功");
            getAccountInfo();
        } else {
            vm.MsgError(message);
        }
    } catch (error) {
        vm.MsgError(error.message);
    }
};

watch(
    () => vm.useLoginInfoPinia.isLoginState,
    (value) => {
        if (value == false) {
            vm.$router.push("/home");
        }
    },
    { immediate: true }
);
</script>
<style lang="scss" scoped>
.info-img {
    flex-direction: column;
    border-bottom: 1px solid #e7eaec;
    .el-image {
        width: 140px;
        height: 140px;
        border-radius: 50%;
    }
    .current-level {
        margin: 10px 0px;
        font-size: 12px;
    }
    .current-progress {
        margin-bottom: 20px;
        width: 100%;
    }
}

.info-text {
    height: 30px;
    font-size: 12px;
    border-bottom: 1px solid #e7eaec;
    margin: 4px 0px;
}
</style>
