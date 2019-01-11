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
        <td>{{messageDetail.createTime | date-format}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  const allMessageDetails = [
    {id: 1, username: 'Jack', content: 'Vue 还不错', createTime: new Date()},
    {id: 2, username: 'Rose', content: 'Vue So Easy', createTime: new Date()},
    {id: 3, username: 'Tom', content: 'Vue So So', createTime: new Date()},
    {id: 4, username: 'ClearLove', content: 'Vue 都不会，不如回家去养猪！', createTime: new Date()},
    {id: 5, username: 'Faker', content: 'Vue Is Supper Carry !', createTime: new Date()}
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
        const id = this.$route.params.id * 1
        this.messageDetail = allMessageDetails.find(detail => detail.id === id)
      }, 500)
    },
    watch: {
      // 路由（params）发生了变化
      $route(router) {
        console.log(router)
        const id = router.params.id * 1
        if (id) {
          this.messageDetail = allMessageDetails.find(detail => detail.id === id)
        }
      }
    }
  }
</script>

<style scoped>

</style>
