import MyAside from "./my-aside.vue";

MyAside.install = function (Vue) {
  Vue.component("MyAside", MyAside);
};

export default MyAside;
