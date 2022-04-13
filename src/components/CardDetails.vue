<script setup>
defineProps({ card: Object })
</script>

<template>
    <h2>{{ card.name }}</h2>
    <hr />

    <div class="row">
        <div class="cardFrame"><img :src="card.imageUrl" /></div>
        <div class="cardText">
            <p>{{ card.name }}</p>
            <p>{{ card.manaCost }}</p>
            <p>{{ card.type }}</p>
            <p>{{ card.text }}</p>
        </div>
    </div>
    <hr />
    <h3>Card Rulings</h3>
    <ul>
        <li v-for="ruling in card.rulings" :key="ruling">
            {{ ruling.date }} - {{ ruling.text }}
        </li>
    </ul>
    <hr>

    <h3>Card Legalities</h3>
    <ul>
        <li v-for="legality in card.legalities" :key="legality">
            {{ legality.format }} - {{ legality.legality }}
        </li>
    </ul>
    <hr>

    <!-- <pre>{{JSON.stringify(card, null, 4)}}</pre> -->

    <!-- 
        Card details/properties to display:
        -imageUrl as <img>
        -name
        -manaCost
        -type
        -text
        -rulings
        -legalities
     -->

    <footer></footer>
</template>

<style scoped>
footer {
    height: 50px;
}

.row {
    display:flex;
    padding: 20px 0px;
}

img {
    width: 100%;
    height: auto;
    border-radius: 4%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.cardFrame {
    width: 35%;
}
.cardText {
    width: calc(55% - 30px);
    padding: 0px 30px;
}
p {
    padding-left: 20px;
    padding-top: 20px;
}

ul {
    padding-bottom: 20px;
}
li {
    padding: 10px 10px;
}

h3 {
    padding: 20px 10px;
}
</style>