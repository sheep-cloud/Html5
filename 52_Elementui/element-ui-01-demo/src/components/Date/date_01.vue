<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker v-model="params.value1" type="date" placeholder="选择日期" @change="getTime()"></el-date-picker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        params: {}
      }
    },
    methods: {
      getTime() {
        console.log()
        this.params.value1 = 'yyyy-MM-dd'
      }
    }
  }
</script>

<style scoped>

</style>
