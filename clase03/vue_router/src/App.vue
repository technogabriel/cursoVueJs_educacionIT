<template>
  <TituloPrincipal 
  curso="Curso Vue" 
  academia="Mi casa" 
  :numero=1 />
  <div class="container">
    <!-- <TituloSecundario texto= "Directivas text/html/on/bind/model" />
    <Directivas /> -->

    <!-- <TituloSecundario texto= "Directivas if/show/for" /> -->

    <DirectivasIfFor/>
  </div>
</template>

<script>
import Directivas from "./components/Directivas.vue";
import DirectivasIfFor from "./components/DirectivasIfFor.vue";
import TituloPrincipal from "./components/TituloPrincipal.vue";
import TituloSecundario from './components/TituloSecundario.vue';

export default {
  name: "App",
  components: {
    Directivas,
    TituloPrincipal,
    TituloSecundario,
    DirectivasIfFor
  },
};
</script>
  <style>

  </style>
