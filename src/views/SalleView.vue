<template>
  <div>
    <header-vue msg="Qui travaille aujourd'hui ?" />
  </div>

  <nav-vue />

  <div class="overflow">
    <check-box-vue name="Micheal olson" />
    <check-box-vue name="Jean jack" />
    <check-box-vue name="lola smith" />
    <check-box-vue name="thomas vrion" />
    <check-box-vue name="julie tanps" />
    <check-box-vue name="emilie opkins" />
    <check-box-vue name="jule torp" />
    <check-box-vue name="kriss viort" />
    <check-box-vue name="mimi sion" />
  </div>



  <div class="bottom">

    <button-vue msg="Suivant" :showImage="true" link="/cuisine" />
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