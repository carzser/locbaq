<template>
  <v-content class ="mt-auto left">
        <v-card  width = "50%" class="mx-auto mt-5 mb-5 px-5">
            
            <v-card-title>
                <h1>Mi perfil</h1>
            </v-card-title>
            <v-text-field
                label="Nombre"
                v-model.trim:value = "nameInpt"
                :readonly = "readonly"
                >
            </v-text-field>
            
            <v-text-field
                label="Apellido"
                v-model.trim:value="lastNameInpt"
                :readonly="readonly"
                >
            </v-text-field>
            
            <v-text-field
                label="Correo"
                :value ="emailInpt"
                readonly
                >
            </v-text-field>
            
            <v-text-field
                label="Celular"
                v-model.trim:value ="cellphoneInpt"
                :readonly="readonly"
                >
            </v-text-field>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn 
                    class="font-weight-bold" 
                    color="primary" 
                    @click="edit" 
                    @click.stop="activateDialog"
                    >
                {{btnEdit}}                
                
                <v-dialog
                v-model="dialog"
                max-width="290"
                >
                <v-card>
                    <v-card-title class="headline">Está seguro de estos cambios</v-card-title>

                    <v-card-text>
                        Seguro que está seguro?
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false; op = false"
                        @click.stop="updateData"
                    >
                        NO
                    </v-btn>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false; op = true"
                        @click.stop = "updateData"
                    >
                        YES
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
                                
                                
                    
                    </v-btn>  
                <v-spacer></v-spacer>
                <v-btn class="font-weight-bold" color ="primary">Cambiar contraseña</v-btn>
            </v-card-actions>
        </v-card>
        <div class="restFav mx-10">
            <h3 class ="font-weight-black mb-5">Tus restaurantes favoritos</h3>
            <SliderCard/>    
        </div>
        <div class="restFav  mx-10">
            <h3 class ="font-weight-black mb-5">Tus restaurantes</h3>
            <SliderCard/>    
        </div>


        <div class="pedidos  mx-10">
            <h3 class ="font-weight-black mb-5" >Tus pedidos</h3>

        </div>

        <div class="histCompras  mx-10">
            <h3 class ="font-weight-black mb-5">Historial de compras</h3>
        </div>
        


  </v-content>
</template>

<script>
import SliderCard from './SliderCard'
export default {
    components:{
        SliderCard,
    },
    props:{
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
    computed : {
        
    },
    data: ()=>({
        nameInpt:'',
        lastNameInpt: '',
        emailInpt: '',
        cellphoneInpt: '',
        btnEdit :'Editar perfil',
        readonly:true,
        dialog: false,
        op: true,
        //User: Object,
        aux: Object
    }),
    methods:{
        edit(){
            if(this.btnEdit=='Guardar Cambios'){
                this.btnEdit="Editar Perfil"
                this.readonly = true;
                //console.log(this.aux);
            }
            else{
                this.btnEdit="Guardar Cambios"
                this.readonly = false;
                this.aux = {
                    name: this.nameInpt,
                    lastName: this.lastNameInpt,
                    email: this.emailInpt,
                    cellphone: this.cellphoneInpt
                }
                //console.log(this.User);
            }
        },
        activateDialog(){
            if(this.btnEdit!='Guardar Cambios'){
                this.dialog = true;
            }
        },
        updateData(){
            console.log("this.op:",this.op);
            if(!this.op){
                this.nameInpt = this.aux.name;
                this.lastNameInpt = this.aux.lastName;
                this.cellphoneInpt = this.aux.cellphone
                this.op = true;
                
            }
        }
    },
    created(){
        let User = {
            name: 'Fabio',
            lastName: 'Zapata',
            email: 'Fabioz@uninorte.edu.co',
            cellphone: '3043479853' 
        }
        this.nameInpt = User.name;
        this.lastNameInpt= User.lastName;
        this.emailInpt= User.email;
        this.cellphoneInpt=User.cellphone;
        console.log(User);
    }
}
</script>

<style>

</style>