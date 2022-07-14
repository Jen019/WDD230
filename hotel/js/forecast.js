const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.6121&lon=-116.3915&exclude=current,hourly,minutely,alerts&units=imperial&appid=3152f5cb63193c20d2712d8adecda329";
let forecastEl = document.getElementsByClassName("forecast");

fetch(forecastURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        data.daily.forEach((value, index) => {
            if (index > 0 && index <=3) {
                let dayname = new Date(value.dt * 1000).toLocaleDateString("en", {
                    weekday: "long",
                });
                let icon = `https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
                let temp = value.temp.day.toFixed(0);
                let desc = value.weather[0].description;

                let card = document.createElement('div');
                let days = document.createElement('h2');
                let p1 = document.createElement('p');
                let img = document.createElement('img');

                img.className ="weather-icon";
                p1.className = "fTemp";
                days.className = "fday";
                days.textContent = `${dayname}`;
                p1.textContent = `${temp} \u00B0F`;

                img.setAttribute('src', `${icon}`);
                img.setAttribute('alt', `${desc}`);

                card.appendChild(days);
                card.appendChild(img);
                card.appendChild(p1);

                document.querySelector('.forecast').appendChild(card);
            }




        });
    });