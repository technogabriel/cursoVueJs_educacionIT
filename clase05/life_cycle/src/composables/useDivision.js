import { computed, reactive } from 'vue'

const useDivision = (objNumeros) => {

    // reactive() -> Me permite crear propiedades reactivas
    // reactive() -> El reactive trabaja con tipos de datos tipo objeto

    const obj = reactive(objNumeros)
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

}

export default useDivision