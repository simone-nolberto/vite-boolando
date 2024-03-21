<script>

export default {
    name: 'AppMain',
}

</script>

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <img src="/img/1.webp" alt="">
                            <img class="alternative-img" src="/img/1b.webp" alt="">
                            <div class="discount">-50%</div>
                            <div class="store-section">Sostenibilità</div>
                            <div class="saved">&hearts;</div>
                        </div>
                        <div class="card-name">
                            <p>Levi's</p>
                            <h2>Relaxed fit tee unisex</h2>
                            <span class="price">14,99€</span> <span class="original-price">29,99€</span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/img/2.webp" alt="">
                        <img class="alternative-img" src="/img/2b.webp" alt="">
                        <div class="discount">-30%</div>
                        <div class="saved">&hearts;</div>
                        <div class="card-name">
                            <p>Guess</p>
                            <h2>Roses tee</h2>
                            <span class="price">20,99€</span> <span class="original-price">29,99€</span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/img/3.webp" alt="">
                        <img class="alternative-img" src="/img/3b.webp" alt="">
                        <div class="discount">-30%</div>
                        <div class="saved">&hearts;</div>
                        <div class="card-name">
                            <p>Come zucchero filato</p>
                            <h2>Voglia di colori pastello</h2>
                            <span class="price">129,99€</span> <span class="original-price">184,99€</span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/img/4.webp" alt="">
                        <img class="alternative-img" src="/img/4b.webp" alt="">
                        <div class="discount">-50%</div>
                        <div class="store-section">Sostenibilità</div>
                        <div class="saved">&hearts;</div>
                        <div class="card-name">
                            <p>Levi's</p>
                            <h2>Relaxed fit tee unisex</h2>
                            <span class="price">14,99€</span> <span class="original-price">29,99€</span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/img/5.webp" alt="">
                        <img class="alternative-img" src="/img/5b.webp" alt="">
                        <div class="saved">&hearts;</div>
                        <div class="card-name">
                            <p>Maya Deluxe</p>
                            <h2>Stripe bodice</h2>
                            <span class="price">99,99€</span>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="/img/6.webp" alt="">
                        <img class="alternative-img" src="/img/6b.webp" alt="">
                        <div class="store-section">Sostenibilità</div>
                        <div class="saved">&hearts;</div>
                        <div class="card-name">
                            <p>Esprit</p>
                            <h2>Maglione - Black</h2>
                            <span class="price">29,99€</span>
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
