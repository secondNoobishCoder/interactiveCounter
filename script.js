const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const number = document.getElementById('number');
let counter = 0;

increase.addEventListener('click', function(){
    counter++;
    number.innerHTML = counter;
})

decrease.addEventListener('click', function(){
    counter--;
    number.innerHTML = counter;
})

reset.addEventListener('click', function(){
    counter = 0;
    number.innerHTML = counter;
})