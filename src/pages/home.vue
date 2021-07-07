<template>
  <div class="bg-black flex flex-col items-center xl:flex-row">
    <!-- 左侧 w:100% 480 600  h:100vh-->
    <div class="sm:h-screen sm:w-144 xl:w-2/5 p-8">
      <div class="flex flex-col sm:flex-row justify-center items-center">
        <img src="../assets/logo.png"
             class="w-24 h-24">
        <div class="flex flex-col justify-center mx-4">
          <h1 class="text-white-1 ">Matrixages</h1>
          <h3 class="text-white-1">design better, life better</h3>
        </div>
      </div>
      <h6 class="text-white-2 leading-loose my-4">Matrixages的灵感来源于《黑客帝国》和凯文·凯利的《失控》。人类在建筑上的艺术成就色彩渐渐暗淡，我们不再感叹于现实中艺术的伟大，却对手机屏幕上影像如痴如醉。现实世界有限的资源渐渐不足以支撑人类的欲望和野心，而虚拟世界没有边界——我们不可避免地走向虚拟化。那谁来建设这个虚拟化的世界？谁来构建虚拟世界的艺术？这是我一直在思考的问题。
      </h6>
      <h6 class="text-white-2 leading-loose my-4">Matrixages致力于做虚拟世界的艺术。把现实世界中的好的思想，好的设计，投射到虚拟世界当中，让人们感受到，什么是美？让这种美去改变他们对于生活的认知，去指引他们探寻内心深处的想法，把自己的灵魂从肉体中释放出来，去感受这世界的喜怒哀乐，而不是在快乐中沉沦。
      </h6>
      <h6 class="text-white-2 leading-loose my-4">这种未来是关于设计、开源、共建、分享、自由、虚拟化的融合趋势，而Matrixages是我对于未来的畅想，对于现实的回应，对于过去的反思，以及关于我对于自己的看法——知行合一。
      </h6>
      <h6 class="text-white-2 leading-loose my-4">"未有知而不行者，知而不行，只是未知。" ——王阳明
      </h6>
    </div>
    <!-- 右侧路由 -->
    <!-- 2xl时为九宫格 xl时为flex-cloum 且右边宽边变化 -->
    <div class="sm:h-screen sm:w-144 flex flex-wrap flex-row bg-white-0  xl:w-3/5 rounded-3xl place-content-around p-8">
      <!-- 卡片 w: 100% 2/5  h-64-->
      <div class="w-full h-1/6 xl:w-2/5 xl:h-40 p-9 hover:shadow-inner shadow-xl rounded-3xl "
           v-for='(item,index) in list'
           :key="index">
        <h3>{{index}}{{item.title}}</h3>
        <h6>{{item.text}}</h6>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    return {
      list: [
        { title: "light design", text: "可能是世界上最贴近自然的组件库" },
        { title: "antos", text: "可能是世界上最贴近自然的组件库" },
        { title: "autom.css", text: "可能是世界上最贴近自然的组件库" },
        { title: "tsettool", text: "可能是世界上最贴近自然的组件库" },
        { title: "picpic", text: "可能是世界上最贴近自然的组件库" },
        { title: "wave", text: "可能是世界上最贴近自然的组件库" },
      ],
    };
  },
  methods: {},
};
</script>

