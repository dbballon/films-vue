<template>
  <div class="film">
    <h4>{{filmInfo.title | titleFormat}}</h4>
    <p>
	    Director: {{filmInfo.director}}</br>
	    Genre: {{filmInfo.genre}}</br>
	    Runtime: {{filmInfo.director}}</br>
	    Year: {{filmInfo.year}}
	 </p>
    <button @click="editFilm" class="btn btn-primary m-1">Edit</button>
    <button @click="deleteFilm" class="btn btn-secondary m-1">Delete</button>
  </div>
</template>

<script>

export default {
  name: 'Film',
  props : ['filmInfo'],
  methods: {
  	editFilm (){
  		this.$emit('editFilm',this.filmInfo.id);
  	},
  	deleteFilm(){
  		this.$emit('deleteFilm',this.filmInfo.id);
  	}
  },
  filters: {
    titleFormat(value) {
    	if (value=='') return;
		value = value
		.toLowerCase()
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
		.replace(/([^a-z0-9\s-:]+)/gi, '');
      return value;
    }
  },
}
</script>

<style scoped>
.film{
	background : white;
	flex: 1;
	min-width: 300px;
	max-width : 500px;
	box-shadow: 0px 0px 7px 2px #2a39d6;
	border-radius: 5px;
	margin: 10px;
	padding: 10px;
  }
  @media (max-width:787px){
    .film {
      width : 100%;
      max-width : none;
    }
  }
</style>
