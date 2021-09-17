<template>
  <div id="total"></div>
</template>
<script>
import card from "../components/card.vue";
import useWave from "../hooks/useClick";
import { onMounted, onUnmounted, reactive } from "vue";

export default {
  components: { card },
  setup() {},
  data() {
    return {
      // img: require("../../tmp-background/微信图片_20210903124216.jpg"),
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#total {
  // $mybgc: var(--mybgc);
  // $mybgc: "../../tmp-background/微信图片_20210903124216.jpg";
  background-size: 1536px 760px;
  background-image: url("../../tmp-background/2.jpg");
  user-select: none;
}
// .left a:hover {
//   color: #ffffff !important;
// }

/* Left */
.left {
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;

  // background-color: rgb(223, 221, 221);
  // opacity: 0.5;

  height: 100vh;
  z-index: 999;

  .a {
    // background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .d {
      position: relative;
      width: 200px;
      height: 90px;
      right: 0;
      transition: 0.5s;
      overflow: hidden;
    }
    .d img {
      position: absolute;
      width: 200px;
      /* 小图片上移 */
      transform: translate(0, -50px);
      transition: 0.5s;
      right: 0;
    }
    .d.dd {
      opacity: 0;
      right: 250px;
    }
    .d:hover img {
      opacity: 0;
      right: 250px;
    }
  }
}

.left > .avatar {
  display: block;
  margin: 0 auto 2.25rem auto;
}
.avatar img {
  width: 10rem;
  height: 10rem;
}
.avatar > h1 {
  color: #d4d4d4;
  font-size: 1.25rem;
  margin: 0;
}

.avatar > p {
  color: #d2f2e9;
  font-style: italic;
  margin: 1em 0 0 0;
}
/* content */
.content {
  // background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d4d4d4;
}

/* Footer */

#footer {
  // background: #fafafa;
  border-top: 0;
  color: #c0c0c0;
  overflow: hidden;
}

#footer .copyright {
  line-height: 1rem;
  list-style: none;
  padding: 0;
}

#footer .copyright li {
  border-left: solid 1px #d4d4d4;
  display: inline-block;
  font-size: 0.8rem;
  margin-left: 1rem;
  padding-left: 1rem;
}

#footer .copyright li:first-child {
  border-left: 0;
  margin-left: 0;
  padding-left: 0;
}

#footer .copyright li a {
  color: inherit;
}
/* right */
.right {
  // background-color: rgb(153, 173, 119);
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;

  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  // position: relative;
}
.right:hover {
  opacity: 1;
}
.bgc {
  // position: absolute;
  // left: 0px;
  // top: 0px;
  width: 80%;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.6),
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.2)
  );
  /* 重点：使元素背景模糊化 */
  backdrop-filter: blur(2px);
  // opacity: 0;
  .icon {
    position: absolute;
    left: 95%;
    top: 5px;
    width: 30px;
    height: 30px;
  }
}
.bgc:hover {
  opacity: 1;
}
.bgc > .cardItem {
  flex-shrink: 0;
  margin: 20px;
}
</style>
