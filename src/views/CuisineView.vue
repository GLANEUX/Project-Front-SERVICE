<template>
  <div>
    <header-vue msg="Qui travaille aujourd'hui ?" />
  </div>

  <nav-vue />

  <div class="overflow">
    <check-box-vue name="robert tessier" />
    <check-box-vue name="lilou pams" />
    <check-box-vue name="kevin morin" />
    <check-box-vue name="bertran sort" />
    <check-box-vue name="atenis ciel" />
    <check-box-vue name="sarah croche" />
    <check-box-vue name="soron cru" />
    <check-box-vue name="eric cartman" />
    <check-box-vue name="diane peanut" />
  </div>




  <div class="bottom">

    <button-vue msg="Suivant" :showImage="true" link="/service" />
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