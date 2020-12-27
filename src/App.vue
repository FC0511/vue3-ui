<template>
  <router-view/>
</template>

<script lang="ts">
import {ref, provide} from 'vue'

export default {
  name: 'App',
  setup() {
    // 获取页面宽度
    const winWidth = document.documentElement.clientWidth;
    // ref函数只能监听简单类型的变化  简单值使用ref,复杂值使用reactive
    const asideVisible = ref(winWidth > 500);
    provide('asideVisible', asideVisible)
  }
}
</script>
