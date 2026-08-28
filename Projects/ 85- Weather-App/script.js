

const selectElement = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");

const locationEl = document.getElementById("location");
const weatherMainEl = document.getElementById("weather-main");
const weatherIconEl = document.getElementById("weather-icon");
const mainTempEl = document.getElementById("main-temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust");

// Important: Must NOT be declared using const (declared with let or async function statement)
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function showWeather(city) {
  if (!city) return;

  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  // Extract nested API properties safely with fallback 'N/A'
  const name = data.name ?? "N/A";
  const weatherMain = data.weather?.[0]?.main ?? "N/A";
  const icon = data.weather?.[0]?.icon ?? "";
  const temp = data.main?.temp ?? "N/A";
  const feelsLike = data.main?.feels_like ?? "N/A";
  const humidity = data.main?.humidity ?? "N/A";
  const windSpeed = data.wind?.speed ?? "N/A";
  const windGust = data.wind?.gust ?? "N/A";

  // Update DOM elements
  locationEl.textContent = name;
  weatherMainEl.textContent = weatherMain;
  weatherIconEl.src = icon;
  mainTempEl.textContent = temp;
  feelsLikeEl.textContent = feelsLike;
  humidityEl.textContent = humidity;
  windEl.textContent = windSpeed;
  windGustEl.textContent = windGust;
}

getWeatherBtn.addEventListener("click", () => {
  const selectedCity = selectElement.value;
  if (selectedCity) {
    showWeather(selectedCity);
  }
});






