<template>
  <main>
    <el-button @click="startHacking" type="success" size="medium" icon="el-icon-star-off" plain>Start</el-button>
    <Pagination/>
  </main>
</template>

<script>
  import Pagination from '../components/Pagination'
  export default {
    components: {
      Pagination
    },
    methods: {
      startHacking() {
        this.$notify({
          title: 'It works!',
          type: 'success',
          message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
          duration: 5000
        })
      }
    }
  }
</script>

<style scoped>

</style>
