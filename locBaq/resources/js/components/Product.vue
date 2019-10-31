<template>
  <v-content class>
    <v-card :width="width" class="mx-5 my-5">
      <v-list class="d-inline-blocks">
        <v-list-item class="d-inline-blocks">
          <v-list-item-content>
            <div class="overline mb-4">Producto</div>
            <v-list-item-title class="headline mb-1">Nombre: {{name}}</v-list-item-title>
            <v-list-item-subtitle>Descripción:{{description}}</v-list-item-subtitle>
            <v-list-item-subtitle>Price:{{price}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="d-inline-blocks">
          <v-list-item-avatar tile size="80" color="grey" class="mt-12 mr-5"></v-list-item-avatar>
          <v-list-item-content>
            <v-btn color="primary">agregar al carrito</v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-content>
</template>


<script>
export default {
  props: {
    width: {
      type: String,
      default: "50%"
    }
  }
};
</script>

<style>
</style>