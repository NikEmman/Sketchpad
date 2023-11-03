const rightContainer = document.querySelector(".rightContainer");
const size = document.querySelector("#size");
const hide = document.querySelector("#hide");
const clear = document.querySelector("#clear");
const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const color = document.querySelector("#color");


display1.textContent = size.value;
display2.textContent=size.value;
let boxNumber = size.value;

color.oninput = function (){
  board.style.backgroundColor = color.value;
}

createGrid(boxNumber);

// Work on mouseover, ain't right yet, lines below

const board = document.querySelector(".board");
board.addEventListener("mouseover", changeColor);

function changeColor(){
  board.style.backgroundColor = `${color.value}`
}
// mouseover lines above don't work
size.oninput = function (){
  display1.textContent=this.value;
  display2.textContent=this.value;
  boxNumber=this.value;
  createGrid(boxNumber);
}

function createGrid(num) {
  rightContainer.innerHTML="";
    for (let x = 0; x < num**2; x++) {
      const board = document.createElement("div");
      board.classList = "board";
        rightContainer.appendChild(board);
    }
    rightContainer.style.width =`${num}em`;
}

