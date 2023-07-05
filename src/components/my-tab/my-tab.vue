<template>
  <div class="tab">
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
  color: var(--main-text-color);
}
@media screen and (max-width: 1366px) {
  .list-label {
    font-size: 12px;
  }
  .list-title {
    width: 130px;
    font-size: 18px;
  }
}
@media screen and (min-width: 1366px) {
  .list-title {
    width: 140px;
    font-size: 26px;
  }
}
</style>
