<template>
  <div class="films">
    <button @click="addFilm" class="btn btn-primary btn-lg mb-2 ml-2">Add Film</button>
    <div class="films-container">
      <Film 
        v-for="film in films" 
        :filmInfo="film" 
        :key="film.id" 
        @editFilm="editFilm(film.id)" 
        @deleteFilm="deleteFilm(film.id)"/>
    </div>
    <EditFilm 
      v-if="showEdit" 
      :title="editTitle" 
      :titles="titles"
      :editOkTitle="editOkTitle" 
      :filmInfo="editFilmInfo" 
      @edit-cancel="showEdit=false" 
      @edit-update="updateFilm" />
  </div>
</template>

<script>
import axios from 'axios'
import Film from './Film';
import EditFilm from './EditFilm.vue';
export default {
  name: 'Films',
  components: {
    Film, EditFilm
  },
  data() {
    return {
      films : [],
      showEdit : false,
      editTitle : '',
      editOkTitle : '',
      editFilmInfo : []
    }
  },
  methods : {
    addFilm(){
      this.editTitle = "Add New film";
      this.editOkTitle = "Add";
      this.editFilmInfo = {'id':this.newIndex(),'title':'','director':'','year':'','genre':'',runtime:''};
      this.showEdit="true";
    },
    editFilm(id){
      this.editTitle = "Edit film";
      this.editOkTitle = "Update";
      this.editFilmInfo = this.filmById(id);
      this.showEdit="true";
    },
    updateFilm(newFilm){
      this.showEdit=false
      const oldFilm = this.filmById(newFilm.id);
      if (oldFilm===false){
        this.films.push(newFilm);
      }
      else{
        for( let i = 0; i < this.films.length; i++){
          if (this.films[i].id === oldFilm.id) {
            this.films[i] = newFilm;
          }
        }
      }
    },
    deleteFilm(id){
      this.$bvModal.msgBoxConfirm('Please confirm that you want to delete.', {
          title: 'Confirm Delete',
          okVariant: 'danger',
          okTitle: ' Yes ',
          cancelTitle: ' Cancel ',
          footerClass: 'p-2',
          hideHeaderClose: false,
          centered: true
        })
          .then(value => {
            if (value===true)
              for( let i = 0; i < this.films.length; i++){ 
                 if ( this.films[i].id === id) {
                   this.films.splice(i, 1); 
                 }
              }
          })
    },
    newIndex(){
      let max = 0;
      for (let film of this.films){
        if (film.id > max) max= film.id;
      }
      return max+1;
    },
    filmById(id){
      for (let film of this.films){
        if (film.id === id) return film;
      }
      return false;
    },
    closeEdit(){

    }
  }, 
  created(){
    const filmIds = ['tt7549996','tt1386697','tt1856101','tt6324278','tt2328900','tt5503686','tt6189022','tt6105098'];
    filmIds.map(
      (id, index) => {
        axios.get('http://www.omdbapi.com/?i='+id+'&apikey=9be04176')
          .then((response) => {
            const returnFilm = {
              id : index,
              title : response.data.Title,
              director : response.data.Director,
              genre : response.data.Genre,
              runtime : response.data.Runtime,
              year : response.data.Year
            };
            this.films.push(returnFilm);
          })
      } 
    );
  },
  computed : {
    titles(){
      return this.films.map( film => film.title );
    }
  }
}
</script>

<style scoped>
  .films {
    padding : 40px 30px;
  }
  .films-container {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  @media (max-width:787px){
    .films {
      padding : 20px;
    }
  }
</style>
