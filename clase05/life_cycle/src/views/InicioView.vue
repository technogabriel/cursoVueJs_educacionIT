<template>
    <div class="inicio">
      <h1>Inicio</h1>
      <hr>
      <DivisionOptions />

      <hr>

      <DivisionCompositionRef />

      <hr>

      <DivisionCompositionReactive />

      <hr>

      <DivisionCompositionReactiveV2 />

      <hr>

      <DivisionComposable />

    </div>
</template>

<script>
import DivisionOptions from '@/components/DivisionOptions.vue'
import DivisionCompositionRef from '@/components/DivisionCompositionRef.vue'
import DivisionCompositionReactive from '@/components/DivisionCompositionReactive.vue'
import DivisionCompositionReactiveV2 from '@/components/DivisionCompositionReactiveV2.vue'
import DivisionComposable from '@/components/DivisionComposable.vue'
export default {
  components: { 
    DivisionOptions, 
    DivisionCompositionRef, 
    DivisionCompositionReactive, 
    DivisionCompositionReactiveV2,
    DivisionComposable
  },
 
}
</script>

<style>

</style>