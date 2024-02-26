<template>
  <div>
    <header-vue msg="Qui travaille aujourd'hui ?"/> 
  </div>

<nav-vue/>

  <div class="overflow">
    <check-box-vue name="qsdf olson"/>
    <check-box-vue name="qdsf mercredi"/>
    <check-box-vue name="lola qdsf"/>
    <check-box-vue name="qdf olson"/>
    <check-box-vue name="addams mercredi"/>
    <check-box-vue name="lola qdf"/>
    <check-box-vue name="qdsf olson"/>
    <check-box-vue name="addams mercredi"/>
    <check-box-vue name="lola opkins"/>
 </div>



  
 <div class="bottom">
      
      <button-vue msg="Suivant" :showImage="true" link="/service"/>
    </div>





</template>

<script>
import ButtonVue from '../components/buttonVue.vue'; 
import HeaderVue from '../components/headerVue.vue';
import checkBoxVue from '../components/checkBoxVue.vue';
import navVue from '../components/navVue.vue'

export default {
  name: "cuisine",
  components: {
    ButtonVue,
    HeaderVue,
    checkBoxVue,
    navVue
  }
}
</script>