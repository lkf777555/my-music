import MyTheme from "./my-theme.vue";

MyTheme.install = function (Vue) {
  Vue.component("MyTheme", MyTheme);
};

export default MyTheme;
