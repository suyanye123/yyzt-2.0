<template>
  <div class="total">
    <div class="card">
      <!-- 上半 -->
      <div class="top">
        <h2>{{ list.title }}</h2>
        <h3>{{ list.text }}</h3>
      </div>
      <!-- 下半 -->
      <div class="bottom">
        <div v-for="item in list.span" :key="item.index" class="tag">
          <!-- <img src="../assets/syy123.jpg" style="height: 16px;width: 16px;" /> -->
          <!-- <p>{{ item }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    list: {
      title: "",
      text: "String",
      span: [],
    },
  },
};
</script>
<style scoped lang="scss">
.total {
  // background-color: rgb(177, 166, 166);
  position: relative;
  width: 300px;
  height: 200px;
  .card {
    position: absolute;
    border-radius: 20px;
    width: 300px;
    height: 200px;
    /* 设置渐变 */

    /* 重点：使元素背景模糊化 */
    backdrop-filter: blur(2px);
  }
  .card :hover {
  }
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;
    // background-color: rgb(86, 167, 122);
    h2 {
      /* 设置文字的大小和粗细 */
      font: 900 30px "";
      color: rgba(0, 0, 0, 0.5);
      /* 设置文字阴影 */
      text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.7);
    }
    h3 {
      // color: #aaa;
      font-size: 15px;
      line-height: 1;
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
    // background-color: #fff;
    .tag {
      display: flex;
    }
  }
}
</style>
