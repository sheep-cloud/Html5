<template>
  <div>
    <h3>
      这是购物车页面
      goodsId: <span class="text-primary">{{$route.query.goodsId}}</span>
    </h3>
    <button class="btn btn-info" @click="$router.back()"><i class="glyphicon glyphicon-backward"></i> 返回</button>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>

</style>
