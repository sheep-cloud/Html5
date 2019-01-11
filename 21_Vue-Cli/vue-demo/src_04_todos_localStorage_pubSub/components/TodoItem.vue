<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{backgroundColor: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" :style="{display: isShow}" @click="deleteItem">删除</button>
    <span class="pull-right small text-gray mr-10">{{todo.createTime | date-format}}</span>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    data() {
      return {
        // 默认背景颜色
        bgColor: '#fff',
        // 按钮默认是否显示
        isShow: 'none'
      }
    },
    props: {
      todo: Object,
      index: Number
    },
    methods: {
      // 鼠标移入移出
      handleEnter(isEnter) {
        if (isEnter) {
          this.bgColor = '#bcbcbc'
          this.isShow = 'block'
        } else {
          this.bgColor = '#fff'
          this.isShow = 'none'
        }
      },
      // 删除
      deleteItem() {
        const {layer, todo, index} = this
        this.layerId = layer.confirm(`确认删除${todo.title}吗？`, () => {
          layer.close(this.layerId)
          // 触发事件        发布消息
          PubSub.publish('deleteTodo', index)
        })
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
  .mr-10 {
    margin-right: 10px;
  }
</style>
