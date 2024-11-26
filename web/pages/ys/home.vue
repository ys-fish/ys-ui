<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    "
  >
    <img width="400" src="../../../public/login.png" />
    <div class="home_title">Ys Vue组件框架</div>
    <div class="home_docs">
      Ys UI 是一个简便，轻快的组件框架,
      有精美制作的Vue组件基于Metaurail风格开发而来
    </div>
    <div class="btns">
      <y-button startIcon="debug-step-over" color="#19196b">进入文档</y-button>
      <y-button startIcon="navigation">组件介绍</y-button>
      <y-button color="black" style="color: white" startIcon="github">
        GitHub
      </y-button>
    </div>

    <div class="banner">
      <div class="banner_title">在Ys 项目中需要支持吗?</div>
      <div>
        cain 在此为您提供支持 -
        无论是迁移Vue3,或者调整你的Vue.js代码还是构建自定义前端
      </div>
      <y-button type="text">了解更多</y-button>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss" scoped>
.home_title {
  font-size: 30px;
  font-weight: 700;
}
.home_docs {
  margin-top: 10px;
}
.btns {
  display: flex;
  margin-top: 20px;
  gap: 20px;
}
.banner {
  width: 100vw;
  height: 200px;
  background: #19196b;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  color: white;
  .banner_title {
    font-size: 30px;
  }
}
.footer {
  width: 100vw;
  height: 300px;
  background: #eeeeee;
}
</style>
