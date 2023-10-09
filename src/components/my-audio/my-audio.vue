<template>
    <div>
        <div class="my-icon flex a-c j-c" :style="info.isPlaying ? 'transform:translateY(0px)' : 'transform:translateY(70px)'">
            <el-icon v-if="info.isPlaying" size="28" @click="info.isPlaying = false"><ArrowDownBold /></el-icon>
            <el-icon v-else size="28" @click="info.isPlaying = true"><ArrowUpBold /></el-icon>
        </div>
        <div class="my-audio" :style="info.isPlaying ? 'transform:translateY(0px)' : 'transform:translateY(70px)'">
            <div class="left flex a-c">
                <div class="left-img"><img src="https://p1.music.126.net/-e4aiMXoOxj8Pm3z8yftoA==/109951165460100997.jpg" alt="" /></div>
                <div class="left-btn"></div>
            </div>
            <div class="conent"></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script setup>
import { ArrowUpBold, ArrowDownBold } from "@element-plus/icons-vue";

const vm = inject("$vm");
const info = vm.useLoginInfoPinia.audioInfo;
</script>
<style lang="scss" scoped>
.my-icon {
    cursor: pointer;
    position: fixed;
    bottom: 70px;
    left: 50%;
    right: 50%;
    width: 50px;
    height: 30px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: antiquewhite;
    transition: all 0.5s ease;
}
.my-audio {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    background-color: #cccccc;
    z-index: 9999;
    transition: all 0.5s ease;
    display: flex;
    .left {
        flex: 1;
        &-img {
            margin-left: 10px;
            width: 60px;
            height: 60px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
            }
        }
    }
    .conent {
        flex: 4;
    }
    .right {
        flex: 1;
    }
}
</style>
