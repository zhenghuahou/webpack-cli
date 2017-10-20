<template>
    <section class="panel" :class="cname">
        <div class="panel-hd">
            <slot name='title'></slot>
        </div>
        <div class="panel-bd">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ui-panel',
        props: {
            title: {// 是否显示Panel标题
                type: [String, Boolean],
                default: false
            },
            cname: {
                type: null,
                default: ''
            }

        },
        created() {
        }
    }
</script>

<style lang="scss">
    @import "../../global/assets/variable.scss";
    .panel{
        .panel-hd{
            padding: 0 16px;
            color: $light-gray;
            font-size: 12px;
            border-top:1px solid $border-color;
            margin-top:-1px;
            background:$white;
        }
        .panel-bd{
            border-bottom:1px solid $border-color;
            background-color: $white;
        }
    }
</style>