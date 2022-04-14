<script setup>
import API from '../utils/API';
import { ref } from 'vue';
import CardList from '../components/CardList.vue';

let searchParam = ref('');
let results = ref('');
let searchData = ref([{ name: '', id: '' }]);
const search = () => {
    API.findCardByName(searchParam.value).then(response => {
        results.value = JSON.stringify(response.data.cards, null, 4)
        searchData.value = response.data.cards;
    });
}

</script>

<template>
    <h2>Search card name:</h2>
    <button @click="search">Search</button>
    <input id="searchBar" v-model="searchParam">

    <CardList :data="searchData" />

</template>

<style>
</style>