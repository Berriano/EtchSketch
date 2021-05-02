                     
                            //////create grid container////////


const container = document.querySelector('.container'); 
const gridCont = document.createElement('div');

gridCont.classList.add('grid-container');
gridCont.setAttribute('id', 'grid-container')
gridCont.removeAttribute('class','grid-container')
container.appendChild(gridCont);


          ////////////////////call boxes function to start////////////////////

boxes();

                        ////////////// boxes function //////////////


function boxes (){

                       //////////// grid size prompt box ////////////////


let  wGrid = prompt("How many boxes squared?");
let gridSize = wGrid * wGrid;



                   ///////////// size grid to boxes amount /////////////////


  let gridCss = document.getElementById('grid-container');

      gridCss.style.gridTemplateColumns = `repeat(${wGrid}, 1fr)`;
      gridCss.style.gridTemplateRows = `repeat(${wGrid}, 1fr)`;



                      ///////////// loop grid creation //////////////

    
       for(let x=0;x<gridSize;x++){


                  ////////// to create new div-box class 'box'/////////



const gridContainer = document.getElementById('grid-container');
const div1 = document.createElement('div');

div1.classList.add('box');
gridContainer.appendChild(div1);

                
       
                       ///////////// change box color /////////////


const allGrid = document.querySelectorAll(".box");

allGrid.forEach((div) => {div.addEventListener('mouseover', function (colChange){
                                              colChange.target.style.background = 'blue';});
  })



                          /////////////end of loop//////////////

}

                      ///////////////end of boxes function//////////////

}
            
              //////////////////////// clear button ////////////////////////


    const clBtn = document.getElementById('clear-btn');

    clBtn.addEventListener('click', function(){
     let element = document.getElementById('grid-container');
     while (element.firstChild){
       element.removeChild(element.firstChild);
     }
})            
  

                    /////////////////restart by click/////////////////


const restart = document.getElementById('clear-btn');

restart.addEventListener('click', boxes);



               //////////////////////////// end ////////////////////////////////



              





