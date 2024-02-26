<template>
  <div>
    <header-vue /> 
  </div>
  <div>
    <button-vue msg="Suivant" :showImage="true"/>
  </div>
</template>

<script>
import ButtonVue from './components/buttonVue.vue'; 
import HeaderVue from './components/headerVue.vue';

export default {
  components: {
    ButtonVue,
    HeaderVue 
  }
}
</script>
