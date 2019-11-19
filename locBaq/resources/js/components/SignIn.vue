<template>
    <div>
        <v-btn 
        v-for="link in links"
        :key ="link"
        text
        rounded
        :to="link"
        class="font-weight-bold"
        >{{link}}
        </v-btn>

    </div>
</template>

<script>

export default {
    data: ()=>({
        links: [
            'Home','Register','Login'
        ]
    })
}
</script>