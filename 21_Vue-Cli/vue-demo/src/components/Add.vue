<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-primary pull-right" @click="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

  export default {
    props: {
      addComment: {
        // 指定属性名/属性值的类型/必要性
        type: Function,
        required: true
      }
    },
    data() {
      return {
        username: '',
        content: ''
      }
    },
    methods: {
      add() {
        // 解构赋值
        let {layer, moment, username, content, addComment} = this
        // 1. 检查输入的合法性
        if (!username) {
          layer.alert('请输入用户名')
          return
        }
        if (!content) {
          layer.alert('请输入评论内容')
          return
        }
        // 2. 根据输入的数据，封装成一个comment对象
        let comment = {
          username,
          content,
          createTime: moment.format('YYYY-MM-DD HH:mm:ss')
        }
        // 3. 添加到comments中
        addComment(comment)

        // 4. 清除输入
        username = ''
        content = ''
      }
    }
  }
</script>

<style scoped>

</style>
