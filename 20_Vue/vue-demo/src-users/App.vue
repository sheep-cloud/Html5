<template>
  <div class="container">
    <search/>
    <users-main/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import UsersMain from './components/Main'

  export default {
    // Main 是关键字
    components: {Search, UsersMain}
  }
</script>

<style scoped>

</style>
