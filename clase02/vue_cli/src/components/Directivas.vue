<template>
<h3 class="my-4 text-info">Interpolacion / v-text / v-html</h3>

<h4>Directiva v-text</h4>

<p v-text="mensaje"></p>

<h4>Directiva v-html</h4>

<p>{{mensajeHtml}}</p>
<p v-text="mensajeHtml"></p>
<p v-html="mensajeHtml"></p>

<h3 class="my-4 text-info">Property Binding / v-bind</h3>
<!-- Permite enlazar/vincular un atributo del html con los datos del modelo de VUE -->

<div class="my-5">
  <div>
    <input type="text" value="valor" />
  </div>
  <div>
    <input type="text" value="123" />
  </div>
  <div>
    <input type="text" v-bind:value="valor" />
  </div>
  <div>
    <input type="text" :value="valor" />
  </div>
</div>

<h3 class="my-4 text-info">Property Binding / v-on</h3>
<!-- Es una manera de manejar eventos en los elementos html y ejecutar metodos(funciones) -->
<button class="btn btn-danger my-3" v-on:click="contador++">Contador 1: {{contador}}</button>
<button class="btn btn-secondary my-3">Contador 1</button>
<button class="btn btn-dark my-3">Contador 1</button>
</template>

<script>
export default {
    data(){
        return{ // objeto de propiedasdes reactivas
            mensaje : 'Hola Mundo desde Vue',
            mensajeHtml : '<strong>Hola mundo html </strong>',
            valor: 567,
            contador: 222
        } // <- option
    },
    methods:{ // <- option
      incrementar(){
        this.contador++
      },
      getContador(){
        return this.contador
      },
      actualizar(e){
        let dato = e.target.value
        this.valor = dato
      }

    }

}
</script>

<style>

</style>