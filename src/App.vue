<script>
import AppHeader from '/src/components/AppHeader.vue';
import AppMain from '/src/components/AppMain.vue';
import AppFooter from '/src/components/AppFooter.vue';


export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}

</script>

<template>


  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>

</template>

<style></style>
