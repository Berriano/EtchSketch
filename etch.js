
                        //////create grid container////////

const container = document.querySelector('.container'); 
const gridCont = document.createElement('div');
gridCont.classList.add('grid-container');
container.appendChild(gridCont);

 
                /////////////////create clear button////////////

const clearBtn = document.createElement('button');
clearBtn.classList.add('clear-btn');
container.appendChild(clearBtn);
clearBtn.textContent = "Clear";


                        //////boxes function///////


function boxes (){

                            /// grid size prompt box function ///


let  wGrid = prompt("How many boxes wide?");
let  hGrid = prompt("how many boxes high?");
let gridSize = wGrid * hGrid;
                                   
                         ///////// loop  ////////////

let x=0;

    for(x=0;x<gridSize;x++){


               ////////// to create new div-box class 'box'/////////



const gridContainer = document.querySelector('.grid-container');
const div1 = document.createElement('div');
div1.classList.add('box');
gridContainer.appendChild(div1);

       
                       ////////// ///change box color/////////////

const allGrid = document.querySelectorAll(".box");
allGrid.forEach((div) => {div.addEventListener('mouseover', function (colChange){
                                              colChange.target.style.background = 'blue';});
    })
   
         //////////////////////clear button function/////////////////////

const clBtn = document.querySelector('.clear-btn');
clBtn.addEventListener('click', function(){

    let clearGrid = document.querySelector(".box");
    clearGrid.remove();

    //div1.classList.remove('box')

 })
 

}

                           /////////////end of loop/////////////


console.log(gridSize);

}

    

                      ///////////////end of boxes function//////////////

                    

         



                        //run boxes function and check gridsizre value

boxes();






                   //////////////////////////// end ////////////////////////////////









