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
header {
    color: white;
    background-color: orange;
    width: 100%;

    & .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 250px;
    }

    & ul {
        list-style: none;
        display: flex;
        gap: 1rem;

        & a {
            color: white;
            text-decoration: none;
        }
    }
}
</style>
