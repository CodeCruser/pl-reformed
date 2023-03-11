<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <AppHeader />
  <MapingIcons />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import MapingIcons from './components/MapingIcons.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, AppHeader, MapingIcons ,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
