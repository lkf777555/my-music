<template>
  <div class="page-header flex a-c j-b f-r">
    <div class="header-right flex a-c j-a">
      <my-theme></my-theme>
      <img
        v-if="FullState"
        @click="toggleFullscreen"
        src="https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/fullscreen.png"
      />
      <img
        v-if="!FullState"
        @click="toggleFullscreen"
        src="https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/nofullscreen.png"
      />
      <div class="avatar flex a-c j-c" @click="getLogin()">登录</div>
    </div>
    <el-dialog
      v-model="dialogVisible"
      title="欢迎登录"
      width="30%"
      destroy-on-close
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
import screenfull from "screenfull";
import { loginKey, loginImg, loginCheck } from "@a/home";

let vm = inject("$vm");
let FullState = $ref(true);
let dialogVisible = $ref(false);
let unikey = $ref("");
let uniKeyImg = $ref("");
let loginStatus = $ref(null);

// 请求接口并且轮询登录状态
const getLogin = async () => {
  await loginKey().then((res) => {
    unikey = res.data.unikey;
    loginImg({ key: unikey, qrimg: "qrimg" }).then((res) => {
      uniKeyImg = res.data.qrimg;
      dialogVisible = true;
    });
  });
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
// 是否全屏
const toggleFullscreen = () => {
  FullState = screenfull.isFullscreen;
  if (screenfull.isEnabled) {
    screenfull.toggle();
  } else {
    vm.MsgError("您的浏览器不支持全屏,请更新到最新版本或者切换其他浏览器");
  }
};
// 对话框关闭停止轮询
watch(
  () => dialogVisible,
  (val) => {
    if (!val) {
      clearInterval(loginStatus);
    }
  }
);
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 100%;

  .header-right {
    width: 160px;
    height: 100%;

    img {
      width: 30px;
      height: 30px;
    }
    .avatar {
      width: 42px;
      height: 42px;
      font-size: 14px;
      font-weight: 100;
      border-radius: 50%;
      color: white;
      background-color: #00aeec;
    }
  }
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
