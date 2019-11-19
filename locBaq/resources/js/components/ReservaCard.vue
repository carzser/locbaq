<template>
    <v-content class>
        <v-card :width="width">
            <v-list-item three-line>
            <v-list-item-content>
                <div class="overline mb-4">reserva</div>
                <v-list-item-title class="headline mb-1">Restaurante: {{restaurante}}</v-list-item-title>
                <v-list-item-subtitle>Direccion de entrega:{{direccion}} </v-list-item-subtitle>
                <v-list-item-subtitle>Total:{{total}} </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                size="80"
                color="grey"
                class="mt-12 mr-5"
            ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
            <v-btn color="primary" @click.stop="dialog = true">Ver productos</v-btn>
            <Reserva :dialog = "Activate" v-on:dialogChange="changeDialog" />
            </v-card-actions>
        </v-card>
    </v-content>
</template>

<script>
import Reserva from './Reserva'
export default {
    components:{
        Reserva,
    },
    props:{
        width:{
            type: String,
            default: "50%"
        }
    },
    computed: {
        Activate: function(){
            return this.dialog;
        } 
    },
    data:()=>({
        restaurante: 'Fabios',
        total:'2000000',
        direccion:'dir  ',
        dialog:false,
    }),
    methods:{
        changeDialog(){
            this.dialog = false;
        }
    }
}
</script>

<style>

</style>