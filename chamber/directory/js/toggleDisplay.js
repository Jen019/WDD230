const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}

gridbutton.addEventListener("click",showGrid);

function showGrid(){
	display.classList.add("cards");
	display.classList.remove("list");
}
