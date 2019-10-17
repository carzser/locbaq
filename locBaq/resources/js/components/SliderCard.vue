<template>
    <v-sheet
        class="mx-auto"
        max-width="70%"
        max-height="20%"
        color="rgb(0,0,0,0)"
    >
    <v-slide-group class ="center" color="rgb(0,0,0,0)" multiple show-arrows>
      <v-slide-item
        
        v-for="card in cards"
        :key="card.title"
        v-slot:default="{ active, toggle }"
        style="padding-left: 10px"
        color="rgb(0,0,0,0)"
      >
        <Card :cardInfo="card" />
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  
</template>

<script>
import Card from './Card.vue'
export default {
    name: 'Slider-Card',
    components:{
        Card
    },
    data: ()=>({
        cards: [
        { 
            title: 'Porthos', 
            src: 'https://restaurante.guide/wp-content/uploads/2019/07/Porthos-logo.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Mac-Donalds', 
            src: 'https://media.wired.com/photos/5c99118735d3fb65db9a333d/master/w_2560%2Cc_limit/McDonalds-TA-462767668.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"

        },
        {
            title: 'Big Bites', 
            src: 'https://d1jgln4w9al398.cloudfront.net/imagens/ce/logosgde/201808011600_01da0f38-6e58-481f-9c61-f6783257e4dc.png',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"

        },
        {
            title: 'Otro rest', 
            src: 'https://i.etsystatic.com/11979725/r/il/425b9a/1431687786/il_570xN.1431687786_w5a8.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"

        },
        {
            title: 'Más restaurantes', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes2', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes3', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes4', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes5', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes6', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes7', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        },
        {
            title: 'Más restaurantes8', 
            src: 'https://freelogo-assets.s3.amazonaws.com/sites/all/themes/freelogoservices/images/smalllogorestaurant1.jpg',
            flex: 6,
            text: "Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto"
        }

        ]
    
    })

}
</script>