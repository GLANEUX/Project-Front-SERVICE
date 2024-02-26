<template>
    <div class="boxed">
      <div>
        <img src="../assets/img/user.svg" alt="user">
        <span class="name">{{ name }}</span>
      </div>
      <span class="poste">{{ poste }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    poste: {
      type: String,
      required: true
    }
  });
  
  const checked = ref(false);
  </script>
  
  <style scoped>
  @import '../assets/style/base.css';
  .poste{
    background-color: #ededed;
    border-radius: 12px;
    font-weight: 400;
    font-size: 15px;
    color: #818181;
    width: 75px;
    text-align: center;
  }
  .boxed {
    border-bottom: 1px solid #B8B8B8;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
  }
  div{
    display: flex;
align-items: center;
gap: 15px;
}
  
  span.name {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-transform: capitalize;
  }
  
  img {
    filter: drop-shadow(0px 0px 3px var(--orange));
  }
  
  </style>
  