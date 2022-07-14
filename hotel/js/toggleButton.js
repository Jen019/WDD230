function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

document.getElementById("message").onclick = function (){
    location.href ="https://jen019.github.io/wdd230/hotel/reservation.html";
};




