<template>
  <div>
    <my-theme></my-theme>
  </div>
</template>

<script setup>
import { login } from "@a/home";
let vm = inject("$vm");
login().then((res) => {
  console.log(res);
});
</script>
<style lang="scss" scoped></style>
