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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(177, 166, 166);
  padding: 20px;
  width: 280px;
  height: 200px;

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
