<template>
   <v-container fluid  class="mt-12 mb-12 fill-height">
    <v-stepper v-model="e1" class="mt-12 mx-auto">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Confirmación de pedidos</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Pago del pedido</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Factura del pago</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items >
        <v-stepper-content step="1">
          <v-card
            class="fill-height  mb-12 pb-3"
            color="grey lighten-1"
            
            width="700px"
          >
          <v-card-title class="text-center"><h3 class="text-center">Lista de productos</h3></v-card-title>
          <v-card 
            class="ml-3 my-3" 
            width="80%"
            v-for="(item,i) in getItems"
            :key="i"
            >
            <div class="d-inline-block mt-3 mb-3">
              <div class="d-inline-block">
                <h3 class="pl-5 pt-5 d-block">Nombre: {{item.name}}</h3>
                <h3 class="pl-5 pt-5 d-block">Total: {{getTotal(item.price,item.quantity)}}</h3>
              </div>
                <div class="d-inline-block pb-8" style="margin-left:280px;  margin-top:10px" >

                <v-btn 
                  x-small 
                  class="mx-2 d-inline-block" 
                  fab
                  color="rgb(229,57,53)"
                  @click="subProduct(item.name)"
                  dark
                  >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <h3 class="d-inline-block">{{item.quantity}}</h3>
                <v-btn 
                  x-small 
                  class="mx-2 d-inline-block" 
                  color="rgb(229,57,53)" 
                  @click="addProduct(item.name)"
                  dark 
                  fab
                  >
                  <v-icon >mdi-plus</v-icon>
                </v-btn>
                </div>
            </div>
          </v-card>
          <v-card 
            class="ml-3 my-3" 
            width="80%"
            >
            <h3>TOTAL DEL PEDIDO : {{totalPedido()}}</h3>
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
            class="fill-height mb-12"
            
            width="700px"
          >
            <v-card-title class="text-center"><h3 class="text-center">Confirmación del pedido</h3></v-card-title>
            <v-card
              width="80%"
              class="fill-height mx-5 mb-5"
            >
              <h2 class="ml-2">Productos</h2>
              <div 
                class="dat" 
                v-for="(item,i) in getItems"
                :key="i"
              >
                <h3 class="ml-5 d-inline-block">{{item.name}}</h3>
                <v-spacer class="d-inline-block"></v-spacer>
                <h3 style="float: right" class="d-inline-block mr-5">{{getTotal(item.price,item.quantity)}}</h3>
              </div>
              <div class="final">
                <h2 class=" mt-4 d-inline-block ml-2">Total: </h2>
                <h3 style="float:right" class="mt-5 mr-5 d-inline-block">{{totalPedido()}}</h3>
              </div>

            </v-card>
          
          
          
          </v-card>

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
    }),
    computed:{
      getItems(){
        return this.$store.state.shoppingCart;
      }
    },
    methods:{
      getTotal(price,quantity){
        return price*quantity;
      },
      addProduct(name) {
        this.$store.commit("addQuantityItem", name);
      },
      subProduct(name) {
        this.$store.commit("subQuantityItem", name);
      },
      totalPedido(){
        var data = this.$store.state.shoppingCart;
        var total = 0, ob;
        for (ob  of  data){
          total+=(ob.price*ob.quantity)
        } 
        return total;
      }
    }
}
</script>

<style>

</style>