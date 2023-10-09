import MyAudio from "./my-audio.vue";

MyAudio.install = function (Vue) {
    Vue.component("MyAside", MyAudio);
};

export default MyAudio;
