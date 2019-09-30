<template>
  <div class="code">
  <hr><hr>
    <div v-for="post in posts" :key="post.id">
        <ul>
        <li><b> Name :</b> {{post.name}}</li>
        <li><b> Currency :</b> {{post.currency}}</li>
        <li><b> Code :</b> {{post.code}}</li>
        <li><b> Phone :</b> {{post.phone}}</li>
        </ul><hr>
    </div>
  </div>
</template>

<script>
import axios from'axios'
export default {
  name: 'Countries_code',
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

.code {

  text-align:left;
}

</style>
