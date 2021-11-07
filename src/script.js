function dateValues() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let now = new Date();
  let day = days[now.getDay()];

  return `${day} ${now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`;
}
let h2 = document.querySelector("#day-time");
h2.innerHTML = dateValues();

function enterCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("#full-city");
  h1.innerHTML = cityInput.value;
}
let searchCity = document.querySelector(".city");
searchCity.addEventListener("submit", enterCity);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 27;

  let highElement = document.querySelector("#high-today");
  highElement.innerHTML = 27;

  let lowElement = document.querySelector("#low-today");
  lowElement.innerHTML = 10;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 81;

  let highElement = document.querySelector("#high-today");
  highElement.innerHTML = 81;

  let lowElement = document.querySelector("#low-today");
  lowElement.innerHTML = 56;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function showTemp(response) {
  let currentTemperature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temperature");
  let city = document.querySelector("#full-city");
  city.innerHTML = `${response.data.name}`;
  tempElement.innerHTML = `${currentTemperature}`;
}

function showValues(event) {
  event.preventDefault();
  let newCity = document.querySelector("#city-input");
  let city = document.querySelector("#full-city");
  city.innerHTML = `${newCity.value}`;
  let apiKey = "28c588d8f6b70817f51bae80ed492462";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&appid=${apiKey}&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", showValues);
