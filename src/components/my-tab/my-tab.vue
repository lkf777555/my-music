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
    padding-right: 50px;
    font-size: 26px;
    font-weight: bold;
  }
  .list-label {
    padding-right: 50px;
    font-weight: 100;
    cursor: pointer;
  }
}
.active {
  color: var(--main-text-color);
}
</style>
