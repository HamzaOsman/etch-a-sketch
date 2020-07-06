let dimension = 10;
const resetButton = document.querySelector("#reset");
const gridContainer = document.querySelector("#grid-container");
createGrid(dimension, gridContainer);

resetButton.addEventListener("click", () => {
    resetGrid();
});


function createGrid(dimension) {
    gridContainer.style.cssText = `grid-template-columns: repeat(${dimension}, auto)`
    
    for (let i = 0; i < dimension ** 2; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "grid-box");

        let randRed = Math.floor(Math.random() * 255);
        let randGreen = Math.floor(Math.random() * 255);
        let randBlue = Math.floor(Math.random() * 255);

        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `rgb(${randRed}, ${randGreen}
                    ,${randBlue})`
        });

        gridContainer.appendChild(div);
    }
}

function resetGrid() {
    dimension = prompt("Enter the new dimensions");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
    createGrid(dimension, gridContainer)
}
