
                            //////create grid container////////


const container = document.querySelector('.container'); 
const gridCont = document.createElement('div');

gridCont.classList.add('grid-container');
gridCont.setAttribute('id', 'grid-container')
gridCont.removeAttribute('class','grid-container')
container.appendChild(gridCont);

 
        ///////////////////////////////// buttons for color change //////////////////////////////////

///rgb///

const topLeft =document.getElementById('bot-left');
const rgbBtn = document.createElement('button');
 rgbBtn.classList.add('rgb');
  rgbBtn.setAttribute('id', 'rgbbutton');
  rgbBtn.textContent = "RANDOM RGB";
    topLeft.appendChild(rgbBtn);
    rgbBtn.addEventListener('click', function(){

      const rgbChnge = document.querySelectorAll(".box");
            rgbChnge.forEach((div) => {div.addEventListener('mouseover', function (colChange){
                             colChange.target.style.background = genRandCol()});
                                                    
  })
  
 })

         /////////////////////////////// generate random color /////////////////////////    
  
function genRandCol(){
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);    
      return randomColor;
                        
}     
          /////////////////////////////// end of random color ////////////////////////////

        
///black////

const topRight =document.querySelector('#bot-right');
const blkBtn =document.createElement('button');
 blkBtn.classList.add('blkbtn');
  blkBtn.setAttribute('id', 'blkbtn');
  blkBtn.textContent = 'BLACK';
   topRight.appendChild(blkBtn);
   blkBtn.addEventListener('click', function(){

    const blkChnge = document.querySelectorAll(".box");
          blkChnge.forEach((div) => {div.addEventListener('mouseover', function (colChange){
                           colChange.target.style.background = "black"});
                                                  
  })

})
  

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

///////////////////// add value to screen /////////////////////////

let gValue = document.getElementById('clear-btn');
gValue.textContent = 'Grid size: ' + wGrid + ' x ' + wGrid + ' squares' ;
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

}
                       ///////////////end of boxes function//////////////   

      
    
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



              





