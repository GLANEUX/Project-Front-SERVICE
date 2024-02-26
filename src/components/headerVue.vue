<template>
    <div class="inner-padding parent">
        <div>
            <span>{{ formattedDate }}</span>
            <h1>{{ msg }}</h1>
        </div>
        <div class="menu" @click="toggleMenu">
            <img src="../assets/menu.svg" alt="menu" height="10px">
        </div>
        

    </div>
    <div v-if="isMenuOpen" class="side-menu">
            <img class="close-button" src="../assets/cross.svg" alt="Close" @click="toggleMenu" height="20px">



            <div class="middle-nav align">
                <div >
                    <img src="../assets/cloche.svg" alt="cloche">
                    <p>Service</p>
                </div>
                <div>
                    <img src="../assets/admin.svg" alt="admin">
                    <p>Administrateur</p>
                </div>
            </div>



            <div class="bottom-nav align">
                <div>
                    <p>Modifier le service</p>
                    <img src="../assets/modif.svg" alt="modification">
                </div>
                <div>
                    <p class="red-text">Fermer le service</p>
                    <img src="../assets/exit.svg" alt="exit">
                </div>
            </div>



        </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { DateTime } from 'luxon';

const formattedDate = DateTime.now().setLocale('fr').toFormat('cccc, dd LLLL');

const isMenuOpen = ref(false); // Variable pour contrôler l'état du menu

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}


// Déclaration des props
const props = defineProps({
    msg: {
        type: String,
        required: true
    }
});
</script>
  
<style scoped>
@import '../assets/base.css';

.red-text{
    color: var(--red);
}
.align.bottom-nav div{
    gap: 10px;

}

.align div{
    display: inline-flex;
    gap: 30px;
    justify-content: start;
    border-bottom: 2px solid #E2E2E2;
    width: 100%;
    align-items: center;
}
.align div:last-child{
    border: none;
}
.middle-nav div p{
font-size: 20px;
font-weight: 700;
line-height: 23px;
}

.middle-nav{
    margin-top: 60px;
    margin-left: 40px;
}

.bottom-nav div {
    justify-content: center;

}
.bottom-nav{
    position: fixed;
    bottom: 0;
}



.side-menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 270px;
    height: 100vh;
    background-color: var(--white);
    padding: 20px;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    /* backdrop-filter: blur(50px); */
}

.side-menu ul {
    list-style-type: none;
    padding: 0;
}

.side-menu li {
    margin-bottom: 10px;
}

.close-button {
 align-self: end;
    cursor: pointer;
}

.menu {
    padding-top: 20px;
    justify-self: end;
    cursor: pointer;
}

.parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 5px;
}

span {
    color: var(--grey);
    font-weight: 400;
    font-size: 17px;
    line-height: 19.55px;
    letter-spacing: -1%;
}

h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 39.1px;
}
</style>
  