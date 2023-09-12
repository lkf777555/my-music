import request from "../utils/request";

/**
 * @method post
 * @description 获取账号信息
 * @param {}
 */
export const userAccount = (data) =>
    request({
        method: "post",
        url: "/user/account",
        data: data,
    });

/**
 * @method post
 * @description 退出登录
 * @param {}
 */
export const userLogout = (data) =>
    request({
        method: "post",
        url: "/logout",
        data: data,
    });
