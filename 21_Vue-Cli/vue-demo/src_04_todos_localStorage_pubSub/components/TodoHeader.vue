<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model.trim="title" @keyup.enter="addItem"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addItem() {
        const {layer, title} = this
        // 1. 检查输入的合法性
        if (!title) {
          layer.alert('请输入任务名称')
          return
        }
        // 2. 根据输入生成一个todo对象
        const todo = {
          title,
          complete: false,
          createTime: new Date()
        }
        // 3. 添加到todos
        // 触发自定义事件; 事件名: addTodo, 参数: tod o
        this.$emit('addTodo', todo)
        // 4. 清除输入
        this.title = ''
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(81, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
