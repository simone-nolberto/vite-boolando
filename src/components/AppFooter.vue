<script>

export default {
    name: 'AppFooter',
    data() {
        return {
            legalSection: ['Informazioni legali', 'Informativa Privacy', 'Diritto di recesso'],
            socialSection: ['<i class="fa-brands fa-x-twitter"></i>', '<i class="fa-brands fa-facebook"></i>', '<i class="fa-brands fa-instagram"></i>', ' <i class="fa-brands fa-pinterest"></i>', '<i class="fa-brands fa-youtube"></i>'],
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
                    <li v-for="section in socialSection"><a href="#">{{ section }}</a></li>

                </ul>
            </div>

        </div>

    </footer>
</template>

<style>
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
        
        & a {
            color: white;
            text-decoration: none;
        }
    }

}
</style>
