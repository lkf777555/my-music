import request from "@u/request";
/**
 * @method get
 * @description 获取登录的key
 * @param {}
 */
export const login = () =>
  request({
    method: "get",
    url: "/login/qr/key",
    showLoading: false,
  });
