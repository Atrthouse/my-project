//Cloack

function currentTime() {
  let date = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];

  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let time = `${currentDay}  |  ${hours}:${minutes}`;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();

//Choosing City from search -WORKING-

function showTemp(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;
}

function chooseCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#which-city");
  city.innerHTML = cityInput.value;
  let apiKey = "2f476bb43932e1e399e2a6ea6510f337";
  let chosenCity = cityInput.value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}

let cityForm = document.querySelector("#choose-city");
cityForm.addEventListener("submit", chooseCity);

//Geolocation -WORKING-

function showTempAndCity(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let cityResult = response.data.name;
  console.log(cityResult);

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;

  let city = document.querySelector("#city");
  city.innerHTML = cityResult;
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "2f476bb43932e1e399e2a6ea6510f337";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTempAndCity);
}

function getGeoLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let geolocationButton = document.querySelector("#locate-btn");
geolocationButton.addEventListener("click", getGeoLocation);

/////////////////////////////

//C and F

//function convertToC(event) {
//  event.preventDefault();
// temperature.innerHTML = 19;
//}
//let celsius = document.querySelector("#celsius-link");
//celsius.addEventListener("click", convertToC);

//function convertToF(event) {
//  event.preventDefault();
//  temperature.innerHTML = 66;
//}
//let fahrenheit = document.querySelector("#fahrenheit-link");
//fahrenheit.addEventListener("click", convertToF);
