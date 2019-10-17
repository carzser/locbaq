<template>
    <v-app id ="app" >
        <Navbar/>
        <v-content>
            <router-view />
        </v-content>
        <Footer/>
    </v-app>
    
</template>

<script>
  import Navbar from '@/js/components/Navbar.vue'
  import Footer from '@/js/components/Footer.vue'
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