<template>
  <div class="card">
    <!-- 上半 -->
    <div class="show">
      <div class="title">{{ list.title }}</div>
      <div class="title2">{{ list.text }}</div>
    </div>
    <!-- 下半 -->
    <div class="noshow">
      <div v-for="item in list.span" :key="item.index" class="tag">
        <img src="../assets/logo.png" style="height: 16px;width: 16px;" />
        <p>{{ item }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
// 用来标识这个Typescript类是一个vue组件,在@options装饰器中可以填写vue组件内包含的属性
@Options({
  props: {
    list: {
      title: String,
      text: String,
      span: [String],
    },
    data() {
      return {
        flag: "这是一个欢迎组件",
      };
    },
  },
})
export default class card extends Vue {
  list!: Object;
  // 这里的flag会把修饰器中声明的覆盖掉, class中的声明优先级高于修饰器
  public flag: number = 2;
  // 你也可以很方便的声明一个method
  public mounted(): void {
    console.log("挂载成功");
  }
}
</script>
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(177, 166, 166);
  padding: 20px;
  width: 240px;
  height: 160px;

  .show {
    position: relative;
  }
  .noshow {
    display: flex;
    .tag {
      display: flex;
    }
  }
}
</style>
