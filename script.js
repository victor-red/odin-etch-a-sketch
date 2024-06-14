const body = document.body;
const container = document.createElement("div");
const newGridBtn = document.createElement("button");

container.classList.add("container");
body.appendChild(container);
container.appendChild(newGridBtn);
newGridBtn.classList.add("newGridBtn")
newGridBtn.textContent = "Create new grid";

function createGrid(n){
    for(let x = 0; x < n; x++){
        const gridContainer = document.createElement("div");
        container.appendChild(gridContainer);
        gridContainer.classList.add("gridContainer");
        for (let i = 0; i < n; i++){
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("gridDiv");
            gridContainer.appendChild(gridDiv);
        }
    }};

function deleteGrid(){
    gridContainers = document.querySelectorAll(".gridContainer");
    gridContainers.forEach(gridContainer => container.removeChild(gridContainer));
}

function addHoverEffect(){
    const grids = document.querySelectorAll(".gridDiv");
    grids.forEach((grid) =>{
        grid.addEventListener("mouseover", () =>{
            grid.classList.add("gridDivHover")
        })
    } )};

function createNewGrid(){
    let n = prompt("Enter the size of your grid (max 100): ");
    if (n == 0){
        alert("Invalid value for size.")}
    else if (n <= 100 && n!=0){
        deleteGrid();
        createGrid(n);
        addHoverEffect();
    }
    else{
        alert("Invalid value for size.")
        return
    }}



createGrid(16);
addHoverEffect();

newGridBtn.addEventListener("click", () => createNewGrid());



