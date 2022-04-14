<script setup>
import { ref } from 'vue';
let isOpen = ref(false);
const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
    console.log(isOpen);
}
</script>

<template>

<button @click="toggleAccordion()">

</button>
<div class="accordion" v-show="isOpen">
    <slot />
</div>

</template>

<style>
</style>