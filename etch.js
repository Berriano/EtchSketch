
                        //////boxes function///////


function boxes (){


                         ///////// loop  ////////////

let x=0;

    for(x=0;x<newgrid;x++){


                          ///// create new div-box /////


const container = document.querySelector('#grid-container');
const div1 = document.createElement('div');
div1.classList.add('box');
container.appendChild(div1);



}


                           /////////////end of loop/////////////



                       ////////// ///change box color/////////////



const allGrid = document.querySelectorAll("div.box");

allGrid.forEach((div) => {div.addEventListener('mouseover', function (colChange){
                                     colChange.target.style.background = 'blue';});
})
 


                                    /// clear button ///


const clearBtn = document.querySelector("#clear-btn");
const clearGrid = document.querySelectorAll(".box"); // selects created element div
 
clearGrid.forEach((div) => {clearBtn.addEventListener('click',function(){
                                         div.style.background = 'white';})})

clearBtn.addEventListener('click', gridSize)


}



                      ///////////////end of boxes function/////////////////

 
                             /// grid size prompt box function ///


let newgrid = gridSize();

    function gridSize(){

        let wGrid=0;
        let hGrid=0;

            wGrid = prompt("How many boxes wide?");
            hGrid = prompt("how many boxes high?");

            return wGrid * hGrid; 
}




//run boxes function and check gridsizre value
boxes();

console.log(newgrid);


                   /////////////// end ///////////////









