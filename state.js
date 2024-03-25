import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    message: 'hello world!',
    cards: [],
    apiUrl: 'http://localhost:3000/cards',

    getCard(url) {
        axios.get(url)
            .then(response => {
                this.cards = response.data
                // console.log(this.cards);
            })
    }

})