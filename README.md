WEATHER WEBAPP
<br>

A weather web application that provides real-time weather information, 5-day forecasts, air quality index, and weather alerts for any city in the world. It includes geolocation support to fetch the user's weather automatically, a clean user interface with light and dark mode, and detailed daily and hourly forecasts.
<br>
Features 🚀
<br>
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
<br>
Technologies Used 🧰
<br>

HTML5: Markup structure of the app.
CSS3: Styling the app, including responsive design and dark mode.
JavaScript (ES6): Logic for fetching data from the weather API, handling geolocation, and dynamically updating the DOM.
OpenWeatherMap API: Used to fetch weather, forecast, and air quality data.
LocalStorage: Save and retrieve favorite cities.
<br>
<br>

Here’s a sample README.md for your weather app project:

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
Demo 💻
You can see a live demo of the application here.

Screenshots 📸

Dark mode with current weather data and forecast.

Installation 📦
To run the weather app locally, follow these steps:

Clone this repository:

bash
Copy code
git clone https://github.com/yourusername/weather-app.git
Navigate to the project folder:

bash
Copy code
cd weather-app
Open index.html in your browser:

Simply double-click the index.html file to open it in your preferred browser, or run it through a local server.
Usage 🛠️
Search by City: Type in the name of any city and press "Enter" or click "Get Weather".
Get Location-based Weather: Click the "Get Weather by Location" button to use your device's geolocation to fetch weather information for your current location.
Toggle Dark Mode: Click the "Dark Mode" button to switch between light and dark themes.
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
Get your free API key from OpenWeatherMap and replace the placeholder in the code:
js
Copy code
const apiKey = 'YOUR_API_KEY_HERE';
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
