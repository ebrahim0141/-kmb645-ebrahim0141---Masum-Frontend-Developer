<template>
  <div class="countries">
    <hr><hr>
    <div v-for="post in posts" :key="post.id">
      <ol>
        <li><b>Name:</b> {{post.name}}</li>
        <li><b>Native:</b> {{post.native}}</li>
        <li><b>Continent:</b> {{post.continent}}</li>
        <li><b>Language:</b> {{post.languages}}</li>
      </ol><hr>
    </div>
  </div>
</template>

<script>
import axios from'axios'
export default {
  name: 'Countries',
  data () {
    return {

    	posts:[]
    }
  },
  created(){
    axios.get('https://countriesnode.herokuapp.com/v1/countries')
    .then(response =>{
        //console.log(response)
        this.posts =response.data
    })
    .catch(error =>{
        console.log(error)
    })
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.countries{

  text-align: left;
}


</style>
