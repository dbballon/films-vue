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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background : url(https://cdn.hipwallpaper.com/i/93/54/GyZOrS.jpg);
  &> img {
    width: 50px;
    margin: 15px;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
