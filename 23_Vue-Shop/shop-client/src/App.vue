<template>
  <div id="app">
    <section class="content">
      <router-view/>
    </section>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {FooterGuide}
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
