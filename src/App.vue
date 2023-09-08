<template>
    <div>
        <router-view></router-view>
        <my-login v-if="useLoginInfoPinia.isDialogState"></my-login>
    </div>
</template>
<script setup>
import { useLoginInfo } from "@s/user";
import { CookieParams } from "@u/handleCookie";

const cookie = CookieParams(); //授权成功后的cookie
const useLoginInfoPinia = useLoginInfo(); //用户信息

/*
 *全局挂载方法和使用
 */
let {
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
    cookie,
    useLoginInfoPinia,
});
</script>
<style scoped></style>
