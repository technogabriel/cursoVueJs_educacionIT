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
export default {
    data() {
        return {
            num1: 0,
            num2: 0
        }
    },
    methods: {
        resultadoMethods() {
            const res = this.num1 / this.num2
            return isNaN(res) ? 0 : res
        }
    },
    computed: {
        resultado() {
            const res = this.num1 / this.num2
            console.log(isNaN(res)) // true o false
            return isNaN(res) ? 0 : res
        }
    }
}
</script>

<style>

</style>