<template>
  <div class="editfilm">
    <b-modal 
    v-model="modalShow" 
    :title="title" 
    :header-bg-variant="'dark'" 
    :header-text-variant="'light'"
    :body-bg-variant="'dark'" 
    :footer-bg-variant="'dark'" 
    :ok-title="editOkTitle" 
    @ok="ok" 
    @cancel="cancel" 
    @hidden = "$emit('edit-cancel')"
    centered>
      <b-form>
      <b-form-group label="Title" label-for="title" class="text-light">
        <b-form-input
          class="mb-2"
          id="title"
          v-model="form.title"
          type="text"
          placeholder="Title"
        ></b-form-input>
        <span class="error">{{errorFields.title}}</span>
      </b-form-group>
      <b-form-group label="Director" label-for="director" class="text-light">
        <b-form-input 
          class="mb-2"
          id="director"
          v-model="form.director"
          type="text"
          placeholder="Director"
        ></b-form-input>
        <span class="error">{{errorFields.director}}</span>
        </b-form-group>
      <b-form-group label="Genre" label-for="genre" class="text-light">
        <b-form-input
          id="genre"
          class="mb-2"
          v-model="form.genre"
          type="text"
          placeholder="Genre"
        ></b-form-input>
        <span class="error">{{errorFields.genre}}</span>
        </b-form-group>
      <b-form-group label="Runtime" label-for="runtime" class="text-light">
        <b-form-input
          id="genre"
          class="mb-2"
          v-model="form.runtime"
          type="text"
          placeholder="Runtime"
        ></b-form-input>
        <span class="error">{{errorFields.runtime}}</span>
        </b-form-group>
      <b-form-group label="Year" label-for="year" class="text-light">
        <b-form-input
          id="year"
          type="text"
          v-model="form.year"
          placeholder="Year"
        ></b-form-input>
        <span class="error">{{errorFields.year}}</span>
      </b-form-group>
    </b-form>
    
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'EditFilm',
  data() {
    return {
      modalShow: true,
      form: {
          id : 0, 
          title: '',
          director: '',
          genre: '',
          runtime : '',
          year: ''
        },
        errorMessages : {
          empty : "This field cannot be empty",
          existingTitle : "This title already exists",
          yearFormat : "The year format is invalid. Ex. 1974",
          yearRange : "The year is invalid"
        },
        errorFields : {
          title: '',
          director: '',
          genre: '',
          runtime : '',
          year: ''
        }
    }
  },
  props : ['title','editOkTitle','filmInfo','titles'],
  methods : {
    ok(bvModalEvt){
      if (this.validateForm()){
        this.$emit('edit-update', this.form);
      }
      else{
        bvModalEvt.preventDefault()
      }
    },
    cancel(bvModalEvt){
      this.$emit('edit-cancel');
    },
    validateForm(){
      const errorFields = this.errorFields;
      Object.keys(this.errorFields).map(
        (key)=>{
          errorFields[key]='';
        });
      let valid = true;
      if (this.form.title==''){
        this.errorFields.title=this.errorMessages.empty;
        valid = false
      }
      else if(this.titleExists(this.form.title)){
        this.errorFields.title=this.errorMessages.existingTitle;
        valid = false
      }
      if (this.form.director==''){
        this.errorFields.director=this.errorMessages.empty;
        valid = false
      }
      if (this.form.genre==''){
        this.errorFields.genre=this.errorMessages.empty;
        valid = false
      }
      if (this.form.runtime==''){
        this.errorFields.runtime=this.errorMessages.empty;
        valid = false
      }
      if (this.form.year==''){
        this.errorFields.year=this.errorMessages.empty;
        valid = false;
      }
      else if( !Number.isInteger(Number(this.form.year)) ){
        this.errorFields.year=this.errorMessages.yearFormat;
        valid = false;
      }
      else if( Number(this.form.year)<1860 || Number(this.form.year) > 2050 ){
        this.errorFields.year=this.errorMessages.yearRange;
        valid = false;
      }
      return valid;
    },
    titleExists(title){
      for (let t of this.titles){
        if (this.titleForm(t)==this.titleForm(title)){
          return true;
        }
      }
      return false;
    },
    titleForm(value){
      if (value=='') return;
      value = value
      .replace(/([^a-z0-9\s-:]+)/gi, '')
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .trim();
      return value;
    }
  }, 
  mounted(){
    this.form = {...this.filmInfo};
  },
}
</script>

<style scoped>
  .error{
    color : red;
  }
</style>
