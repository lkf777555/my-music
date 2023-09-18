import axios from "axios";

const errorCode = {
    404: "访问资源不存在",
    800: "检测到二维码失效 正在为您更新二维码",
    500: "服务器内部错误，无法完成请求",
    501: "服务器不支持请求的功能，无法完成请求",
    503: "由于超载或系统维护，服务器暂时的无法处理客户端的请求",
};

const service = axios.create({
    baseURL: "https://api.trtst.com/",
    timeout: 30000,
});

//请求拦截器
service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//响应拦截器
service.interceptors.response.use(
    (response) => {
        const code = response?.data?.code;

        if (errorCode.hasOwnProperty(code)) {
            ElMessage({
                showClose: true,
                message: errorCode[code],
                type: "error",
                duration: 3500,
            });
        }

        return response.data;
    },
    (error) => {
        const code = error?.response?.status;

        if (errorCode.hasOwnProperty(code)) {
            ElMessage({
                showClose: true,
                message: errorCode[code],
                type: "error",
                duration: 3500,
            });
        }

        return Promise.reject(error.message);
    }
);

/**
 * get参数转换
 * @param {Object} options 请求配置
 */
function request(options) {
    options.method = options.method || "get"; // 如果是get请求的话，则将data中的数据转移到params中
    if (options.method.toLowerCase() === "get") {
        options.params = options.data;
    }
    return service(options);
}

/**
 * 统一处理
 */
["get", "post", "put", "delete", "patch"].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            method: item,
            url,
            data,
            ...options,
        });
    };
});

export default request;
