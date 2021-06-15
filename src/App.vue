<template>
  <div id="app" class="container-fluid">
    <img alt="Brew logo" src="./assets/beer.png" class="app" width="200">
    <!-- A-3. (begins in HelloWorld.vue) Here, the HelloWorld component 
    receives the property message. Here, it can be modified. -->
    <!--<HomeBrew msg="Welcome to My Brew App"/>-->
    <Brew />
  </div>
</template>

<script>
//import HomeBrew from './components/HomeBrew.vue';
import Brew from './components/Brew.vue';

export default {
  name: 'App',
  components: {
    //HomeBrew,
    Brew
  }
}
</script>

<style>
.app {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* The above three lines center an image */
  margin-top: 30px;
}
</style>
