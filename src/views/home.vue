<template>
  <div class="total">
    <div class="left">
      <div class="title">
        <img src="../assets/logo.png" />
        <div>
          <h1>Matrixages</h1>
          <h3>design better, life better</h3>
        </div>
      </div>
      <div>
        <h6>
          Matrixages的灵感来源于《黑客帝国》和凯文·凯利的《失控》。人类在建筑上的艺术成就色彩渐渐暗淡，我们不再感叹于现实中艺术的伟大，却对手机屏幕上影像如痴如醉。现实世界有限的资源渐渐不足以支撑人类的欲望和野心，而虚拟世界没有边界——我们不可避免地走向虚拟化。那谁来建设这个虚拟化的世界？谁来构建虚拟世界的艺术？这是我一直在思考的问题。
        </h6>
        <h6>
          Matrixages致力于做虚拟世界的艺术。把现实世界中的好的思想，好的设计，投射到虚拟世界当中，让人们感受到，什么是美？让这种美去改变他们对于生活的认知，去指引他们探寻内心深处的想法，把自己的灵魂从肉体中释放出来，去感受这世界的喜怒哀乐，而不是在快乐中沉沦。
        </h6>
        <h6>
          这种未来是关于设计、开源、共建、分享、自由、虚拟化的融合趋势，而Matrixages是我对于未来的畅想，对于现实的回应，对于过去的反思，以及关于我对于自己的看法——知行合一。
        </h6>
        <h6>
          "未有知而不行者，知而不行，只是未知。" ——王阳明
        </h6>
      </div>
    </div>
    <!-- 右侧路由 -->
    <div class="right">
      <card
        v-for="(item, index) in list"
        :key="index"
        :list="item"
        @click="intoDetail(item, index)"
      />
    </div>
  </div>
</template>
<script>
import card from "../components/card.vue";
export default {
  components: { card },
  setup() {},
  data() {
    return {
      list: [
        {
          title: "light design",
          text: "可能是世界上最贴近自然的组件库",
          span: ["css", "布局", "样式"],
        },
      ],
    };
  },
  methods: {
    intoDetail(item, index) {
      console.log(item, index);
      if (index == 0) {
        this.$router.push("/Pic");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}
.total {
  height: 100vh;
  background-color: #000;
  display: flex;
}
.left {
  padding: 40px 0;

  width: 35vw;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.right {
  overflow: scroll;
  width: 65vw;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  border-radius: 30px;
  padding: 32px;
}
</style>
