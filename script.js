const body = document.body;
const container = document.createElement("div");
let n = 16


body.appendChild(container);

for(let x = 0; x < n; x++){
    const gridContainer = document.createElement("div");
    container.appendChild(gridContainer);
    gridContainer.classList.add("gridContainer");
    for (let i = 0; i < n; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridContainer.appendChild(gridDiv);
    }
}


