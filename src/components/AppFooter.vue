<script>

export default {
    name: 'AppFooter',
}

</script>

<template>
    <footer>
        <div class="container">
            <div>
                <h4>Boolando s.r.l</h4>
                <ul>
                    <li>Informazioni legali</li>
                    <li>Informativa privacy</li>
                    <li>Diritto di recesso</li>
                </ul>
            </div>
            <div>
                <h4>Trovaci anche su</h4>
                <ul>
                    <li><i class="fa-brands fa-x-twitter"></i></li>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-pinterest"></i></li>
                    <li><i class="fa-brands fa-youtube"></i></li>
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

}
</style>
