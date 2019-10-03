<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view>
      <Home />
      <Films />
    </router-view>
  </div>
</template>

<script>
import Films from './components/Films'
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Films,
    Home
  }
}
</script>

<style lang="scss">
body {
  background : url(https://cdn.hipwallpaper.com/i/93/54/GyZOrS.jpg);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  &> img {
    width: 50px;
    margin: 15px;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
