<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld/>-->

    <!--基础表格-->
    <!--<Table_01/>-->
    <!--自定义模版-->
    <!--<Table_02/>-->
    <!--自定义索引-->
    <!--<Table_03/>-->
    <!--单选-->
    <!--<Table_04/>-->

    <!--固定时间点-->
    <!--<Time_01/>-->
    <!--任意时间范围-->
    <!--<Time_02/>-->

    <!--DatePicker 日期选择器-->
    <!--<Date_01/>-->

    <!--完整分页-->
    <!--<Pagination_01/>-->

    <!--典型表单-->
    <!--<Form_01/>-->

    <!--Select 基础用法-->
    <!--<Select_01/>-->
    <!--分组-->
    <!--<Select_02/>-->

    <!--点击上传-->
    <!--<Upload_01/>-->
    <!--手动上传-->
    <!--<Upload_02/>-->

    <!--Tree 树形控件-->
    <!--<Tree_01/>-->

    <!--Cascader 级联选择器-->
    <Cascader_01/>

    <!--高德地图-->
    <!--<Map_01/>-->
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'

  // Table 表格
  import Table_01 from './components/Table/table_01'
  import Table_02 from './components/Table/table_02'
  import Table_03 from './components/Table/table_03'
  import Table_04 from './components/Table/table_04'

  // TimePicker 时间选择器
  import Time_01 from './components/Date/time_01'
  import Time_02 from './components/Date/time_02'

  // DatePicker 日期选择器
  import Date_01 from './components/Date/date_01'

  // Pagination 分页
  import Pagination_01 from './components/Pagination/pagination_01'

  // Form 表单
  import Form_01 from './components/Form/form_01'

  // Select 选择器
  import Select_01 from './components/Selete/select_01'
  import Select_02 from './components/Selete/select_02'

  // Upload 上传
  import Upload_01 from './components/Upload/upload_01'
  import Upload_02 from './components/Upload/upload_02'

  // Tree 树形控件
  import Tree_01 from './components/Tree/Tree_01'

  // Cascader 级联选择器
  import Cascader_01 from './components/Cascader/Cascader_01'

  // 高的地图
  import Map_01 from './components/Map/map_01'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Table_01,
      Table_02,
      Table_03,
      Table_04,

      Time_01,
      Time_02,

      Date_01,

      Pagination_01,

      Form_01,

      Select_01,
      Select_02,

      Upload_01,
      Upload_02,

      Tree_01,

      Cascader_01,

      Map_01
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    padding: 24px;
    border: 1px solid #ebeef5;
    border-radius: 3px;
    width: 900px;
  }
</style>
