import { ref } from "vue";
/**
 * @param {Promise} api 页面的请求函数
 * @param {Object} params 查询条件参数
 * @param {String} custom 自定义后端返回字段
 * @returns list返回的数组 loading状态 editParams修改参数
 */
export const useGetListApi = (api, params = {}, custom) => {
    let list = ref([]);
    let loading = ref(false);

    // 初始化请求数据
    const getApi = () => {
        loading.value = true;
        api(params).then((res) => {
            if (res.code === 200) {
                loading.value = false;
                list.value = res[custom];
            }
        });
    };
    getApi();

    // 修改参数 attr/属性名 value/值
    const editParams = (attr, value) => {
        params[attr] = value;
        getApi();
    };
    return {
        list,
        loading,
        editParams,
    };
};
