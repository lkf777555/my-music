import MyTheme from "@c/my-theme";
import MyHeader from "@c/my-MyHeader";
import MyAside from "@c/my-MyAside";
import MySwiper from "@c/my-swiper";
import MyTab from "@c/my-tab";

export const components = [MyTheme, MyHeader, MyAside, MySwiper, MyTab];

export default {
  install: function (app) {
    components.forEach((item) => {
      app.use(item);
    });
  },
};
