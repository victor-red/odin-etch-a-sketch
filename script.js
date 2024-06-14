const body = document.body;
const container = document.createElement("div");
const newGridBtn = document.createElement("button");

body.appendChild(newGridBtn);
container.classList.add("container");
body.appendChild(container);
newGridBtn.classList.add("newGridBtn")
newGridBtn.textContent = "Create new grid";

function createGrid(n){
    gridHeight = container.style.height;
    gridWidth = container.style.width;
    divSize = (500 - (n * 2)) / n + 'px';
    gridPixels = n * n;
    for (let i = 0; i < gridPixels; i++){
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("gridDiv");
        gridDiv.style.height = divSize;
        gridDiv.style.width = divSize;
        container.appendChild(gridDiv);
        }
    };

function deleteGrid(){
    gridDivs = document.querySelectorAll(".gridDiv");
    gridDivs.forEach(gridDiv => container.removeChild(gridDiv));
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
    if (n == 0 || n == "" || n == null){
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



