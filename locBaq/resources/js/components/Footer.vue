<template>
    <v-footer color="rgb(229,57,53)" padless>
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
          :to="link"
        >
          {{ link }}
        </v-btn>
        <v-col
          class="rgb(229,57,53) lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Fazd</strong>
        </v-col>
      </v-row>
    </v-footer>
</template>

<script>
export default {
    data: ()=>({
        links:[
            'Home','Register','Login'
        ]
    })
}
</script>