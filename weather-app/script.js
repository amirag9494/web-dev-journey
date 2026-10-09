const getWeatherBtn = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city-select") || document.querySelector("select");

const weatherIcon = document.getElementById("weather-icon");
const locationEl = document.getElementById("location");
const weatherMainEl = document.getElementById("weather-main");
const mainTempEl = document.getElementById("main-temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust");

async function getWeather(city) {
  try {
    const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later");
    return;
  }

  const iconSrc = data.weather?.[0]?.icon ?? "N/A";
  if (iconSrc !== "N/A") {
    weatherIcon.src = iconSrc;
  } else {
    weatherIcon.src = "";
    weatherIcon.alt = "N/A";
  }

  locationEl.textContent = data.name ?? "N/A";
  weatherMainEl.textContent = data.weather?.[0]?.main ?? "N/A";
  mainTempEl.textContent = data.main?.temp !== undefined ? `${data.main.temp}` : "N/A";
  feelsLikeEl.textContent = data.main?.feels_like !== undefined ? `${data.main.feels_like}` : "N/A";
  humidityEl.textContent = data.main?.humidity !== undefined ? `${data.main.humidity}` : "N/A";
  windEl.textContent = data.wind?.speed !== undefined ? `${data.wind.speed}` : "N/A";
  windGustEl.textContent = data.wind?.gust !== undefined ? `${data.wind.gust}` : "N/A";
}

getWeatherBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  if (selectedCity) {
    showWeather(selectedCity);
  }
});