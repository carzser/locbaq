<template>
    <v-container class="mx-auto" style="margin-top:100px">
    <h2 class="mb-5" style="text-align:center">Todos los restaurantes</h2>
    <v-row dense>
        <v-col
          v-for="card in tcards"
          :key="card.title"
          :cols="card.flex"
          class="mb-3"
        >
        <Card :cardInfo = "card" />
        </v-col>
    </v-row>
    <v-pagination
      v-model="page"
      :length="Math.ceil(cards.length/12)"
    ></v-pagination>
    </v-container>
</template>

<script>
import Card from './Card.vue'
export default {
    components:{
      Card
    },
    data: () => ({
      cards: [
        { 
            title: 'Porthos', 
            src: 'https://restaurante.guide/wp-content/uploads/2019/07/Porthos-logo.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Mac-Donalds', 
            src: 'https://media.wired.com/photos/5c99118735d3fb65db9a333d/master/w_2560%2Cc_limit/McDonalds-TA-462767668.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"

        },
        {
            title: 'Big Bites', 
            src: 'https://d1jgln4w9al398.cloudfront.net/imagens/ce/logosgde/201808011600_01da0f38-6e58-481f-9c61-f6783257e4dc.png',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"

        },
        {
            title: 'Otro rest', 
            src: 'https://i.etsystatic.com/11979725/r/il/425b9a/1431687786/il_570xN.1431687786_w5a8.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"

        },
        {
            title: 'Más restaurantes', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes2', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes3', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes4', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes5', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes6', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes7', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes8', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes9', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes10', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes11', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes12', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes13', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes14', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes15', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes16', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes17', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes18', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes19', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes20', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes21', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes22', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes23', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes24', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes25', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes26', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes27', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes28', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes29', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes30', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes31', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 3,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        }
      ],
      page: 1,
    }),
    computed:{
        tcards : function (){
            var v = this.cards.slice(12*(this.page-1),12*(this.page-1)+12)
            console.log(v)
            return v
        }
    }
}
</script>

<style>

</style>