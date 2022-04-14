<script setup>
import Accordion from "./Accordion.vue"
defineProps({ card: Object })

</script>

<template>
    <div class="cardDetails">
        <h2>{{ card.name }}</h2>
        <hr />

        <div class="row">
            <div class="cardFrame"><img :src="card.imageUrl" /></div>
            <div class="cardText">
                <p>{{ card.name }}</p>
                <p v-html="'Mana Cost: ' + card.manaCost"></p>
                <p>{{ card.type }}</p>
                <p v-html="card.text"></p>
                <hr />
                <p>Build a Commander deck with this card at <a target="_blank"
                        :href="`https://edhrec.com/cards/${card.edhrecFormat}`">edhrec.com</a></p>
                <p>Combo off with this card at <a target="_blank"
                        :href="`https://commanderspellbook.com/search/?q=${card.name}`">commanderspellbook.com</a></p>
                <p>Purchase this card at <a target="_blank"
                        :href="`https://www.cardkingdom.com/catalog/search?search=header&ac=1&filter%5Bname%5D=${card.name}`">cardkingdom.com</a>
                </p>
            </div>
        </div>
        <hr />
        <h3>Card Rulings</h3>
        <Accordion>
            <ul>
                <li v-for="ruling in card.rulings" :key="ruling">
                    {{ ruling.date }} - {{ ruling.text }}
                </li>
            </ul>
        </Accordion>
        <hr>
        <h3>Card Legalities</h3>
        <Accordion>
            <ul>
                <li v-for="legality in card.legalities" :key="legality">
                    {{ legality.format }} - {{ legality.legality }}
                </li>
            </ul>
        </Accordion>
        <hr>

        <!-- <pre>{{JSON.stringify(card, null, 4)}}</pre> -->



        <footer></footer>
    </div>
</template>

<style>
.cardDetails footer {
    height: 50px;
}

.cardDetails .row {
    display: flex;
    padding: 20px 0px;
}

.cardDetails img {
    width: 100%;
    height: auto;
    border-radius: 4%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.cardDetails .cardFrame {
    width: 35%;
}

.cardDetails .cardText {
    width: calc(55% - 30px);
    padding: 0px 30px;
}

.cardDetails p {
    padding-left: 20px;
    padding-top: 20px;
}

.cardDetails .manasymbol {
    border-radius: 50%;
    width: 20px;
    height: auto;
    margin: 0 2px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.28), 0 6px 6px rgba(0, 0, 0, 0.8);
}

.cardDetails ul {
    padding-bottom: 20px;
}

.cardDetails li {
    padding: 10px 10px;
}

.cardDetails h3 {
    padding: 20px 10px;
}
</style>