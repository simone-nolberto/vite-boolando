<script>

export default {
    name: 'AppHeader',
}

</script>

<template>
    <header>
        <div class="container">
            <div class="gender">
                <ul>
                    <li>Donna</li>
                    <li>Uomini</li>
                    <li>Bambini</li>
                </ul>
            </div>

            <div class="menu">
                <ul>
                    <li><i class="fa-regular fa-user"></i></li>
                    <li><i class="fa-regular fa-heart"></i></li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>
        </div>

    </header>


</template>

<style>
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
}
</style>
