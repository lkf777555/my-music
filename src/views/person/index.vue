<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="7">
                <el-card>
                    <template #header>个人信息</template>
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
                </el-card>
            </el-col>
            <el-col :span="17">
                <el-card>
                    <template #header>基本资料</template>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { userLevel } from "@a/user";
import { formatDate } from "@u/date";
import { cityList } from "./city";

let vm = inject("$vm"),
    levelNum = $ref(""),
    levelProgress = $ref(""),
    levelNextPlayCount = $ref(""),
    getUser = vm.useLoginInfoPinia.userInfo;

const market = cityList.filter((item) => item.code == getUser.city); //市
const economize = cityList.filter((item) => item.code == getUser.province); //省

const getLevel = async () => {
    let { data } = await userLevel({ cookie: encodeURIComponent(vm.useLoginInfoPinia.userCookie), timestamp: new Date().getTime() });
    levelNum = data.level;
    levelProgress = Math.trunc(data.progress * 100);
    levelNextPlayCount = data.nextPlayCount - data.nowPlayCount;
};

getLevel();

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
    height: 26px;
    font-size: 12px;
    border-bottom: 1px solid #e7eaec;
    margin: 10px 0px;
}
</style>
