import { searchForCountries, firstRows, getCountryByCCA2 } from './countries'

const createCountryStore = () => {

    let selectedCountry = 'IT'
    let options = []
    let subscribers = []

    return {
        getOptions: () => options,
        getSelectedCountry: () => selectedCountry,

        doSearch: (search) => {
            if (search === "") {
                return
            }
            // search the countries an convert to an array that is understandable for ant design
            let result = searchForCountries(search).map( c => {
                return { value: c.cca2, label: c.name.official }
            })
            // shrink result down to 10 countries max
            options = firstRows(result, 10)
        },

        subscribe: (fn) => {
            subscribers.push(fn)
        },
        setCountry: (country) => {
            selectedCountry = country;
            subscribers.forEach( s => s() )
        }

    }
}

const countryStore = createCountryStore()
export default countryStore