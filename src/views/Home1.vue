<template>
  <div id="total">
    <div class="login" v-if="showlog"></div>
    <svg aria-hidden="true" class="icon" @click="showlog = !showlog">
      <use xlink:href="#su-icon-admonish-line"></use>
    </svg>
  </div>
</template>
<script>
import card from "../components/card.vue";

import { onMounted, onUnmounted, reactive } from "vue";

export default {
  components: { card },
  setup() {},
  data() {
    return {
      showlog: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
#total {
  background-size: 1536px 760px;
  background-image: url("../assets/1.jpg");
  user-select: none;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  z-index: 50;
  position: absolute;
  color: #ffffff99;
  right: 4px;
  bottom: 4px;
  font-size: 20px;
}
.login {
  z-index: 50;
  width: 500px;
  height: 500px;
  background-color: #fff;
}
</style>
