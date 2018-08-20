<template>
<!--  <el-menu theme="dark" mode="horizontal" background-color="#545c64" active-text-color="#ffd04b" router>
    <el-menu-item class="navbar-brand" index="/">首页</el-menu-item>
    <el-menu-item index="/notfound">404</el-menu-item>
  </el-menu>-->

  <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
    <el-menu-item class="navbar-brand" index="/">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>消息中心</el-menu-item>
    <el-menu-item index="/notfound">订单管理</el-menu-item>
  </el-menu>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
