<template>
  <div class="productos-detail-vue">
    <h1>productos {{ producto.id }}</h1>
    <hr />
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ producto.nombre }}</h5>
        <h6 class="card-subtitle mb-2 text-success">
          {{ producto.categoria }}
        </h6>
        <p class="card-text">${{ producto.precio }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

const url = "http://localhost:5500/productos/";
const route = useRoute();
const productId = ref(0); //sirve para primitivos
const producto = reactive({
  id: "",
  nombre: "",
  categoria: "",
  precio: "",
}); // sirve para tipo objetos

console.log(route.params);
productId.value = route.params.id;

const obtenerProductoPorId = async () => {
  try {
    const urlProducto = url + productId.value;
    const res = await fetch(urlProducto);

    if (!res.ok) {
      throw new Error("No se pudo obtener el producto - ${res.status}");
    }
    const productoObtenido = await res.json();

    return productoObtenido
  } catch (error) {
    console.log("usuarioPorId", error);
  }
};
onMounted(async () => {
  const productoFetch = await obtenerProductoPorId();
  console.log('productoFetch', productoFetch)
  producto.id = productoFetch.id;
  producto.nombre = productoFetch.nombre;
  producto.categoria = productoFetch.categoria;
  producto.precio = productoFetch.precio;
});
</script>
