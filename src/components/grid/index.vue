<template>
    <div class='grid-area' :class="[cname]">
        <div class="grid-cell"
             >
            <span class="label">{{label}}</span>
            <div class="side">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ui-grid',
    props: {
        cname: {
            type: [String],
            default: ''
        },
        label: {
            type: String
        },
        txt: {
            type: String
        }
    },
    mounted(){
    }
}

</script>

<style lang="scss">
     @import '../../global/assets/variable.scss';
    .grid-area{
        position:relative;
        border-top:1px solid $border-color;
        padding:12px 16px;
        line-height:20px;
        min-height: 20px;
        background: $white;
    }
    .grid-cell{
        display: flex;
        align-items: center;
        justify-content:space-between;
        .label{
            display: block;
            min-width: 100px;
        }
        .side{
            flex: 1;
            word-wrap: break-word;
            overflow:auto;
            display:flex;
            font-size: 14px;
            justify-content:flex-end;
        }
    
    }
    
    
</style>