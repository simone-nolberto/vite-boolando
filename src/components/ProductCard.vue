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
            
                    <div :class="{ discount: badge.type === discount }">discount</div>
                    <div :class="{ tag : badge.type === tag}">tag</div>
                

                <div class="saved">&hearts;</div>
            </div>
            <div class="card-name">
                <p>{{ brand }}</p>
                <h2>{{ title }}</h2>
                <span class="original-price">{{ originalPrice }}</span>
            </div>
        </div>
    </div>


</template>

<style lang="scss"></style>
