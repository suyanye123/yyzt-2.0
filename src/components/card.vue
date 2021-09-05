<template>
  <div class="card">
    <!-- 上半 -->
    <div class="top">
      <h2>{{ list.title }}</h2>
      <h3>{{ list.text }}</h3>
    </div>
    <!-- 下半 -->
    <div class="bottom">
      <div v-for="item in list.span" :key="item.index" class="tag">
        <img src="../assets/syy123.jpg" style="height: 16px;width: 16px;" />
        <p>{{ item }}</p>
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
.card {
  background-color: rgb(177, 166, 166);
  opacity: 0.5;

  width: 280px;
  height: 200px;

  .top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40%;
    background-color: rgb(86, 167, 122);
  }
  .bottom {
    display: flex;
    height: 60%;
    background-color: #fff;
    .tag {
      display: flex;
    }
  }
}
</style>
