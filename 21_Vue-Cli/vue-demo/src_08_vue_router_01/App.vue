<template>
  <div class="container">
    <img src="./assets/img/logo.png" alt="logo">
    <router-view/>
  </div>
</template>

<script>
  export default {
    watch: {
      $route: {
        immediate: true,
        handler(route) {
          console.log(route)
        }
      }
    }
  }
</script>

<style scoped>

</style>
