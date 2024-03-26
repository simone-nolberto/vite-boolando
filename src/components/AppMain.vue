<script>

import ProductCard from './ProductCard.vue';
import { state } from '../state';
import CardModal from './CardModal.vue';


export default {
    name: 'AppMain',
    data() {
        return {
            state,
            visible: false,
            id: '',
        }
    },
    components: {
        ProductCard,
        CardModal,

    },
    methods: {
        changeVisibleStatus(query) {
            this.id = query - 1;
            // console.log(this.id);
            // console.log('PieroGorgi');
            console.log(this.state.cards[this.id]);

            if (this.visible === false) {
                this.visible = true;
            } else{
                this.visible = false;
            }
            console.log(this.visible);
        }
    },
    mounted() {

        this.state.getCard(this.state.apiUrl)

    },

}

</script>

<template>
    <main>
        <div class="container">
            <div class="row">

                <ProductCard @showModal="changeVisibleStatus" :card="card" v-for="card in this.state.cards">
                </ProductCard>
                <CardModal :card="this.state.cards[this.id]" :show="this.visible" />

            </div>

        </div>
    </main>
</template>

<style lang="scss"></style>
