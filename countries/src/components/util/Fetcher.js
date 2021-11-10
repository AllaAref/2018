const Fetcher = {
    getCountry(country) {
        const endpoint = `https://restcountries.com/v3.1/alpha/${country}`;
        return fetch(endpoint)
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            if(jsonResponse.name) {
                return {
                    country: jsonResponse[0].name.official,
                    capital: jsonResponse[0].capital,
                    subregion: jsonResponse[0].subregion,
                    currency: jsonResponse[0].currencies[Object.keys(jsonResponse[0].currencies)[0]],
                    currencyCode: Object.keys(jsonResponse[0].currencies)[0],
                    flag: jsonResponse[0].flags.png,
                    alpha3Code: jsonResponse[0].cca3,
                    language: jsonResponse[0].languages[0].name,
                    numericCode: jsonResponse[0].ccn3,
                    population: jsonResponse[0].population,
                    area: jsonResponse[0].area,
                    timeZone: jsonResponse[0].timezones[0]
                }
            }
        })
    }
}

export default Fetcher;