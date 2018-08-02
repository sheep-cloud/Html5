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
      // 发ajax请求获取数据
      let url = `https://api.github.com/search/repositories?q=vue&sort=stars`
      this.axios.get(url)
          .then(response => {
        // 成功了
        let result = response.data
        // 得到最受欢迎的repo
        let mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      }).catch(response => {
        this.layer.alert('请求失败')
      })
    }
  }
</script>

<style scoped>

</style>
