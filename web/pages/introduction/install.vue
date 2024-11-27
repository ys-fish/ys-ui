<template>
    <div style="display: flex; height: 100%">
      <div
        style="flex: 1; margin-top: 10px; margin-left: 20px; margin-right: 20px"
        ref="homeRef"
      >
        <a href="#section1" id="link1" class="text-h1">开始使用Ys UI</a>
        <p class="docs">
          开始构建属于你的Ys UI 组件，快速便捷的为你的项目 动 起来
        </p>
  
        <div style="margin-top: 10px"></div>
        <a href="#section2" id="link2" class="text-h2">安装</a>
        <p class="docs">Ys 支持多个不同的安装方式
            <br />要了解更多关于支持的包管理器的信息，请访问他们的官方网站：
            <ul class="originUl" style="margin: 0;padding: 0;margin-left: 20px;">
              <li class="blue-darken-3">pnpm</li>
              <li class="blue-darken-3">yarn</li>
              <li class="blue-darken-3">npm</li>
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
  