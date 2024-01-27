<template>
  <h1 class="display-1">Ciclo de vida</h1>
  <hr>

  <button class="btn btn-success my-3" @click="estado=!estado">
    {{ estado ? 'Ocultar' : 'Mostrar' }}
  </button>

  <p v-if="estado" class="alert alert-info">Lorem ipsum dolor sit amet.</p> 

</template>

<script setup>
import { 
    onBeforeMount, 
    onBeforeUnmount, 
    onBeforeUpdate, 
    onMounted, 
    onUnmounted, 
    onUpdated, 
    ref } from 'vue';

// Diferencias entre v2 y v3: https://medium.com/emblatech/vue2-to-vue3-whats-changed-5572514da20d
// https://vuejs.org/api/composition-api-lifecycle

    const estado = ref(true)
    const refInterval = ref(0)
    
    onBeforeMount(() => {
        // Se puede acceder a los datos pero no todavía template
        console.log('CicloVidaView -> beforeMount')
    }) 

    onMounted(() => {
        // Se puede acceder a los datos y al template. Ya se ve en pantalla
        console.log('CicloVidaView -> mounted')
        refInterval.value = setInterval(() => {
            console.log(Date.now())
        }, 2000)
    })

    onBeforeUpdate(() => {
        // Corre justo antes de que los datos del componente cambien.
        // Y antes de que el DOM sea re-renderizado
        console.log('CicloVidaView -> beforeUpdate')
    })

    onUpdated(() => {
        // Corre después de que los datos han sido modificados
        console.log('CicloVidaView -> updated') 
    }) 

    onBeforeUnmount(() => {
        // Corre antes de que el componente sea destruido, desmontado. (Murio) Se saco de la vista
        console.log('CicloVidaView -> beforeUnmount')
    }) 

    onUnmounted(() => {
        // Corre después que el componente se desmonté (Desapareció de la vista)
        console.log('CicloVidaView -> unmounted')
        clearInterval(refInterval.value)
    }) 

</script>

<style>

</style>