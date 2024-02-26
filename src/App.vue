<template>
  <div>
    <header-vue msg="Qui travaille aujourd'hui ?"/> 
  </div>



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
    <button-vue msg="Suivant" :showImage="true"/>
  </div>



  <router-link to="/about">À propos</router-link>

  <router-view></router-view>

</template>

<script>
import ButtonVue from './components/buttonVue.vue'; 
import HeaderVue from './components/headerVue.vue';
import checkBoxVue from './components/checkBoxVue.vue';

export default {
  components: {
    ButtonVue,
    HeaderVue,
    checkBoxVue 
  }
}
</script>