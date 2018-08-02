<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- :comments 传递数据 -->
      <Add :addComment="addComment"/>
      <!--:addComment 传递方法 :deleteComment 逐层传递到 Item-->
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  // 引入组件
  import Add from './components/Add'
  import List from './components/List'

  export default {
    // 映射成标签
    components: {Add, List},
    data() {
      return {
        comments: [
          // 数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
          {username: 'Jack', content: 'Vue 还不错', createTime: '2018-08-02 04:34:11'},
          {username: 'Rose', content: 'Vue So Easy', createTime: '2018-08-02 04:34:11'},
          {username: 'Tom', content: 'Vue So So', createTime: '2018-08-02 04:34:11'},
          {username: 'ClearLove', content: 'Vue 都不会，不如回家去养猪！', createTime: '2018-08-02 04:34:11'},
          {username: 'Faker', content: 'Vue Is Supper Carry !', createTime: '2018-08-02 04:34:11'}
        ]
      }
    },
    methods: {
      // 添加评论
      addComment(comment) {
        this.comments.unshift(comment)
      },
      // 删除指定下标的评论
      deleteComment(index) {
        this.comments.splice(index, 1)
      }
    }
  }
</script>

<style scoped>

</style>
