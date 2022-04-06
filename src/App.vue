<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"

</script>

<template>
  <header>
    <Nav/>
  </header>

  <div class="bgshader"></div>

  <main>
    <RouterView />
  </main>

</template>

<style>
@import "@/assets/base.css";

body {
  background-image: url("https://miro.medium.com/max/1400/1*_HhnCWCrqDSt__s5wFrKqQ.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: white;
  margin-top: 75px;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}

a {
  color: white;
}

a:visited{
  color: white;
}

.bgshader {
  position : fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background-color: rgba(0,0,0,0.85);
}

</style>
