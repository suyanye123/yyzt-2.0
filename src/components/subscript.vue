<template>
  <ul class="box">
    <li
      class="c_indicator"
      :class="{ 'is-active': index === current }"
      v-for="(item, index) in list"
      :key="item"
    >
      <span class="c_button"></span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    // 生成的下标个数
    list: {
      type: Number,
      required: true,
    },
    // 显示的是第几页
    current: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    current(val) {
      console.log("current", val, this.current);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  position: absolute;
  list-style: none;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
  z-index: 99;
  .c_indicator {
    margin: 10px 0;
    background-color: transparent;
    .c_button {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #ccc;
      border-radius: 4px;
      // cursor: pointer;
    }
  }
  .is-active .c_button {
    width: 8px;
    height: 30px;
  }
}
</style>
