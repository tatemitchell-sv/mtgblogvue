<script setup>
import ModalWrapper from "./ModalWrapper.vue"
defineProps({ card: Object })
</script>

<template>
    <ModalWrapper :img="card.imageUrl" :id="card.id">
        {{ card.name }}
    </ModalWrapper>
    <hr />
</template>

<style scoped>
</style>