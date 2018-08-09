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
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState(['count']),
      // ...mapGetters(['evenOrOdd']) // mapGetters() 返回值：对象  {evenOrOdd() { return this.$store.getters.evenOrOdd }}
      ...mapGetters({evenOrOdd: 'evenOrOdd2'}) // key：事件，value：store
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }

    /*
    computed: {
      count() {
        return this.$store.state.count
      },
      evenOrOdd() {
        return this.$store.getters.evenOrOdd
      }
    },
    methods: {
      // 增加
      increment() {
        // 通知vuex去增加
        this.$store.dispatch('increment') // 触发store中对应的action调用
      },
      // 减少
      decrement() {
        this.$store.dispatch('decrement')
      },
      // 如果是奇数才增加
      incrementIfOdd() {
        this.$store.dispatch('incrementIfOdd')
      },
      // 过一秒才增加
      incrementAsync() {
        this.$store.dispatch('incrementAsync')
      }
    }
    */
  }
</script>

<style scoped>

</style>
