<template>
  <div class="body">
    <!-- 瀑布流 -->
    <div class="shell">
      <div class="image" v-for="item in list" :key="item">
        <img :src="item" @click="alert(item)" />
      </div>
    </div>
    <!-- popup -->
    <div class="pop" v-show="picShow" @click="picShow = !picShow">
      <div class="popup">
        <img :src="selected" />
      </div>
    </div>
  </div>
</template>
<script>
import { nextTick, reactive } from "vue";
export default {
  setup() {
    const list = reactive([]);
    /**
    * @param directory 要搜索的文件夹目录不能是变量，否则在编译阶段无法定位目录
    * @param useSubdirectories  是否搜索子目录
    * @param regExp 匹配文件的正则表达式
    * @return function 返回一个具有 resolve, keys, id 三个属性的方法
              resolve() 它返回请求被解析后得到的模块 id
              keys() 它返回一个数组，由所有符合上下文模块处理的请求组成。
              id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到
    */
    const modulesFiles = require.context("./Image", true, /\.jpeg$/);
    //伪随机走一波
    function randomSort(a, b) {
      return 0.5 - Math.random();
    }
    const modules = modulesFiles
      .keys()
      .map((item) => require("./Image" + item.replace(/./, "")))
      .sort(randomSort);
    list.push(...modules.splice(0));

    // console.log(list);
    return { list };
  },
  data() {
    return {
      selected: "",
      picShow: false,
    };
  },
  methods: {
    alert(item) {
      console.log(item);
      this.selected = item;
      this.picShow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.body {
  background-color: rgba(130, 140, 250, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pop {
  background: rgb(148, 142, 142);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20000;
  width: 100vw;
  height: 100vh;
  cursor: pointer; //cursor 属性规定要显示的光标的类型（形状）
  opacity: 1;
}
.popup {
}
.popup img {
  max-height: 600px;
}
.shell {
  max-width: 1300px;
  column-count: 5;
  column-gap: 15px;
}
.image {
  margin-bottom: 15px;
}
.image img {
  width: 100%;
}
@media (max-width: 1200px) {
  .shell {
    column-count: 4;
  }
}
@media (max-width: 850px) {
  .shell {
    column-count: 3;
  }
}
@media (max-width: 600px) {
  .shell {
    column-count: 2;
  }
}
</style>
