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
      const url = `https://api.github.com/searc/repositories?q=${this.key}&sort=stars`

      // 使用axios发送ajax请求
      this.$http.get(url).then(response => {
        // 成功
        const result = response.data
        // 得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(response => {
        alert(response)
      })
    }
  }
</script>

<style scoped>

</style>
