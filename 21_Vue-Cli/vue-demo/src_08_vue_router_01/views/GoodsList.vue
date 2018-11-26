<template>
  <div>
    <h3>
      这是商品列表页面
      goodsId: <span class="text-primary">{{$route.params.goodsId}}</span>
      name: <span class="text-danger">{{$route.params.name}}</span>
    </h3>
    <router-link :to="`/goods/${$route.params.goodsId}/user/${$route.params.name}/title`" class="btn btn-primary">显示商品标题</router-link>
    <router-link to="title" class="btn btn-primary">显示商品标题</router-link>
    <router-link to="image" class="btn btn-primary">显示商品图片</router-link>
    <router-view/>

    <hr>
    <router-link to="/cart?goodsId=123" class="btn btn-primary">组件路由，购物车页面 to</router-link>
    <router-link :to="{name: 'Cart', query: {goodsId: 123}}" class="btn btn-primary">命名路由，购物车页面 :to</router-link>
    <button @click="jump" class="btn btn-success">编程路由，购物车页面 push</button>
  </div>
</template>

<script>
  export default {
    methods: {
      jump() {
        this.$router.push(
          {path: '/cart?goodsId=123'}
        )
      }
    }
  }
</script>

<style scoped>

</style>
