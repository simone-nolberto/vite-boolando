<script>

import ProductCard from './ProductCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            cards: [
                {
                    "id": 1,
                    "frontImage": "/img/1.webp",
                    "backImage": "/img/1b.webp",
                    "brand": "Levi's",
                    "name": "Relaxed Fit",
                    "price": 29.99,
                    "isInFavorites": true,
                    "badges": [
                        {
                            "type": "tag",
                            "value": "Sostenibilità"
                        },
                        {
                            "type": "discount",
                            "value": "-50%"
                        }
                    ]
                },
                {
                    "id": 2,
                    "frontImage": "/img/2.webp",
                    "backImage": "/img/2b.webp",
                    "brand": "Guess",
                    "name": "Roses Tee",
                    "price": 20.99,
                    "isInFavorites": true,
                    "badges": [
                        {
                            "type": "discount",
                            "value": "-30%"
                        }
                    ]
                },
                {
                    "id": 3,
                    "frontImage": "/img/3.webp",
                    "backImage": "/img/3b.webp",
                    "brand": "Come Zucchero Filato",
                    "name": "Voglia di colori pastello",
                    "price": 129.99,
                    "isInFavorites": false,
                    "badges": [
                        {
                            "type": "discount",
                            "value": "-30%"
                        }
                    ]
                },
                {
                    "id": 4,
                    "frontImage": "/img/4.webp",
                    "backImage": "/img/4b.webp",
                    "brand": "Levi's",
                    "name": "Tee Unisex",
                    "price": 14.99,
                    "isInFavorites": false,
                    "badges": [
                        {
                            "type": "tag",
                            "value": "Sostenibilità"
                        },
                        {
                            "type": "discount",
                            "value": "-50%"
                        }
                    ]
                },
                {
                    "id": 5,
                    "frontImage": "/img/5.webp",
                    "backImage": "/img/5b.webp",
                    "brand": "Maya Deluxe",
                    "name": "Stripe Bodice",
                    "price": 99.99,
                    "isInFavorites": true,
                    "badges": [
                        {
                            "type": "tag",
                            "value": "Sostenibilità"
                        },
                        {
                            "type": "discount",
                            "value": "-50%"
                        }
                    ]
                },
                {
                    "id": 6,
                    "frontImage": "/img/6.webp",
                    "backImage": "/img/6b.webp",
                    "brand": "Esprit",
                    "name": "Maglione - Black",
                    "price": 29.99,
                    "isInFavorites": true,
                    "badges": [
                        {
                            "type": "tag",
                            "value": "Sostenibilità"
                        }
                    ]
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

                <ProductCard :image="card.frontImage" :altImage="card.backImage" :title="card.name" :brand="card.brand"
                    :discountedPrice="card.discountedPrice" :originalPrice="card.price" v-for="card in cards">
                </ProductCard>

            </div>

        </div>
    </main>
</template>

<style lang="scss"></style>
