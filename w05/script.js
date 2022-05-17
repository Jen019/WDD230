const list = document.querySelector('ul');
const input = document.getElementById('favChap');
const button = document.getElementById('addChapter');

button.addEventListener('click', function() {
    const favoriteVerse = input.value;
    if (favoriteVerse.length == 0)
      { 
         alert("Input is Blank Please Enter a Favorite Chapter");  	
         return false; 
      }  	

    const listScripture = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');

    listScripture.appendChild(listText);
    listText.textContent = favoriteVerse;
    listScripture.appendChild(deleteBtn);
    deleteBtn.textContent = "❌";
    list.appendChild(listScripture);
    input.value = '';

    deleteBtn.addEventListener('click', function() {
      list.removeChild(listScripture);
    });

    input.focus();
  });