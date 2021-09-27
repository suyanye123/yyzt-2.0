<template>
  <div id="total">
    <div class="left">
      <!-- avatar -->
      <div class="avatar">
        <img src="../assets/syy123.jpg" alt="简素言也" />
        <h1 id="logo">简素言也</h1>
        <p>
          ♥ World is powered by solitude.
        </p>
      </div>
      <!-- content -->
      <div class="content">
        <p>
          Hi there! I'm suyanye123 👋 <br />
          一名觉得自己啥也不会<br />
          的编程爱好者 <br />
          微信公众号：简素言也
        </p>
      </div>
    </div>
    <!-- 右侧卡片 -->
    <div class="right">
      <div class="bgc" v-show="showCard">
        <!-- vue中并没有 @hover 事件，但是可以使用 @mouseenter 和 @mouseleave 来模拟hover操作。 -->
        <svg
          aria-hidden="true"
          :class="{ icon: true, iconhover: rotate }"
          @mouseenter="iconHover"
          @click="showCard = false"
        >
          <use xlink:href="#su-icon-close"></use>
        </svg>
        <card
          class="cardItem"
          v-for="(item, index) in list"
          :key="index"
          :list="item"
          @click="intoDetail(item, index)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import card from "../components/card.vue";
import { ref } from "vue";
export default {
  components: { card },
  setup() {
    function intoDetail(item, index) {
      setTimeout(() => {
        if (index == 0) {
          window.location.href = "https://yu-nan.gitee.io/syy-notes/";
          // window.open("https://yu-nan.gitee.io/syy-notes/");
        }
        if (index == 1) {
          window.location.href = "https://gitee.com/yu-nan/syy-template";
          window.open("https://gitee.com/yu-nan/syy-template");
        }
        if (index == 2) {
          window.open("https://gitee.com/yu-nan/suUI");
        }
        if (index == 3) {
          // window.open("https://gitee.com/yu-nan/syy-template");
        }
        if (index == 4) {
          // window.open("https://gitee.com/yu-nan/syy-template");
        }
        if (index == 5) {
          this.$router.push("/Pic");
        }
      }, 1000);
    }
    let rotate = ref(false);
    function iconHover() {
      if (rotate.value) {
        return;
      }
      console.log("飘过", rotate);
      rotate.value = true;
      setTimeout(() => {
        rotate.value = false;
      }, 600);
    }
    return { intoDetail, iconHover, rotate };
  },
  data() {
    return {
      showCard: true,

      list: [
        {
          title: "syy-notes",
          text: "前端小札",
          span: ["博客", "前端笔记", "vuePress"],
        },
        {
          title: "syy-template",
          text: "项目模板",
          span: ["脚手架", "空白模板", "项目搭建"],
        },
        {
          title: "su-UI",
          text: "自用css库",
          span: ["css", "UI", "交互"],
        },
        {
          title: "syy-admin",
          text: "管理系统",
          span: ["后台管理", "时间规划"],
        },
        {
          title: "syy-book",
          text: "收集文章",
          span: ["转载", "深有感触"],
        },
        {
          title: "syy-design",
          text: "胡思乱想",
          span: ["设计", "想法", "胡思乱想"],
        },
      ],
      // img: require("../../tmp-background/微信图片_20210903124216.jpg"),
    };
  },
};
</script>
<style lang="scss" scoped>
#total {
  background-size: 1536px 760px;
  background-image: url("../assets/0.jpg");
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
  /* avatar */
  .avatar {
    display: block;
    margin: 0 auto 2.25rem auto;
    img {
      width: 10rem;
      height: 10rem;
    }
    h1 {
      color: #d4d4d4;
      font-size: 1.25rem;
      margin: 0;
    }
    p {
      color: #d2f2e9;
      font-style: italic;
      margin: 1em 0 0 0;
    }
  }
  /* content */
  .content {
    // background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d4d4d4;
  }
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
    color: #ffffff99;
    right: 4px;
    top: 4px;
    font-size: 40px;
  }
  .iconhover {
    color: #d4d4d4;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-transition: -webkit-transform 1s linear;
    transition: transform 0.5s linear;
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
