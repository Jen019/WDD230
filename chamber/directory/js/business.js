
const requestURL = 'https://jen019.github.io/wdd230/chamber/directory/data.json';


const cards = document.querySelector('.cards');

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject); 

const businesses = jsonObject['businesses'];
  businesses.forEach(displayBusinesses);
});

function displayBusinesses(businesses) {
   
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let logo = document.createElement('img');

    h2.textContent = `${businesses["name"]}`;
    p1.textContent = `${businesses["address"]}`;
    p2.textContent = `${businesses["phonenumber"]}`;
    p3.textContent = `${businesses["website"]}`
    p4.textContent = `${businesses["description"]}`;
  
    
    logo.setAttribute('src', `${businesses["imageURL"]}`);
    logo.setAttribute('alt', `Logo of ${businesses["name"]}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
  
    document.querySelector('div.cards').appendChild(card);
  }