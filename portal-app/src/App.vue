<template>
  <div id="main-root">
    <router-link to="/">首页</router-link>
    <br />
    <router-link to="/app1">子应用1</router-link>
    <br />
    <router-link to="/app21">子应用2</router-link>
    <br />
    <router-link to="/404">404</router-link>

    <div v-if="loading">加载中...</div>
    <!-- 子应用盒子 -->
    <div id="root-view" v-html="content"></div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    content: String
  }
};
</script>
