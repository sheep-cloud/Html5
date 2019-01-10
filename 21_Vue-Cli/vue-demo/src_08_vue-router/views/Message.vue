<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(message, index) in messages" :key="index">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.username}}</router-link>
        <button class="btn btn-primary btn-sm btn-margin pull-right" @click="pushObjectShow(message.id)">push 方案2</button>
        <button class="btn btn-primary btn-sm btn-margin pull-right" @click="pushShow(message.id)">push 方案一</button>
        <button class="btn btn-primary btn-sm pull-right" @click="repaceShow(message.id)">replace</button>
      </li>
    </ul>
    <button class="btn btn-danger btn-sm btn-block" @click="$router.back()">回退</button>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      // 模拟ajax请求从后台获取数据
      setTimeout(() => {
        this.messages = [
          {id: 1, username: 'Jack', content: 'Vue 还不错', createTime: new Date()},
          {id: 2, username: 'Rose', content: 'Vue So Easy', createTime: new Date()},
          {id: 3, username: 'Tom', content: 'Vue So So', createTime: new Date()},
          {id: 4, username: 'ClearLove', content: 'Vue 都不会，不如回家去养猪！', createTime: new Date()},
          {id: 5, username: 'Faker', content: 'Vue Is Supper Carry !', createTime: new Date()}
        ]
      }, 500)
    },
    methods: {
      // 编程式的导航 - 跳转页面
      repaceShow(id) {
        // 跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
        this.$router.replace(`/home/message/detail/${id}`)
      },
      // 编程式的导航 - 跳转页面
      pushShow(id) {
        // 这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
        this.$router.push(`/home/message/detail/${id}`)
      },
      pushObjectShow(id) {
        this.$router.push(
          {path: `/home/message/detail/${id}`}
        )
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red !important;
  }
  .btn-margin {
    margin-left: 10px;
  }
  .list-group-item:first-child {
    border-top: none;
  }
</style>
