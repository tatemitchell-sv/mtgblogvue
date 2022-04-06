<script setup>

import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Modal from "./Modal.vue"
defineProps({img:String, id:String});

let isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
  console.log('show modal fires ', isModalVisible.value);
}

const closeModal = () => {
  isModalVisible.value = false;
  console.log('close modal fires ', isModalVisible.value);

}

</script>

<template>

    <a @click="showModal"><slot></slot></a>

    <Modal v-show="isModalVisible" :img="$props.img" :id="$props.id" @close="closeModal" />

</template>

<style>
</style>