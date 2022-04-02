let display = document.getElementById('display');
let item = document.getElementsByClassName('item');
let item = Array.from (document.getElementsByClassName('item'));

item.map (item => {
    item.addEventListener ('click', (e) => {
        switch(e.target.innerText){
            default:
                display.innerText += e.target.innerText;
        }
    });
});