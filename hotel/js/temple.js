const requestURL = 'https://jen019.github.io/wdd230/hotel/js/temple.json';
const cardf = document.querySelector('.front');
const cardb = document.querySelector('.back');
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) { 
const temples = jsonObject['temples'];
  temples.forEach(displayTemples);
});

function displayTemples(temples) {
    let h2 = document.createElement('h2');
    let ul = document.createElement('ul');
    let p1 = document.createElement('li');
    let templeImg = document.createElement('img');

    ul.className = 'temp-desc';
    templeImg.className = 'tempImg';
    h2.textContent = `${temples["templeName"]}`;
    p1.textContent = 
    `Address: ${temples["address"]}`;

   
    templeImg.setAttribute('src', `${temples["templeImg"]}`);
    templeImg.setAttribute('alt', `${temples["describe"]}`);
    templeImg.setAttribute('loading', 'lazy');
    document.querySelector('.front').appendChild(h2);
    document.querySelector('.front').appendChild(templeImg);
    document.querySelector('.front').appendChild(ul); 
    ul.appendChild(p1);

  }