<template>
  <div class="demo-box">
    <div  class="demo-list">
      <h1>{{msg}}</h1>
      <h3>组件列表</h3>
      <ul>
        <li v-for="(route, i) in routes.slice(1)" :key="i"  @click="$router.push(route.path)">
          {{route.name}}组件</li>
      </ul>
    </div>
  </div>
</template>

<script>
import routes from './router';
export default {
    name: "demo-list",
    data() {
        return {
            msg: "Welcome to demo-list",
            routes
        };
    }
};
</script>

<style lang='scss'>
  div,ul,li{
    margin:0;
    padding:0;
  }
  li{
    list-style: none;
    border-bottom:1px solid #ddd;
    padding:10px;
    margin: 0 10px;
  }
</style>
