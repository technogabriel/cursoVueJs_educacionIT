<template>
  <div class="py-5">
    <input type="text" v-model="obj.num1">
    <span>/</span>
    <input type="text" v-model="obj.num2">
    <span>=</span>
    <span>{{resultado}}</span>
    <p>{{resultadoMethods()}}</p>
  </div>
</template>

<script>
import useDivision from '../composables/useDivision'

export default {
    setup() {

       const { obj, resultado, resultadoMethods } =  useDivision({num1: 9, num2: 3})

       return {
        obj,
        resultado,
        resultadoMethods
       }
    },
    
}
</script>

<style>

</style>