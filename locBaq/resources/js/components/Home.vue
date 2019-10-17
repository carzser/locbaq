<template>
  <v-app fluid fill-height>
    <v-row>
      <v-col> 
        <div class="imgBack">
          <h1>hla mundo</h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col justify="start">
        <div class="sliders mt-5">
          <h1>Restaurantes favoritos</h1>
          <SliderCard/>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="sliders mt-5">
          <h1>Restaurantes más visitados</h1>
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
    
  }

</style>