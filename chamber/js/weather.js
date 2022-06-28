const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const wind = document.querySelector('#speed');
const captionDesc = document.querySelector('figcaption');
const base_url = "https://api.openweathermap.org/data/2.5/weather";
const city_name = "Idaho Falls";
const state_code = "ID";
const country_code = "US";
const appid = "3152f5cb63193c20d2712d8adecda329";
const units = "imperial";
const weatherUrl = `${base_url}?q=${city_name},${state_code},${country_code}&appid=${appid}&units=${units}`;

fetch("weather.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
    const temp = data.main.temp;
    const windSpeed = data.wind.speed;
    const speed = data.wind.speed;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;

    currentTemp.textContent = Math.round(temp);
    wind.textContent = speed;
   
  
  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;


if(temp <=50 && windSpeed >= 3.0){
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed,0.16) + 0.4275 * temp * Math.pow(windSpeed,0.16);

    wc = Math.round(wc);

   document.getElementById("windChill").textContent = wc;

}

else{

document.getElementById("windChill").textContent = "N/A";

}
  });