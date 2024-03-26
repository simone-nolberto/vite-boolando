<script>



export default {
    name: 'ProductCard',
    emits: ['showModal',],
    data() {
        return {
            visible: false,
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
        },
        showProductModal() {
            // console.log('AO', this.card.id);
            this.visible = true,
                this.$emit('showModal')
        },
        closeModal() {
            this.visible = false;
        }
    },
    



}

</script>

<template>

    <div class="col">
        <div class="card">
            <div class="card-body">
                <img :src="image" alt="">
                <img class="alternative-img" :src="altImage" alt="">
                <div v-if="discount != null" class="discount">{{ discount }}%</div>
                <div v-if="tag != null" class="tag">{{ tag }}</div>

                <div @click="saveProduct()" class="saved" :class="{ red: saved }">&hearts;</div>
                <div class="card-name">
                    <p>{{ brand }}</p>
                    <h2 @click="showProductModal">{{ title }}</h2>
                    <span class="original-price red">{{ originalPrice }}€</span>
                </div>
            </div>
        </div>
    </div>

    <!-- <div v-show="visible !== false" class="modalContainer">
        <div class="data">
            <p>{{ this.card.brand }}</p>
            <h3>{{ this.card.name }}</h3>
            <p>{{ this.card.price }}</p>
        </div>
        <button @click="closeModal"><i class="fa-solid fa-circle-xmark"></i></button>

    </div> -->

</template>

<style lang="scss"></style>
