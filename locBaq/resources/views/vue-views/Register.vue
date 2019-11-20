<template>
    <v-app>
        <v-content app class="fill-height" fluid>
            <v-card width = "35%" class="mx-auto mt-5 center">
                <v-card-title class ="text-center">
                    <h1 class = "display-1 text-center font-weight-bold" >Registro</h1>
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
                            v-model.trim ="lastNameInpt"
                            prepend-icon ="mdi-account-circle"
                            label = "Apellido"
                            v-on:input="validLastName"
                            :error = "!enableLastName"
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
                        <v-text-field 
                            v-model.trim ="passwordInpt"
                            :type= " showPassword ? 'text' : 'password'" 
                            label="Password"
                            prepend-icon = "mdi-lock"
                            :append-icon = "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPassword= !showPassword"
                            v-on:input = "validPassword"
                            :error = "!enablePassword" 
                            />
                        <v-text-field 
                            v-model.trim ="password2Inpt"
                            :type= " showPasswordConf ? 'text' : 'password'" 
                            label="Password"
                            prepend-icon = "mdi-lock"
                            :append-icon = "showPasswordConf ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPasswordConf= !showPasswordConf"
                            v-on:input = "validPassword2"
                            :error = "!enablePassword2" 
                        />
                        <v-combobox
                            v-model="select"
                            :items="items"
                            :error="!enableCombo"
                            
                            prepend-icon="mdi-store"
                            label="¿Posee un restaurante?"
                        ></v-combobox>
                    

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
  
  name: 'register',
  components: {
  },
  data: () =>({
      showPassword: false,
      showPasswordConf: false,
      enablePhone: true,
      enableName: true,
      enableLastName: true,
      enableEmail:true,
      enablePassword: true,
      enablePassword2: true,
      enableCombo: true,
      nameInpt: '',
      lastNameInpt: '',
      cellphoneInpt: '',
      emailInpt: '',
      passwordInpt: '',
      password2Inpt: '',
      select: '',
      links: [
          'Home',
          'Login',
          'Register'
      ],
      items:[
          'Si','No'
      ]
  }),
  methods: {
      hasSpecial(str){
        return (str.match(/^[a-zA-Z ]+$/) != null)

      },
      validPhone(){
        this.enablePhone = this.cellphoneInpt.length>0 &&  this.cellphoneInpt.match(/^\d+$/)  != null
      },
      validName(){
        this.enableName =  (this.hasSpecial(this.nameInpt)  && this.nameInpt.trim().length > 0)
      },
      validLastName(){
        this.enableLastName =  (this.hasSpecial(this.lastNameInpt))  //&& this.lastNameInpt.trim().length > 0)
      },
      validEmail(){
        this.enableEmail=  this.emailInpt.match(/\S+@\S+\.\S+/) != null 
        
      },
      validPassword(){
          this.enablePassword = (this.passwordInpt.length > 2)
      },
      validPassword2(){
          this.enablePassword2 = (this.passwordInpt == this.password2Inpt)
      },
      validComboBox(){
          this.enableCombo = !(this.select == "")
      },
      validAll(){
          this.validName()
          this.validLastName()
          this.validPhone()
          this.validEmail()
          this.validPassword()
          this.validPassword2()
          this.validComboBox()
          if(this.enableName && this.enableLastName && this.enablePhone && 
          this.enableEmail && this.enablePassword && this.enablePassword2 && this.enableCombo){
              var text = {
                  "Name" : this.nameInpt,
                  "LastName" : this.lastNameInpt,
                  "Phone" : this.PhoneInpt,
                  "Email" : this.emailInpt,
                  "Password" : this.passwordInpt
              }
              this.axios.post('http://localhost:8000/api/register',text).then((response) => {
                console.log(response.data);
                alert("Registro exitoso");
                this.$router.push({ path: 'home' });        
             }); 
          }
          else{
              alert("Complete los campos")
          }
      }
  }
}
</script>