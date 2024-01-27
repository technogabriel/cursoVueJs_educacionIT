<template>
  <h1 class="display-1">Ciclo de vida</h1>
  <hr>

  <button class="btn btn-success my-3" @click="estado=!estado">
    {{ estado ? 'Ocultar' : 'Mostrar' }}
  </button>

  <p v-if="estado" class="alert alert-info">Lorem ipsum dolor sit amet.</p> 

</template>

<script>
// https://es.vuejs.org/v2/guide/instance
export default {
    data() {
        return {
            estado: true,
            refInterval: 0
        }
    },
    beforeCreate() {
        // No se puede acceder ni a los datos ni al template
        console.log('CicloVidaView -> beforeCreated')
    },
    created() {
        // Se puede acceder a los datos pero no al template
        console.log('CicloVidaView -> created')
    },
    beforeMount() {
        // Se puede acceder a los datos pero no todavía template
        console.log('CicloVidaView -> beforeMount')
    },
    mounted() {
        // Se puede acceder a los datos y al template. Ya se ve en pantalla
        console.log('CicloVidaView -> mounted')
        this.refInterval = setInterval(() => {
            console.log(Date.now())
        }, 2000)
    },
    beforeUpdate() {
        // Corre justo antes de que los datos del componente cambien.
        // Y antes de que el DOM sea re-renderizado
        console.log('CicloVidaView -> beforeUpdate')
    },
    updated() {
        // Corre después de que los datos han sido modificados
        console.log('CicloVidaView -> updated') 
    },
    beforeUnmount() {
        // Corre antes de que el componente sea destruido, desmontado. (Murio) Se saco de la vista
        console.log('CicloVidaView -> beforeUnmount')
    },
    unmounted() {
        // Corre después que el componente se desmonté (Desapareció de la vista)
        console.log('CicloVidaView -> unmounted')
        clearInterval(this.refInterval)
    }
}
</script>

<style>

</style>