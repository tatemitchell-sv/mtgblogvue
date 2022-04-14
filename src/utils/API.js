import axios from "axios";

export default {
    findCardByName: name => {
        console.log(`https://api.magicthegathering.io/v1/cards?name=${name}`);
        return axios.get(`https://api.magicthegathering.io/v1/cards?name=${name}`);
    },

    findCardById: id => {
        console.log(`https://api.magicthegathering.io/v1/cards?id=${id}`);
        return axios.get(`https://api.magicthegathering.io/v1/cards?id=${id}`);
    }
}