<template>
  <router-view />
  <div
    id="mywave"
    ref="root"
    :style="{ left: x + 'px', top: y + 'px' }"
    v-show="showwave"
  >
    <div class="wave wave5"></div>
    <div class="wave wave4"></div>
    <div class="wave wave3"></div>
    <div class="wave wave2"></div>
    <div class="wave wave1"></div>
    <div class="wave wave0"></div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const root = ref(null);
    let showwave = ref(false);
    let x = ref(0);
    let y = ref(0);
    onMounted(() => {
      // DOM 元素将在初始渲染后分配给 ref
      console.log(root.value);
      window.addEventListener("click", (e) => {
        x.value = e.pageX;
        y.value = e.pageY;
        showwave.value = true;
        // console.log("dianji", showwave, x, y);
      });
    });

    return { root, showwave, x, y };
  },
};
</script>
<style lang="scss">
@import "./index.scss";
#mywave {
  position: absolute;
}
.wave {
  position: absolute;
  top: calc((100% - 30px) / 2);
  left: calc((100% - 30px) / 2);
  width: 30px;
  height: 30px;
  border-radius: 300px;
  background: url("../tmp-background/5.jpg");
  background-attachment: fixed;
  background-position: center center;
}
.wave0 {
  z-index: 2;
  background-size: auto 106%;
  animation: w 1s forwards;
}
.wave1 {
  z-index: 3;
  background-size: auto 102%;
  animation: w 1s 0.2s forwards;
}
.wave2 {
  z-index: 4;
  background-size: auto 104%;
  animation: w 1s 0.4s forwards;
}
.wave3 {
  z-index: 5;
  background-size: auto 101%;
  animation: w 1s 0.5s forwards;
}
.wave4 {
  z-index: 6;
  background-size: auto 102%;
  animation: w 1s 0.8s forwards;
}
.wave5 {
  z-index: 7;
  background-size: auto 100%;
  animation: w 1s 1s forwards;
}
@keyframes w {
  0% {
    top: calc((100% - 30px) / 2);
    left: calc((100% - 30px) / 2);
    width: 30px;
    height: 30px;
  }
  100% {
    top: calc((100% - 300px) / 2);
    left: calc((100% - 300px) / 2);
    width: 300px;
    height: 300px;
  }
}
</style>
