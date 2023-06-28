
(function(){
    let screen = document.querySelector('.board');
    let buttons = document.querySelectorAll('.item');
    let clear = document.querySelector('.clear');
    let equal = document.getElementById('equal');
    let del = document.getElementById('del');
    let on = document.getElementById('on');

    // getting values from each button per click.

     buttons.forEach(function(item){
         item.addEventListener('click', function(e) {
            // screen.innerHTML = e.target.innerHTML
            let onScreen = e.target.innerHTML;
            screen.innerHTML = screen.innerHTML + onScreen;
         })
     });

    // how to setup clear button on click
    
    clear.addEventListener('click', function(e){
        screen.innerHTML = "";
    })

    //how to setup a delete button action on click

    del.addEventListener('click', function(e){
        let result = screen.innerHTML
        screen.innerHTML = result.slice(0,-4);
    })

    //how to setup the "on" button on click
    on.addEventListener('click', function(e){
        if(screen.innerHTML === screen.innerHTML){
            screen.innerHTML = 0;
        }else{
            screen.innerHTML = "";
        }
    })

    //how to make the equal button work

    equal.addEventListener('click', function(e){
        if(screen.innerHTML === screen.innerHTML ){
            screen.innerHTML = "";
        }else{
            let answer = eval(screen.innerHTML);
            screen.innerHTML = answer;
        }
    })

     
})()

