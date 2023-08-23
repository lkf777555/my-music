<template>
  <div>
    <div class="tab-list flex a-c">
      <div class="list-title">{{ list.title }}</div>
      <div
        :class="activeIndex == index ? 'list-label active' : 'list-label'"
        v-for="(item, index) in list.children"
        @click="indexClick(item, index)"
      >
        {{ item.label }}
      </div>
    </div>
    <el-skeleton :loading="skLoading" :animated="true">
      <template #default>内容</template>
      <template #template>
        <div class="flex j-b">
          <div v-for="i in 6">
            <div>
              <el-skeleton-item
                variant="p"
                style="width: 220px; height: 200px"
              />
            </div>
            <div style="margin-top: 10px">
              <el-skeleton-item
                variant="p"
                style="width: 220px; height: 20px"
              />
            </div>
            <div style="margin-top: 10px">
              <el-skeleton-item variant="p" style="width: 60px; height: 20px" />
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Object,
    default: () => {},
  },
  skLoading: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["myClick"]);

let activeIndex = $ref("0");

const indexClick = (item, index) => {
  emit("myClick", item, index);
  activeIndex = index;
};
</script>
<style lang="scss" scoped>
.tab-list {
  width: 100%;
  height: 60px;
  .list-title {
    width: 100px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .list-label {
    width: 100px;
    font-weight: 100;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
}
.active {
  transition: all 0.3s linear;
  color: #00aeec;
}
</style>
