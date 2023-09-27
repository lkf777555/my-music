<template>
    <div>{{ params.name }}</div>
</template>

<script setup>
let vm = inject("$vm");
const route = useRoute();
const params = reactive({
    id: route.query.id,
    name: route.query.name,
});
</script>
<style lang="scss" scoped></style>
