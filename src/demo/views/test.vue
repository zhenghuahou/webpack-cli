<template>
  <div class="demo">
      {{msg}}
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: 'my vue spa demo'
    }
  }
}
</script>

<style lang="scss">
.demo{
    width:80%;
    margin: 10px auto;
    border:1px dashed darkkhaki;
    padding: 10px;
    &:before{
        content:'';
        display:inline-block;
        height: 100%;
        width:54px;
        height:54px;
        background: url('../assets/demo.png') center top  no-repeat;
        background-size: contain;
        vertical-align: middle;
    }
}

.m-toast-icon {
  font-size: 32px;
  ~.m-toast-msg {
    min-width: 68px;
  }
}
</style>
