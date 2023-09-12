<template>
    <div class="page-box">
        <div class="users flex a-c">
            <el-image
                :src="getUser.isLoginState ? getUser.userInfo.avatarUrl : ikunImg"
                :zoom-rate="1.2"
                :preview-src-list="getUser.isLoginState ? [getUser.userInfo.avatarUrl] : avatar"
                :initial-index="0"
            />
            <div class="users-info flex a-c">
                <el-dropdown>
                    <span class="el-dropdown-link text-1">
                        {{ getUser.isLoginState ? getUser.userInfo.nickname : "未登录" }}
                        <el-icon class="el-icon--right" size="10">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu v-if="getUser.isLoginState">
                            <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
                            <el-dropdown-item @click="goExit">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                        <el-dropdown-menu v-else>
                            <el-dropdown-item @click="getUser.isDialogState = true">去登陆</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <div class="list flex f-c a-c">
            <div
                v-for="(item, index) in asideList"
                :key="index"
                :class="activeRoute == item.link ? 'active list-header flex a-c' : 'list-header flex a-c'"
                @click="indexClick(item)"
            >
                <img :src="item.url" />
                <div class="title">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { userLogout } from "@a/user";

const props = defineProps({
    asideList: {
        type: Array,
        default: () => [],
    },
});

let vm = inject("$vm"),
    route = useRoute(),
    avatar = $ref(["https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/ikun.jpg"]),
    ikunImg = $ref("https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/ikun.jpg"),
    activeRoute = $computed(() => route.path);

const getUser = vm.useLoginInfoPinia;

// 跳转页面
const indexClick = (item) => {
    vm.$router.push({ path: item.link });
};

//退出登录
const goExit = async () => {
    let res = await userLogout({ cookie: encodeURIComponent(getUser.userCookie) });
    if (res.code == 200) {
        vm.MsgSuccess("退出登录成功");
        getUser.$reset();
    }
};
</script>
<style lang="scss" scoped>
.page-box {
    width: 100%;
    height: 100%;
    background-color: #ffffff;

    //顶部个人信息
    .users {
        width: 100%;
        height: 60px;
        .el-image {
            padding-left: 31px;
        }
        :deep(.el-image__preview) {
            width: 36px;
            height: 36px;
            border-radius: 4px;
        }
        .el-dropdown {
            cursor: pointer;
            color: var(--el-color-primary);
        }
        .el-dropdown-link:focus {
            outline: none;
        }
        .el-dropdown-link {
            width: 140px;
        }
        .users-info {
            padding-left: 10px;
        }
    }

    // 菜单
    .list {
        width: 100%;
        .list-header {
            width: 80%;
            height: 50px;
            padding: 10px 12px;
            cursor: pointer;

            img {
                width: 24px;
                height: 24px;
            }
            .title {
                margin-left: 10px;
                font-weight: 100;
            }
        }
    }
    .active {
        transition: all 0.3s ease;
        background-color: #f4f5ff;
        border-radius: 6px;
        color: #00aeec;
    }
}
</style>
