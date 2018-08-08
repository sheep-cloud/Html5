<template>
  <div>
    <div class="col-md-5">
      <h2>Home 组件</h2>
      <ul class="nav nav-tabs">
        <router-link to="/home/news" tag="li">
          <a href="">News</a>
        </router-link>
        <router-link to="/home/message" tag="li">
          <a href="">message</a>
        </router-link>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
