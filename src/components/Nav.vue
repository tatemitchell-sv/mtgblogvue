<script setup>
import { RouterLink } from "vue-router"

</script>

<template>
    <nav>
        <ul>
            <li class="brand">
                MTGBlog
            </li>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
            <li>
                <RouterLink to="/cardlist">Card List</RouterLink>
            </li>
            <li>
                <RouterLink to="/cardsearch">Search Cards</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background-image: repeating-linear-gradient(rgba(0, 0, 0, 1) 10%, rgba(21, 26, 29, 1) 20%, rgba(21, 26, 29, 1) 80%, rgba(0, 0, 0, 1) 90%);
    z-index: 10;
}

nav ul {
    list-style: none;
}

nav ul li {
    display: inline-block;
    padding: 10px 20px;
}

nav a,
nav .brand {
    text-decoration: none;
    font-size: 25px;
}
</style>