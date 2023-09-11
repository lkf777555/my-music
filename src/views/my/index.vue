<template>
    <div class="page">my</div>
</template>

<script setup>
let vm = inject("$vm");

onMounted(() => {
    if (!vm.useLoginInfoPinia.isLoginState) {
        vm.useLoginInfoPinia.isDialogState = true;
    }
});
</script>
<style lang="scss" scoped></style>
