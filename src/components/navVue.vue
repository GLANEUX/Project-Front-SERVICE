<template>
    <div class="nav-bar">
        <nav>
            <RouterLink to="/salle" class="link" :class="{ 'active-link': isActive('/salle') }">salle</RouterLink>
            <RouterLink to="/cuisine" class="link" :class="{ 'active-link': isActive('/cuisine') }">cuisine</RouterLink>
            <RouterLink to="/service" class="link" :class="{ 'active-link': isActive('/service') }">service</RouterLink>
        </nav>
    </div>
</template>
  
<script>
import { useRouter } from 'vue-router';

export default {
    methods: {
        isActive(route) {
            return this.$route.path === route;
        }
    }
};
</script>
  
<style scoped>
@import '../assets/style/base.css';

.link {
    font-size: 17px;
    font-weight: 700;
    line-height: 19.55px;
    color: #00000066;
    text-decoration: none;
    padding: 5px 15px;
}

.active-link {
    color: var(--black);
    background-color: #e9e9e9;
    border-radius: 8px;
}

.nav-bar {
    width: 94vw;
    justify-content: center;
    display: flex;
    padding: 10px;
}

nav {
    width: 60%;
    display: flex;
    justify-content: space-around;
}
</style>
  