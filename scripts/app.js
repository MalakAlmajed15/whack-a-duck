function init(){
    const gridElm = document.querySelector('.grid')
    const cells = []
    const gridWidth = 10 //in one line
    const numberOfCells = gridWidth * gridWidth //10*10 == 100 cells
    let duckPosition = 4 //assigning a position for the duck

    function addDuck(){
        cells[duckPosition].classList.add('duck')//adding the class 'duck' to the position(index, not the actual cell)
    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck')//to remove the duck at a given index
    }

    function play(){
        setInterval(() => {
            removeDuck()
            duckPosition = Math.floor(Math.random()*numberOfCells)
            addDuck()
        },3000)
    }

    function createGrid(){
        //for every cell that we require create a div 
        //append this cell to our grid
        for(let i=0; i<numberOfCells; i++){
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i//write a number on each sell
            cells.push(cell)
            gridElm.appendChild(cell)
        }
        console.log(cells)
    }
    createGrid()
    // addDuck()
    // removeDuck()
    play()
}

document.addEventListener('DOMContentLoaded', init)