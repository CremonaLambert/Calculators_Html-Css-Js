(function(){
    let screen = document.querySelector('.board');
    let buttons = document.querySelectorAll('.item');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

     buttons.forEach(function(item){
         item.addEventListener('click', function(e) {
             let value = e.target.item;
             screen.value += value;
         })
     });

})();