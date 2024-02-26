<template>
    <div>
      <header-vue msg="Récapitulatif du service"/> 
    </div>
  
<nav-vue/>
  

  
    <div class="bottom">

      <button-vue msg="Commencer le service !" :showImage="false"/>
    </div>
  
  
  
  
  
  </template>
  
  <script>

  export default {
    name: "service",
    components: {
      ButtonVue,
      HeaderVue,
      checkBoxVue,
      navVue
    }
  }
  </script>