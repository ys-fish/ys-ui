<template>
  <div>
    <div>单选框测试</div>
    <div style="margin-top: 20px">
      <y-radio-group v-model="a">
        <y-radio label="YsUI" value="1"></y-radio>
        <y-radio label="CainUI" value="2"></y-radio>
      </y-radio-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const a = ref(1);
</script>
