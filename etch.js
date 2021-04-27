//select #grid-container

const container = document.querySelector('#grid-container');





//function to create multiple divs

function boxes (){


//loop for multiple boxes


    for(x=0;x<256;x++){


// create new div - box 1

const div1 = document.createElement('div');
div1.classList.add('box');

// add content to box

div1.textContent = "box";

//add box 1 to the html

container.appendChild(div1);
    }







}
boxes();