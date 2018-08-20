<template>
  <el-table :data="tableData" style="width: 100%" stripe border highlight-current-row>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址" align="left"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        key: 'table_01.json',
        tableData: []
      }
    },
    mounted() {
      const url = `../../../static/json/${this.key}`
      this.$http.get(url).then(response => {
        this.tableData = response.body
      })
    }
  }
</script>

<style scoped>

</style>
