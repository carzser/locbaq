<template>
  <v-app-bar app color="rgb(229,57,53)" dark>
    <v-btn text class="mr-5" to="home">
      <v-icon>mdi-silverware-fork-knife</v-icon>
    </v-btn>
    <v-toolbar-title class="font-weight-black">Localización Barranquilla</v-toolbar-title>
    <!-- <v-btn>cambiar status</v-btn> -->
    <v-spacer></v-spacer>
    <v-menu max-height="400" scroll-y bottom left offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class = "mr-5">
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
      </template>

      <v-list>
        <h3 style="text-align:center; color: rgb(229,57,53)">Lista de compra</h3>
        <v-card
          v-for="(item,i) in getItems"
          :key="i"
          class="mx-auto mt-2 ml-3 mr-6"
          width="300"
          height="70"
          
        >
          <div class="d-inline-block">
            <h3 class="pl-5 pt-5 d-inline-block">{{item.name}}</h3>

            <v-card-actions class="justify-end d-inline-block" style="margin-left:120px">
              <v-btn 
                x-small 
                class="mx-2 d-inline-block" 
                @click="subProduct(item.name)" 
                fab
                color="rgb(229,57,53)"
                dark
                >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <h3 class="d-inline-block">{{item.quantity}}</h3>
              <v-btn 
                x-small 
                class="mx-2 d-inline-block" 
                color="rgb(229,57,53)" 
                dark 
                fab
                @click="addProduct(item.name)"
                >
                <v-icon >mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>

        <v-btn small class="mt-3 ml-3 mr-2" @click.stop="activateDialog" color="rgb(229,57,53)" dark rounded>Limpiar productos</v-btn>
        <v-dialog v-model="dialog" max-width="290">
            <v-card>
              <v-card-title class="headline text-center">Limpiar carrito</v-card-title>

              <v-card-text>Si limpia el carrito de compras se eliminarán todos los productos
                  almacenados
              </v-card-text>

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
        <v-btn 
            small class="mt-3 mr-3" 
            @click="nextShop" 
            color="rgb(229,57,53)" 
            dark 
            rounded
            to="reservation_process"
        >Continuar</v-btn>
      </v-list>
    </v-menu>
    <component class="mx-5" v-bind:is="componentStatus" v-bind:username="getUserName"></component>
  </v-app-bar>
</template>

<script>
import SignIn from "./SignIn.vue";
import User from "./User.vue";

export default {
  components: {
    SignIn,
    User
  },
  props: {},
  data: () => ({
    links: ["Home", "Register", "Login"],
    items: [
      { name: "item1" },
      { name: "item2" },
      { name: "item3" },
      { name: "item4" },
      { name: "item5" }
    ],
    op:false,
    dialog:false,
  }),
  computed: {
    componentStatus: function() {
      return this.$store.state.stateNavbar;
    },
    getUserName: function() {
      return this.$store.state.username;
    },
    getItems: function() {
      return this.$store.state.shoppingCart;
    }
  },
  methods: {
    Change(upd) {
      //console.log("llego el changState y dice:",upd)
      this.$emit("ChangeState", "User");
    },
    addProduct(name) {
      this.$store.commit("addQuantityItem", name);
    },
    subProduct(name) {
      this.$store.commit("subQuantityItem", name);
    },
    cleanAll() {
      this.$store.commit("cleanShoppingCart");
    },
    nextShop() {},
    activateDialog(){
        this.dialog = true;
    },
    updateData(){
        if(this.op){
            this.cleanAll();
        }
        this.dialog=false;
    }
  }
};
</script>