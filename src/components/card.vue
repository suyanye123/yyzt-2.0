<template>
  <div class="total">
    <!-- 上半 -->
    <div class="show">
      <div class="title">{{ list.title }}</div>
      <div class="title2">{{ list.text }}</div>
    </div>
    <!-- 下半 -->
    <div class="noshow">
      <div v-for="item in list.span" :key="item.index">
        <img src="../assets/logo.png" />
        <p>{{ span }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: {
    list: {
      title: "light design",
      text: "可能是世界上最贴近自然的组件库",
      span: ["css", "布局", "样式"],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.total {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  width: 240px;
  height: 160px;

  .show {
    position: relative;
  }
  .noshow {
    display: flex;
  }
}
</style>
