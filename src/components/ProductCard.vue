<script>



export default {
    name: 'ProductCard',
    emits: ['showModal', 'id'],
    data() {
        return {
            id: '',
        }
    },
    props: ['card'],
    methods: {
        saveProduct() {

            if (this.card.isInFavorites === false) {
                this.card.isInFavorites = true;
                // console.log(this.card.isInFavorites);
            } else {
                this.card.isInFavorites = false
                // console.log(this.card.isInFavorites);
            }
        },
        showProductModal() {

            this.id = this.card.id;
            console.log(this.id);
            this.$emit('showModal', this.id)

        },

    },

}

</script>

<template>

    <div class="col">
        <div class="card">
            <div class="card-body">
                <img :src="card.frontImage" alt="">
                <img class="alternative-img" :src="card.backImage" alt="">
                <div v-if="card.discount != null" class="discount">{{ card.discount }}%</div>
                <div v-if="card.badge != null" class="tag">{{ card.badge }}</div>

                <div @click="saveProduct()" class="saved" :class="{ red: card.isInFavorites }">&hearts;</div>
                <div class="card-name">
                    <p>{{ card.brand }}</p>
                    <h2 @click="showProductModal()">{{ card.name }}</h2>
                    <span class="original-price red">{{ card.price }}€</span>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss"></style>
