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
import { computed, reactive } from 'vue'

export default {
    setup() {

        // reactive() -> Me permite crear propiedades reactivas
        // reactive() -> El reactive trabaja con tipos de datos tipo objeto
        
        const obj = reactive({num1: 2, num2: 5})
        console.log(obj)

        // Methods
        const resultadoMethods = () => {
            // REACTIVE
            const res = obj.num1 / obj.num2
            return isNaN(res) ? 0 : res
        }

        // Computed
        const resultado = computed(() => {
            // REF
            const res = obj.num1 / obj.num2
            return isNaN(res) ? 0 : res
        })

        // TODO lo que quiero que sea visible por el template lo tengo que retornar
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