<template>
  <div>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{other}}</h3>
    <button @click="nameAsyn">change</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['name', 'age', 'other'])
    },
    methods: {
      ...mapActions(['nameAsyn'])
    }
  }
</script>

<style scoped>

</style>
