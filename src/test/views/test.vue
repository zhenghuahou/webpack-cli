<template>
  <div class="demo">
     接口返回数据:<br> {{msg}}
        <grid label='test'>
            <p>grid组件</p>
        </grid>
        <!--<panel>
           <p>panel组件</p>
       </panel>-->
  </div>
</template>

<script>
import Api from "../api";
import components, { Grid, Panel } from "@/components";

export default {
    name: "demo",
    components: {
        grid: Grid,
        panel: Panel
    },
    data() {
        return {
            msg: "loading..."
        };
    },
    mounted() {
        Api("testApi")({
            params: {
                firstName: "h"
            }
        })(resp => {
            this.msg = resp;
        });
    }
};
</script>

<style lang="scss">
.demo {
    width: 80%;
    margin: 10px auto;
    border: 1px dashed darkkhaki;
    padding: 10px;
    &:before {
        content: "";
        display: inline-block;
        height: 100%;
        width: 54px;
        height: 54px;
        background: url("../assets/demo.png") center top no-repeat;
        background-size: contain;
        vertical-align: middle;
    }
}

.m-toast-icon {
    font-size: 32px;
    ~ .m-toast-msg {
        min-width: 68px;
    }
}
</style>
