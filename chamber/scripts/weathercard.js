const apiKey = '9a18b43f6cbba9453fcf7b632a35e56c';
const city = 'Omaha';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=41.25716582029466&lon=-95.94462152722332&appid=9a18b43f6cbba9453fcf7b632a35e56c`;


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
    const forecastApiUrl = `api.openweathermap.org/data/2.5/forecast?lat=41.25716582029466&lon=-95.94462152722332&appid=9a18b43f6cbba9453fcf7b632a35e56c `;

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


// Assuming you have loaded member data into 'membersData' variable
const spotlightsContainer = document.getElementById('spotlightAds');
const silverGoldMembers = membersData.filter(member => member.membership_level === 'Silver Membership' || member.membership_level === 'Gold Membership');
const randomSpotlights = getRandomMembers(silverGoldMembers, 3); // Change 3 to the desired number of spotlights
randomSpotlights.forEach(member => {
    // Create HTML for spotlight advertisement and append to container
});
 






