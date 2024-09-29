WEATHER WEBAPP
<br>




Weather App with Dark Mode 🌦️🌙
A weather web application that provides real-time weather information, 5-day forecasts, air quality index, and weather alerts for any city in the world. It includes geolocation support to fetch the user's weather automatically, a clean user interface , and detailed daily and hourly forecasts.
<br>
Features 🚀
<br>
Search Weather by City: Enter any city name to retrieve the current weather and forecasts.
<br>
Geolocation Support: Automatically fetch the weather for your current location using your browser's geolocation API.
<br>
Current Weather Data: Get real-time temperature, weather conditions, and an icon to reflect the weather.
<br>
Hourly Forecast: View the weather forecast for the next 24 hours, updated every 3 hours.
<br>
Daily Forecast: Get a 7-day weather forecast with temperature and weather conditions.
<br>
Weather Alerts: Displays weather alerts for the current city, if any.
<br>
Air Quality Index (AQI): Shows the air quality levels based on location.

<br>
Responsive Design: Works across all screen sizes and devices.
<br>
Error Handling: If an invalid city is entered, the app will display an error message.
<br>
Technologies Used 🧰
<br>
HTML5: Markup structure of the app.
<br>
CSS3: Styling the app, including responsive design and dark mode.
<br>
JavaScript (ES6): Logic for fetching data from the weather API, handling geolocation, and dynamically updating the DOM.
<br>
OpenWeatherMap API: Used to fetch weather, forecast, and air quality data.
<br>
LocalStorage: Save and retrieve favorite cities.
<br>
<br>
APIs Used 🌐
<br>
OpenWeatherMap API: Provides weather data including current weather, forecasts, and air quality.

<br>
Error Handling ⚠️
<br>
If the city name is invalid or not found, an error message is displayed in red, and the UI clears the previous weather data.
<br>
If geolocation is not supported by the browser or the user denies access, the app will show an alert.
<br>

<br>
File Structure 📂
<br>
graphql
Copy code
├── index.html            # Main HTML file
├── style.css             # CSS file for styling
├── script.js             # JavaScript file for functionality
└── README.md             # This readme file

<br>
Future Improvements 🌱
<br>
Add a feature to save and display favorite cities using LocalStorage.
<br>
Show more detailed weather metrics (e.g., wind speed, humidity, UV index).
<br>
Integrate more weather background animations based on weather conditions.
<br>
Add unit conversion (Celsius/Fahrenheit).
<br>
