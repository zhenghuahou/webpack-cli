<template>
   <div class="demo-grid">
       <p>{{$route.path}}.vue</p>
       <ui-grid label='test'>
           <p>grid组件</p>
       </ui-grid>
   </div>
</template>

<script>
import {Grid} from '@/components'
export default {
    name: "demo-grid",
    components: {
        [Grid.name]:Grid
    },
    mounted(){
    }
};
</script>

<style lang="scss">
.demo-grid{
    line-height: 2;
    padding: 10px;
}
</style>