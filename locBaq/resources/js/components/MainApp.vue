<template>
  <v-app id="inspire">
    <Navbar/>
    <v-content>
        <router-view />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Footer from './Footer.vue'
  export default {
    name: 'main-app',
    components:{
      Navbar, Footer
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      statusBar: 'SignIn'
    }),
    methods:{
    },
    created () {
      this.$vuetify.theme.dark = false
    },
  }
</script>