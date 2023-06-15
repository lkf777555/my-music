<template>
  <div>
    <el-switch
      size="large"
      v-model="isDark"
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
    />
  </div>
</template>

<script setup name="MyTheme">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<style lang="scss" scoped></style>
