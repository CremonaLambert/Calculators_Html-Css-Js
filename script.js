
(function(){
    let screen = document.querySelector('.board');
    let buttons = document.querySelectorAll('.item');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

     buttons.forEach(function(item){
         item.addEventListener('click', function(e) {
            // screen.innerHTML = e.target.innerHTML
            let onScreen = e.target.innerHTML;
            screen.innerHTML = screen.innerHTML + onScreen;
         })
     });

    //  let Result = document.getElementsByClassName('board');
    //  let calcul = (Number) => {
    //     Result.innerHTML = Result.innerHTML + Number;
    //     Result.innerHTML = eval(Result.innerHTML);
    //     console.log(Result.innerHTML);
    //  }

     function clean(){
        let clean = document.getElementById('clean');
        screen.innerHTML = "";
     }

})()

