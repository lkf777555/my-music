import request from "../utils/request";

/**
 * @method get
 * @description 获取登录的key
 * @param {}
 */
export const loginKey = (data) =>
    request({
        method: "get",
        url: "/login/qr/key",
        data: data,
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

/**
 * @method get
 * @description 首页热门推荐
 * @param {}
 */
export const getopPlayList = (data) =>
    request({
        method: "get",
        url: "/top/playlist",
        data: data,
    });

/**
 * @method get
 * @description 首页热碟上架
 * @param {}
 */
export const getopAlbumList = (data) =>
    request({
        method: "get",
        url: "/top/album",
        data: data,
    });

/**
 * @method get
 * @description 首页热碟上架
 * @param {}
 */
export const getopMVList = (data) =>
    request({
        method: "get",
        url: "/mv/all",
        data: data,
    });
