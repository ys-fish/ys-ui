<template>
    <div>
      <y-button @click="a = true">打开</y-button>
      <y-drawer v-model="a"></y-drawer>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from "vue";
  
  const a = ref(false);
  </script>
  