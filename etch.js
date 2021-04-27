//select #grid-container



const container = document.querySelector('#grid-container');


//function to create multiple divs

function boxes (){

//loop for multiple boxes

let x=0;

    for(x=0;x<256;x++){


// create new div-box


const div1 = document.createElement('button');
div1.classList.add('box');


//add box to the html


container.appendChild(div1);


//change box color



const divCol = document.querySelectorAll('button');

divCol.forEach((button) => {

    button.addEventListener('mouseover', function (colChange)  {colChange.target.style.background = 'blue';}
    
    );
 })

// change color back


    //divCol.forEach((button) => {

        //  button.addEventListener("mouseout", function (changeBack)  {changeBack.target.style.background = "white";}
    
   /// );
 //})


  }

}
    
    
    
boxes();
















