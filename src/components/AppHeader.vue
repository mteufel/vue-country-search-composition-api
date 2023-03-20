<script>
    export default {
        name: "AppHeader"
    }
</script>

<script setup>
    const props = defineProps({
        title: String
    })
</script>

<template>
    <p>
      <h1>{{ title }}</h1>
    </p>
</template>