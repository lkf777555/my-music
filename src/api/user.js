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

/**
 * @method post
 * @description 用户等级
 * @param {}
 */
export const userLevel = (data) =>
    request({
        method: "post",
        url: "/user/level",
        data: data,
    });

/**
 * @method post
 * @description 更新用户信息
 * @param {}
 */
export const userUpdate = (data) =>
    request({
        method: "post",
        url: "/user/update",
        data: data,
    });
