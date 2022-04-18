<script setup>
import { transform } from 'esbuild';
import { ref } from 'vue';
let isOpen = ref(false);
const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
    console.log(isOpen);
}

</script>

<template>

<img class="accordionArrow" src="../assets/whitetriangle.png" />
    <button @click="toggleAccordion()">
        <img class="accordionArrow" src="../assets/whitetriangle.png" />
    </button>
    <div class="accordion" v-show="isOpen">
        <slot />
    </div>

</template>

<style>
.accordionArrow {
    width: 200px;
    height: auto;
    background: transparent;
}

button {
    background: transparent;
    border: none;
}
</style>