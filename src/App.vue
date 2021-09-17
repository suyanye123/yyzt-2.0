<template>
  <router-view />
  <subscript :list="2" :current="page" />
  <foot />
</template>
<script>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import useClick from "./hooks/useClick";
import subscript from "./components/subscript.vue";
import foot from "./components/foot.vue";
export default {
  components: { subscript, foot },
  setup() {
    // DOM 元素将在初始渲染后分配给 ref
    // alert(document.body.clientWidth);
    useClick();
    let page = ref(0);
    const route = useRouter();
    window.addEventListener("mousewheel", (e) => {
      //往下滚动
      if (e.deltaY > 0 && page.value < 1) {
        page.value++;
      }
      //往上
      if (e.deltaY < 0 && page.value > 0) {
        page.value--;
      }
    });

    // 监听更改背景图;
    watch(
      page,
      (newv, oldv) => {
        route.push({
          path: `/Home${newv}`,
          // query: {
          //   id: 666,
          // },
        });
        if (newv == 0) {
          window.show = 0;
        }
        if (newv == 1) {
          window.show = 1;
        }
      },
      { immediate: true }
    );

    return { page };
  },
};
</script>
<style lang="scss">
@import "./index.scss";
@import "./scss/wave.scss";
</style>
