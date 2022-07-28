const element = Array.from(document.querySelectorAll(".element"));
const reset = document.querySelector("#reset");
let currentPlayer = "X";
let spaces = [null, null, null, null, null, null, null, null, null];

element.forEach(function (item) {
  item.addEventListener("click", clickHandler);
});
reset.addEventListener("click", resets);

function clickHandler(event) {
  id = event.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    event.target.innerHTML = currentPlayer;
    if (checkWin()) {
      alert(`Player ${currentPlayer} wins!`);
    }

    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
}

function checkWin(currentClass) {
  if (spaces[0] == currentPlayer) {
    if (spaces[1] == currentPlayer && spaces[2] == currentPlayer) {
      return true;
    }
    if (spaces[4] == currentPlayer && spaces[8] == currentPlayer) {
      return true;
    }
    if (spaces[3] == currentPlayer && spaces[6] == currentPlayer) {
      return true;
    }
  }
  if (spaces[8] == currentPlayer) {
    if (spaces[6] == currentPlayer && spaces[7] == currentPlayer) {
      return true;
    }
    if (spaces[2] == currentPlayer && spaces[5] == currentPlayer) {
      return true;
    }
  }
  if (spaces[4] == currentPlayer) {
    if (spaces[3] == currentPlayer && spaces[5] == currentPlayer) {
      return true;
    }
    if (spaces[1] == currentPlayer && spaces[7] == currentPlayer) {
      return true;
    }
  }
}

function resets() {
  element.forEach(function (item) {
    item.innerHTML = "";
  });
  currentPlayer = "X";
  spaces = [null, null, null, null, null, null, null, null, null];
}
