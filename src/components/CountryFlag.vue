<script>
    export default {
        name: "Flag"
    }
</script>

<script setup>
    import { computed } from 'vue'
    const props = defineProps({
        country: String
    })
    const flagCss = computed( () => "flag flag-" + props.country.toLocaleLowerCase())     
</script>

<template>
    <div>
        <img id="flag-image" border="0" src="../assets/blank.gif" v-bind:class="flagCss" />
    </div>
</template>
  
<style scoped src="@/assets/flags.css">
</style>