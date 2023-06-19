import { defineStore } from "pinia";

export const userStore = defineStore("user", {
  state: () => ({ userInfo: {} }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
        paths: ["userInfo"],
      },
    ],
  },
});
