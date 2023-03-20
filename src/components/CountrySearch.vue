<script>
    export default {
        name: "CountrySearch"
    };
</script>

<script setup>

    import { ref } from 'vue'
    import { Select } from 'ant-design-vue'
    import countryStore from '../data/countryStore'

    const countries = ref( [ ] )

    function handleChange(search) {
        countryStore.doSearch(search)
        countries.value = countryStore.getOptions()
    }

    function countrySelected(cca2) {
        console.log('Country selected: ', cca2)
        countryStore.setCountry(cca2)
    }

</script>

<template>
    <Select class="country-search"
        show-search
        :filter-option="false"
        @search="handleChange"
        @select="countrySelected"
        :options="countries"></Select>
</template>

<style>
    .country-search {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 400px;
    }
</style>
