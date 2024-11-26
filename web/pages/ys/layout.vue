<template>
  <div style="display: flex">
    <div
      style="
        width: 300px;
        border-right: 1px #ccc solid;
        height: calc(100vh - 64px);
        position: fixed;
        overflow: hidden;
        overflow-y: auto;
      "
    >
      <y-list nav size="small" :active="routeVal">
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item
              v-bind="props"
              value="introduce"
              start-icon="material-design"
            >
              介绍</y-list-item
            >
          </template>
          <y-list-item
            value="/introduce/origin"
            @click="$router.push('/introduce/origin')"
            >起源</y-list-item
          >
          <y-list-item
            value="/introduce/version"
            @click="$router.push('/introduce/version')"
            >版本维护</y-list-item
          >
          <y-list-item
            value="/introduce/log"
            @click="$router.push('/introduce/log')"
            >更新日志</y-list-item
          >
        </y-list-group>
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item v-bind="props" start-icon="gauge">
              快速入门</y-list-item
            >
          </template>
          <y-list-item>安装</y-list-item>
          <y-list-item>常见问题</y-list-item>
          <y-list-item>预置布局</y-list-item>
          <y-list-item>单元测试</y-list-item>
          <y-list-item>浏览器支持</y-list-item>
          <y-list-item>升级指南</y-list-item>
          <y-list-item>发行说明</y-list-item>
          <y-list-item>参与此项目</y-list-item>
        </y-list-group>
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item v-bind="props" start-icon="book-edit">
              特性</y-list-item
            >
          </template>
          <y-list-item>管理1</y-list-item>
          <y-list-item>管理2</y-list-item>
        </y-list-group>
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item v-bind="props" start-icon="palette-outline">
              颜色和动画</y-list-item
            >
          </template>
          <y-list-item>管理1</y-list-item>
          <y-list-item>管理2</y-list-item>
        </y-list-group>
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item v-bind="props" start-icon="view-compact-outline">
              组件</y-list-item
            >
          </template>
          <y-list-item @click="$router.push('/components')"
            >全部组件</y-list-item
          >
          <y-list-item @click="$router.push('/components/buttons')"
            >按钮(Button)</y-list-item
          >
          <y-list-item @click="$router.push('/components/cards')"
            >卡片(Cards)</y-list-item
          >
          <y-list-item @click="$router.push('/components/buttons')"
            >纸片(Chip)</y-list-item
          >
          <y-list-item @click="$router.push('/components/buttons')"
            >模型(Model)</y-list-item
          >
          <y-list-item @click="$router.push('/components/buttons')"
            >分割线(ivider)</y-list-item
          >
          <y-list-item @click="$router.push('/components/buttons')"
            >扩展面板(Model)</y-list-item
          >
        </y-list-group>
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item v-bind="props" start-icon="api"> Api</y-list-item>
          </template>
          <y-list-item>管理1</y-list-item>
          <y-list-item>管理2</y-list-item>
        </y-list-group>
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item v-bind="props" start-icon="instrument-triangle">
              指令
            </y-list-item>
          </template>
          <y-list-item>管理1</y-list-item>
          <y-list-item>管理2</y-list-item>
        </y-list-group>
        <y-list-group>
          <template #activator="{ props }">
            <y-list-item v-bind="props" start-icon="ev-plug-chademo">
              实验室</y-list-item
            >
          </template>
          <y-list-item>管理1</y-list-item>
          <y-list-item>管理2</y-list-item>
        </y-list-group>
      </y-list>
    </div>

    <div style="width: 300px"></div>

    <div style="flex: 1; box-sizing: border-box; padding: 10px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const routeVal = ref(route.path);
useRouter().beforeEach((v) => {
  routeVal.value = v.fullPath;
});
</script>
