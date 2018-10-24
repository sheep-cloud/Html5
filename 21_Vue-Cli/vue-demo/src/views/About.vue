<template>
  <div>
    <div class="col-md-5">
      <h2>About 组件</h2>
      <label>接收外部数据：router-view</label>
      <input type="text" class="form-control" placeholder="内容" v-model="msg">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      msg: String
    }
  }
</script>

<style scoped>

</style>
