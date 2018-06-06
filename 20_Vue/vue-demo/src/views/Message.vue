<template>
  <ul>
    <li v-for="message in messages" :key="message.id">
      <!--<a :href="message.content" target="_blank">{{message.title}}</a>-->
      <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
    </li>
    <hr>
    <router-view></router-view>
  </ul>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      // 模拟 ajax 请求从后台获取数据
      const url = 'http://api.github.com/search/users?q=vue'
      // 使用axios发送ajax请求
      axios.get(url).then(response => {
        const result = response.data
        console.log(result)
        this.messages = result.items.map(item => ({
          id: item.id,
          title: item.login,
          content: item.html_url
        }))
      }).catch(error => {
        alert(url + ': ' + error.response.statusText)
      })
    }
  }
</script>

<style scoped>

</style>
