import data from './db.json'

export function searchForCountries(searchValue) {
    let my = searchValue.toUpperCase()
    return data.filter( row => row.name.common.toUpperCase().includes(my) || row.name.official.toUpperCase().includes(my))
}

export function getCountryByCCA2(countryCode) {
    return data.find( row => row.cca2 === countryCode.toUpperCase())
}

export function getCountryByCCA3(countryCode) {
    return data.find( row => row.cca3 === countryCode.toUpperCase())
}

export function firstRows(data, numberOfRows) {
    return data.slice(0, numberOfRows)
}