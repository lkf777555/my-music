<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>
<script setup>
// // 禁止右键
// document.oncontextmenu = new Function("event.returnValue=false");
// // 禁用选择
// document.onselectstart = new Function("event.returnValue=false");
// //禁止f12
// document.onkeydown = new Function("event.returnValue=false");

/*
 *全局挂载方法和使用
 */
let {
  appContext: {
    app: {
      config: {
        globalProperties: { MsgSuccess },
      },
    },
  },
} = getCurrentInstance();

provide("$vm", { MsgSuccess });
</script>
<style scoped></style>
