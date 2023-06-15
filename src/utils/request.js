import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const serve = axios.create({
  baseURL: "",
  timeout: 30000,
});

serve.interceptors.request.use(
  (config) => {
    NProgress.start(); // 进度条开始
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

serve.interceptors.response.use(
  (response) => {
    NProgress.done(); // 进度条结束
    return response;
  },
  (error) => {
    NProgress.done(); // 进度条结束
    return Promise.reject(error);
  }
);
