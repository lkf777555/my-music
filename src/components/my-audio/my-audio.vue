<template>
    <div>
        <div class="my-icon flex a-c j-c" :style="info.isPlaying ? 'transform:translateY(0px)' : 'transform:translateY(70px)'">
            <el-icon v-if="info.isPlaying" size="28" @click="info.isPlaying = false"><ArrowDownBold /></el-icon>
            <el-icon v-else size="28" @click="info.isPlaying = true"><ArrowUpBold /></el-icon>
        </div>
        <div class="my-audio" :style="info.isPlaying ? 'transform:translateY(0px)' : 'transform:translateY(70px)'">
            <div class="left flex a-c">
                <div class="left-img"><img src="https://p1.music.126.net/-e4aiMXoOxj8Pm3z8yftoA==/109951165460100997.jpg" alt="" /></div>
                <div class="left-btn flex a-c">
                    <div class="btn-img">
                        <img src="https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/24gl-previous.png" alt="" />
                    </div>
                    <div class="btn-img" @click="info.isState = !info.isState">
                        <img v-show="info.isState" src="https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/24gl-suspend.png" alt="" />
                        <img v-show="!info.isState" src="https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/24gl-playCircle.png" alt="" />
                    </div>
                    <div class="btn-img">
                        <img src="https://lkf777555-1309934855.cos.ap-beijing.myqcloud.com/img/24gl-next.png" alt="" />
                    </div>
                </div>
            </div>
            <div class="conent flex a-c">
                <div style="width: 90%"><el-slider v-model="sliderValue" :show-tooltip="false" /></div>
                <div style="width: 10%; text-align: center; color: white">01:21/04:15</div>
            </div>
            <div class="right flex a-c">
                <div style="width: 30%">
                    <el-slider v-model="sliderValue1" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowUpBold, ArrowDownBold } from "@element-plus/icons-vue";

const vm = inject("$vm");
const info = vm.useLoginInfoPinia.audioInfo;

let sliderValue = $ref(0);
let sliderValue1 = $ref(0);
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
    z-index: 100;
    background-color: antiquewhite;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    transition: all 0.5s ease;
}
.my-audio {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    z-index: 100;
    background-color: #a19a9a;
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
        &-btn {
            flex: 1;
            .btn-img {
                width: 34px;
                height: 34px;
                margin: 0px 16px;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 100%;
                }
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
