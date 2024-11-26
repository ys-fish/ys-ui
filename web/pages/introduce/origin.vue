<template>
  <div style="display: flex; height: 100%">
    <div
      style="flex: 1; margin-top: 10px; margin-left: 20px; margin-right: 20px"
      ref="homeRef"
    >
      <a href="#section1" id="link1" class="text-h1">起源</a>
      <p class="docs">
        Ys Ui
        其实还是完成自己的一个心愿，在刚入门的时候使用学习了国内常见的这些组件，
        一直想打造一个动画为主导的Ui,在看到Vutity的时候我觉得这就是我一直想要找寻的,
        所以Ys
        也诞生了,更适应前台官网开发，当然现在也只有我一个人在做优化与更新。所以在展示自己的博客网站或者是个人系统官网使用最佳
      </p>

      <div style="margin-top: 10px"></div>
      <a href="#section2" id="link2" class="text-h2">Ys UI</a>
      <p class="docs">Ys 是一个功能强大的 Vue 组件框架，从底层开始构建，易学易用。我们的 UI 组件集合可在您的应用程序中保持一致的风格，并提供足够的自定义选项以满足任何使用情况。</p>

      <a href="#section3" id="link3" class="text-h3">免费</a>
      <p class="docs">
        Ys 是一个开源项目，根据 MIT licensed 授权免费提供。此外，Ys 的源代码可在
        GitHub 上获取，开发人员可根据自己的选择进行修改并为其开发做出贡献。
      </p>
      <a href="#section4" id="link4" class="text-h3">精美的组件</a>
      <p class="docs">
        Ys 组件都是基于 <span class="blue-darken-3">Material Design</span>  规范
        手工制作的，并提自定义选项，并且都是经过细心的打磨动画效果，追求比较丝滑的过渡，不过暂时效果并不理想
        <ul class="originUl" style="margin: 0;padding: 0;margin-left: 20px;">
            <li>提炼精美的交互设计和视觉风格</li>
            <li>开箱即用的高质量组件</li>
            <li>自定义主题切换</li>
        </ul>
      </p>
      <a href="#section5" id="link5" class="text-h3">技术支持</a>
      <p class="docs">
        在有关于Ys UI 的组件Bug或者在代码分析，或者有关更多更好的建议都可以发邮件
        <ul class="originUl" style="margin: 0;padding: 0;margin-left: 20px;">
            <li>Ys UI 版本升级</li>
            <li>Bug反馈</li>
            <li>代码审查</li>
        </ul>
      </p>
      <a href="#section6" id="link6" class="text-h3">活跃开发</a>
      <p class="docs">
        自从项目立项之后，我在休息之余都是投入积极的开发，并且社区的反馈和报告都积极的反馈，让你能够更加省心的使用更多更稳定的功能，并且每一周保持稳定的更新
        <ul class="originUl" style="margin: 0;padding: 0;margin-left: 20px;">
            <li>补丁一周</li>
            <li>小版本更新2个月</li>
            <li>大版本优化和更新都是随着Vue的进度开展</li>
        </ul>  
    </p>
    </div>
    <div style="width: 250px"></div>
    <div
      style="
        width: 250px;
        border-left: 1px #ccc solid;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        position: fixed;
        right: 0px;
      "
    >
      <div>
        <div style="font-size: 16px; font-weight: 800">目录</div>
        <div style="display: flex; margin-top: 10px">
          <div class="list_line">
            <div class="list_line_1">
              <div
                class="list_line_2"
                :style="{
                  transform: `translateY(${activeNum * 30}px)`,
                }"
              ></div>
            </div>
          </div>
          <div class="list_box">
            <div
              class="list_box_title"
              :style="{ color: item.id == activeLink ? '#1e88e5' : 'black' }"
              v-for="item in list"
              :key="item.id"
              @click="listClick(item.id)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top: 20px">
        <div style="font-size: 16px; font-weight: 800">赞助</div>
        <p style="font-size: 12px">
          如果该项目对您有帮助的话，可以加以下方式联系我，你的支持是我最大的动力
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
// import hljs from "highlight.js";
// import "highlight.js/styles/monokai.css";
const homeRef = ref();
const code = ref("<y-button>默认按钮</y-button>");
const btnProps = reactive({
  type: "default",
  icon: "",
  startIcon: "",
  endIcon: "",
  text: "默认按钮",
});

// uilt 公共组件 不抽离
let list = ref([]);

const activeLink = ref(null);
const activeNum = ref(0);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        // activeLink.value = link; // 当前进入视口的元素对应的链接
        activeLink.value = entry.target.id;
        activeNum.value =
          Number(String(entry.target.id)[String(entry.target.id).length - 1]) -
          1;
      }
    });
  },
  {
    threshold: 0, // 任意部分进入视口时触发
    rootMargin: "0px 0px -80% 0px", // 不调整视口
  }
);

let m = ["text-h1", "text-h2", "text-h3"];
onMounted(() => {
  homeRef.value.childNodes.forEach((v) => {
    if (m.includes(v.className)) {
      observer.observe(v);
      list.value.push({
        id: v.id,
        href: v.href,
        name: v.text,
      });
    }
  });

});

const listClick = (v) => {
  document.getElementById(v).scrollIntoView({ behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
.codeBoxButtomCode {
  border-radius: 5px;
  background: black;
  box-sizing: border-box;
  padding: 10px;
  color: white;
  font-size: 14px;
}
.list_line {
  width: 20px;
  position: relative;
  .list_line_1 {
    position: absolute;
    width: 2px;
    height: 100%;
    background: #eceff1;
  }
  .list_line_2 {
    position: absolute;
    z-index: 11;
    height: 30px;
    width: 2px;
    background: #1e88e5;
    transition: 0.3s;
  }
}

.list_box {
  display: flex;
  flex-direction: column;
  //   gap: 10px;
}
.list_box_title {
  font-size: 12px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
}

.originUl{
    display: flex;
    flex-direction: column;
    gap: 10px;
    li{
        font-size: 14px;
    }
}
</style>
