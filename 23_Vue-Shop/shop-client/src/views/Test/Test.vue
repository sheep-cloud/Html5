<template>
  <Switch :text="text" :open="open"></Switch>
</template>

<script>
  import Switch from '../../components/Switch/Switch'

  export default {
    components: {Switch},
    data() {
      return {
        text: 'aaa',
        open: 'on'
      }
    }
  }
</script>

<style scoped>
  .loginContainer {
    width: 100%;
    height: 100%;
    background: #fff;
  }
</style>
