<template>
    <div class='c-header' :class="[cname]">
        <div class="logo">
            vue
        </div>
        <div class="main">
            <ul class='nav'>
                <li class="cur"><i class="iconfont icon-map"></i>页面分析</li>
                <li><i class="iconfont icon-map"></i>系统设置</li>
            </ul>
        </div>
        <div class="info">
            <span><i class="iconfont icon-map"></i>帮助</span>
            <span><i class="iconfont icon-map"></i>{{user.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "v-header",
    props: {
        cname: {
            type: [String],
            default: ""
        }
    },
    data() {
        return {
            user: {
                name:'test'
            }
        };
    },
    mounted() {}
};
</script>

<style lang="scss">
$link: #00acef;
.c-header {
    display: flex;
    background: white;
    height: 90px;
    line-height: 90px;
    overflow: hidden;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1) ;
    position: relative;
    z-index: 10;
    .logo {
        width: 15%;
        color: #5d5d5d;
        text-align: center;
        font-weight: bold;
        font-size: 26px;
        min-width: 200px;
        margin-right: 40px;
    }
    .main {
        flex: 1;
        color: #464646;
    }
    .nav {
        display: flex;
        height: 100%;
        > li {
            position: relative;
            padding: 0 40px;
            &.cur {
                &:before{
                    position: absolute;
                    left: 0;
                    top:0;
                    content: " ";
                    width:100%;
                    height: 5px;
                    background-color: $link;
                }
                color: $link;
                border-top-color: $link;
                .icon-map {
                    color: $link;
                }
            }
        }
    }
    .icon-map {
        font-size: 20px;
        color: #9fb3bc;
        margin-right: 2px;
        vertical-align: middle;
    }
    .info {
        width: 15%;
        min-width: 200px;
        text-align: center;
        > :first-child {
            margin-right: 50px;
        }
    }
}
</style>