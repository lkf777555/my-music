import MyLogin from "@c/my-MyLogin";
import MyAside from "@c/my-MyAside";
import MySwiper from "@c/my-swiper";
import MyTab from "@c/my-tab";
import MyAudio from "@c/MyAudio";
import MyTable from "@c/MyTable";

export const components = [MyLogin, MyAside, MySwiper, MyTab, MyAudio, MyTable];

export default {
    install: function (app) {
        components.forEach((item) => {
            app.use(item);
        });
    },
};
