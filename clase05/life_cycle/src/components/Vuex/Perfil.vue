<template>
    <h1>Editar Perfil</h1>
    <div class="bg-danger bg-opacity-25 my-3">
        <h2>Nombre: {{ store.state.name }}</h2>
        <h2>Edad : {{ store.state.age }}</h2>
    </div>
    <div>

    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

</script>

