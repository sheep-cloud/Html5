<!-- view: 以声明方式将 state 映射到视图 -->
<template>
  <div class="modal-header">
    <h3>click <span class="text-primary">{{count}}</span> times, count is <span class="text-danger">{{evenOrOdd}}</span></h3>
    <button class="btn btn-primary" @click="increment"><i class="glyphicon glyphicon-plus"></i></button>
    <button class="btn btn-primary" @click="decrement"><i class="glyphicon glyphicon-minus"></i></button>
    <button class="btn btn-primary" @click="incrementIfOdd">increment 奇数增加</button>
    <button class="btn btn-primary" @click="incrementAsync">increment 异步</button>
  </div>
</template>

<script>
  export default {
    // state: 驱动应用的数据源
    data() {
      return {
        count: 0
      }
    },
    computed: {
      evenOrOdd() {
        return this.count % 2 === 0 ? '偶数' : '奇数'
      }
    },
    // actions: 响应在 view 上的用户输入导致的状态变化
    methods: {
      increment() {
        this.count++
      },
      decrement() {
        this.count--
      },
      incrementIfOdd() {
        if (this.count % 2) {
          this.count++
        }
      },
      incrementAsync() {
        setTimeout(() => {
          this.count--
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>
