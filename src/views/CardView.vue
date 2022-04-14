<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import CardDetails from "../components/CardDetails.vue"
import API from '../utils/API';
import { replaceWithImg } from '../utils/replaceWithImg';
const route = useRoute();

let card = ref([{ name: '', id: '', edhrecFormat:'', artist: '', cmc: '', colorIdentity: [], colors: [], foreignNames: [], imageUrl: '', layout: '', legalities: [], manaCost: '', multiverseid: '', number: '', originalText: '', originalType: '', printings: [], rarity: '', rulings: [], set: '', setName: '', text: '', type: '', types: [], }])

API.findCardById(route.params.id).then(response => {
    card.value = response.data.cards[0];
    card.value.manaCost = replaceWithImg(card.value.manaCost);
    card.value.text = replaceWithImg(card.value.text);
    card.value.edhrecFormat = card.value.name.replace(/[^\w\s]/gi, '') .replace(/\s/g , "-") .toLowerCase();
})



</script>

<template>
    <CardDetails :card="card"></CardDetails>
</template>

<style>
</style>