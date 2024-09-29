WEATHER WEBAPP
<br>




Weather App with Dark Mode 🌦️🌙
A weather web application that provides real-time weather information, 5-day forecasts, air quality index, and weather alerts for any city in the world. It includes geolocation support to fetch the user's weather automatically, a clean user interface with light and dark mode, and detailed daily and hourly forecasts.

Features 🚀
Search Weather by City: Enter any city name to retrieve the current weather and forecasts.
Geolocation Support: Automatically fetch the weather for your current location using your browser's geolocation API.
Current Weather Data: Get real-time temperature, weather conditions, and an icon to reflect the weather.
Hourly Forecast: View the weather forecast for the next 24 hours, updated every 3 hours.
Daily Forecast: Get a 7-day weather forecast with temperature and weather conditions.
Weather Alerts: Displays weather alerts for the current city, if any.
Air Quality Index (AQI): Shows the air quality levels based on location.
Dark Mode: Toggle between light and dark modes for a better viewing experience.
Responsive Design: Works across all screen sizes and devices.
<br>
Error Handling: If an invalid city is entered, the app will display an error message.
<br>
Technologies Used 🧰
HTML5: Markup structure of the app.
CSS3: Styling the app, including responsive design and dark mode.
JavaScript (ES6): Logic for fetching data from the weather API, handling geolocation, and dynamically updating the DOM.
OpenWeatherMap API: Used to fetch weather, forecast, and air quality data.
LocalStorage: Save and retrieve favorite cities.
<br>
APIs Used 🌐
OpenWeatherMap API: Provides weather data including current weather, forecasts, and air quality.

<br>
Error Handling ⚠️
If the city name is invalid or not found, an error message is displayed in red, and the UI clears the previous weather data.
If geolocation is not supported by the browser or the user denies access, the app will show an alert.
<br>
Dark Mode 🌑
The app includes a dark mode feature. Clicking the "Dark Mode" button toggles the entire app interface between light and dark themes.
Dark mode is toggled using JavaScript to switch classes in the HTML document.
<br>
File Structure 📂
graphql
Copy code
├── index.html            # Main HTML file
├── style.css             # CSS file for styling
├── script.js             # JavaScript file for functionality
└── README.md             # This readme file
<br>
Future Improvements 🌱
Add a feature to save and display favorite cities using LocalStorage.
Show more detailed weather metrics (e.g., wind speed, humidity, UV index).
Integrate more weather background animations based on weather conditions.
Add unit conversion (Celsius/Fahrenheit).
