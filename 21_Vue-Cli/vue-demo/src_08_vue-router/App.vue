<template>
  <div>
    <div class="row">
      <div class="col-xs-10 col-xs-offset-2">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-1 col-xs-offset-2">
        <div class="list-group">
          <!-- 使用 router-link 组件来导航. -->
          <!-- 通过传入 `to` 属性指定链接. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <router-link to="/about" class="list-group-item">About 组件</router-link>
          <router-link to="/home" class="list-group-item">Home 组件</router-link>
          <!--
          <a href="#/about" class="list-group-item router-link-exact-active active">About</a>
          <a href="#/home" class="list-group-item">Home</a>
          -->
        </div>
      </div>
      <div class="col-xs-9">
        <div class="panel">
          <div class="panel-body">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <keep-alive>
              <!--路由传递数据-->
              <router-view msg="渐进式 JavaScript 框架"></router-view>
            </keep-alive>
            <!--
            <div class="col-md-5">
              <h2>About组件</h2>
              <label>接收外部数据：</label>
              <input type="text" class="form-control" placeholder="内容">
            </div>
            -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$router)
    }
  }
</script>

<style scoped>

</style>
