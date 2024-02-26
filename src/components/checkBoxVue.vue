<template>
    <div>
        <img src="../assets/user.svg" alt="user">
        <span>{{ name }}</span>
        <input type="checkbox" id="checkbox" v-model="checked" />
    </div>
</template>


<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    }
});
</script>
  