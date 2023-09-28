<template>
    <div>
        <router-view></router-view>
        <my-login v-if="useLoginInfoPinia.isDialogState"></my-login>
    </div>
</template>
<script setup>
import { useLoginInfo } from "@s/user";

const useLoginInfoPinia = useLoginInfo(); //登录信息

// // 禁止右键
// document.oncontextmenu = new Function("event.returnValue=false");
// // 禁用选择
// document.onselectstart = new Function("event.returnValue=false");
// //禁止f12
// document.onkeydown = new Function("event.returnValue=false");

/*
 *全局挂载方法和使用
 */
const {
    appContext: {
        app: {
            config: {
                globalProperties: { MsgSuccess, MsgWarning, MsgMessage, MsgError, $router, $route },
            },
        },
    },
} = getCurrentInstance();

provide("$vm", {
    MsgSuccess,
    MsgWarning,
    MsgMessage,
    MsgError,
    $router,
    $route,
    useLoginInfoPinia,
});
</script>
<style scoped></style>
