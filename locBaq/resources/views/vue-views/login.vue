<template>    
  <v-app>
    <v-content class="fill-height" fluid>
      <v-card width="35%" class="mx-auto mt-5 center">
        <v-card-title>
          <h1 class= "display-1">Login</h1>
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
          <v-btn color = "info" :to="'Register'">Register</v-btn>  
          <v-spacer></v-spacer>
          <v-btn color = "success" @click="isValid">Login</v-btn>
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
        /*var text = JSON.stringify({
          "Email":this.emailInpt,
          "Password":this.passwordInpt
          })
          console.log(text)
          */
          this.enableEmail = true
          this.enablePassword = true
          this.$store.commit('changeLogState');
          this.$store.commit('setUsername',this.emailInpt)
          console.log("el valor del boolean es"+ this.$store.state.isLoged);
          this.$router.push({ path: 'home' })
          //window.location =  ('./');
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