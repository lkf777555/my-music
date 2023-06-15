import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { startLoading, endLoading } from "./loading";

const Axios = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
});

Axios.interceptors.request.use(
  (config) => {
    if (config.showLoading) {
      startLoading();
    }
    NProgress.start(); // 进度条开始
    return config;
  },
  (error) => {
    endLoading();
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    endLoading();
    NProgress.done(); // 进度条结束
    return response.data.data;
  },
  (error) => {
    endLoading();
    NProgress.done(); // 进度条结束
    return Promise.reject(error);
  }
);

export default Axios;
