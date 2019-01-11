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
  /*
    辅助函数
      1. mapState([xxx]) => this.$store.state.xxx
        当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性

      2. mapGetters([xxx]) => this.$store.getters.xxx
        mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

      3. mapActions([xxx]) => this.$store.dispatch(xxx)
        mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用

  */
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState(['count']),
      // ...mapGetters({evenOrOdd: 'evenOrOdd'}) // key：事件，value：store
      ...mapGetters(['evenOrOdd']) // mapGetters() 返回值：对象  {evenOrOdd() { return this.$store.getters.evenOrOdd }}
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
