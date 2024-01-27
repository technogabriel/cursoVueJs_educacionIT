<template>
  <div class="productos-create-vue">
    <h1>productos-vue</h1>
    <h1 class="display-1">creando un producto</h1>
    <hr />
    <form
      @submit="guardarProducto"
      class="border border-success w-75 m-auto p-5"
    >
      <div>
        <div class="mb-3">
          <label class="form-label" for="lbl-nombre">Nombre</label
          ><input
            type="text"
            class="form-control"
            id="lbl-nombre"
            placeholder="Ingrese el nombre"
            v-model="producto.nombre"
          />
        </div>
      </div>
      <div>
        <div class="mb-3">
          <label class="form-label" for="lbl-categoria">categoria</label
          ><input
            type="text"
            class="form-control"
            id="lbl-categoria"
            placeholder="Ingrese la categoria"
            v-model="producto.categoria"
          />
        </div>
      </div>
      <div>
        <div class="mb-3">
          <label class="form-label" for="lbl-precio">Precio</label
          ><input
            type="text"
            class="form-control"
            id="lbl-precio"
            placeholder="Ingrese el precio"
            v-model="producto.precio"
          />
        </div>
      </div>
      <button class="btn btn-danger">crear</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const producto = reactive({
  nombre: '',
  categoria: '',
  precio: '',
});

const guardarProducto = async e => {
  e.preventDefault();
  console.log("enviando...");

  const url = process.env.VUE_APP_BACKEND_PRODCUTOS

  try {
    const options = {
      method: 'POST',
      headers:  {'Content-Type': 'application/json'},
      body: JSON.stringify(producto),
    }
    const res = await fetch(url, options);
    console.log("res : ->", res)

    if (!res.ok) {
      throw new Error(`Error ${res.status}`);
    }
    const productoCreado = await res.json();
    console.log(productoCreado);
    // producto.nombre = '';
    // producto.categoria = '';
    // producto.precio = '';

    router.push("/productos");
  } catch (error) {
    console.log("error", error);
  }
};
</script>
