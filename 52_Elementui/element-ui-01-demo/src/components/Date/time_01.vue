<template>
  <el-time-select v-model="value1" :picker-options="time" placeholder="选择时间"></el-time-select>
</template>

<script>
  export default {
    data() {
      return {
        time: {
          start: '08:30',
          step: '00:15',
          end: '18:30'
        },
        value1: ''
      }
    }
  }
</script>

<style scoped>

</style>
