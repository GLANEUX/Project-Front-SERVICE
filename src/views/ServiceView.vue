<template>

<div>
      <header-vue msg="Récapitulatif du service"/> 
    </div>
  

<nav-vue/>


<div>
  <h2>Employés sélectionnés</h2>
<div class="overflow" style="  height: 50vh;">
  <employe-box name="moezrn dsfjk" poste="cuisine"/>
  <employe-box name="moezrn dsfjk" poste="salle"/>
  <employe-box name="moezrn dsfjk" poste="cuisine"/>
  <employe-box name="moezrn dsfjk" poste="cuisine"/>
  <employe-box name="moezrn dsfjk" poste="cuisine"/>

</div>
</div>
  
  
<div class="bottom">

<button-vue msg="Commencer le service !" :showImage="false" link="/tips"/>
</div>






</template>

<script>
import ButtonVue from '../components/buttonVue.vue'; 
import HeaderVue from '../components/headerVue.vue';
import navVue from '../components/navVue.vue';
import employeBox from '../components/employeBox.vue'

export default {
  name: "service",
  components: {
    ButtonVue,
    HeaderVue,
    navVue,
    employeBox
  }
}
</script>