<script>

export default {
    name: 'ProductCard',
    data() {
        return {

        }

    },
    props: ['card', 'badge', 'image', 'altImage', 'title', 'brand', 'originalPrice', 'discount', 'impact'],
}

</script>

<template>

    <div class="col">
        <div class="card">
            <div class="card-body">
                <img :src="image" alt="">
                <img class="alternative-img" :src="altImage" alt="">
                <div>
                    <div v-for="badge in card.badges"> AO </div>

                    <!-- :class="{ discount: badge.type === discount | tag: badge.type === tag } -->


                </div>
                
                <div class=" saved">&hearts;</div>
                <div class="card-name">
                    <p>{{ brand }}</p>
                    <h2>{{ title }}</h2>
                    <span class="original-price">{{ originalPrice }}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss"></style>
