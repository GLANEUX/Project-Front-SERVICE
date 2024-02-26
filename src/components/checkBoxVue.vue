<template>
    <div :class="{ 'boxed-checked': checked, 'boxed': !checked }">
      <div>
        <img src="../assets/user.svg" alt="user">
        <label for="checkbox">{{ name }}</label>
      </div>
      <input type="checkbox" id="checkbox" v-model="checked" :class="{ 'checkbox-checked': checked, 'checkbox': !checked }"/>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  });
  
  const checked = ref(false);
  </script>
  
  <style scoped>
  @import '../assets/base.css';
  
  .boxed {
    border-radius: 7px;
    border: 1px solid #B8B8B8;
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
  
  .boxed-checked {
    border-radius: 7px;
    border: 2px solid var(--orange);
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;  }
  
  label {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-transform: capitalize;
  }
  
  img {
    filter: drop-shadow(0px 0px 3px var(--orange));
  }
  
  .checkbox {
    transform: scale(1.5);
  }
  
  .checkbox-checked {
    transform: scale(1.5);
    background-color: var(--orange);
  }
  </style>
  