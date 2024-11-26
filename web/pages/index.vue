<template>
  <div>
    <y-home>
      <router-view></router-view>
    </y-home>
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
