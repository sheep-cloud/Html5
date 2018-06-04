<template>
  <!-- click.native 原生的事件监听-->
  <mt-button type="primary" @click.native="handleClick">确定</mt-button>
</template>

<script>
  // 引入 消息提示 组件
  import {Toast} from 'mint-ui'

  export default {
    methods: {
      handleClick() {
        Toast('提示信息')
      }
    }
  }
</script>

<style scoped>
  button {
    width: 100%;
  }
</style>
