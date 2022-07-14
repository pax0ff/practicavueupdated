<template>
<Header></Header>
  <img src="images/horizline.png" alt="line" class="horizline">   

<About></About>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
   Header, 
   About
  }
}
</script>

<style>

</style>
