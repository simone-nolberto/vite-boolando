<script>

export default {
    name: 'CardModal',
    data() {
        return {
            visible: true,

        }
    },
    props: ['card', 'show'],
    methods: {
        closeModal() {
            if (this.visible === true) {

                this.visible = false
            } else {
                this.visible = true;
            }
            console.log(this.visible)
        }
    }

}
</script>

<template>

    <div v-if="visible === show" class="modal-Container">

        <div class="innerContainer">
            <div class="product-Data">
                <p>{{ card.brand }}</p>
                <h3>{{ card.name }}</h3>
                <p>{{ card.price }}€</p>
                <button @click="closeModal()"><i class="fa-solid fa-circle-xmark"></i></button>
            </div>
            
            <div class="images">
                <img :src="card.frontImage" alt="">
            </div>
        </div>

    </div>

</template>

<style lang="scss"></style>
