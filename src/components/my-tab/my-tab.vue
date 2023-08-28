<template>
  <div>
    <div class="tab-list flex a-c">
      <div class="list-title">{{ list.title }}</div>
      <div :class="activeIndex == index ? 'list-label active' : 'list-label'" v-for="(item, index) in list.children"
        @click="indexClick(item, index)">
        {{ item.label }}
      </div>
    </div>
    <!-- 热门推荐组件 -->
    <el-skeleton :loading="skLoading" :animated="true" v-if="Mtype == 1">
      <template #default>
        <div class="flex j-b">
          <div v-for="(item, index) in tdata" :key="index" style="width: 220px">
            <img class="music-img" :src="item.coverImgUrl" />
            <div class="music-title">{{ item.name }}</div>
            <div v-if="item.tags" style="padding: 2px 0px 10px 0px">
              <span class="music-tag" v-for="(inm, inx) in item.tags" :key="inx">#{{ inm }}</span>
            </div>
          </div>
        </div>
      </template>
      <template #template>
        <div class="flex j-b" style="padding-bottom: 10px">
          <div v-for="i in 6">
            <div>
              <el-skeleton-item variant="p" style="width: 220px; height: 220px" />
            </div>
            <div style="margin-top: 10px">
              <el-skeleton-item variant="p" style="width: 220px; height: 16px" />
            </div>
            <div style="margin-top: 10px">
              <el-skeleton-item variant="p" style="width: 60px; height: 16px" />
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
    <!-- 新碟上架 -->
    <el-skeleton :loading="skLoading" :animated="true" v-if="Mtype == 2">
      <template #default> </template>
      <template #template>
        <div class="flex j-b" style="flex-wrap: wrap">
          <div v-for="i in 12" style="width: 25%; padding: 0px 10px 10px 0px">
            <div>
              <el-skeleton-item variant="p" style="width: 100%; height: 120px" />
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
    <!-- 最新MV -->
    <el-skeleton :loading="skLoading" :animated="true" v-if="Mtype == 3">
      <template #default> </template>
      <template #template>
        <div class="flex j-b" style="flex-wrap: wrap">
          <div v-for="i in 10" style="width: 20%; padding: 0px 10px 10px 0px">
            <div>
              <el-skeleton-item variant="p" style="width: 100%; height: 120px" />
            </div>
            <div style="margin-top: 4px">
              <el-skeleton-item variant="p" style="width: 100%; height: 16px" />
            </div>
            <div style="margin-top: 4px">
              <el-skeleton-item variant="p" style="width: 50%; height: 16px" />
            </div>
            <div style="margin-top: 4px">
              <el-skeleton-item variant="p" style="width: 10%; height: 16px" />
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
    default: () => { }, //tab数据
  },
  skLoading: {
    type: Boolean,
    default: true, //是否开启骨架屏
  },
  tdata: {
    type: Array,
    default: () => [], //列表数据
  },
  Mtype: {
    type: Number,
    default: 1, //组件类型
  },
});

const emit = defineEmits(["myClick"]);

let activeIndex = $ref("0");

const indexClick = (item, index) => {
  emit("myClick", item.value, index);
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

.music-img {
  width: 220px;
  height: 220px;
  border-radius: 8px;
  cursor: pointer;
}

.music-title {
  height: 42px;
  padding-top: 4px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 15px;
  font-weight: 100;
}

.music-tag {
  padding-right: 4px;
  font-size: 12px;
  font-weight: 100;
  color: #ea3e3c;
}
</style>
