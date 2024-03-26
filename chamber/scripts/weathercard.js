const apiKey = 'c847e44f43b328647dbb63f150f7e303';
const city = 'Omaha';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


document.addEventListener('DOMContentLoaded', () => {
    getWeatherData();
});

async function getWeatherData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            console.error('Error fetching weather data:', data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

}
// get current weather data
const response = await fetch(apiUrl);
const weatherData = await response.json();

// get 3 day forecast data
const forecastResponse = await fetch(forecastApiUrl);
const forecastData = await forecastResponse.json();

function displayWeather(weatherData) {
    const weatherCard = document.getElementById('weatherCard');
    const cityName = weatherData.name;
    const temperature = Math.round(weatherData.main.temp - 273.15); // Convert from Kelvin to Celsius
    const weatherDescription = weatherData.weather[0].description;
    
    const content = `
        <h2>${cityName}</h2>
        <p>Current Temperature: ${temperature}°C</p>
        <p>Weather: ${weatherDescription}</p>
    `;

    weatherCard.innerHTML = content;
}




