<script>

export default {
    name: 'ProductCard',
    data() {
        return {

        }

    },
    props: ['image', 'altImage', 'title', 'brand', 'discountedPrice', 'originalPrice'],
}

</script>

<template>

    <div class="col">
        <div class="card">
            <div class="card-body">
                <img :src="image" alt="">
                <img class="alternative-img" :src="altImage" alt="">
                <div class="discount">-50%</div>
                <div class="store-section">Sostenibilità</div>
                <div class="saved">&hearts;</div>
            </div>
            <div class="card-name">
                <p>{{brand}}</p>
                <h2>{{title}}</h2>
                <span class="price">{{discountedPrice}}</span> <span class="original-price">{{originalPrice}}</span>
            </div>
        </div>
    </div>


</template>

<style lang="scss"></style>
