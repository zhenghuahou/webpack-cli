<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import {Header} from '@/components'
export default {
    name: "app",
    data () {
      return {
        // user: {}
      };
    },
    components:{
        'vHeader':Header
    }
};
</script>

<style lang="scss">
@import "global/assets/base.scss"; // 全局样式重置

</style>
