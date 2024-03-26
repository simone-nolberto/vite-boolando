<script>

export default {
    name: 'CardModal',
    data() {
        return {

        }
    },
    props: ['card', 'visible'],
    methods: {
        closeModal() {

            console.log('Ce la faremo!!');
        }
    }

}
</script>

<template>

    <div v-show="visible !== false" class="modalContainer">
        <div class="data">
            <p>{{ card.brand }}</p>
            <h3>{{ card.name }}</h3>
            <p>{{ card.price }}</p>
        </div>
        <button @click="closeModal()"><i class="fa-solid fa-circle-xmark"></i></button>

    </div>

</template>

<style lang="scss"></style>
