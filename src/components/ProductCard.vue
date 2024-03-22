<script>

export default {
    name: 'ProductCard',
    data() {
        return {

        }

    },
    props: ['card', 'image', 'altImage', 'title', 'brand', 'originalPrice', 'discount', 'tag', 'saved'],
    methods: {
        saveProduct() {

            if (this.card.isInFavorites === false) {
                this.card.isInFavorites = true;
                // console.log(this.card.isInFavorites);
            } else {
                this.card.isInFavorites = false
                // console.log(this.card.isInFavorites);
            }
        }
    }

}

</script>

<template>

    <div class="col">
        <div class="card">
            <div class="card-body">
                <img :src="image" alt="">
                <img class="alternative-img" :src="altImage" alt="">
                <div class="discount">{{ discount }}</div>
                <div class="tag">{{ tag }}</div>

                <div @click="saveProduct()" class="saved" :class="{ red: saved }">&hearts;</div>
                <div class="card-name">
                    <p>{{ brand }}</p>
                    <h2>{{ title }}</h2>
                    <span class="original-price red">{{ originalPrice }}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss"></style>
