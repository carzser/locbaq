<template>
    <v-app>
        <v-content app class="fill-height" fluid>
            <v-card width = "35%" class="mx-auto mt-5 center">
                <v-card-title class ="text-center">
                    <h1 class = "display-1 text-center font-weight-bold" >Registro del restaurante</h1>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field 
                            v-model.trim ="nameInpt"
                            prepend-icon ="mdi-account-circle"
                            label = "Nombre"
                            v-on:input="validName"
                            :error = "!enableName"
                        />
                        <v-text-field 
                            v-model.trim ="addressInpt"
                            prepend-icon ="mdi-map-marker"
                            label = "Dirección"
                            v-on:input="validAddress"
                            :error = "!enableAddress"
                        />
                        <v-text-field
                            v-model.trim ="cellphoneInpt"
                            prepend-icon ="mdi-cellphone"
                            label = "Celular"
                            v-on:input="validPhone" 
                            :error = "!enablePhone"
                            />
                        <v-text-field 
                            v-model.trim="emailInpt"
                            prepend-icon = "mdi-email"
                            label = "Correo"
                            v-on:input = "validEmail"
                            :error = "!enableEmail"
                            />
                        <v-file-input 
                            v-model.trim="urlImgInpt"
                            v-on:input = "validUrl"
                            :error = "!enableUrl"
                            label="Imagen"></v-file-input>
                        <v-textarea
                            append-icon="mdi-card-text"
                            outlined
                            name="input-7-1"
                            label="Descripción del restaurante"
                            v-model.trim="descrInpt"
                            v-on:input = "validDescr"
                            :error = "!enableDescr"
                        ></v-textarea>


                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn class="font-weight-bold" color = "info" :to="'Home'">Atrás</v-btn>  
                    <v-spacer></v-spacer>
                    <v-btn class="font-weight-bold" color = "success" @click="validAll">Registrarse</v-btn>
                </v-card-actions>
            </v-card>
            

        </v-content>
    </v-app>
</template>

<script>
export default {
    data: ()=>({
      enablePhone: true,
      enableName: true,
      enableAddress: true,
      enableEmail:true,
      enableUrl: true,
      enableDescr: true,
      nameInpt: '',
      addressInpt: '',
      cellphoneInpt: '',
      emailInpt: '',
      urlImgInpt: '',
      descrInpt: ''
    }),
    methods:{
        hasSpecial(str){
            return (str.match(/^[a-zA-Z ]+$/) != null)
        },
        validPhone(){
            this.enablePhone = this.cellphoneInpt.length>0 &&  this.cellphoneInpt.match(/^\d+$/)  != null
        },
        validName(){
            this.enableName = (this.nameInpt.trim().length > 0)
        },
        validEmail(){
            this.enableEmail=  this.emailInpt.match(/\S+@\S+\.\S+/) != null   
        },
        validAddress(){
            this.enableAddress = this.addressInpt.trim>2;
        },
        validUlr(){
            this.enableUrl =  (this.urlImgInpt.match(/\.(jpeg|jpg|gif|png)$/) != null);
        },
        validDescr(){
            this.enableDescr =  (this.descrInpt.trim().length > 0)
        },
        validAll(){
            this.validPhone();
            this.validName();
            this.validEmail();
            this.validAddress();
            this.validUlr();
            this.validDescr();
            if(this.enablePhone && this.enableName && this.enableEmail && this.enableAddress
                && this.enableUrl && this.validDescr){

            }
            else{
                alert('Complete los campos');
            }
        }
    },
    created(){
        if(this.$store.state.isLoged  && this.$store.state.isOwner){ 
        }
        else{
            this.$router.push({ path: 'home' })
        }   
    }
}
</script>