import { defineStore } from "pinia";

export const useLoginInfo = defineStore("user", {
    state: () => ({
        userCookie: "", //cookie
        userTimestamp: "", //登录的时间戳
        userInfo: {}, //用户信息
        isLoginState: false, //登录状态
        isDialogState: false, //全局登录弹框状态
        audioInfo: {
            isPlaying: false, //播放器状态
            isState: false, //是否播放
            currentTarget: -1,
            list: [],
        },
    }),
    getters: {},
    actions: {},
    persist: {
        enabled: true,
        strategies: [
            {
                key: "user",
                storage: localStorage,
                paths: ["userCookie", "userTimestamp", "userInfo", "isLoginState"],
            },
            {
                key: "playerInfo",
                storage: localStorage,
                paths: ["audioInfo"],
            },
        ],
    },
});
