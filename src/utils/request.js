import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { startLoading, endLoading } from "./loading";

const serve = axios.create({
  baseURL: "",
  timeout: 30000,
});

serve.interceptors.request.use(
  (config) => {
    startLoading();
    NProgress.start(); // 进度条开始
    return config;
  },
  (error) => {
    endLoading();
    return Promise.reject(error);
  }
);

serve.interceptors.response.use(
  (response) => {
    endLoading();
    NProgress.done(); // 进度条结束
    return response;
  },
  (error) => {
    endLoading();
    NProgress.done(); // 进度条结束
    return Promise.reject(error);
  }
);
