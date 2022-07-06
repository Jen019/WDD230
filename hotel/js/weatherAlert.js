const sender = document.querySelector("#sender_name");
const wEvent = document.querySelector('#event');
const start = document.querySelector('#start');
const end = document.querySelector('#end');
const wDesc = document.querySelector('#description');
const tags = document.querySelector('#tag');


const weatherAlertURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.6121&lon=-116.3915&excludes=hourly,minutely&units=imperial&appid=3152f5cb63193c20d2712d8adecda329";

fetch("js/alerts.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
 
    const senderName = data.alerts[0].sender_name;
    const weatherEvent = data.alerts[0].event;
    const startDate = data.alerts[0].start;
    const endDate =  data.alerts[0].end;
    const weatherDesc = data.alerts[0].description;
    //const alertTag = data.alerts[0].tags;
    const sd = new Date(startDate);
    const ed = new Date(endDate);

    sd.toDateString;
    ed.toDateString;
    

    sender.textContent = senderName;
    wEvent.textContent = weatherEvent;
    start.textContent = sd;
    end.textContent = ed;
    wDesc.textContent = weatherDesc;
    //tags.textContent = alertTag;
  });