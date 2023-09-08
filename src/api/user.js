import request from "../utils/request";

/**
 * @method get
 * @description 获取账号信息
 * @param {}
 */
export const userAccount = (data) =>
    request({
        method: "post",
        url: "/user/account",
        data: data,
    });
