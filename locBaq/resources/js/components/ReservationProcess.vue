<template>
   <v-container fluid  class="mt-12 mb-12 fill-height">
    <v-stepper v-model="e1" class="mt-12 mx-auto">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Name of step 3</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items >
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="300px"
            width="700px"
          >
          <v-card-title class="text-center"><h3 class="text-center">Lista de productos</h3></v-card-title>
          <v-card class="ml-3" width="80%">
            <div class="d-inline-block mt-5">
              <div class="d-inline-block">
                <h3 class="pl-5 pt-5 d-block">fabio</h3>
                <h3 class="pl-5 pt-5 d-block">Total: 40000</h3>
              </div>
                <div class="d-inline-block" style="margin-left:250px;  margin-top:10px" >

                <v-btn 
                  x-small 
                  class="mx-2 d-inline-block" 
                  fab
                  color="rgb(229,57,53)"
                  dark
                  >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <h3 class="d-inline-block">{{10}}</h3>
                <v-btn 
                  x-small 
                  class="mx-2 d-inline-block" 
                  color="rgb(229,57,53)" 
                  dark 
                  fab
                  >
                  <v-icon >mdi-plus</v-icon>
                </v-btn>
                </div>
            </div>
          </v-card>
          </v-card>
          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="300px"
            width="700px"
          ></v-card>

          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="300px"
            width="700px"
          ></v-card>

          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Continue
          </v-btn>

          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import Product from './Product.vue'
export default {
    components:{
        Product
    },
    data: ()=>({
      e1: 0,
      nombre: 'fazd'
    })
}
</script>

<style>

</style>