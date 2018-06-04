<template>
  <ul>
    <li v-for="(news, index) in newArr" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        newArr: ['news01', 'news02', 'news03', 'news04', 'news05']
      }
    }
  }
</script>

<style scoped>

</style>
