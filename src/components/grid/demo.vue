<template>
   <div class="demo-panel">
      <p>components/grid/demo.vue</p>
       <ui-grid label='test'>
           <p>grid组件</p>
       </ui-grid>
   </div>
</template>

<script>
import Grid from './index'
export default {
    name: "demo-grid",
    components: {
        [Grid.name]:Grid
    }
};
</script>

<style lang="scss">

</style>