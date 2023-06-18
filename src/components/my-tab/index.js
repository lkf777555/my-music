import MyTab from "./my-tab.vue";

MyTab.install = function (Vue) {
  Vue.component("MyTab", MyTab);
};

export default MyTab;
