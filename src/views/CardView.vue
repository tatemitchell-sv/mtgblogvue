<script setup>
    import { useRoute } from 'vue-router';
    import CardDetails from "../components/CardDetails.vue"
    import data from "../../apicarddata"
    const route = useRoute();
    const card = data.find(card=>card.id===route.params.id);
    console.log(card)
</script>

<template>
    <CardDetails :card="card"></CardDetails>
</template>

<style>
</style>