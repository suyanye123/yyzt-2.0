<template>
  <div class="body">
    <div class="mark">老大喜欢手动整的毛玻璃效果</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
$img: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/388f7a44af6b4ea3af893a1fcbfadd71~tplv-k3u1fbpfcp-watermark.image";

.body {
  height: 100vh;
  display: flex;
  background-image: url($img);
}

.mark {
  position: relative;
  margin: auto;
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  z-index: 10;
  line-height: 300px;
  text-align: center;
  color: #ffffff;
  font-size: 20px;

  &::before {
    content: "";
    position: absolute;
    background-position: top;
    filter: blur(8px);
    background-image: url($img);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
}
</style>
