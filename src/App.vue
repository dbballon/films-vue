<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Films />
  </div>
</template>

<script>
import Films from './components/Films'

export default {
  name: 'app',
  components: {
    Films
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
