<template>
  <div class="inner-padding">
    <router-link :to="link" class="button-wrapper" style="text-decoration: none;">
      <button>{{ msg }}  
        <img v-if="showImage" src="../assets/img/arrow-alt.svg" alt="arrow" height="15px">
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    showImage: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@import '../assets/style/base.css';



button {
  width: 100%;
  background-color: var(--orange-light);
  border-radius: 25px;
  border: none;
  height: 5vh;
  padding: 5px;
  color: var(--orange);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
div{
  width: -webkit-fill-available;
}
</style>
