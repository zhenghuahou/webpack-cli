<template>
   <div class="demo-panel">
        <p>{{$route.path}}.vue</p>
       <ui-panel>
           <p>panel组件</p>
       </ui-panel>
   </div>
</template>

<script>
import {Panel} from '@/components'
export default {
    name: "demo-panel",
    components: {
        [Panel.name]: Panel
    }
};
</script>

<style lang="scss">
.demo-panel{
    line-height: 2;
    padding: 10px;
}
</style>