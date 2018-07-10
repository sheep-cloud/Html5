<template>
  <div class="row">
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">Loading...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="card" v-for="(user, index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.avatar_url" style="width: 253px; height: 255px; border-radius: 5px;"/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'

  export default {
    data() {
      return {
        firstView: true,
        loading: false,
        // users: [{url: '', avatar_url: '', name: ''}]
        users: null,
        errorMsg: ''
      }
    },
    mounted() {
      // 是否再次发ajax请求，不是，而是在点击之后
      // 订阅搜索的消息
      PubSub.subscribe('search', (msg, searchName) => {
        // 说明需要发ajax请求进行搜索
        const url = `http://api.github.com/search/users?q=${searchName}`
        // 更新状态（请求中）
        this.firstView = false
        this.loading = true
        this.users = null
        this.errorMsg = ''

        // 发ajax请求
        axios.get(url).then(response => {
          const result = response.data
          const users = result.items.map(item => ({
            url: item.html_url,
            avatar_url: item.avatar_url,
            name: item.login
          }))
          console.log(users)
          // 成功，更新状态（成功）
          this.loading = false
          this.users = users
        }).catch(error => {
            // 失败，更新状态（失败）
            this.loading = false
            this.errorMsg = url + ': ' + error.response.statusText
          }
        )
      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }
  .card img {
    margin-bottom: 10px;
  }
  .card-text {
    font-size: 85%;
  }

</style>
