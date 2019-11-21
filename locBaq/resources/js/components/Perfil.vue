<template>
  <v-content class="mt-auto">
    <v-card width="50%" class="mx-auto ml-10 mt-5 mb-5 px-5">
      <v-card-title class="mx-auto">
        <h2>Mi perfil</h2>
      </v-card-title>
      <v-row class="mx-auto">
        <v-col cols="12" sm="6">
          <v-text-field label="Nombre" v-model.trim:value="nameInpt" :readonly="readonly"></v-text-field>

          <v-text-field label="Apellido" v-model.trim:value="lastNameInpt" :readonly="readonly"></v-text-field>

          <v-text-field label="Correo" :value="emailInpt" readonly></v-text-field>

          <v-text-field label="Celular" v-model.trim:value="cellphoneInpt" :readonly="readonly"></v-text-field>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn class="font-weight-bold" color="primary" @click="edit" @click.stop="activateDialog">
          {{btnEdit}}
          <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="headline">Está seguro de estos cambios</v-card-title>

              <v-card-text>Seguro que está seguro?</v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false; op = false"
                  @click.stop="updateData"
                >NO</v-btn>

                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false; op = true"
                  @click.stop="updateData"
                >YES</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="font-weight-bold" color="primary">Cambiar contraseña</v-btn>
      </v-card-actions>
    </v-card>
    <div class="restFav mx-10">
      <h3 class="font-weight-black mb-5">Tus restaurantes favoritos</h3>
      <SliderCard />
    </div>
    <div class="restFav mx-10">
      <h3 class="font-weight-black mb-5">Tus restaurantes</h3>
      <SliderCard />
    </div>

    <div class="pedidos ml-10 mt-10">
      <h3 class="font-weight-black">Tus pedidos</h3>
      <ReservaCard style="padding:10px" />
      <ReservaCard style="padding:10px" />
      <ReservaCard style="padding:10px" />
    </div>

    <div class="histCompras mx-10 mb-10 mt-10">
      <h3 class="font-weight-black mb-5">Historial de compras</h3>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Pedido Nro</th>
              <th class="text-left">Restaurante</th>
              <th class="text-left">Fecha</th>
              <th class="text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d,i) in data" :key="d.name">
              <td>{{ i }}</td>
              <td>{{ d.nameRest }}</td>
              <td>{{ d.date }}</td>
              <td>{{ d.totalAmount }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-content>
</template>

<script>
import SliderCard from "./SliderCard";
import ReservaCard from "./ReservaCard";
export default {
  components: {
    SliderCard,
    ReservaCard
  },
  props: {
    /*User: { 
            type: Object,
            default:()=>({
                name: 'Fabio',
                lastName: 'Zapata',
                email: 'Fabioz@uninorte.edu.co',
                cellphone: '3043479853' 
            })
        }*/
  },
  computed: {},
  data: () => ({
    nameInpt: "",
    lastNameInpt: "",
    emailInpt: "",
    cellphoneInpt: "",
    btnEdit: "Editar perfil",
    readonly: true,
    dialog: false,
    op: true,
    aux: Object,
    data: [
      {
        username: "Fazd",
        nameRest: "Rest1",
        address: "Calle 61 # 31-94",
        totalAmount: "700000",
        date: "2019/10/26"
      },
      {
        username: "Fazd",
        nameRest: "Rest2",
        address: "Calle 61 # 31-94",
        totalAmount: "700000",
        date: "2019/10/26"
      },
      {
        username: "Fazd",
        nameRest: "Rest3",
        address: "Calle 61 # 31-94",
        totalAmount: "700000",
        date: "2019/10/26"
      },
      {
        username: "Fazd",
        nameRest: "Rest4",
        address: "Calle 61 # 31-94",
        totalAmount: "700000",
        date: "2019/10/26"
      }
    ]
  }),
  methods: {
    edit() {
      if (this.btnEdit == "Guardar Cambios") {
        this.btnEdit = "Editar Perfil";
        this.readonly = true;
        //console.log(this.aux);
      } else {
        this.btnEdit = "Guardar Cambios";
        this.readonly = false;
        this.aux = {
          name: this.nameInpt,
          lastName: this.lastNameInpt,
          email: this.emailInpt,
          cellphone: this.cellphoneInpt
        };
        //console.log(this.User);
      }
    },
    activateDialog() {
      if (this.btnEdit != "Guardar Cambios") {
        this.dialog = true;
      }
    },
    updateData() {
      console.log("this.op:", this.op);
      if (!this.op) {
        this.axios.post('/api/updateUser',newUser).then((response)=>{
          console.log(response.data);
        }).catch(error =>{

        })
        this.nameInpt = this.aux.name;
        this.lastNameInpt = this.aux.lastName;
        this.cellphoneInpt = this.aux.cellphone;
        this.op = true;
      }
    }
  },
  created() {
    this.axios.post('/api/getUser',this.$store.state.token).then((response) =>{
      console.log(response.data);
      this.nameInpt = response.data.FirstName;
      this.lastNameInpt = response.data.LastName;
      this.emailInpt = response.data.Email;
      this.cellphoneInpt = response.data.Cellphone;
    })
      .catch(error => {
      console.log("Llegó esto a cliente");
      console.log(error.response);
      
    });
  }
};
</script>

<style>
</style>