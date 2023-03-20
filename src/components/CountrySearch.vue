<script>
    export default {
        name: "CountrySearch"
    };
</script>

<script setup>

    import { ref } from 'vue'
    import { Select } from 'ant-design-vue'
    import { searchForCountries, firstRows } from '../data/countries'

    const countries = ref( [ ] )

    function handleChange(search) {
        countries.value = [] 
        if (search === "") {
            return
        }
        // search the countries an convert to an array that is understandable for ant design
        let result = searchForCountries(search).map( c => {
            return { value: c.cca2, label: c.name.official }
        })
        // shrink result down to 10 countries max
        countries.value = firstRows(result, 10)
    }

    function countrySelected(cca2) {
        console.log('Country selected: ', cca2)
        // TODO
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
