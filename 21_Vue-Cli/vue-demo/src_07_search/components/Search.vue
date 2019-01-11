<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div class="form-inline">
      <input type="text" placeholder="enter the name you search" class="form-control" v-model.trim="searchName"/>
      <button class="btn btn-primary glyphicon glyphicon-search" @click="search"> Search</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'

  export default {
    data() {
      return {
        searchName: ''
      }
    },
    methods: {
      search() {
        const {searchName} = this
        if (searchName) {
          // 发布搜索的消息
          PubSub.publish('search', searchName)
        }
      }
    }
  }
</script>

<style scoped>

</style>
