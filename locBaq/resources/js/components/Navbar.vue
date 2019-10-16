<template>
    <v-app-bar app color = "primary" dark>
        <v-toolbar-title>Localización Barranquilla</v-toolbar-title>
        <!-- <v-btn>cambiar status</v-btn> -->
        <v-spacer></v-spacer>
        <component v-bind:is="componentStatus" v-bind:username="getUserName"></component>
        
    </v-app-bar>
</template>

<script>

import SignIn from './SignIn.vue'
import User from './User.vue'

export default {
    components : {
        SignIn, User
    },
    props:{
        
    },
    data:() =>({
        links: [
           'Home','Register','Login'
       ]
    }),
    computed: {
        componentStatus: function () {
            return this.$store.state.stateNavbar
        },
        getUserName: function (){
            return this.$store.state.username
        }
    },
    methods: {
        Change(upd){
            //console.log("llego el changState y dice:",upd)
            this.$emit('ChangeState','User')
        }
    }
}
</script>
