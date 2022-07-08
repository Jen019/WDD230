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
    let cb = document.createElement('div');
    let h2 = document.createElement('h2');
    let ul = document.createElement('ul');
    let p1 = document.createElement('li');
    let p2 = document.createElement('li');
    let p3 = document.createElement('li');
    let p4 = document.createElement('li');
    let p5 = document.createElement('li');
    let templeImg = document.createElement('img');

    ul.className = 'temp-desc';
    document.querySelector('.front').appendChild(h2);
    templeImg.className = 'tempImg';
    h2.textContent = `${temples["templeName"]}`;
    p1.textContent = 
    `Address: ${temples["streetAddress"]}`;
    p2.textContent = `${temples["cityAddress"]}`;
    p3.textContent = `${temples["stateAddress"]}`;
    p4.textContent = `${temples["zipcode"]}`;
    p5.textContent = `${temples["country"]}`;

    document.querySelector('.back').appendChild(ul);

    ul.appendChild(p1);
    ul.appendChild(p2);
    ul.appendChild(p3);
    ul.appendChild(p4);
    ul.appendChild(p5);
  
    
    templeImg.setAttribute('src', `${temples["templeImg"]}`);
    templeImg.setAttribute('alt', `${temples["describe"]}`);
    templeImg.setAttribute('loading', 'lazy');

    document.querySelector('.front').appendChild(templeImg);
   
    document.querySelector('div.back').appendChild(cb);

  }