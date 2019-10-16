<template>
    <v-app>
        
        <Card/>
    </v-app>
</template>

<script>
import Card from './Card.vue'
export default {
    components:{
        Card
    },
    data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
      }
    },

}
</script>