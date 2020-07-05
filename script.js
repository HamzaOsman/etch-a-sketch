let dimension = 10;
const resetButton = document.querySelector("#reset");
const gridContainer = document.querySelector("#grid-container");
createGrid(dimension, gridContainer);

resetButton.addEventListener("click", () => {
    resetGrid();
});


function createGrid(dimension) {
    let s = "repeat(" + dimension + ", auto)";
    gridContainer.style.gridTemplateColumns = s;

    for (let i = 0; i < dimension ** 2; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "grid-box");
       
        let randRed = Math.floor(Math.random() * 255);
        let randGreen = Math.floor(Math.random() * 255);
        let randBlue = Math.floor(Math.random() * 255);

        let s2 = "rgb("+randRed+","+randGreen+","+randBlue+")";
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = s2
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
