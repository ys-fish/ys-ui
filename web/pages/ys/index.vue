<template>
  <y-header>
    <template #prepend>
      <div style="display: flex; align-items: center; gap: 10px">
        <div @click="$router.push('/')">Ys UI</div>
        <y-button type="text" startIcon="magnify">搜索</y-button>
      </div>
    </template>
    <template #append>
      <div style="display: flex; align-content: center; gap: 5px">
        <y-button type="text">博客</y-button>
        <y-menu>
          <template #activator>
            <y-button type="text" endIcon="chevron-down">学习</y-button>
          </template>
          <y-list size="small">
            <y-list-item value="Api"
              >组件Api
              <template #append>
                <y-icon icon="code-braces"></y-icon>
              </template>
            </y-list-item>
            <y-list-item value="color"
              >颜色
              <template #append>
                <y-icon icon="palette"></y-icon>
              </template>
            </y-list-item>
            <y-list-item value="components" @click="$router.push('/components')"
              >组件
              <template #append>
                <y-icon icon="view-compact-outline"></y-icon>
              </template>
            </y-list-item>
          </y-list>
        </y-menu>
        <y-button type="text">支持</y-button>
        <y-button type="text" icon="theme-light-dark"></y-button>
        <!-- <y-button icon="github"></y-button> -->
      </div>
    </template>
  </y-header>
  <y-main>
    <router-view></router-view>
  </y-main>
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
