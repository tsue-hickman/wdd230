// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
    // Latitude and longitude
    const lat = 41.25510102450038;
    const lon = -95.92745538960949;
    
    // Replace the API URL with the correct one for current weather based on latitude and longitude
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1c187aa2ee25002bc7ba1223ad71ad5d`;

    // Fetch weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not available');
            }
            return response.json();
        })
        .then(data => {
            // Update weather placeholder
            const weatherDescription = data.weather[0].description;
            document.getElementById('weatherPlaceholder').textContent = weatherDescription;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherPlaceholder').textContent = 'Weather data unavailable';
        });
}

// Function to track website visits using localStorage
function trackVisits() {
    let visits = localStorage.getItem('visits');

    if (visits) {
        visits = parseInt(visits) + 1;
    } else {
        visits = 1;
    }

    localStorage.setItem('visits', visits);
    document.getElementById('visitsPlaceholder').textContent = visits;
}

// Call the fetchWeatherData function when the page loads
window.onload = () => {
    fetchWeatherData();
    trackVisits();
};
