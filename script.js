const apiKey = '5daa17bbf3f3c6cac5b8d0dc759f728b';
let favoriteCities = JSON.parse(localStorage.getItem('favoriteCities')) || [];

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.getElementById('weather-container').classList.toggle('dark-mode');
    document.querySelectorAll('input, button').forEach(el => el.classList.toggle('dark-mode'));
}

// Get weather for entered city
function getWeather() {
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetchWeather(currentWeatherUrl, forecastUrl);
}

// Get weather based on geolocation
function getWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
            const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
            
            fetchWeather(currentWeatherUrl, forecastUrl);
        });
    } else {
        alert("Geolocation not supported.");
    }
}

// Fetch weather data
function fetchWeather(currentWeatherUrl, forecastUrl) {
    // Fetch current weather
    fetch(currentWeatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            updateBackground(data.weather[0].description);
            fetchAirQuality(data.coord.lat, data.coord.lon);
        })
        .catch(error => {
            displayErrorMessage(error.message);
        });

    // Fetch forecast
    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
            fetchDailyForecast(data.city.coord.lat, data.city.coord.lon);
        })
        .catch(error => {
            console.error('Error fetching forecast:', error);
        });
}

// Display current weather
function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');

    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    tempDivInfo.innerHTML = `<p>${temperature}°C</p>`;
    weatherInfoDiv.innerHTML = `<p>${cityName}</p><p>${description}</p>`;
    weatherIcon.src = iconUrl;
    weatherIcon.style.display = 'block';
}

// Display error message
function displayErrorMessage(message) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const dailyForecastDiv = document.getElementById('daily-forecast');

    // Clear previous data
    tempDivInfo.innerHTML = '';
    weatherInfoDiv.innerHTML = `<p style="color:red;">${message}</p>`;
    weatherIcon.style.display = 'none';
    hourlyForecastDiv.innerHTML = '';
    dailyForecastDiv.innerHTML = '';
}

// Display hourly forecast
function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    hourlyForecastDiv.innerHTML = '';

    const next24Hours = hourlyData.slice(0, 8);

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}°C</span>
            </div>
        `;
        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

// Fetch daily forecast
function fetchDailyForecast(lat, lon) {
    const dailyForecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}`;
    
    fetch(dailyForecastUrl)
        .then(response => response.json())
        .then(data => {
            displayDailyForecast(data.daily);
            displayWeatherAlerts(data.alerts);
        });
}

// Display daily forecast
function displayDailyForecast(dailyData) {
    const dailyForecastDiv = document.getElementById('daily-forecast');
    dailyForecastDiv.innerHTML = '';

    dailyData.slice(1, 8).forEach(day => {
        const date = new Date(day.dt * 1000);
        const temperature = Math.round(day.temp.day - 273.15);
        const description = day.weather[0].description;
        const iconCode = day.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const dailyItemHtml = `
            <div class="daily-item">
                <p>${date.toDateString()}</p>
                <img src="${iconUrl}" alt="Daily Weather Icon">
                <p>${temperature}°C</p>
                <p>${description}</p>
            </div>
        `;
        dailyForecastDiv.innerHTML += dailyItemHtml;
    });
}

// Display weather alerts
function displayWeatherAlerts(alerts) {
    const weatherAlertsDiv = document.getElementById('weather-alerts');
    weatherAlertsDiv.innerHTML = ''; // Clear previous alerts

    if (alerts && alerts.length > 0) {
        alerts.forEach(alert => {
            const alertHtml = `
                <div class="alert">
                    <p><strong>${alert.event}</strong>: ${alert.description}</p>
                </div>
            `;
            weatherAlertsDiv.innerHTML += alertHtml;
        });
    } else {
        weatherAlertsDiv.innerHTML = `<p>No weather alerts at the moment.</p>`;
    }
}

// Fetch and display air quality
function fetchAirQuality(lat, lon) {
    const airQualityUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(airQualityUrl)
        .then(response => response.json())
        .then(data => {
            displayAirQuality(data.list[0].main.aqi);
        });
}

// Display air quality
function displayAirQuality(aqi) {
    const airQualityDiv = document.getElementById('air-quality');
    const aqiLevels = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
    airQualityDiv.innerHTML = `<p>Air Quality: ${aqiLevels[aqi - 1]}</p>`;
}

// Update background based on weather condition
function updateBackground(description) {
    const body = document.body;
    if (description.includes('cloud')) {
        body.style.backgroundImage = "url('cloudy.jpg')";
    } else if (description.includes('rain')) {
        body.style.backgroundImage = "url('rainyy.jpg')";
    } else if (description.includes('clear')) {
        body.style.backgroundImage = "url('clear.jpg')";
    } else if (description.includes('snow')) {
        body.style.backgroundImage = "url('snowy.jpg')";
    } else {
        body.style.backgroundImage = "url('default.jpg')";
    }
}
