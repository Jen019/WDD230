const daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", 
                     "September", "October", "November", "December"];
const date = new Date();
const day = daynames[date.getDay()];
const month = monthnames[date.getMonth()];
const year = date.getFullYear();
const currentdate = day + ", " + date.getDate() + " " + month + " " + year;

if(day == "Monday" || day == "Tuesday"){
    const banner = document.createElement("h2");
    const message = document.createTextNode("Come join us for the chamber meet and greet Wednesday at 7:00 p.m");
    banner.appendChild(message);
    document.getElementById("displayBanner").appendChild(banner);
}

document.getElementById("currentDate").textContent = currentdate;
document.getElementById("currentYear").textContent = year;
document.getElementById("lastUpdateDate").textContent = document.lastModified;


function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;



