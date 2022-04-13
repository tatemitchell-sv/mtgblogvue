<script setup>
defineProps({ card: Object })
</script>

<template>
    <h2>{{ card.name }}</h2>
    <hr />

    <div class="row">
        <div><img :src="card.imageUrl" /></div>
        <div>
            <p>{{ card.name }}</p>
            <hr>
            <p>{{ card.manaCost }}</p>
            <hr>
            <p>{{ card.type }}</p>
            <hr>
            <p>{{ card.text }}</p>
            <hr>
        </div>
    </div>

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
</style>