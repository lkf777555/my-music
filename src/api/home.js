import Axios from "@u/request";
/**
 * @method get 获取登录的key
 * @description
 * @param {}
 */
export const login = () => {
  return Axios({
    method: "get",
    url: "/login/qr/key",
    showLoading: true,
  });
};
