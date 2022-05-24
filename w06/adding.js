
const btn = document.getElementById("addBtn");

btn.addEventListener('click',function(){
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
   let add = number1 + number2;
   document.getElementById("display").textContent = add;
    

});