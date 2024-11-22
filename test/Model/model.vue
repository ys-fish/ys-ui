<template>
  <div>
    <y-button @click="a = true">打开</y-button>
    <y-model v-model="a"></y-model>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const a = ref(false);
</script>
