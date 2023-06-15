// 定义 loading
let loading;

// loading开始方法
export const startLoading = () => {
  loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
};

// loading关闭方法
export const endLoading = () => {
  loading.close();
};
