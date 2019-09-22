<template>
  <div class="films">
    <Film v-for="film in films" :filmInfo="film" :key="film.id"/>
  </div>
</template>

<script>
import Film from './Film';
export default {
  name: 'Films',
  components: {
    Film
  },
  data() {
    return {
      films : [
        {
          id : 0,
          name : 'Iron Man',
          director : 'Fred',
          year : '1996'
        },
        {
          id : 1,
          name : 'Frozen',
          director : 'Bob',
          year : '2013'
        },
        {
          id : 3,
          name : 'A Tree',
          director : 'Mike',
          year : '1904'
        },
      ],
    }
  }
}
</script>

<style scoped>
  .films {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .film {
    min-width : 300px
  }
  @media (max-width:787px){
    .film {
      width : 100%
    }
  }
</style>
