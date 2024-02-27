<template>
    <div>
        <header-vue msg="Ajouter un pourboire" />
    </div>


    <form class="inner-padding">
        <label for="table">Nom de la table</label>
        <input type="text" id="table" placeholder="cerise" required>
        <label for="tips">Montant du pourboire</label>
        <input type="number" id="tips" placeholder="3" v-model="tipAmount">
        <div class="tip-buttons">
            <button @click="setTipAmount(0.50)">0.50</button>
            <button @click="setTipAmount(1.00)">1.00</button>
            <button @click="setTipAmount(2.00)">2.00</button>
        </div>
        <div class="bottom">
            <button-vue msg="Ajouter le pourboire" :showImage="false" link="/tips" />
        </div>

    </form>
</template>
  
<script>
import ButtonVue from '../components/buttonVue.vue';
import HeaderVue from '../components/headerVue.vue';

export default {
    name: "tips",
    components: {
        ButtonVue,
        HeaderVue,

    },
    data() {
        return {
            tipAmount: '', // Initialisez la valeur du pourboire à vide
        };
    },
    methods: {
        setTipAmount(amount) {
            // Définir la valeur du pourboire avec le montant du bouton cliqué
            this.tipAmount = amount;
        },
    },
};

</script>


<style scoped>
@import '../assets/style/base.css';

.tip-buttons {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    margin-top: 10px;
}

.tip-buttons button {
    border-radius: 18.5px;
    border: 2px solid var(--orange);
    color: var(--orange);
    background-color: white;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    padding: 5px 20px;
}

label {
    color: var(--orange);
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
}

input {
    background-color: #f4f4f4;
    border-radius: 7px;
    border: none;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 10px;

}

input::placeholder {
    font-weight: 400;
    font-size: 17px;
    line-height: 19.55px;
    color: rgba(201, 201, 201, 1);
}

form {
    display: flex;
    flex-direction: column;
}
</style>