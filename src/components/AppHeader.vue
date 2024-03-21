<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            genderSection: ['Donne', 'Uomini', 'Bambini'],
            menuSection: ['fa-regular fa-user', 'fa-regular fa-hear', 'fa-solid fa-cart-sg'],
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="gender">
                <ul>
                    <li v-for="section in genderSection"><a href="#">{{ section }}</a></li>
                </ul>
            </div>

            <div class="menu">
                <ul>
                    <li v-for="section in menuSection"><a href="#"><i v-bind:class="section"></i></a></li>
                </ul>
            </div>
        </div>

    </header>


</template>

<style lang="scss">

</style>
