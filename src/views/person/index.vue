<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="8">
                <el-card>
                    <template #header>个人信息</template>
                    <div class="info-img flex a-c j-c">
                        <el-image :src="getUser.avatarUrl" :zoom-rate="1.2" :preview-src-list="[getUser.avatarUrl]" :initial-index="0" />
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
            <el-col :span="16">
                <el-card>
                    <template #header>基本资料</template>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { formatDate } from "@u/date";
import { cityList } from "./city";

let vm = inject("$vm"),
    getUser = vm.useLoginInfoPinia.userInfo;

const market = cityList.filter((item) => item.code == getUser.city); //市
const economize = cityList.filter((item) => item.code == getUser.province); //省
</script>
<style lang="scss" scoped>
.info-img {
    height: 180px;
    border-bottom: 1px solid #e7eaec;
    .el-image {
        width: 140px;
        height: 140px;
        border-radius: 50%;
    }
}

.info-text {
    height: 24px;
    font-size: 13px;
    border-bottom: 1px solid #e7eaec;
    margin: 10px 0px;
}
</style>
