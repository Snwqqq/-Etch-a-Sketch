const gridHolder = document.querySelector('.grid-holder');
let gridSize = 16;
const resetGridBut = document.querySelector('.grid-reset');
const gridResize = document.querySelector('.grid-resize');
let cellGridSize;

createGrid();

gridHolder.addEventListener("mouseover",(event)=>{
    let target = event.target;
    let div = target;
    div.style.backgroundColor = 'white';
})

gridResize.addEventListener('click', ()=>{
    let newGridSize = parseInt(window.prompt("What new grid size (MAX 100)","100"));
    if (newGridSize>100||isNaN(!newGridSize)){
        newGridSize=100;
    }
    gridSize = newGridSize;
    deleteGrid(gridHolder);
    createGrid();
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
        let div = document.createElement('div');
        div.classList.add('grid-cell');
        div.id=i;
        div.style.height = `${100/gridSize}%`;
        div.style.minWidth = `${100/gridSize}%`;   
        gridHolder.appendChild(div);
    }
}