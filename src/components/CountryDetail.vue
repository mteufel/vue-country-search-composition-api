<script>
export default {
    name: "CountryDetail",
    components: { CountryFlag }
};
</script>

<script setup>
    import { ref, computed, inject } from 'vue'
    import { Table } from 'ant-design-vue'
    import { getCountryByCCA2 } from '../data/countries'
    import CountryFlag from './CountryFlag.vue';
   
    const country = inject('country')

    const cols = ref( [ { title: 'Name', dataIndex: 'name'  },
                        { title: 'Kürzel', dataIndex: 'kuerzel'  },
                        { title: 'Hauptstadt', dataIndex: 'hauptstadt'  },
                        { title: 'Region', dataIndex: 'region' }
                     ] )

    const daten = computed( () => {
        let c = getCountryByCCA2(country.value)
        return [ { name: c.name.official, kuerzel: c.cca2, hauptstadt: c.capital, region: c.region } ]
    })     

</script>

<template>
    <div>
      <CountryFlag :country = "country" />
    </div>
    <div>
        <Table :columns="cols" :data-source="daten" :pagination="false" />
    </div>
</template>