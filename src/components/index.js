import MyTheme from "@c/my-theme";
import MyHeader from "@c/my-MyHeader";
import MyAside from "@c/my-MyAside";

export const components = [MyTheme, MyHeader, MyAside];

export default {
  install: function (app) {
    components.forEach((item) => {
      app.use(item);
    });
  },
};
