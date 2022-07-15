<template>
<Header></Header>

  <img src="../images/horizline.png" alt="line" class="horizline">   

<About></About>
  <img src="../images/horizline.png" alt="line" class="horizline">  

<Games></Games>

</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Games from './components/Games.vue'

export default {
  name: 'App',
  components: {
   Header, 
   About,
   Games
  }
}


</script>

<style scoped>  
.horizline {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 25px;
}
</style>
