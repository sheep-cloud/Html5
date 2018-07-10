<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        key: 'vue',
        repoUrl: '',
        repoName: ''
      }
    },
    mounted() {
      const url = `https://api.github.com/searc/repositories?q=${this.key}&sort=stars`

      // 使用 vue-resource 发 ajax 请求获取数据

      // 传统写法
      /*
      this.$http.get(url).then(function (response) {
        // 响应成功回调
        const result = response.data
        // 得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }, function (response) {
        // 响应失败回调
        alert('请求失败')
      })
      */

      // Lambda 写法
      this.$http.get(url).then(response => {
        // 响应成功回调
        const result = response.data
        // 得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }, response => {
        // 响应失败回调
        console.log(response)
      })

    }
  }
</script>

<style scoped>

</style>
