<template>
  <div class="productos-vue">
    <h1 class="display-2">Listado de Productos</h1>
    <hr/>
    <RouterLink class="btn btn-success my-3" to="/productos/create">Crear Productos</RouterLink>
    <table class="table stripped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto, indice) in productos" :key="indice">
          <td>{{producto.nombre}}</td>
          <td>{{producto.categoria}}</td>
          <td>{{producto.precio}}</td>
          <td>
            <RouterLink class="btn btn-info me-2" :to="{path: '/productos/' + producto.id}">Ver</RouterLink>
            <RouterLink class="btn btn-info me-2" :to="{path: '/productos/edit/' + producto.id}">Editar</RouterLink>
            <button class="btn btn-danger me-2" @click="borrarProducto(producto.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import Swal from 'sweetalert2'

const productos = ref([])

const url = 'http://localhost:5500/productos/'
const getProductos = async() => {
  try {
    const res = await fetch(url)

    if(!res.ok){
      throw new Error(`Algo ocurrio con los productos `, res.status);
    }
    const products = await res.json()
    console.log(products);
    productos.value = products
  } catch (error) {
    console.error('[getProductos ]', error);  
  }
}

onMounted(()=>{
  console.log('onMounted -> getProductos()')
  getProductos()
})

const deleteProductoFetch =async id => {
  const options = {
    method: 'DELETE'
  }
 
  const urlDelete = url+id
  console.log(urlDelete)

  try {
    const res = await fetch(urlDelete, options)
    if(!res.ok){
      throw new Error('No se pudo borrar');
    }
  const productoBorrado = await res.json()
  console.log(productoBorrado)
  
  getProductos()

  } catch (error) {
    console.error('deleteProductosFetch: ', error);
  }

}

const borrarProducto = (id) => {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async (result) => {
  if (result.isConfirmed) {
    await deleteProductoFetch(id)
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}
</script>
