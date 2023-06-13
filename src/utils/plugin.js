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
  },
};
