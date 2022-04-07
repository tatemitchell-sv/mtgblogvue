<script setup>
import data from "../../apicarddata.js";
import card from "../components/Card.vue";
import ModalWrapper from "../components/ModalWrapper.vue";
</script>

<template>
  <h1>List of Cards</h1>

  <form>
    <div style="background-color: gray">
      <h3>Filter by color:</h3>
      <input type="checkbox" id="chkwhite" />
      <label for="chkwhite">White</label>
      <input type="checkbox" id="chkblue" />
      <label for="chkblue">Blue</label>
      <input type="checkbox" id="chkblack" />
      <label for="chkblack">Black</label>
      <input type="checkbox" id="chkred" />
      <label for="chkred">Red</label>
      <input type="checkbox" id="chkgreen" />
      <label for="chkgreen">Green</label>
      <input type="checkbox" id="chkcolorless" />
      <label for="chkcolorless">Colorless</label>
      <input type="checkbox" id="chkstrictcolor" />
      <label for="chkstrictcolor">Strict Color Filter</label>
    </div>
    <div style="background-color: blue">
      <h3>Filter by type:</h3>
      <select name="cars" id="cars" form="carform">
        <option value="creature">Creature</option>
        <option value="enchantment">Enchantment</option>
        <option value="instant">Instant</option>
        <option value="sorcery">Sorcery</option>
        <option value="artifact">Artifact</option>
        <option value="planeswalker">Planeswalker</option>
        <option value="land">Land</option>
      </select>
    </div>
  </form>
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
