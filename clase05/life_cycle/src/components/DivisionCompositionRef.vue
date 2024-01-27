<template>
  <div class="py-5">
    <input type="text" v-model="num1">
    <span>/</span>
    <input type="text" v-model="num2">
    <span>=</span>
    <span>{{resultado}}</span>
    <p>{{resultadoMethods()}}</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
    setup() {

        // ref() -> Me permite crear propiedades reactivas
        // ref() -> El ref trabaja con tipos de datos primitivos
        // const num1 = ref(4) // La ejecución de ref es un obj
        const estado = {
            num1: ref(5),
            num2: ref(2)
        }

        // Methods
        const resultadoMethods = () => {
            // REF

            const { num1, num2 } = estado
            //console.log(num1) // <- obj que retornar el ref.
            //console.log(num2)
            const res = num1.value / num2.value
            return isNaN(res) ? 0 : res
        }

        // Computed
        const resultado = computed(() => {
            // REF
            const res = estado.num1.value / estado.num2.value
            return isNaN(res) ? 0 : res
        })

        // TODO lo que quiero que sea visible por el template lo tengo que retornar
        return {
            num1: estado.num1,
            num2: estado.num2,
            resultado,
            resultadoMethods
        }
    },
    
}
</script>

<style>

</style>