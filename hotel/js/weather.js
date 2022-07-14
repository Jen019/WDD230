const temp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector('.weather-icon');
const h = document.querySelector('#humid');
const captionDesc = document.querySelector('.weather-desc');


const currentWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.6121&lon=-116.3915&units=imperial&appid=3152f5cb63193c20d2712d8adecda329";

fetch(currentWeatherURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const currentTemp = data.current.temp;
    const humid = data.current.humidity;
    const iconsrc = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    const desc = data.current.weather[0].description;

    temp.textContent = Math.round(currentTemp);
    h.textContent = humid;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  });