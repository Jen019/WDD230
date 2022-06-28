const requestURL = 'https://jen019.github.io/wdd230/chamber/directory/data.json';
const spotlight = document.querySelector('.spotlightDesign');
fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const first3 = data['businesses'].slice(0, 3);
    first3.forEach(displaySpotlights);
    console.log(first3);
  });

  function displaySpotlights(businesses){
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let logo = document.createElement('img');

    card.className = 'homeData';
    logo.className = 'businessImg';
    p1.className = 'desc';
    h2.textContent = `${businesses["name"]}`
    p1.textContent = 
    `Phonenumber: ${businesses["phonenumber"]}
    Website: ${businesses["website"]}
    Description: ${businesses["description"]}`;
  
    logo.setAttribute('src', `${businesses["imageURL"]}`);
    logo.setAttribute('alt', `Logo of ${businesses["name"]}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(p1);
   
    document.querySelector('.spotlightDesign').appendChild(card);

  }

  

  

  
