import request from "../utils/request";

/**
 * @method get
 * @description 获取账号信息
 * @param {}
 */
export const userAccount = (data) =>
    request({
        method: "get",
        url: "/user/account",
        data: data,
    });

/**
 * @method get
 * @description 退出登录
 * @param {}
 */
export const userLogout = (data) =>
    request({
        method: "get",
        url: "/logout",
        data: data,
    });

/**
 * @method get
 * @description 用户等级
 * @param {}
 */
export const userLevel = (data) =>
    request({
        method: "get",
        url: "/user/level",
        data: data,
    });

/**
 * @method get
 * @description 更新用户信息
 * @param {}
 */
export const userUpdate = (data) =>
    request({
        method: "get",
        url: "/user/update",
        data: data,
    });
