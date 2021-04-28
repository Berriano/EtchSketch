//select #grid-container



const container = document.querySelector('#grid-container');


//function to create multiple divs

function boxes (){

//loop for multiple boxes

let x=0;

    for(x=0;x<256;x++){


// create new div-box


const div1 = document.createElement('div');
div1.classList.add('box');


//add box to the html


container.appendChild(div1);



// change box color

const allGrid = document.querySelectorAll("div.box");

allGrid.forEach((div) => {

    div.addEventListener('mouseover', function (colChange)  {colChange.target.style.background = 'blue';}
    
    );
 })


}


//clear button

const clearBtn = document.querySelector("#clear-btn");
const clearGrid = document.querySelectorAll(".box");
 


clearGrid.forEach((div) => {
clearBtn.addEventListener('click',function(){div.style.background = 'white';})


    })

}
  

boxes();





//function for promt box

function pBox(){
    let userGrid = prompt("How many per side for new grid?");
    }












