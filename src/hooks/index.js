import { ref } from "vue";
export const useGetListApi = (api, parameter = {}, attr) => {
  // 更改参数 attr/属性名 value/值
  function editParams(attr, value) {
    parameter[attr] = value;
    getApi();
  }
  let list = ref([]);
  let loading = ref(true);
  const getApi = () => {
    api(parameter).then((res) => {
      loading.value = false;
      list.value = res[attr];
    });
  };
  getApi();
  return {
    list,
    loading,
    editParams,
  };
};
