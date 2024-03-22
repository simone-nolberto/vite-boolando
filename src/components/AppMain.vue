<script>

import ProductCard from './ProductCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            cards: [
                {
                    firstImg: '/img/1.webp',
                    secondImg: '/img/1b.webp',
                    brand: "Levi's",
                    nome: 'Relaxed fit tee unisex',
                    discountedPrice: '14,99€',
                    originalPrice: '29,99€',
                },
                {
                    firstImg: '/img/2.webp',
                    secondImg: '/img/2b.webp',
                    brand: "Guess",
                    nome: 'Roses tee',
                    discountedPrice: '20,99€',
                    originalPrice: '29,99€',
                },
                {
                    firstImg: '/img/3.webp',
                    secondImg: '/img/3b.webp',
                    brand: "Come zucchero filato",
                    nome: 'Voglia di colori pastello',
                    discountedPrice: '129,99€',
                    originalPrice: '184,99€',
                },
                {
                    firstImg: '/img/4.webp',
                    secondImg: '/img/4b.webp',
                    brand: "Levi's",
                    nome: 'Relaxed fit tee unisex',
                    discountedPrice: '14,99€',
                    originalPrice: '29,99€',
                },
                {
                    firstImg: '/img/5.webp',
                    secondImg: '/img/5b.webp',
                    brand: "Maya Deluxe",
                    nome: 'Strip Bodice',
                    discountedPrice: '',
                    originalPrice: '99,99€',
                },
                {
                    firstImg: '/img/6.webp',
                    secondImg: '/img/6b.webp',
                    brand: "Esprit",
                    nome: 'Maglione - Black',
                    discountedPrice: '',
                    originalPrice: '29,99€',
                }
            ]
        }

    },
    components: {
        ProductCard
    }
}

</script>

<template>
    <main>
        <div class="container">
            <div class="row">

                <ProductCard :image="card.firstImg" :altImage="card.secondImg" :title="card.nome" :brand="card.brand"
                    :discountedPrice="card.discountedPrice" :originalPrice="card.originalPrice" v-for="card in cards">
                </ProductCard>

            </div>

        </div>
    </main>
</template>

<style lang="scss"></style>
