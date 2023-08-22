import MyLogin from "./my-login.vue";

MyLogin.install = function (Vue) {
  Vue.component("MyLogin", MyLogin);
};

export default MyLogin;
