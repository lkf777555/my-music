<template>
    <div class="page">my</div>
</template>

<script setup>
let vm = inject("$vm");

watch(
    () => vm.useLoginInfoPinia.isLoginState,
    (value) => {
        if (value == false) {
            vm.useLoginInfoPinia.isDialogState = true;
        }
    },
    { immediate: true }
);
</script>
<style lang="scss" scoped></style>
