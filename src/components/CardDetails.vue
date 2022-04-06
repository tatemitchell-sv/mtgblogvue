<script setup>
    defineProps({card: Object})
</script>

<template>
    <h2>{{card.name}}</h2>
    <hr/>
    <img :src="card.imageUrl" />

    <pre>{{JSON.stringify(card, null, 4)}}</pre>
</template>

<style scoped></style>