<template>
    <v-card
        class ="center"
        width = "20%"

    >
        <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
            
        >
            <v-card-title v-text="card.title"></v-card-title>
        </v-img>
        <v-card-text>
            <p>Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto 
                Hola este es un texto Hola este es un texto Hola este es un texto Hola este es un texto 
                Hola este es un texto Hola este es un texto Hola este es un texto 
            </p>

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
    data: () => ({
      card: 
        { title: 'Porthos', src: 'https://restaurante.guide/wp-content/uploads/2019/07/Porthos-logo.jpg', flex: 6 }
      
    }),
}
</script>