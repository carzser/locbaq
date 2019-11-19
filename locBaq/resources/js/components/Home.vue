<template>
  <v-app fluid fill-height class="grey lighten-3">
    <v-row justify="start">
      <v-col> 
        <div class="imgBack">
          <div class="textup">
            <h2 style="color:white">Restaurantes en</h2>
            <h2 style="color:white">Barranquilla, Colombia</h2>
            <h4>Directorio y Guía a la mejor comida</h4>
              
          </div>
          <v-text-field 
            append-icon ="search"
            filled
            background-color="rgb(0, 0, 0, 0.5)"
            style="width:44%"
            color="white"
            dark
            class="inpt white--text"
          ></v-text-field>
          <v-btn
            class="d-block mb-3 font-weight-bold"
            color="rgb(229,57,53)"
            dark
            
          >
          <v-icon left dark>mdi-map-marker</v-icon>
          Mostrar Restaurantes cerca de ti</v-btn>
          <v-btn
            color="rgb(229,57,53)"
            dark 
            class="d-block font-weight-bold"
          >Mirar el catalogo</v-btn>
          
        </div>
      </v-col>
    </v-row>
    <v-row >  
      <v-col class="mt-5 mb-8" >
        
          <h3 class="font-weight-black">Restaurantes favoritos</h3>
          <SliderCard/>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="sliders mt-8">
          <h3>Restaurantes más visitados</h3>
          <SliderCard/>
        </div>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Card from './Card.vue'
import SliderCard from './SliderCard'

export default {
    components:{
        Card,SliderCard
    },
    data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
      }   
    }
}
</script>

<style scoped>
  .imgBack{
    height:700px;
    width:100%;
    background: url('https://live.staticflickr.com/1787/29206803358_8e8a13ea5f_b.jpg');
    background-size:100%;
    padding-left: 3%;
    
  }
  .textup{
    padding-top: 10%;
    font-size: 35px;
    color: white;
    background-color: rgba(0, 0, 0, 0.4)
  }
  h3 {
    font-family: sans-serif;
  }

  .textup h4 {
    font-size: 20px;
    margin-bottom: 3px;
    
  } 
  .inpt{
    font-size:35px;
    
  }

</style>