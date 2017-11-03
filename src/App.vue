<template>
  <div id="app">
    <img src="./global/assets/logo.png" width="150">
    <p class="l-box">
    <router-link class='link' :to="{ path: '/demo' }">demo20</router-link>
    <router-link class='link' :to="{ name: 'test' }">test</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style lang="scss">
@import "global/assets/base.scss"; // 全局样式重置
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 12px;
    padding: 5px;
}
.link {
    color:$light-gray;
}
</style>
