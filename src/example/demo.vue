<template>
  <div class="demo-box">
    <div  class="demo-list">
      <h3>组件列表</h3>
      <ul>
        <li v-for="(route, i) in routes.slice(1)" :key="i"  >
          
          <router-link class="link" :to="{ path: route.path,query: { time: +new Date }}">{{route.name}}组件</router-link>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import routes from './router';
export default {
    name: "demo-list",
    data() {
      console.log(' this:',this)
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
  .demo-list{
    .link{
      background-color: transparent;
      border:none;
    }
  }
</style>
