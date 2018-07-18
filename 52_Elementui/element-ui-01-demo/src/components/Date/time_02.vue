<template>
  <el-time-picker is-range v-model="value4" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
  </el-time-picker>
</template>

<script>
  export default {
    data() {
      return {
        value4: [new Date(2016, 9, 10, 0, 0), new Date(2016, 9, 10, 24, 0)]
      }
    }
  }
</script>

<style scoped>

</style>
