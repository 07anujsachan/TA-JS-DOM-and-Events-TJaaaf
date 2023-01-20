let container = document.querySelector(".container");

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 500);
  return randomNumber;
}

function randomColourGenerator() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color +=  letters[Math.floor(Math.random() * 16)];
    
  }return color;
}

for (let i = 0; i <= 500; i++) {
  let box = document.createElement("div");
  box.className = "box";
  let p = document.createElement("p");
  let random = generateRandomNumber();
  p.innerText = random;
  box.append(p);
  container.append(box);
}

function handleMouseMove() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = randomColourGenerator();
    box.querySelector("p").innerText = generateRandomNumber();
  });
}

container.addEventListener("mousemove", handleMouseMove);
