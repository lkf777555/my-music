import MyTheme from "@c/my-theme";

export const components = [MyTheme];

export default {
  install: function (app) {
    components.forEach((item) => {
      app.use(item);
    });
  },
};
