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
    name: "ui-panel",
    props: {
        title: {
            // 是否显示Panel标题
            type: [String, Boolean],
            default: false
        },
        cname: {
            type: null,
            default: ""
        }
    },
    created() {}
};
</script>

<style lang="scss">
@import "../../global/assets/variable.scss";
.panel {
    padding: 5px;
    background: $white;
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .panel-hd {
        padding: 0 16px;
        color: $light-gray;
        font-size: 12px;
        margin-top: -1px;
    }
}
</style>