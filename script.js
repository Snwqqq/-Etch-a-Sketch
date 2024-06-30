const gridHolder = document.querySelector('.grid-holder');
const gridSize = 16;
const resetGridBut = document.querySelector('.grid-reset');
let currentGridSize =0;
let cellGridSize;

createGrid();

gridHolder.addEventListener("mouseover",(event)=>{
    let target = event.target;
    let div = target;
    div.style.backgroundColor = 'white';
})


resetGridBut.addEventListener('click',()=>{
    deleteGrid(gridHolder);
    createGrid();
})





function deleteGrid(element){
    while(element.firstChild) element.removeChild(element.firstChild);
}

function createGrid(){
    for(let i = 0;i<gridSize*gridSize;i++){
        if(gridSize!==currentGridSize){
         currentGridSize=gridSize;
        }
        let div = document.createElement('div');
        div.classList.add('grid-cell');
        div.id=i;
        div.style.height = `${100/gridSize}%`;
        div.style.minWidth = `${100/gridSize}%`;   
        gridHolder.appendChild(div);
    }
}