<template>
  <div>
    <header-vue msg="Qui travaille aujourd'hui ?"/> 
  </div>
  <div>
    <check-box-vue />
  </div>
  <div>
    <button-vue msg="Suivant" :showImage="true"/>
  </div>
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