<template>
    <div>
        <v-row class= "mt-5">
            <h3 clas="mess" id="h3m" >Hola querido {{username}}</h3>
            <v-btn to="myprofile" icon text class ="pb-3">
                <v-icon  large class="mess my-auto" >mdi-account-circle</v-icon>
            </v-btn>
            <v-btn 
            v-for="link in links"
            :key ="link"
            text
            rounded
            @click="changeState"
            class="mess font-weight-bold"
            >{{link}}
            </v-btn>


        </v-row>
    </div>
    
</template>

<script>
export default {
    props:{
        username: String
    },
    data: ()=>({
        links: [
            'Sign out'
        ]
    }),
    methods:{
        changeState(){
            this.$store.commit('changeLogState')
        }
    }
}
</script>

<style  scoped>



.mess{
    margin-right: 20px;
}

#h3m {
    margin-top: 3px;
    margin-right: 20px;
}

</style>