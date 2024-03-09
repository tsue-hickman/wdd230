// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// API URL
const url = 'https://api.openweathermap.org/data/2.5/weather';

// API parameters
const params = new URLSearchParams({
  lat: '49.75', // Latitude of Trier, Germany
  lon: '6.64', // Longitude of Trier, Germany
  units: 'imperial', // Units in Fahrenheit
  appid: 'c59a9ec498ec3f2defb61c163e36c54b', // OpenWeatherMap API key
});

// API fetch function
async function apiFetch() {
  try {
    const response = await fetch(`${url}?${params}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

// Display results function
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}
