<template>
  <div class="productos-edit-vue">
    <!-- h1.display-1{Creando un producto}+hr+form.border.border-success.w-75.m-auto.p-5>(div.mb-3>label+input)*3+button.btn.btn-danger{Crear} -->
    <h1 class="display-1">Editando un producto</h1>
    <hr />

    <form
      @submit="actualizarProducto"
      class="border border-warning w-75 m-auto p-5"
    >
      <!-- Campo nombre -->
      <div class="mb-3">
        <label class="form-label" for="lbl-nombre">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="lbl-nombre"
          placeholder="Ingrese el nombre"
          v-model="producto.nombre"
        />
      </div>
      <!-- Campo categoría -->
      <div class="mb-3">
        <label class="form-label" for="lbl-categoria">Categoría</label>
        <input
          type="text"
          class="form-control"
          id="lbl-categoria"
          placeholder="Ingrese el categoría"
          v-model="producto.categoria"
        />
      </div>
      <!-- Campo precio -->
      <div class="mb-3">
        <label class="form-label" for="lbl-precio">Precio</label>
        <input
          type="text"
          class="form-control"
          id="lbl-precio"
          placeholder="Ingrese el precio"
          v-model="producto.precio"
        />
      </div>
      <button class="btn btn-warning">Editar</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

const url = "http://localhost:5500/productos/";

const route = useRoute(); // Tomar la data del params
const router = useRouter(); // Redirecciones, basado en ruta

const producto = reactive({
  id: "",
  nombre: "",
  categoria: "",
  precio: "",
});

producto.id = route.params.id;

const obtenerProductoPorId = async () => {
  try {
    const urlProducto = url + producto.id; // http://localhost:5500/productos/id

    const res = await fetch(urlProducto);

    if (!res.ok) {
      throw new Error(
        `No se pudo obtener el producto - ${res.status}, ${res.statusText}`
      );
    }

    const productoObtenido = await res.json();
    // console.log(producto)

    return productoObtenido;
  } catch (error) {
    console.error("[obtenerProductoPorId]: Algo paso", error);
  }
};

onMounted(async () => {
  const productoFetch = await obtenerProductoPorId();
  producto.id = productoFetch.id;
  producto.nombre = productoFetch.nombre;
  producto.categoria = productoFetch.categoria;
  producto.precio = productoFetch.precio;
});

const actualizarProducto = async (e) => {
  e.preventDefault();
  console.log("enviando...");
  
  try {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    };
    const urlActualizar = url + producto.id // http://localhost:5500/productos/id

    const res = await fetch(urlActualizar, options);

    if (!res.ok) {
      throw new Error(
        `Ocurrió un problema al editar un producto ${res.status} ${res.statusText}`
      );
    }

    const productoActualizado = await res.json();
    console.log(productoActualizado);

    producto.nombre = "";
    producto.categoria = "";
    producto.precio = "";

    router.push("/productos");

  } catch (error) {
    console.error("[actualizarProducto]: ", error);
  }
};
</script>
