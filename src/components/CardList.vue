<script setup>
import card from "../components/Card.vue";
defineProps({ data: Object })
</script>

<template>
    <ul>
        <li v-for="card in data" :key="card.id">
            <card :card="card"></card>
        </li>
    </ul>
</template>

<style scoped>
</style>