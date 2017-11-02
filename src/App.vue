<template>
  <div id="app">
    <img src="./global/assets/logo.png" width="150">
    <p class="l-box">
    <router-link class='link' :to="{ name: 'demo' }">demo</router-link>
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

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 12px;
}
.link {
    color: rgb(32,134,215);
    padding: 10px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 0 5px;
    border-radius: 5px ;
    line-height: 1.8;
    margin: 1px 5px;
    vertical-align: middle;
    display: inline-block;
    text-decoration:none;
}
</style>
