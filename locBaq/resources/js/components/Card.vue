<template>
    <v-card
        class="mx-auto"
        max-width="300"
        @click="getNamePress"
        dark:true
    >
        <v-img
            :src="cardInfo.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            
        >
            <v-card-title v-text="cardInfo.title"></v-card-title>
        </v-img>
        <v-card-text>
            <p> {{cardInfo.text}} </p>

        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon>
            <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name : 'Card',
    props:{
        cardInfo: Object
    },
    data: () => ({      
    }),
    methods:{
        getNamePress(){
            console.log("presiono", this.cardInfo.title)
        }
    },
    created(){
        //console.log(this.cardInfo)
    }
}
</script>