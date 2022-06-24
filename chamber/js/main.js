function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

const date = new Date();
const year = date.getFullYear();

document.getElementById("currentYear").textContent = year;
document.getElementById("lastUpdateDate").textContent = document.lastModified;