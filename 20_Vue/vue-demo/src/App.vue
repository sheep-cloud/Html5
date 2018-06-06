<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--
          <a href="#/about" class="list-group-item router-link-exact-active activeClass">About</a>
          <a href="#/home" class="list-group-item">Home</a>
          -->
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="pan1">
          <div class="pan1-body">
            <!--
            <div>
              <h2>about组件</h2>
              <p>接收外部数据：colg</p>
              <input type="text">
            </div>
            -->
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <keep-alive>
              <router-view msg="abc"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .list-group-item {
    color: red !important;
  }
</style>
