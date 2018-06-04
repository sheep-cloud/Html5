<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  // 引入组件
  // import axios from 'axios'

  export default {
    data() {
      return {
        key: 'vue',
        repoUrl: '',
        repoName: ''
      }
    },
    mounted() {
      const url = `https://api.github.com/search/repositories?q=${this.key}&sort=stars`

      /*
      // 使用vue-resource 发ajax请求获取数据
      this.$http.get(url).then(
        // 成功响应
        response => {
          // 成功
          const result = response.data
          // 得到最受欢迎的repo
          const mostRepo = result.items[0]
          this.repoUrl = mostRepo.html_url
          this.repoName = mostRepo.name
        },
        // 失败响应
        response => {
          alert('请求失败')
        }
      )
      */

      // 使用axios发送ajax请求
      this.axios.get(url).then(response => {
        // 成功
        const result = response.data
        // 得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(error => {
        alert('请求失败', error)
      })
    }
  }
</script>

<style scoped>

</style>
