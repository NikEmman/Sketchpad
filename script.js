const rightContainer = document.querySelector(".rightContainer");
const size = document.querySelector("#size");
const hide = document.querySelector("#hide");
const clear = document.querySelector("#clear");
const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const color = document.querySelector("#color");
const board = document.querySelector(".board");



display1.textContent = size.value;
display2.textContent = size.value;
let boxNumber = size.value;

createGrid(boxNumber);

size.oninput = function () {
  display1.textContent = this.value;
  display2.textContent = this.value;
  boxNumber = this.value;
  createGrid(boxNumber);
}

function createGrid(num) {
  rightContainer.innerHTML = "";
  for (let x = 0; x < num ** 2; x++) {
    const board = document.createElement("div");
    board.classList = "board";
    board.style.backgroundColor = "white";
    board.addEventListener("mouseover", function () {
      this.style.backgroundColor = `${color.value}`;
    });
    rightContainer.appendChild(board);
  }
  rightContainer.style.width = `${num}em`;
}
function clearAll() {
  const allBoards = document.querySelectorAll(".board");

  for (let i = 0; i < allBoards.length; i++) {
    allBoards[i].style.backgroundColor = "white";
  }
}

clear.addEventListener("click", clearAll);
hide.addEventListener("click", hideBorder)

function hideBorder() {
  const allBoards = document.querySelectorAll(".board");
  if (allBoards[0].style.border === "1px solid black") {
    hide.innerHTML = "Show grid lines";
    for (let i = 0; i < allBoards.length; i++) {
      allBoards[i].style.border = "none"
    }
  }
  else {
    hide.innerHTML = "Hide grid lines"
    for (let i = 0; i < allBoards.length; i++) {
      allBoards[i].style.border = "1px solid black"
    }
  }
}







