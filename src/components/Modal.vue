<script setup>
import { RouterLink } from "vue-router";
defineProps({img:String, id:String});
const emit = defineEmits()
const close = () => {
    emit('close');
    console.log('close emitted')
}
</script>

<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <button type="button" class="btn-close" @click="close">x</button>
            </header>
            <section class="modal-body">
                <img :src="$props.img">
            </section>
            <footer class="modal-footer">
                <RouterLink :to="`/card/${$props.id}`">Card Details</RouterLink>
            </footer>
        </div>
    </div>
</template>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 30;
}

.modal {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    z-index: 40;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4aae9b;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
}
</style>