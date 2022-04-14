<script setup>
import data from "../../apicarddata.js";
import card from "../components/Card.vue";
import ModalWrapper from "../components/ModalWrapper.vue";
</script>

<template>
  <h1>List of my Favorite Cards</h1>
  <ul>
    <li v-for="card in data" :key="card.id">
      <card :card="card"></card>
    </li>
  </ul>
</template>

<style scoped>
template {
  z-index: -1;
}

form label {
  padding-right: 15px;
}
</style>
