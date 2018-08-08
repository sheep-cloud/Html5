<template>
  <table class="table table-bordered table-striped table-hover">
    <thead>
      <tr class="info">
        <th>id</th>
        <th>username</th>
        <th>content</th>
        <th>createTime</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>{{messageDetail.id}}</td>
        <td>{{messageDetail.username}}</td>
        <td>{{messageDetail.content}}</td>
        <td>{{messageDetail.createTime}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  const allMessageDetails = [
    {id: 1, username: 'Jack', content: 'Vue 还不错', createTime: '2018-08-02 04:34:11'},
    {id: 2, username: 'Rose', content: 'Vue So Easy', createTime: '2018-08-02 04:34:11'},
    {id: 3, username: 'Tom', content: 'Vue So So', createTime: '2018-08-02 04:34:11'},
    {id: 4, username: 'ClearLove', content: 'Vue 都不会，不如回家去养猪！', createTime: '2018-08-02 04:34:11'},
    {id: 5, username: 'Faker', content: 'Vue Is Supper Carry !', createTime: '2018-08-02 04:34:11'}
  ]

  export default {
    data() {
      return {
        messageDetail: {}
      }
    },
    mounted() {
      setTimeout(() => {
        // 防止是文本
        let id = this.$route.params.id * 1
        this.messageDetail = allMessageDetails.find(detail => detail.id === id)
      }, 500)
    },
    watch: {
      // 路由（params）发生了变化
      $route: function (router) {
        console.log(router)
        let id = router.params.id * 1
        if (id) {
          this.messageDetail = allMessageDetails.find(detail => detail.id === id)
        }
      }
    }
  }
</script>

<style scoped>

</style>
