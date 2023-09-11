<template>
    <div>
        <router-view></router-view>
        <my-login v-if="useLoginInfoPinia.isDialogState"></my-login>
    </div>
</template>
<script setup>
import { useLoginInfo } from "@s/user";

const useLoginInfoPinia = useLoginInfo(); //登录信息

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
    useLoginInfoPinia,
});
</script>
<style scoped></style>
