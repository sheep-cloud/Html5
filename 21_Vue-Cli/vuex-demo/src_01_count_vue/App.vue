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
    data() {
      return {
        count: 0
      }
    },
    computed: {
      evenOrOdd() {
        return this.count % 2 ? '奇数' : '偶数'
      }
    },
    methods: {
      // 增加
      increment() {
        this.count++
      },
      // 减少
      decrement() {
        this.count--
      },
      // 如果是奇数才增加
      incrementIfOdd() {
        if (this.count % 2) {
          this.increment()
        }
      },
      // 过一秒才增加
      incrementAsync() {
        setTimeout(() => {
          this.decrement()
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>
