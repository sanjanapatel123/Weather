const API_KEY = "d371143ecfa931bc7283341e7511d11a";
//const API = "https://api.openweathermap.org/data/2.5/weather?units=metric&p=";
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const searchbox = document.querySelector("#search")
const searchI = document.querySelector(".search")
const weather = document.querySelector(".weather")
const form = document.querySelector('form');

const checkWeather = async (city)=>{
  weather.innerHTML = "Loading..."
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
const response = await fetch(url)
var data = await response.json();
console.log(data);
showWeather(data);
}
const showWeather=(data)=>{
  if(data.cod == "404"){
        weather.innerHTML = "<h1>City Not Found</h1>"
        return;
    }
  weather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="weather-icon" />
        <h1 class="temp">${data.main.temp}°C</h1>
        <h2 class="city">${data.name}</h2>
        <div class="details">
          <div class="col">
            <img src="images/humidity.png" alt="" />
            <div>
              <p class="humidity">${data.main.humidity}%</p>
              <p>humidity</p>
            </div>
          </div>

          <div class="col">
            <img src="images/wind.png" alt="" />
            <div>
              <p class="wind">${data.wind.speed}km/h</p>
              <p>wind speed</p>
            </div>
          </div>
        </div>`
}
searchI.addEventListener("click",(event)=>{
    checkWeather(searchbox.value);
    console.log(searchbox.value);
    event.preventDefault();
})
