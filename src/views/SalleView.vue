<template>
    <div>
      <header-vue msg="Qui travaille aujourd'hui ?"/> 
    </div>
  
<nav-vue/>
  
    <div class="overflow">
      <check-box-vue name="Micheal olson"/>
      <check-box-vue name="addams mercredi"/>
      <check-box-vue name="lola opkins"/>
      <check-box-vue name="Micheal olson"/>
      <check-box-vue name="addams mercredi"/>
      <check-box-vue name="lola opkins"/>
      <check-box-vue name="Micheal olson"/>
      <check-box-vue name="addams mercredi"/>
      <check-box-vue name="lola opkins"/>
   </div>
  
  
  
    <div class="bottom">
      
      <button-vue msg="Suivant" :showImage="true" link="/cuisine"/>
    </div>
  
  
  
  
  
  </template>
  
  <script>
  import ButtonVue from '../components/buttonVue.vue'; 
  import HeaderVue from '../components/headerVue.vue';
  import checkBoxVue from '../components/checkBoxVue.vue';
  import navVue from '../components/navVue.vue'
  
  export default {
    name: "salle",
    components: {
      ButtonVue,
      HeaderVue,
      checkBoxVue,
      navVue
    }
  }
  </script>