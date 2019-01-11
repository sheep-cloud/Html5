<template>
  <div>
    <div v-if="!repoUrl">loading...</div>
    <div v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        repoUrl: '',
        repoName: ''
      }
    },
    mounted() {
      const url = `https://api.github.com/search/repositories?q=vue&sort=stars`

      // 发ajax请求获取数据
      this.axios.get(url).then(response => {
        // 成功了
        const result = response.data
        // 得到最受欢迎的repo
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(() => this.layer.alert('请求失败'))
    }
  }
</script>

<style scoped>

</style>
