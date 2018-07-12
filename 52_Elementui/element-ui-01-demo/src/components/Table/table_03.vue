<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="索引" type="index" :index="indexMethod" width="80">
    </el-table-column>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
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
    },
    methods: {
      indexMethod(index) {
        return index * 2
      }
    }
  }
</script>

<style scoped>

</style>
