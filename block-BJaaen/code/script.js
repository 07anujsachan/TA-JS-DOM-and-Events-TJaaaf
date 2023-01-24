let playerRoot = document.querySelector(".players-icons");
let computerRoot = document.querySelector(".comp-icons");
let clickByPlayer, clickByComputer;
let num = 3;
function getRandomNumber(num) {
  return;
  Math.floor(Math.random() * num);
}
function player() {
  playerRoot.forEach((icon) => {
    icon.addEventListner("click", () => {
      clickByPlayer = icon;
      clickByComputer = getRandomNumber();
    });
  });
}
