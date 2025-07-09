function init(){
    const gridElm = document.querySelector('.grid')
    function createGrid(){
        //for every cell that we require create a div 
        //append this cell to our grid
        for(let i=0; i<100; i++){
            const cell = document.createElement('div')
            cell.textContent = i//write a number on each sell
            gridElm.appendChild(cell)
        }
    }
    createGrid()
}

document.addEventListener('DOMContentLoaded', init)