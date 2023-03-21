<script>
    export default {
        name: "Flag"
    }
</script>

<script setup>
    import { computed, inject } from 'vue'
    const country = inject('country')
    const flagCss = computed( () => "flag flag-" + country.value.toLocaleLowerCase())     
</script>

<template>
    <div>
        <img id="flag-image" border="0" src="../assets/blank.gif" v-bind:class="flagCss" />
    </div>
</template>
  
<style scoped src="@/assets/flags.css">
</style>