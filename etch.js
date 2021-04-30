
                        //////create grid container////////

const container = document.querySelector('.container'); 
const gridCont = document.createElement('div');
gridCont.classList.add('grid-container');
gridCont.setAttribute('id', 'grid-container')
gridCont.removeAttribute('class','grid-container')
container.appendChild(gridCont);

          ////////////////////call boxes function to start////////////////////

boxes();

                                //////boxes function///////


function boxes (){

                                /// grid size prompt box ///


let  wGrid = prompt("How many boxes wide?");
let  hGrid = prompt("how many boxes high?");
let gridSize = wGrid * hGrid;
                                   
                               ///////// loop  ////////////



    for(let x=0;x<gridSize;x++){


                  ////////// to create new div-box class 'box'/////////



const gridContainer = document.querySelector('#grid-container');
const div1 = document.createElement('div');
div1.classList.add('box');
gridContainer.appendChild(div1);

       
                       ////////// ///change box color/////////////

const allGrid = document.querySelectorAll(".box");
allGrid.forEach((div) => {div.addEventListener('mouseover', function (colChange){
                                              colChange.target.style.background = 'blue';});
    })


}

                          /////////////end of loop/////////////


console.log(gridSize);

}

                      ///////////////end of boxes function//////////////


            
              //////////////////////clear button function/////////////////////


    const clBtn = document.getElementById('clear-btn');

    clBtn.addEventListener('click', function(){
     let element = document.getElementById('grid-container');
     while (element.firstChild){
       element.removeChild(element.firstChild);
       console.log(element);
     }
})            

                      //////////////// end of clear /////////////////    


                    /////////////////restart by click/////////////////


const restart = document.getElementById('clear-btn');
restart.addEventListener('click', boxes);


               //////////////////////////// end ////////////////////////////////









