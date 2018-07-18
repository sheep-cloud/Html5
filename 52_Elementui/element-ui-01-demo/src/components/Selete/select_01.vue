<template>
  <el-select v-model="params.selectValue" placeholder="请选择">
    <el-option v-for="item in options" :key="item.logId" :label="item.operationTime" :value="item.logId"></el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [],
        params: {},

        key: 'pagination.json'
      }
    },
    mounted() {
      const url = `../../../static/json/${this.key}`
      this.$http.get(url).then(response => {
        let result = response.body
        this.options = result.data
      }, response => console.log(response))
    }
  }
</script>

<style scoped>

</style>
