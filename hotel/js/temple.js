const requestURL = 'js/temple.json';
const cardf = document.querySelector('.front');
fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) { 
const temples = jsonObject['temples'];
  temples.forEach(displayTemples);


});

function displayTemples(temples) {
    let h = document.createElement('h2');
    let h1 = document.createElement('h2');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h2');
    let h4 = document.createElement('h2');
    let ul = document.createElement('ul');
    let l = document.createElement('li');
    let l1 = document.createElement('li');
    let l2 = document.createElement('li');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let templeImg = document.createElement('img');
    let like =  document.createElement('img');
  
    ul.className = 'temp-desc';
    p1.className = 'temp-desc';
    p2.className = 'temp-desc';
    p3.className = 'temp-desc';
    p4.className = 'temp-desc';
    like.className = "heart-like";
    templeImg.className = 'tempImg';
    h1.textContent = `${temples["templeName"]}`;
    h.textContent = "Contact Information";
    h2.textContent = "Temple Services";
    h3.textContent = "Temple Schedule";
    h4.textContent = "Temple Closures";
    l.textContent = `Phone Number${temples["phoneNumber"]}`;
    p1.textContent = `${temples["services"]}`;
    p2.textContent = `${temples["schedule"]}`;
    p3.textContent = `${temples["closure2022"]}`;
    p4.textContent = `${temples["closure2023"]}`;
    l1.textContent = `${temples["describe"]}`;
    l2.textContent = 
    `Address: ${temples["address"]}`;

    like.setAttribute('src', `${temples["like"]}`);
    like.setAttribute('alt', `Heart Like`);
    like.setAttribute('loading', 'lazy');
    like.setAttribute('onclick','toggleImage();')

   
    templeImg.setAttribute('src', `${temples["templeImg"]}`);
    templeImg.setAttribute('alt', `${temples["describe"]}`);
    templeImg.setAttribute('loading', 'lazy');
    templeImg.setAttribute('width', `${temples["width"]}`);
    templeImg.setAttribute('height', `${temples["height"]}`);
    document.querySelector('.temp-cards div').appendChild(h1);
    document.querySelector('.temp-cards div').appendChild(templeImg);
    document.querySelector('.temp-cards div').appendChild(like);
    document.querySelector('.temp-cards div').appendChild(h);
    document.querySelector('.temp-cards div').appendChild(ul); 
    document.querySelector('.temp-cards div').appendChild(l);
    document.querySelector('.temp-cards div').appendChild(l1); 
    document.querySelector('.temp-cards div').appendChild(l2); 
    ul.appendChild(l);
    ul.appendChild(l1);
    ul.appendChild(l2);
    document.querySelector('.temp-cards div').appendChild(h2); 
    document.querySelector('.temp-cards div').appendChild(p1); 
    document.querySelector('.temp-cards div').appendChild(h3);
    document.querySelector('.temp-cards div').appendChild(p2);
    document.querySelector('.temp-cards div').appendChild(h4);
    document.querySelector('.temp-cards div').appendChild(p3);
    document.querySelector('.temp-cards div').appendChild(p4);

  }