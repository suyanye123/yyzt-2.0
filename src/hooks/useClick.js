import { ref, onMounted, onBeforeUnmount } from "vue";
export default function() {
  let x = ref(0);
  let y = ref(0);
  function handleClick(e) {
    x.value = e.pageX;
    y.value = e.pageY;
    // console.log(x.value, y.value);
    console.log("接收参数", window.show);
    //创建DOM
    let father = document.createElement("div");
    father.setAttribute("id", "mywave");
    father.style.left = x.value + "px";
    father.style.top = y.value + "px";
    let son0 = document.createElement("div");
    let son1 = document.createElement("div");
    let son2 = document.createElement("div");
    let son3 = document.createElement("div");
    let son4 = document.createElement("div");
    let son5 = document.createElement("div");
    if (window.show == 0) {
      son0.setAttribute("class", "wave wave0");
      son1.setAttribute("class", "wave wave1");
      son2.setAttribute("class", "wave wave2");
      son3.setAttribute("class", "wave wave3");
      son4.setAttribute("class", "wave wave4");
      son5.setAttribute("class", "wave wave5");
    }
    if (window.show == 1) {
      son0.setAttribute("class", "wavex wave0");
      son1.setAttribute("class", "wavex wave1");
      son2.setAttribute("class", "wavex wave2");
      son3.setAttribute("class", "wavex wave3");
      son4.setAttribute("class", "wavex wave4");
      son5.setAttribute("class", "wavex wave5");
    }

    father.appendChild(son0);
    father.appendChild(son1);
    father.appendChild(son2);
    father.appendChild(son3);
    father.appendChild(son4);
    father.appendChild(son5);
    document.body.appendChild(father);
    setTimeout(() => {
      document.body.removeChild(father);
    }, 2000);
  }
  onMounted(() => {
    window.addEventListener("click", handleClick);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", handleClick);
  });

  return { x, y };
}
