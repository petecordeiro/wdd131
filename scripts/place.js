// Date related in the footer
const today = new Date();
currentyear.innerHTML = `<span class="currentyear">© ${today.getFullYear()}</span>`;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = lastModified;

// Wind Chill Calculator

let temperature = 10; // Predefined temperature
let tempType = "C"; // Predefined temperature type (F/C)
let windSpeed = 5; // Predefined wind speed in mph
let windChill = "N/A"; // Default to "N/A"

function calculateWindChill(temperatureC, windSpeed) {
  let windChillC =
    13.12 +
    0.6215 * temperatureC -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperatureC * Math.pow(windSpeed, 0.16);
  return windChillC;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

function celsiusToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}

let convertedTemperature =
  tempType === "C" ? temperature : celsiusToFahrenheit(temperature);

// // Conditions for a valid wind chill calculation:
if (
  (tempType === "C" && temperature <= 10 && windSpeed > 4.8) ||
  (tempType === "F" && temperature <= 50 && windSpeed > 3)
) {
  windChill = calculateWindChill(temperature, windSpeed);
}

// // Print temperature and wind chill inside the span elements
document.getElementById(
  "temperature"
).textContent = `${temperature}° ${tempType}`;
document.getElementById("windChill").textContent = `${
  windChill === "N/A" ? "N/A" : windChill.toFixed(2) + "°C"
}`;
