<template>
  <div style="display: flex; height: 100%">
    <div
      style="flex: 1; margin-top: 20px; margin-left: 20px; margin-right: 20px"
      ref="homeRef"
    >
      <a href="#section1" id="link1" class="text-h1">按钮(Button)</a>
      <p>
        v-btn 组件用满足 material design
        主题的，拥有多种可选项的按钮组件来替换标准的 html
        按钮。任何色彩辅助类都可以用来改变背景或文字的颜色。
      </p>
      <div style="display: flex; align-items: center; gap: 10px">
        <y-chip
          ><y-icon icon="bug-outline" style="margin-right: 5px"></y-icon>
          报告bug</y-chip
        >
        <y-chip
          ><y-icon
            icon="alert-circle-outline"
            style="margin-right: 5px"
          ></y-icon>
          报告bug</y-chip
        >
        <y-chip
          ><y-icon icon="github" style="margin-right: 5px"></y-icon>
          在Github上查看</y-chip
        >
      </div>
      <div style="margin-top: 20px"></div>
      <a href="#section2" id="link2" class="text-h2">使用</a>
      <p>最简单的按钮包含大写文本、轻微的仰角、悬停效果和单击时的波纹效果。</p>
      <code-box>
        <template #header>
          <y-button type="text" size="small">Default</y-button>
          <y-button type="text" size="small">Outlined</y-button>
          <y-button type="text" size="small">Text</y-button>
        </template>
        <template #left>
          <y-button v-bind="btnProps">{{ btnProps.text }}</y-button>
        </template>
        <template #right>
          <y-checkbox label="图标按钮" v-model="iconBtn"></y-checkbox>
          <y-checkbox label="前置图标" v-model="perentIcon"></y-checkbox>
          <y-checkbox label="后置图标" v-model="appentIcon"></y-checkbox>
        </template>
        <template #code>
          <code>
            {{ code }}
          </code>
        </template>
      </code-box>
      <div style="margin-top: 20px"></div>
      <a href="#section3" id="link3" class="text-h2">Api</a>
      <y-table style="margin-top: 20px"></y-table>
      <div style="margin-top: 20px"></div>
      <a href="#section4" id="link4" class="text-h2">指南</a>
      <p>
        v-btn 组件通常贯穿整个 Vuetify
        ，是任何应用程序的常用组件。它可以用于导航和表单提交几乎所有情景，而且可以有很多不同的样式。
        下面的代码片段是一个基础的只包含文本的 v-btn 组件示例：
      </p>
      <div class="codeBoxButtomCode">
        <code>
          {{ code }}
        </code>
      </div>

      <div style="margin-top: 30px"></div>

      <a href="#section5" id="link5" class="text-h3">尺寸(size)</a>
      <p>
        其中 size 属性用来控制按钮的大小和随着间距调整的缩放程度。默认的尺寸是
        undefined，会被转化为 medium。
      </p>
      <codeDemo>
        <template #header>
          <y-button type="text" size="small">Default</y-button>
          <y-button type="text" size="small">Outlined</y-button>
          <y-button type="text" size="small">Text</y-button>
        </template>
        <template #left>
          <y-button size="x-small">{{ btnProps.text }}</y-button>
          <y-button size="small">{{ btnProps.text }}</y-button>
          <y-button>{{ btnProps.text }}</y-button>
          <y-button size="large">{{ btnProps.text }}</y-button>
          <y-button size="x-large">{{ btnProps.text }}</y-button>
        </template>

        <template #code>
          <code>
            {{ code }}
          </code>
        </template>
      </codeDemo>
      <div style="margin-top: 30px"></div>
      <a href="#section6" id="link6" class="text-h3">块级按钮(Block)</a>
      <p>
        块级按钮会扩展至其父容器的最大宽度。这一点在想要创建充满卡片或者对话框宽度的按钮时十分有用。
      </p>
      <codeDemo>
        <template #left>
          <y-button block>{{ btnProps.text }}</y-button>
        </template>

        <template #code>
          <code>
            {{ code }}
          </code>
        </template>
      </codeDemo>
      <div style="margin-top: 30px"></div>
      <a href="#section7" id="link7" class="text-h3">圆角(Rounded)</a>
      <p>使用 rounded 属性来控制边框的圆角。</p>
      <codeDemo>
        <template #left>
          <y-button rounded="0">无圆角</y-button>
          <y-button rounded="xs">xs圆角</y-button>
          <y-button rounded="sm">sm圆角</y-button>
          <y-button>默认圆角</y-button>
          <y-button rounded="lg">lg圆角</y-button>
          <y-button rounded="xl">xl圆角</y-button>
        </template>

        <template #code>
          <code>
            {{ code }}
          </code>
        </template>
      </codeDemo>

      <div style="margin-top: 30px"></div>
      <a href="#section8" id="link8" class="text-h3">水波纹(Ripple)</a>
      <p>ipple 属性决定了按钮是否拥有 v-ripple 效果。</p>
      <codeDemo>
        <template #left>
          <y-button>波纹按钮</y-button>
          <y-button :ripple="false">无波纹按钮</y-button>
        </template>

        <template #code>
          <code>
            {{ code }}
          </code>
        </template>
      </codeDemo>

      <div style="margin-top: 30px"></div>
      <a href="#section9" id="link9" class="text-h3">图标(Icon)</a>
      <p>图标可以用作按钮的主要内容</p>
      <codeDemo>
        <template #left>
          <y-button icon="github"></y-button>
        </template>

        <template #code>
          <code>
            {{ code }}
          </code>
        </template>
      </codeDemo>
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
import codeBox from "../../components/code.vue";
import codeDemo from "../../components/codeDemo.vue";
// import hljs from "highlight.js";
// import "highlight.js/styles/monokai.css";
const iconBtn = ref<boolean>(false);
const perentIcon = ref<boolean>(false);
const appentIcon = ref<boolean>(false);
const codeBlock = ref(null);
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

  console.log(list.value);
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
    z-index: 1;
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
</style>
