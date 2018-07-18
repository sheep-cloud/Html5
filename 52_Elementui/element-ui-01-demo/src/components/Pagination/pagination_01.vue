<template>
  <div class="block">
    <el-date-picker v-model="params.operationTime" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" @change="getTime()"></el-date-picker>
    <el-table :data="tableData" stripe border highlight-current-row>
      <el-table-column type="index" label="序号" width="70"></el-table-column>
      <el-table-column prop="logId" label="日志ID" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="account" label="账号" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="userName" label="用户名" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operationUrl" label="请求地址" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="operationTime" label="请求时间" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="result" label="状态" align="center" show-overflow-tooltip :formatter="resultFormat"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        params: {},

        tableData: [],

        pageNum: 1,
        pageSize: 10,
        pageSizes: [10, 15, 20, 30, 50],
        total: 0,

        key: 'pagination.json'
      }
    },
    mounted() {
      this.query(this)
    },
    methods: {
      query() {
        this.loadTable(this)
      },
      getTime() {
        this.loadTable(this)
      },
      loadTable(self) {
        const url = `../../../static/json/${this.key}`
        self.$http.get(`${url}?pageNum=${self.pageNum}&pageSize=${self.pageSize}`, {params: self.params}).then(response => {
          let result = response.body
          self.tableData = result.data
          self.total = result.total
        })
      },
      resultFormat(row, column, value) {
        if (value === 0) {
          return '成功'
        }
        return '失败'
      },
      handleSizeChange(val) {
        this.pageSize = val
        this.loadTable(this)
      },
      handleCurrentChange(val) {
        this.pageNum = val
        this.loadTable(this)
      }
    }
  }
</script>

<style scoped>

</style>
