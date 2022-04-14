<script setup>
import { useRoute } from 'vue-router';
import CardDetails from "../components/CardDetails.vue"
import data from "../../apicarddata.js"
const route = useRoute();

const replaceWithImg = str => {
    str = str.replaceAll("{W}", "<img class='manasymbol' src='@/../../src/assets/manaW.png' />")
    str = str.replaceAll("{U}", "<img class='manasymbol' src='@/../../src/assets/manaU.png' />")
    str = str.replaceAll("{B}", "<img class='manasymbol' src='@/../../src/assets/manaB.png' />")
    str = str.replaceAll("{R}", "<img class='manasymbol' src='@/../../src/assets/manaR.png' />")
    str = str.replaceAll("{G}", "<img class='manasymbol' src='@/../../src/assets/manaG.png' />")
    str = str.replaceAll("{W/U}", "<img class='manasymbol' src='@/../../src/assets/manaWU.png' />")
    str = str.replaceAll("{W/B}", "<img class='manasymbol' src='@/../../src/assets/manaWB.png' />")
    str = str.replaceAll("{U/B}", "<img class='manasymbol' src='@/../../src/assets/manaUB.png' />")
    str = str.replaceAll("{U/R}", "<img class='manasymbol' src='@/../../src/assets/manaUR.png' />")
    str = str.replaceAll("{B/R}", "<img class='manasymbol' src='@/../../src/assets/manaBR.png' />")
    str = str.replaceAll("{B/G}", "<img class='manasymbol' src='@/../../src/assets/manaBG.png' />")
    str = str.replaceAll("{R/W}", "<img class='manasymbol' src='@/../../src/assets/manaRW.png' />")
    str = str.replaceAll("{R/G}", "<img class='manasymbol' src='@/../../src/assets/manaRG.png' />")
    str = str.replaceAll("{G/W}", "<img class='manasymbol' src='@/../../src/assets/manaGW.png' />")
    str = str.replaceAll("{G/U}", "<img class='manasymbol' src='@/../../src/assets/manaGU.png' />")
    str = str.replaceAll("{C}", "<img class='manasymbol' src='@/../../src/assets/manaC.png' />")
    str = str.replaceAll("{X}", "<img class='manasymbol' src='@/../../src/assets/manaX.png' />")
    str = str.replaceAll("{Y}", "<img class='manasymbol' src='@/../../src/assets/manaY.png' />")
    str = str.replaceAll("{Z}", "<img class='manasymbol' src='@/../../src/assets/manaZ.png' />")
    str = str.replaceAll("{T}", "<img class='manasymbol' src='@/../../src/assets/tapArrow.png' />")

    for (let i = 0; i < 21; i++) {
        str = str.replaceAll("{" + i + "}", "<img class='manasymbol' src='@/../../src/assets/mana" + i + ".png' />")
    }
    return str;
}

const card = data.find(card => card.id === route.params.id);
card.manaCost = replaceWithImg(card.manaCost);
card.text = replaceWithImg(card.text);
card.edhrecFormat = card.name.replace(/[^\w\s]/gi, '') .replace(/\s/g , "-") .toLowerCase();

// const formattedData = data.map(card => {
//     return {
//         ...card,
//         manaCost: replaceWithImg(card.manaCost),
//         text: replaceWithImg(card.text),
//         edhrecFormat: edhrecNameUrl
//     }
// })



</script>

<template>
    <CardDetails :card="card"></CardDetails>
</template>

<style>
</style>