//functions of Eish elements------------->
const screen = document.getElementById('screen');
// console.log(screen.value);

const btns = document.querySelectorAll('button');
// console.log(btns);

const clear = document.querySelector('.clear');
// console.log(clear);

const back = document.querySelector('.back');
// console.log(back);

clear.addEventListener('click', function(e){
    // const displayOnScreen = screen.value;
    // displayOnScreen = "";
    screen.value = "";
});

const equal = document.querySelector('.equal');
// console.log(equal);


back.addEventListener('click', function(e){
    screen.value = screen.value.slice(0,-1);
});

btns.forEach(function(btns){
    btns.addEventListener('click', function(e){
        screen.value =screen.value + e.target.textContent;
    });
});

equal.addEventListener('click', function(e){
    screen.value = eval(screen.value);
});


