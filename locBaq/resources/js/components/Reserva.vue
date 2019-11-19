<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline center" >Información detallada de la reserva</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
              <v-col cols="12">
                <h2>Nombre del usuario:</h2>
                <h3>{{username}}</h3>
              </v-col>
              <v-col cols="12">
                <h2>Nombre del restaurante:</h2>
                <h3>{{restName}}</h3>
              </v-col>
              <v-col cols="12">
                <h2>Direccion del pedido:</h2>
                <h3>{{address}}</h3>
              </v-col>
              <v-col cols="12">
                <h2>Lista de items:</h2>
                 <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">Nombre</th>
                        <th class="text-left">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in items" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-col>
              <v-col cols="12">
                <h2>Total del pedido:</h2>
                <h3>{{totalAmount}}</h3>  
              </v-col>
              
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="updDialog">Cerrar</v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    props: {
      dialog:{
        type: Boolean,
        default: false,
      }
    },
    data: ()=>({
      restName: '',
      username: '',
      address: '',
      totalAmount: '',
      items:[],
      
    }),
    methods:{
      updDialog(){
        this.$emit("dialogChange",false);
        this.dialog = false;
      }
    },
    created(){
      let j = {
        username: 'Fazd',
        nameRest: 'Fabios',
        address: 'Calle 61 # 31-94',
        totalAmount: '700000',
        date: '2019/10/26',
        listItems: [
          {
            name: 'Papas',
            price: 7000
          },
          {
            name: 'Hamburguesa',
            price: 2050
          },
          {
            name: '1 cosa',
            price: 12345
          },
          {
            name: 'Otra cosa',
            price: 12345678
          },
          {
            name: 'Segunda cosa',
            price: 12345
          },
          {
            name: 'BBBBB',
            price: 999999
          }]
      }
      this.restName = j.nameRest
      this.username = j.username
      this.address = j.address
      this.totalAmount = j.totalAmount
      this.items = j.listItems
    } 
}
</script>

<style>
  h2{
    color:black;
    margin-bottom: 2px;
  }
</style>