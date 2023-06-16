import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { startLoading, endLoading } from "./loading";

const errorCode = {
  404: "访问资源不存在",
};

const service = axios.create({
  baseURL: "https://api.trtst.com/",
  timeout: 30000,
});
//请求拦截器
service.interceptors.request.use(
  (config) => {
    if (config.showLoading) {
      startLoading();
    }
    NProgress.start(); // 进度条开始
    return config;
  },
  (error) => {
    if (error.config.showLoading) {
      endLoading();
    }
    NProgress.done(); // 进度条结束
    return Promise.reject(error);
  }
);
//响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.config.showLoading) {
      endLoading();
    }
    NProgress.done(); // 进度条结束
    return response.data.data;
  },
  (error) => {
    if (error.config.showLoading) {
      endLoading();
    }
    NProgress.done(); // 进度条结束

    const code = error.response?.data?.code;

    const msg = errorCode[code];

    if (code) {
      ElMessage({
        showClose: true,
        message: msg,
        type: "error",
      });
    }

    return Promise.reject(error);
  }
);

/**
 * 请求核心函数
 * @param {Object} options 请求配置
 */
function request(options) {
  options.method = options.method || "get"; // 如果是get请求的话，则将data中的数据转移到params中
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }
  return service(options);
}

/**
 * 统一处理
 */
["get", "post", "put", "delete", "patch"].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      method: item,
      url,
      data,
      ...options,
    });
  };
});

export default request;
