const sender = document.querySelector("#sender_name");
const wEvent = document.querySelector('#event');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const wDesc = document.querySelector('#description');
const alertBanner = document.querySelector('#weatherAlert');


const weatherAlertURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.6121&lon=-116.3915&excludes=hourly,minutely&units=imperial&appid=3152f5cb63193c20d2712d8adecda329";

fetch(weatherAlertURL)
  .then((response) => response.json())
  .then((data) => {
    if(data.alerts != undefined){
    const header = document.createElement('h3');  
    document.querySelector('div.weatherAlert span').appendChild(header);
    const senderName = data.alerts[0].sender_name;
    const weatherEvent = data.alerts[0].event;
    const startDate = data.alerts[0].start;
    const endDate =  data.alerts[0].end;
    const weatherDesc = data.alerts[0].description;
    const sd = new Date(startDate);
    const ed = new Date(endDate);

    sd.toDateString;
    ed.toDateString;
    
    header.textContent = "Danger! Weather Alert!";
    sender.textContent = senderName;
    wEvent.textContent = weatherEvent;
    start.textContent = sd;
    end.textContent = ed;
    wDesc.textContent = weatherDesc;

    }
    
  });