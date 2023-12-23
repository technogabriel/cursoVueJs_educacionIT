<template>
  <h1 class="display1">{{curso}} {{ numero }} - {{academia}} </h1>
  <hr>
</template>

<script>
export default {
    name:'TituloPrincipal',
    props: {
      curso: String,
      academia: String,
      numero: Number
    }

}
</script>

<style>
h1 {
 color:  blue;
}
</style>