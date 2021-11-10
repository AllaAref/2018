const fetch = require('node-fetch');

// Generates the list of the countries from the provided API URL.
fetch('https://restcountries.eu/rest/v2/all')
.then(response => {
    return response.json();
})
.then(responseJson => {
    responseJson.sort((a, b) => (a.name > b.name) ? 1 : -1).forEach(element => {
       console.log (`{ value: '${element.capital}', label: '${element.name}' },`)
    });
})