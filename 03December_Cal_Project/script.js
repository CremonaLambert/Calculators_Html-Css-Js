// element from the html doc

let num1 = document.getElementById('number1');
let num2 = document.getElementById('number2');
let res = document.getElementById('result');
// console.log(res.value);


//addition
document.getElementById('add').addEventListener('click', function(e){
    res.value = parseInt(num1.value) + parseInt(num2.value);
});

//substraction
document.getElementById('sub').addEventListener('click', function(e){
    res.value =parseInt(num1.value) - parseInt(num2.value);
});

//multiplication

document.getElementById('mult').addEventListener('click', function(e){
    res.value = parseInt(num1.value) * parseInt(num2.value);
});

//division

document.getElementById('div').addEventListener('click', function(e){
    res.value = parseInt(num1.value) / parseInt(num2.value);
})