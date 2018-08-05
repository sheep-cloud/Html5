<template>
  <div>
    <h3 v-if="firstView">输入用户名搜索</h3>
    <h3 v-if="loading">loading...</h3>
    <h3 v-if="errorMsg">{{errorMsg}}</h3>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" class="img-rounded" style="width: 230px"/>
        </a>
        <p class="card-text"><i class="glyphicon glyphicon-star"></i>：{{user.score}}</p>
        <p class="card-text"><i class="glyphicon glyphicon-user"></i>：{{user.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    data() {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: ''
      }
    },
    mounted() {
      // 订阅搜索的消息
      PubSub.subscribe('search', (msg, searchName) => {
        // 需要发ajax请求进行搜索
        let url = `https://api.github.com/search/users?q=${searchName}`
        // 更新状态（请求中）
        this.firstView = false
        this.loading = true
        this.users = null
        this.errorMsg = ''
        // 发ajax请求
        this.axios.get(url).then(response => {
          let result = response.data
          let users = result.items.map(item => ({
            html_url: item.html_url,
            avatar_url: item.avatar_url,
            score: item.score,
            login: item.login
          }))
          // 成功，更新状态（成功）
          this.loading = false
          this.users = users
        }).catch(response => {
          // 失败，更新状态（失败）
          this.loading = false
          this.errorMsg = response.message
        })
      })
    }
  }
</script>

<style scoped>
  .card {
    float: left;
    padding: .75rem;
    margin: 20px 21px 0 21px;
    border: 1px solid #efefef;
    border-radius: 10px;
    text-align: center;
  }
  .card-text {
    margin-top: 10px;
    font-size: 85%;
    text-align: right;
  }

</style>
