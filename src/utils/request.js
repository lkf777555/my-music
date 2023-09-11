import axios from "axios";

const errorCode = {
    400: "参数错误",
    404: "访问资源不存在",
    800: "检测到二维码失效 正在为您更新二维码 请稍后扫码再试",
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
                duration: 5000,
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
                duration: 5000,
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
