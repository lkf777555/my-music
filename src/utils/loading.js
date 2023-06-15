import { ElLoading } from "element-plus";

// 定义 loading
let loading;

// loading开始方法
export const startLoading = () => {
  loading = ElLoading.service({
    target: "body",
    lock: true,
    text: "我知道你很急,但是你先别急",
    background: "rgba(0, 0, 0, 0.7)",
  });
};
// loading关闭方法
export const endLoading = () => {
  loading.close();
};
