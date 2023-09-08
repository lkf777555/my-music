import { defineStore } from "pinia";

export const useLoginInfo = defineStore("user", {
    state: () => ({
        userCookie: "", //cookie
        userTimestamp: "", //登录的时间戳
        isLoginState: false, //登录状态
        isDialogState: true, //全局登录弹框状态
    }),
    getters: {},
    actions: {},
    persist: {
        enabled: true,
        strategies: [
            {
                key: "user",
                storage: localStorage,
                paths: ["userCookie", "userTimestamp", "isLoginState"],
            },
        ],
    },
});
