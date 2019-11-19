<template>
    <v-app-bar app color = "rgb(229,57,53)" dark>
        <v-btn text class="mr-5"><v-icon>mdi-silverware-fork-knife</v-icon></v-btn>
        <v-toolbar-title class="font-weight-black "> Localización Barranquilla</v-toolbar-title>
        <!-- <v-btn>cambiar status</v-btn> -->
        <v-spacer></v-spacer>
        <v-menu
        bottom
        left
        offset-y
        >
            <template v-slot:activator="{ on }">
            <v-btn
                icon
                v-on="on"
            >
                <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
            </template>

            <v-list>
            <v-card
                v-for="(item,i) in items"
                :key = "i"
                class="mx-auto mt-2 ml-2 mr-2 "
                width="300"
                height="50"
                
            >
                <h3 class="d-inline-block pl-5" style="align:right">{{item.name}}</h3>
                <v-btn x-small class="text-right d-inline-block mx-2" fab>
                    <v-icon >mdi-minus</v-icon>
                </v-btn>
                <h3 class="d-inline-block pt-3 text-right" >0</h3>
                <v-btn x-small class="d-inline-block text-right mx-2" fab>
                    <v-icon >mdi-plus</v-icon>
                </v-btn>
            </v-card>
            
            </v-list>
        </v-menu>
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
       ],
       items:[
           {name: 'item1'},
           {name: 'item2'},
           {name: 'item3'},
           {name: 'item4'},
           {name: 'item5'},
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
