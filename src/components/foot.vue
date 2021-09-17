<!-- Footer -->
<template>
  <div id="foot">
    <ul class="copyright">
      <li>Copyright 2020 简素言也</li>
      <li>
        <a href="https://beian.miit.gov.cn/">鄂ICP备2021000292号-1</a>
      </li>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
/* Footer */
#foot {
  z-index: 999;
  position: absolute;
  left: 10px;
  top: 95%;
  width: 340px;
  height: 20px;
  border-top: 0;
  color: #c0c0c0;
  .copyright {
    line-height: 1rem;
    list-style: none;
    padding: 0;
  }
  .copyright li {
    border-left: solid 1px #d4d4d4;
    display: inline-block;
    font-size: 0.8rem;
    margin-left: 1rem;
    padding-left: 1rem;
  }
  .copyright li:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
  }
  .copyright li a {
    color: inherit;
  }
}
</style>
