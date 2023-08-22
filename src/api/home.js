import request from "../utils/request";

/**
 * @method get
 * @description 获取登录的key
 * @param {}
 */
export const loginKey = () =>
  request({
    method: "get",
    url: "/login/qr/key",
  });

/**
 * @method get
 * @description 二维码生成接口
 * @param {}
 */
export const loginImg = (data) =>
  request({
    method: "get",
    url: "/login/qr/create",
    data: data,
  });

/**
 * @method get
 * @description  二维码检测扫码状态接口
 * @param {}
 */
export const loginCheck = (data) =>
  request({
    method: "get",
    url: "/login/qr/check",
    data: data,
  });

/**
 * @method get
 * @description banner轮播图
 * @param {}
 */
export const getBannerList = (data) =>
  request({
    method: "get",
    url: "/banner",
    data: data,
  });
