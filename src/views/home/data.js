import { ref, reactive } from "vue";

export const tab = ref({
  title: "热门推荐",
  children: [
    {
      label: "推荐",
      value: "",
    },
    {
      label: "华语",
      value: "华语",
    },
    {
      label: "流行",
      value: "流行",
    },
    {
      label: "摇滚",
      value: "摇滚",
    },
    {
      label: "民谣",
      value: "民谣",
    },
    {
      label: "电子",
      value: "电子",
    },
  ],
});
export const tab1 = ref({
  title: "新碟上架",
  children: [
    {
      label: "全部",
      value: "",
    },
    {
      label: "华语",
      value: "zh",
    },
    {
      label: "欧美",
      value: "ea",
    },
    {
      label: "韩国",
      value: "kr",
    },
    {
      label: "日本",
      value: "jp",
    },
  ],
});
export const tab2 = ref({
  title: "最新MV",
  children: [
    {
      label: "全部",
      value: "",
    },
    {
      label: "内地",
      value: "内地",
    },
    {
      label: "港台",
      value: "港台",
    },
    {
      label: "欧美",
      value: "欧美",
    },
    {
      label: "日本",
      value: "日本",
    },
    {
      label: "韩国",
      value: "韩国",
    },
  ],
});
