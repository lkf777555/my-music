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
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Object,
    default: () => {},
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
