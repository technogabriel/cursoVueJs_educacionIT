<template>
    <div class="bg-warning bg-opacity-25 my3 p-4">
        <form >
            <label >Nombre:
                <input type="text" :value="store.state.name" @change="onInputNameChange">
            </label>
            <label >Edad
                <input type="text" :value="store.state.age" @change="onInputChangeAge">
            </label>
        </form>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore()

function onInputNameChange(e){
    console.log("change name")
    store.dispatch('change', {
        name: e.target.value,
        age: store.state.age
    })
}
function onInputChangeAge(e){
    console.log("age name")
    store.dispatch('changeAsync', {
        name: store.state.name,
        age : e.target.value
    })
}
</script>

<style scoped>

</style>