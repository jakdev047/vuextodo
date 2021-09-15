<template>
  <div id="app">

    <app-header />

    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <app-view />

    <app-footer />
    
  </div>
</template>

<script>
  // components
  import AppHeader from './layout/Header.vue';
  import AppView from './layout/View.vue';
  import AppFooter from './layout/Footer.vue';
  // import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    // HelloWorld,
    AppHeader,
    AppView,
    AppFooter,
  }
}
</script>

<style lang='css'>
  @import "./assets/css/style.css";
</style>
