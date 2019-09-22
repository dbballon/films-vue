<template>
  <div class="film">
    <h3>Name: {{filmInfo.name}}</h3>
    <h4>Director: {{filmInfo.director}}</h4>
    <h4>Year: {{filmInfo.year}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Film',
  props : ['filmInfo']
}
</script>

<style scoped>

</style>
