// Get your API key here: https://home.openweathermap.org/api_keys
const apiKey = 'insert your API key here';

const OpenWeather = {
    getWeather(city) {
        if(city === "City of Victoria") {
            city = "Victoria";
        }
        const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        return fetch(endpoint)
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if(jsonResponse && jsonResponse.main) {
                return {
                    icon: jsonResponse.weather[0].icon,
                    temperature: jsonResponse.main.temp
                }
            }
        })
    } 
}

export default OpenWeather;