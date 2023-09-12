<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="8">
                <el-card>
                    <template #header>个人信息</template>
                    <div class="info-img flex a-c j-c">
                        <el-image :src="getUser.avatarUrl" :zoom-rate="1.2" :preview-src-list="[getUser.avatarUrl]" :initial-index="0" />
                    </div>

                    <div class="info-text flex a-c j-b" v-for="(item, index) in userList" :key="index">
                        <div>{{ item.label }}</div>
                        <div>{{ getUser[item.value] }}</div>
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
let vm = inject("$vm"),
    getUser = vm.useLoginInfoPinia.userInfo;

const userList = $ref([
    {
        label: "昵称",
        value: "nickname",
    },
    {
        label: "ID",
        value: "userId",
    },
    {
        label: "所在地",
        value: "city",
    },
    {
        label: "创建账号时间",
        value: "createTime",
    },
    {
        label: "上次登录时间",
        value: "lastLoginTime",
    },
    {
        label: "上次登录IP",
        value: "lastLoginIP",
    },
]);
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
