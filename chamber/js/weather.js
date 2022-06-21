const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const wind = document.querySelector('#speed');
const captionDesc = document.querySelector('figcaption');
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Idaho Falls,us&units=imperial&appid=3152f5cb63193c20d2712d8adecda329";

fetch(weatherURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    currentTemp.innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    const speed = data.wind.speed;
  
  weatherIcon.setAttribute('src', iconsrc);weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  wind.textContent = speed;
  });