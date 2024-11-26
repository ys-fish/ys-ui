<template>
  <div style="display: flex; height: 100%">
    <div
      style="flex: 1; margin-top: 20px; margin-left: 20px; margin-right: 20px"
    >
      <a class="text-h1">卡片(Card)</a>
      <p>
        v-card 组件是一个多功能和强化版本的 v-sheet
        ，为标题、文本、图片、图标等等的显示提供简单的接口
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
      <div style="margin-top: 20px">
        <a class="text-h2">使用</a>
        <p>
            使用 v-card 组件是一种流行的包裹不同内容的组件，例如表格、图像或者一些动作按钮的方法。
        </p>
        <code-box>
          <template #header>
            <y-button type="text" size="small">Default</y-button>
            <y-button type="text" size="small">Outlined</y-button>
            <y-button type="text" size="small">Text</y-button>
          </template>
          <template #left>
            <!-- <y-card v-bind="btnProps">{{ btnProps.text }}</y-card> -->
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
      </div>
      <div style="margin-top: 20px">
        <a class="text-h2">Api</a>
        <y-table style="margin-top: 20px"></y-table>
      </div>
      <div style="margin-top: 20px">
        <a class="text-h2">指南</a>
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
      </div>
      <div style="margin-top: 20px">
        <a class="text-h3">尺寸(size)</a>
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
      </div>
    </div>
    <div style="width: 200px; border-left: 1px #ccc solid; height: 100%"></div>
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
const code = ref("<y-button>默认按钮</y-button>");
const btnProps = reactive({
  type: "default",
  icon: "",
  startIcon: "",
  endIcon: "",
  text: "默认按钮",
});
// onMounted(() => {
//   hljs.highlightElement(codeBlock.value); // 手动高亮指定代码块
// });
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
</style>
