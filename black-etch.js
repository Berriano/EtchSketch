

                            //////create grid container////////


const container = document.querySelector('.container'); 
const gridCont = document.createElement('div');

gridCont.classList.add('grid-container');
gridCont.setAttribute('id', 'grid-container')
gridCont.removeAttribute('class','grid-container')
container.appendChild(gridCont);

 



                        ////////////// boxes function //////////////
                                    
                    
function boxes (){

                       //////////// grid size prompt box ////////////////

pBox();  

function pBox (){
  wGrid = prompt("How many boxes squared(1-100)?");
  gridSize = wGrid * wGrid;


  if( wGrid > 100){alert("That\'s over 100.Try again!");
pBox();
}
else if ( wGrid < 1){alert('That\'s under 1. Try again');
pBox();
}

}

              ///////////// size grid from prompt /////////////////

                 
  let gridCss = document.getElementById('grid-container');

      gridCss.style.gridTemplateColumns = `repeat(${wGrid}, 1fr)`;
      gridCss.style.gridTemplateRows = `repeat(${wGrid}, 1fr)`;


 const gridContainer = document.getElementById('grid-container');

                       ///////////// loop grid creation //////////////

     for(let x=0;x<gridSize;x++){


                  ////////// create new div-box class 'box'/////////

const div1 = document.createElement('div');

div1.classList.add('box');
gridContainer.appendChild(div1);

}           
                                /////////////end of loop//////////////


                             ///////////// change box color /////////////

const allGrid = document.querySelectorAll(".box");

  allGrid.forEach((div) => {div.addEventListener('mouseover', function (colChange){
                                        colChange.target.style.background = "black"});
                                                               
  })
 }
                       ///////////////end of boxes function//////////////   

               
              
              
     /////////////////////////////// generate random color /////////////////////////

function genRandCol(){
         let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);    
             return randomColor;
                               
   }     
       /////////////////////////////// end of random color ////////////////////////////

     
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


          ////////////////////call boxes function to start////////////////////
    
boxes();

               //////////////////////////// end ////////////////////////////////



              





