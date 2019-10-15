<template>
  <v-app id="inspire">
    <Navbar v-bind:componentStatus="statusBar" />
    <v-content>
      <router-view 
        v-on:ChangeState=ChangeNavBarToSignIn($upd) 
      />
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
      ChangeNavBarToSignIn(upd){
        console.log("entro auqi");
        this.statusBar = 'User'
      }
    },
    created () {
      this.$vuetify.theme.dark = false
    },
  }
</script>