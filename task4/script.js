const apiKey = '65869285f8mshe51711cebe7d808p100ce7jsne49b65c62112'; 

document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("city").value;
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        displayWeatherData(result);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById("weatherData").innerText = "Error fetching weather data.";
    }
}
function displayWeatherData(data) {
    const weatherDataDiv = document.getElementById("weatherData");
    weatherDataDiv.innerHTML = ""; 
    const cityName = data.name;
    const temperature = data.main.temp; 
    const feelsLike = data.main.feels_like; 
    const humidity = data.main.humidity; 
    const windSpeed = data.wind.speed; 
    const weatherDescription = data.weather[0].description; 
    const weatherInfo = document.createElement("div");
    weatherInfo.innerHTML = `
        <h3>${cityName}</h3>
        <p>Temperature: ${temperature}°F</p>
        <p>Feels Like: ${feelsLike}°F</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} mph</p>
        <p>Description: ${weatherDescription}</p>
    `;

    weatherDataDiv.appendChild(weatherInfo);
}
