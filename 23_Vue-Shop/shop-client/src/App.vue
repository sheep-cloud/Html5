<template>
  <div id="app">
    <section class="content">
      <router-view></router-view>
    </section>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {FooterGuide},
    mounted() {
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUserInfo')
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    position: relative;
  }
</style>
