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

<style>
main {

    & .container {
        margin: 40px 250px;
    }

}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col {
    width: calc((100%/12) * 4);
    display: flex;
    justify-content: center;
    padding-bottom: 5rem;
}

.card {
    width: 80%;
    height: 500px;
    position: relative;
}

.card-name {
    font-size: 10px;
    position: absolute;
    top: 100%;
}

.price {
    color: red;
}

.original-price {
    text-decoration: line-through;
}

img {
    width: 100%;
    height: 100%;
    position: absolute;
}

.alternative-img {
    max-width: 100%;
    max-height: 100%;
    display: none;
}

.discount {
    color: white;
    padding: 0.25rem;
    background-color: red;
    max-width: fit-content;
    position: absolute;
    bottom: 80px;
    left: 0;
}

.store-section {
    color: white;
    padding: 0.25rem;
    background-color: green;
    max-width: fit-content;
    position: absolute;
    left: 50px;
    bottom: 80px;
}

.saved {
    background-color: white;
    width: 20px;
    position: absolute;
    right: 0;
    top: 10px;
    text-align: center;
}

.card:hover .alternative-img {
    display: inline;
}

.saved:hover {
    color: red;
}
</style>
