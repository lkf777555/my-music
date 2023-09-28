<template>
    <div>
        <el-dialog
            v-model="dialogVisible"
            title="欢迎登录"
            width="30%"
            draggable
            :destroy-on-close="true"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :align-center="true"
            style="border-radius: 8px"
            @close="dialogClose"
        >
            <div class="login-box flex f-c a-c j-a" v-loading="loading">
                <div class="img-border flex a-c j-c" v-if="uniKeyImg"><img :src="uniKeyImg" /></div>
                <div v-if="uniKeyImg">使用<span @click="pushWy">网易云音乐APP</span> 扫码授权登录</div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { loginKey, loginImg, loginCheck } from "@a/home";
import { userAccount } from "@a/user";

const vm = inject("$vm");
let dialogVisible = $ref(true);
let unikey = $ref("");
let uniKeyImg = $ref("");
let loginStatus = $ref(null);
let loading = $ref(true);

// 请求接口拿到key
const getLogin = async () => {
    let { data } = await loginKey({ timestamp: new Date().getTime() });
    unikey = data.unikey;
    getQrimg();
};

// 用key换取二维码
const getQrimg = async () => {
    let { data } = await loginImg({ key: unikey, qrimg: "qrimg" });
    uniKeyImg = data.qrimg;
    loading = false;
    getIntval();
};

// 获取账号信息
const getAccountInfo = async () => {
    let { profile } = await userAccount({ cookie: encodeURIComponent(vm.useLoginInfoPinia.userCookie), timestamp: new Date().getTime() });
    vm.useLoginInfoPinia.userInfo = profile;
};

// 轮询登录状态
const getIntval = () => {
    loginStatus = setInterval(() => {
        if (!dialogVisible) {
            clearInterval(loginStatus);
            loginStatus = null;
        }
        let data = { key: unikey, noCookie: true, timestamp: new Date().getTime() };
        loginCheck(data).then((res) => {
            if (res.code == 803) {
                vm.MsgSuccess("授权成功");
                vm.useLoginInfoPinia.$patch({
                    isDialogState: false, //关闭全局登录对话框
                    isLoginState: true, //存储登录状态
                    userCookie: res.cookie, //存储cookie
                    userTimestamp: new Date().getTime(), //登录成功的时间戳
                });
                getAccountInfo(); //授权成功后用cookie换取用户账号信息
                clearInterval(loginStatus);
                loginStatus = null;
                dialogVisible = false;
            } else if (res.code == 800) {
                clearInterval(loginStatus);
                loginStatus = null;
                getLogin();
            }
        });
    }, 2000);
};

getLogin();

// 跳转网易云APP下载
const pushWy = () => {
    window.open("https://music.163.com/#/download", '"_blank"');
};

// 关闭对话框
const dialogClose = () => {
    vm.useLoginInfoPinia.isDialogState = false;
    dialogVisible = false;
};
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 260px;

    .img-border {
        width: 200px;
        height: 200px;
        background-color: #e3e5e7;
        border-radius: 6px;

        img {
            width: 190px;
            height: 190px;
        }
    }
    span {
        color: #00aeec;
        cursor: pointer;
    }
}

:deep(.el-dialog__body) {
    padding: 0px 20px 20px 20px;
}
</style>
