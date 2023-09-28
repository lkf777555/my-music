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

/**
 * @method get
 * @description 获取用户歌单
 * @param {}
 */
export const userPlaylist = (data) =>
    request({
        method: "get",
        url: "user/playlist",
        data: data,
    });

/**
 * @method get
 * @description 获取用户关注列表
 * @param {}
 */
export const userFollows = (data) =>
    request({
        method: "get",
        url: "user/follows",
        data: data,
    });

/**
 * @method get
 * @description 获取用户粉丝列表
 * @param {}
 */
export const userFolloweds = (data) =>
    request({
        method: "get",
        url: "user/followeds",
        data: data,
    });

/**
 * @method get
 * @description 更新歌单描述
 * @param {}
 */
export const userPlaylistDesc = (data) =>
    request({
        method: "get",
        url: "/playlist/desc/update",
        data: data,
    });

/**
 * @method get
 * @description 更新歌单名
 * @param {}
 */
export const userPlaylistName = (data) =>
    request({
        method: "get",
        url: "playlist/name/update",
        data: data,
    });

/**
 * @method get
 * @description 歌单详情
 * @param {}
 */
export const userPlaylistDetail = (data) =>
    request({
        method: "get",
        url: "playlist/detail",
        data: data,
    });
