<template>
    <div>
      <header-vue msg="Ajouter un pourboire"/> 
    </div>
  

  
  
    <div class="bottom">
      
      <button-vue msg="Ajouter le pourboire" :showImage="false" link="/tips"/>
    </div>
  
  
  
  
  
  </template>
  
  <script>
  import ButtonVue from '../components/buttonVue.vue'; 
  import HeaderVue from '../components/headerVue.vue';
  
  export default {
    name: "tips",
    components: {
      ButtonVue,
      HeaderVue,
    
    }
  }
  </script>