<script>

export default {
    name: 'AppFooter',
    data() {
        return {
            legalSection: ['Informazioni legali', 'Informativa Privacy', 'Diritto di recesso'],
            socialSection: ['fa-brands fa-x-twitter', 'fa-brands fa-facebook', 'fa-brands fa-instagram', ' fa-brands fa-pinterest', 'fa-brands fa-youtube'],
        }
    }
}

</script>

<template>
    <footer>
        <div class="container">
            <div>
                <h4>Boolando s.r.l</h4>
                <ul>
                    <li v-for="section in legalSection"><a href="#">{{ section }}</a></li>

                </ul>
            </div>
            <div>
                <h4>Trovaci anche su</h4>
                <ul>
                    <li v-for="section in socialSection"><a href="#"><i v-bind:class="section"></i></a></li>

                </ul>
            </div>

        </div>

    </footer>
</template>

<style lang="scss">
footer {
    width: 100%;
    background-color: black;

    & .container {
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
