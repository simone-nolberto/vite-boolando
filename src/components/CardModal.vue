<script>

export default {
    name: 'CardModal',
    data(){
        return{
            visible: false,
        }
    }

}
</script>

<template>

    <div v-show="visible !== false" class="modalContainer">
        <div class="data">
            <p>{{ this.card.brand }}</p>
            <h3>{{ this.card.name }}</h3>
            <p>{{ this.card.price }}</p>
        </div>
        <button><i class="fa-solid fa-circle-xmark"></i></button>

    </div>

</template>

<style lang="scss"></style>
