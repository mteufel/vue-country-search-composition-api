<script setup>
  
  import { ref } from 'vue'
  import AppHeader from './components/AppHeader.vue'
  import CountryPanel from './components/CountryPanel.vue'
  import CountrySearch from './components/CountrySearch.vue'
  import CountryDetail from './components/CountryDetail.vue';
  
  const country = ref('DE')

</script>

<template id="app">
    <div>
      <AppHeader title="Welcome to Country Search"></AppHeader>
      <CountryPanel>
        <CountrySearch />
        <CountryDetail :country="country" />
      </CountryPanel>
    </div>
</template>

<style>
  #app {
    display: grid;
    grid-template-columns: 100%;
  }
</style>