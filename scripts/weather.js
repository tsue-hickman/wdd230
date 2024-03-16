
    // Function to fetch weather data from OpenWeatherMap API
    function fetchWeatherData() {
        // Latitude and longitude
        const lat = 41.25561722956798;
        const lon = -95.93981500869147;

        // Replace {lat} and {lon} in the API URL with the provided latitude and longitude
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9a18b43f6cbba9453fcf7b632a35e56c`;

        // Fetch weather data
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Update weather placeholder
                document.getElementById('weatherPlaceholder').textContent = data.weather[0].description;

                // You can add additional logic here to update other placeholders with relevant data
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    // Call the fetchWeatherData function when the page loads
    window.onload = fetchWeatherData;

