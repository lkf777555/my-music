/**
 * vite动态加载图片静态文件
 * @param {string} path 文件路径
 * @returns
 */

export const getImgUrl = function (path) {
    const modules = import.meta.glob("../assets/img/**/*", { eager: true });
    if (path && modules) {
        if (path.includes("../assets/img/")) {
            return modules[path].default;
        } else {
            return modules[`../assets/img/${path}`].default;
        }
    }
};
