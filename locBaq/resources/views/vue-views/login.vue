<template>    
  <v-app>
    <v-content class="fill-height" fluid>
      <v-card width="35%" class="mx-auto mt-5 center">
        <v-card-title>
          <h1 class= "font-weight-bold display-1 " >Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field 
              label="Email" 
              prepend-icon ="mdi-account-circle"
              v-model.trim="emailInpt"
              :error = "!enableEmail"
            />
            <v-text-field 
              :type= " showPassword ? 'text' : 'password'" 
              label="Password"
              prepend-icon = "mdi-lock"
              :append-icon = "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword= !showPassword"
              v-model.trim="passwordInpt"
              :error ="!enablePassword"
              />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn class="font-weight-bold" color = "info" :to="'Register'">Register</v-btn>  
          <v-spacer></v-spacer>
          <v-btn class="font-weight-bold" color = "success" @click="isValid">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
export default {
  
  name: 'login',
  components: {

  },
  data: () =>({
      showPassword: false,
      emailInpt: '',
      passwordInpt: '',
      enablePassword: true,
      enableEmail: true,
      changeState: 'SignIn',
      links: [
          'Home',
          'Login',
          'Register'
      ]
  }),
  methods:{
    isValid(){
      var op = this.emailInpt.match(/\S+@\S+\.\S+/) != null && this.passwordInpt.length > 2
      if(op){
        var text ={
          "Email":this.emailInpt,
          "Password":this.passwordInpt
          }
          console.log(text);
          this.axios.post('/api/login',text).then((response) =>{
            console.log("Se vienen los datos");
            console.log(response.data);
            if(response.data.Message=="inicio exitoso"){
              this.$store.commit('changeLogState');
              var strin = ""+response.data.FirstName +" "+response.data.LastName
              this.$store.commit('setUsername',strin);
              this.$store.commit('setToken',this.emailInpt)
              //console.log("el valor del boolean es"+ this.$store.state.isLoged);
              this.$router.push({ path: 'home' })
            }
            else if (response.data.Message=="el usuario no existe"){
              alert("El Usuario no existe")
              this.enableEmail = false;
            }
            else{
              alert("Contraseña incorrecta");
              this.enablePassword = false;
            }
          })
           .catch(error => {
            console.log("Llegó esto a cliente");
            console.log(error.response);
            
          });
          console.log(text)
      }
      else{
        alert("Complete los campos")
        this.enableEmail = this.emailInpt.match(/\S+@\S+\.\S+/) != null
        this.enablePassword = this.passwordInpt.length > 2
      
      }
    }
  },
  created(){
    if(this.$store.state.isLoged){
      this.$router.push({ path: 'home' })
    }
  }
}
</script>
