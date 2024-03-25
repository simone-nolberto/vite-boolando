<script>

import ProductCard from './ProductCard.vue';
import { state } from '/state.js'

export default {
    name: 'AppMain',
    data() {
        return {
            state,
        }
    },
    components: {
        ProductCard
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

                <ProductCard :saved="card.isInFavorites" :card="card" :image="card.frontImage"
                    :altImage="card.backImage" :title="card.name" :brand="card.brand"
                    :discountedPrice="card.discountedPrice" :originalPrice="card.price" :discount="card.discount"
                    :tag="card.badge" v-for="card in this.state.cards">
                </ProductCard>

            </div>

        </div>
    </main>
</template>

<style lang="scss"></style>
