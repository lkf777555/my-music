export default {
  install: function (app) {
    // 成功信息
    app.config.globalProperties.MsgSuccess = function (msg) {
      ElMessage({
        message: `${msg}`,
        type: "success",
      });
    };
    // 警告信息
    app.config.globalProperties.MsgWarning = function (msg) {
      ElMessage({
        message: `${msg}`,
        type: "warning",
      });
    };
    //信息
    app.config.globalProperties.MsgMessage = function (msg) {
      ElMessage(`${msg}`);
    };
    //错误信息
    app.config.globalProperties.MsgError = function (msg) {
      ElMessage.error(`${msg}`);
    };
    app.config.globalProperties.formartNum = function (value) {
      let num = 0;
      if (value > 9999) {
        num = Math.round((value / 10000) * 10) / 10 + "万";
      } else {
        num = value;
      }
      return num;
    };
  },
};
