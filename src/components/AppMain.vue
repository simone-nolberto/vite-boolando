<script>

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

    }
}

</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col" v-for="card in cards">
                    <div class="card">
                        <div class="card-body">
                            <img v-bind:src="card.firstImg" alt="">
                            <img class="alternative-img" v-bind:src="card.secondImg" alt="">
                            <div class="discount">-50%</div>
                            <div class="store-section">Sostenibilità</div>
                            <div class="saved">&hearts;</div>
                        </div>
                        <div class="card-name">
                            <p>{{ card.brand }}</p>
                            <h2>{{ card.nome }}</h2>
                            <span class="price">{{ card.discountedPrice }}</span> <span class="original-price">{{
                    card.originalPrice }}</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </main>
</template>

<style lang="scss">

</style>
