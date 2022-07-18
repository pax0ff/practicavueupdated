<template>
<Header></Header>

  <img src="../images/horizline.png" alt="line" class="horizline">

<About></About>

  <img src="../images/horizline.png" alt="line" class="horizline">

<Games></Games>

 <img src="../images/horizline.png" alt="line" class="horizline">

<Play></Play>

 <img src="../images/horizline.png" alt="line" class="horizline">

<ComingSoon></ComingSoon>

 <img src="../images/horizline.png" alt="line" class="horizline">

<Contact></Contact>

</template>

<script>
import Contact from './components/Contact.vue'
import ComingSoon from './components/ComingSoon.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Games from './components/Games.vue'
import Play from './components/Play.vue'

export default {

  name: 'App',
  components: {
   Header, 
   About,
   Games,
   Play,
   ComingSoon,
   Contact
  }
}
</script>

<style scoped>  
.horizline {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
}

.test{
  color:white;
  font-size: 30px;
  text-align: center;;
}
</style>
