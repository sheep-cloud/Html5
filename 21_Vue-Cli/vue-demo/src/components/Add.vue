<template>
  <div class="col-md-4 col-xs-12">
    <form class="form-horizontal">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" class="form-control" id="username" placeholder="用户名" v-model.trim="username">
      </div>
      <div class="form-group">
        <label for="content">评论内容</label>
        <textarea class="form-control" id="content" rows="6" placeholder="评论内容" v-model.trim="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-md-2 col-md-offset-10 col-xs-3 col-xs-offset-9">
          <button type="button" class="btn btn-primary" @click="add">提交</button>
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
        this.username = ''
        this.content = ''
      }
    }
  }
</script>

<style scoped>

</style>
