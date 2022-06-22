const temp = document.getElementById("temp").textContent;
const windSpeed = document.getElementById("speed").textContent;

console.log(temp);
console.log(windSpeed);

if(temp <=50 && windSpeed >= 3.0){
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed,0.16) + 0.4275 * temp * Math.pow(windSpeed,0.16);

    wc = Math.round(wc);

   document.getElementById("windChill").textContent = wc;

}

else{

document.getElementById("windChill").textContent = "N/A";

}
document.getElementById("speed").textContent = "Wind Speed: " + windSpeed +"mph";
document.getElementById("temp").textContent = temp + " \u00B0F";

