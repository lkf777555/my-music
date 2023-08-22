<template>
  <div class="page-header flex a-c j-b f-r">
    <el-dialog
      v-model="dialogVisible"
      title="欢迎登录"
      width="30%"
      destroy-on-close
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div class="login-box flex f-c a-c j-a">
        <div class="img-border flex a-c j-c"><img :src="uniKeyImg" /></div>
        <div>
          使用
          <span @click="pushWy">网易云音乐APP</span>
          扫码登录
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { loginKey, loginImg, loginCheck } from "@a/home";

let vm = inject("$vm");
let dialogVisible = $ref(false);
let unikey = $ref("");
let uniKeyImg = $ref("");
let loginStatus = $ref(null);

// 请求接口并且轮询登录状态
const getLogin = () => {
  loginKey().then((res) => {
    unikey = res.data.unikey;
    loginImg({ key: unikey, qrimg: "qrimg" }).then((res) => {
      uniKeyImg = res.data.qrimg;
      getIntval();
    });
  });
};

const getIntval = () => {
  loginStatus = setInterval(() => {
    let time = new Date().getTime();
    loginCheck({ key: unikey, noCookie: true, timestamp: time }).then((res) => {
      if (res.code == 803) {
        clearInterval(loginStatus);
        dialogVisible = false;
        vm.MsgSuccess("登录成功");
      }
    });
  }, 1800);
};

// 跳转网易云APP下载
const pushWy = () => {
  window.open("https://music.163.com/#/download", '"_blank"');
};

// 对话框关闭停止轮询
watch(
  () => dialogVisible,
  (val) => {
    if (!val) {
      clearInterval(loginStatus);
    } else {
      getLogin();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 100%;
}
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
