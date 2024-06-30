const gridHolder = document.querySelector('.grid-holder');
const gridSize = 16;
let currentGridSize =0;
let cellGridSize;

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

gridHolder.addEventListener("mouseover",(event)=>{
    let target = event.target;
    let div = target;
    div.style.backgroundColor = 'white';
})