<template>
  <router-view />
  <subscript :list="3" :current="0" />
</template>
<script>
import { onMounted, ref } from "vue";
import subscript from "./components/subscript.vue";
export default {
  components: { subscript },
  setup() {
    // const root = ref(null);

    let x = ref(0);
    let y = ref(0);
    onMounted(() => {
      // DOM 元素将在初始渲染后分配给 ref

      // alert(document.body.clientWidth);
      window.addEventListener("click", (e) => {
        //创建DOM
        let father = document.createElement("div");
        father.setAttribute("id", "mywave");
        father.style.left = e.pageX + "px";
        father.style.top = e.pageY + "px";
        let son0 = document.createElement("div");
        son0.setAttribute("class", "wave wave0");
        let son1 = document.createElement("div");
        son1.setAttribute("class", "wave wave1");
        let son2 = document.createElement("div");
        son2.setAttribute("class", "wave wave2");
        let son3 = document.createElement("div");
        son3.setAttribute("class", "wave wave3");
        let son4 = document.createElement("div");
        son4.setAttribute("class", "wave wave4");
        let son5 = document.createElement("div");
        son5.setAttribute("class", "wave wave5");
        father.appendChild(son0);
        father.appendChild(son1);
        father.appendChild(son2);
        father.appendChild(son3);
        father.appendChild(son4);
        father.appendChild(son5);
        document.body.appendChild(father);

        setTimeout(() => {
          document.body.removeChild(father);
        }, 2000);
      });
    });
    window.addEventListener("mousewheel", (e) => {
      console.log(e.deltaY);
    });
    // return { root, x, y };
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
  background: url("./assets/5.jpg");
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
  background-size: 1536px 760px;
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
