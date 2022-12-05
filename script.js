
(function(){
    let screen = document.querySelector('.board');
    let buttons = document.querySelectorAll('.item');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');
    let del = document.getElementById('del');

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
    
     
})()

